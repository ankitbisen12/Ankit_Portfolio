import { OUT_OF_SCOPE_REPLY } from "./ankit-profile";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

/*
TIER 0 — canned answers.
Portfolio visitors converge on the same few questions. Each entry lists
trigger keywords; if a question contains ALL keywords in any one group, we
serve the canned answer for zero tokens.
Keep this list honest: every answer here must match what the model would say
from the profile. If you edit ankit-profile.ts, re-read these.
*/

const CANNED: { all: string[]; answer: string }[] = [
  {
    all: ["who"],
    answer:
      "Ankit Bisen is a Data Engineer at KPIT Technologies in Bengaluru, with 3 years of experience in Python, SQL, PySpark, Azure Databricks, Delta Lake, Azure, AWS, Agentic, RAG.",
  },
  {
    all: ["experience"],
    answer:
      "3 Years at KPIT Technologies — Started as a Software Trainee (Nov 2023), progressed to Associate Engineer (Aug 2024), and currently working as an Engineer (Jul 2026).",
  },
  {
    all: ["stack"],
    answer:
      "Python, SQL, PySpark and ApacheSpark on the processing side. Databricks and Delta Lake for the platform. Azure (ADF, ADLS, Synapse) and AWS (S3, Glue, Lambda, Athena, IAM) for cloud. RAG and Agentic for LLM work. LangChain and LangGraph for agentic pipelines.",
  },
  {
    all: ["skills"],
    answer:
      "Python, SQL, PySpark, Spark, Databricks, Data Modelling, Delta Lake, Azure (ADF, ADLS, Synapse), AWS (S3, Glue, Lambda, Athena, IAM), plus LangChain and LangGraph for LLM work.",
  },
  {
    all: ["contact"],
    answer:
      "bisenankit1803@gmail.com, or https://www.linkedin.com/in/ankit-bisen-13a55a1a7/ , Code is at https://github.com/ankitbisen12.",
  },
  {
    all: ["email"],
    answer: "bisenankit1803@gmail.com",
  },
  {
    all: ["education"],
    answer:
      "B.Tech in Electronics and Communication from Samrat Ashok Technological Institute, Vidisha (2019-2023).",
  },
  {
    all: ["databricks"],
    answer:
      "Databricks is central to his day-to-day — Notebooks, Jobs, Workflows, and Delta Lake. He's certified in Databricks Fundamentals and used it for both his Honda project.",
  },
  {
    all: ["award"],
    answer:
      "The KPIT High Flyer Award twice — once for pipeline efficiency improvements, once for data processing optimization — plus the KPIT High CSAT Award for client satisfaction.",
  },
];
 
/**
 * TIER 1 — scope gate.
 *
 * A question must show at least one on-topic signal to reach the model. This
 * is deliberately generous: pronouns count, so "where did he study" passes.
 *
 * Tradeoff: an oddly-phrased valid question with no pronoun and no keyword
 * ("any Kafka?") gets refused. That costs you a slightly worse answer on a
 * rare input in exchange for never paying to refuse spam. Add terms here to
 * loosen it.
 */
const ON_TOPIC = [
  "ankit", "bisen", "he", "his", "him", "you", "your",
  "experience", "background", "career", "role", "job", "work", "worked",
  "skill", "skills", "stack", "tech", "tool", "language",
  "project", "projects", "built", "build", "portfolio", "mandi",
  "resume", "cv", "education", "degree", "college", "btech", "study", "studied",
  "certification", "certified", "award", "awards",
  "contact", "email", "linkedin", "github", "hire", "hiring", "available",
  "kpit", "honda", "databricks", "spark", "pyspark", "azure", "aws",
  "python", "sql", "pipeline", "data", "engineer", "engineering",
  "langchain", "langgraph", "delta", "bengaluru", "years",
];
 
export type PrefilterResult = { answer: string } | null;
 
/**
 * Returns a zero-token answer, or null to fall through to the model.
 */

export function prefilter(question: string): PrefilterResult {
  const q = normalize(question);
  if (!q) return { answer: OUT_OF_SCOPE_REPLY };
 
  const words = new Set(q.split(" "));
 
  // Tier 1 first: cheapest check, and it also guards the canned table from
  // matching something like "who directed Inception" on the word "who".
  const onTopic = ON_TOPIC.some((t) => words.has(t));
  if (!onTopic) return { answer: OUT_OF_SCOPE_REPLY };
 
  // Tier 0: first group whose keywords are all present wins.
  for (const entry of CANNED) {
    if (entry.all.every((k) => words.has(k))) return { answer: entry.answer };
  }
 
  return null;
}

