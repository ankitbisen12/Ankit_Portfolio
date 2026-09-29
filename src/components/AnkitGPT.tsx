"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What does Ankit work on?",
  "Walk me through his Experience.",
  "How much Databricks experience does he have?",
];

const MAX_CHARS = 300;

/**
 * Every colour is read as var(--agpt-*, fallback). The fallbacks are real
 * values, so this renders correctly even if you never add the CSS block to
 * globals.css — you just lose dark mode and hover states.
 *
 * No <style> element, no Tailwind, no Date/Math.random, no `typeof window`
 * branch. Server and client output are byte-identical, so this cannot cause a
 * hydration mismatch.
 */
const C = {
  bg: "var(--agpt-bg, #09090b)",
  fg: "var(--agpt-fg, #f4f4f5)",
  muted: "var(--agpt-muted, #a1a1aa)",
  line: "var(--agpt-line, rgba(255, 255, 255, 0.1))",
  bubble: "var(--agpt-bubble, #18181b)",
  accent: "var(--agpt-accent, #9333ea)",
  accentFg: "var(--agpt-accent-fg, #ffffff)",
};

const Z = 2147483000;

export default function AnkitGPT() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const aliveRef = useRef(true);

  // Abort any in-flight stream on unmount, and never touch state afterwards.
  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      abortRef.current?.abort();
    };
  }, []);

  // Closing the panel cancels the request rather than letting it finish unseen.
  useEffect(() => {
    if (!open) abortRef.current?.abort();
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** Replaces the trailing assistant message as tokens arrive. */
  const writeTail = useCallback((content: string) => {
    if (!aliveRef.current) return;
    setMessages((prev) => {
      if (prev.length === 0) return prev;
      const copy = prev.slice();
      copy[copy.length - 1] = { role: "assistant", content };
      return copy;
    });
  }, []);

  const send = useCallback(
    async (text: string) => {
      const question = text.trim();
      if (!question || busy) return;

      abortRef.current?.abort();
      const ac = new AbortController();
      abortRef.current = ac;

      const history: Message[] = [...messages, { role: "user", content: question }];
      setMessages([...history, { role: "assistant", content: "" }]);
      setInput("");
      setBusy(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: ac.signal,
        });

        if (!res.ok || !res.body) {
          writeTail(
            res.status === 429
              ? "Too many messages. Wait a minute and try again."
              : "Couldn't reach the assistant. Try again in a moment.",
          );
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done || ac.signal.aborted || !aliveRef.current) break;
          acc += decoder.decode(value, { stream: true });
          writeTail(acc);
        }
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
        writeTail("Connection dropped. Try again.");
      } finally {
        if (aliveRef.current && abortRef.current === ac) {
          setBusy(false);
          inputRef.current?.focus();
        }
      }
    },
    [busy, messages, writeTail],
  );

  return (
    <>
      {!open && <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AnkitGPT" : "Ask AnkitGPT about Ankit"}
        aria-expanded={open}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: Z,
          padding: "0.5rem 1rem",
          fontFamily: "inherit",
          fontSize: "0.775rem",
          fontWeight: 500,
          color: C.accentFg,
          background: C.accent,
          border: "none",
          borderRadius: "999px",
          boxShadow: "0 8px 24px rgba(88, 28, 135, 0.35)",
          cursor: "pointer",
        }}
      >
        Ask AnkitGPT
      </button>}

      {open && (
        <div
          role="dialog"
          aria-label="AnkitGPT"
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "1.5rem",
            zIndex: Z,
            display: "flex",
            flexDirection: "column",
            width: "min(24rem, calc(100vw - 3rem))",
            height: "min(32rem, calc(100vh - 9rem))",
            background: C.bg,
            border: `1px solid rgba(168, 85, 247, 0.35)`,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 18px 50px rgba(0, 0, 0, 0.45), 0 0 24px rgba(126, 34, 206, 0.12)",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "0.75rem 3rem 0.75rem 1rem",
              borderBottom: `1px solid ${C.line}`,
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close AnkitGPT"
              title="Close AnkitGPT"
              style={{
                position: "absolute",
                top: "0.65rem",
                right: "0.75rem",
                display: "grid",
                placeItems: "center",
                width: "2rem",
                height: "2rem",
                padding: 0,
                color: C.muted,
                background: "transparent",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <X size={18} strokeWidth={2} aria-hidden="true" />
            </button>
            <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 500, color: C.fg }}>
              AnkitGPT
            </p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: C.muted }}>
              Answers questions about Ankit&rsquo;s
            </p>
          </div>

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.length === 0 && (
              <>
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    style={{
                      textAlign: "left",
                      padding: "0.5rem 0.75rem",
                      fontFamily: "inherit",
                      fontSize: "0.875rem",
                      color: C.fg,
                      background: "rgba(255, 255, 255, 0.03)",
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </>
            )}

            {messages.map((m, i) => {
              const isUser = m.role === "user";
              const pending = !isUser && m.content === "";
              return (
                <div
                  key={i}
                  style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start" }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                      borderRadius: "14px",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      color: isUser ? C.accentFg : pending ? C.muted : C.fg,
                      background: isUser ? C.accent : C.bubble,
                    }}
                  >
                    {pending ? "Thinking\u2026" : m.content}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              padding: "0.75rem",
              borderTop: `1px solid ${C.line}`,
            }}
          >
            <input
              ref={inputRef}
              value={input}
              maxLength={MAX_CHARS}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Ask about Ankit&hellip;"
              aria-label="Your question"
              style={{
                flex: 1,
                minWidth: 0,
                padding: "0.5rem 0.75rem",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                color: C.fg,
                background: "rgba(0, 0, 0, 0.35)",
                border: `1px solid rgba(255, 255, 255, 0.15)`,
                borderRadius: "8px",
                outline: "none",
              }}
            />
            <button
              type="button"
              onClick={() => send(input)}
              disabled={busy || input.trim() === ""}
              style={{
                padding: "0 1rem",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: C.accentFg,
                background: C.accent,
                border: "none",
                borderRadius: "8px",
                opacity: busy || input.trim() === "" ? 0.4 : 1,
                cursor: busy || input.trim() === "" ? "default" : "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}