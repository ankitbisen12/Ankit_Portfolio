import OpenAI from "openai";
import { NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/ankit-profile";
import { prefilter } from "@/lib/prefilter";
 
export const runtime = "nodejs";
export const maxDuration = 30;

console.log("AnkitGPT route loaded. OpenAI API key is", process.env.OPENAI_API_KEY ? "present" : "missing");
 
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
 
// Verify against https://platform.openai.com/docs/models before deploying.
const MODEL = "gpt-5.6-luna";
 
const MAX_MESSAGE_CHARS = 300; // was 500 — nobody needs 500 chars to ask about a resume
const MAX_HISTORY = 4;         // was 12 — portfolio chats are 1-3 turns
const MAX_OUTPUT = 150;        // was 400 — output costs 6x input
 
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const requestLog = new Map<string, number[]>();
 
function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  requestLog.set(key, recent);
  if (requestLog.size > 5000) {
    for (const [k, times] of requestLog) {
      if (times.every((t) => now - t >= WINDOW_MS)) requestLog.delete(k);
    }
  }
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}
 
type ChatMessage = { role: "user" | "assistant"; content: string };
 
function validate(body: unknown): ChatMessage[] | null {
  if (typeof body !== "object" || body === null) return null;
  const { messages } = body as { messages?: unknown };
  if (!Array.isArray(messages) || messages.length === 0) return null;
 
  const trimmed = messages.slice(-MAX_HISTORY);
 
  for (const m of trimmed) {
    if (typeof m !== "object" || m === null) return null;
    const { role, content } = m as ChatMessage;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    if (content.length === 0 || content.length > MAX_MESSAGE_CHARS) return null;
  }
 
  if (trimmed[trimmed.length - 1].role !== "user") return null;
  return trimmed as ChatMessage[];
}
 
function textResponse(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
 
export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return textResponse("Too many messages. Wait a minute and try again.", 429);
  }
 
  let messages: ChatMessage[] | null;
  try {
    messages = validate(await req.json());
  } catch {
    messages = null;
  }
  if (!messages) return textResponse("Invalid request.", 400);
 
  const question = messages[messages.length - 1].content;
 
  // Tiers 0 and 1 — answered locally, no API call, no tokens billed.
  // Only applied on the opening turn: mid-conversation a bare "and the stack?"
  // depends on context the prefilter can't see.
  if (messages.length === 1) {
    const hit = prefilter(question);
    if (hit) return textResponse(hit.answer);
  }
 
  const encoder = new TextEncoder();
 
  const stream = new ReadableStream({
    async start(controller) {
      try {
        // SYSTEM_PROMPT must be byte-identical on every request or the cached
        // prefix misses and you pay full price. Never interpolate a timestamp,
        // request ID, or visitor name into it.
        const completion = await openai.chat.completions.create({
          model: MODEL,
          stream: true,
          max_completion_tokens: MAX_OUTPUT,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        });
 
        for await (const chunk of completion) {
          const delta = chunk.choices[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
        controller.close();
      } catch (err) {
        console.error("AnkitGPT stream failed:", err);
        controller.enqueue(
          encoder.encode("Something went wrong on my end. Try again in a moment."),
        );
        controller.close();
      }
    },
  });
 
  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}