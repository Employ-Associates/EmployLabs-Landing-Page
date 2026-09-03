import type { BlogPost } from "./types";
import { isLive } from "./schedule";

import { post as evidenceScoring } from "./posts/every-score-comes-with-its-evidence";
import { post as mustHaveCeiling } from "./posts/how-many-must-have-requirements";
import { post as probeInInterview } from "./posts/what-to-probe-in-your-own-interview";
import { post as confidentialSearch } from "./posts/run-a-confidential-search";
import { post as voiceInterviewScope } from "./posts/what-a-voice-ai-interview-can-measure";
import { post as marketMap } from "./posts/start-your-search-with-a-market-map";
import { post as candidateQuestions } from "./posts/candidate-questions-that-never-reach-you";
import { post as candidateExperience } from "./posts/candidate-experience-when-the-recruiter-is-ai";
import { post as budgetCap } from "./posts/set-a-budget-and-never-spend-past-it";
import { post as sourceableJd } from "./posts/write-a-job-description-an-ai-can-source-from";
import { post as vsAgency } from "./posts/employlabs-vs-a-recruitment-agency";
import { post as bestAgents } from "./posts/best-ai-recruiting-agents-2026";

/**
 * The post registry.
 *
 * ⛔⛔ `ALL_POSTS` IS NOT EXPORTED, AND MUST NOT BECOME EXPORTED.
 * It holds posts that are written, committed and NOT YET PUBLISHED. Every
 * surface — the index, the slug route, metadata, related posts, the RSS feed,
 * llms.txt and the sitemap — must read `livePosts()` or `findLivePost()`, which
 * are the only gate. Exporting the raw array is how an unpublished post leaks,
 * and it would leak into the feed and structured data before anyone noticed on
 * the page. Guarded by `test/no-unpublished-leak.test.ts`, which scans source.
 */
const ALL_POSTS: BlogPost[] = [
  evidenceScoring,
  mustHaveCeiling,
  probeInInterview,
  confidentialSearch,
  voiceInterviewScope,
  marketMap,
  candidateQuestions,
  candidateExperience,
  budgetCap,
  sourceableJd,
  vsAgency,
  bestAgents,
];

/** Test-only view of the full set, including unpublished. Never used by a page. */
export function __allPostsForTests(): readonly BlogPost[] {
  return ALL_POSTS;
}

const byNewest = (a: BlogPost, b: BlogPost) => (a.publishedAt < b.publishedAt ? 1 : -1);

export function livePosts(now: Date = new Date()): BlogPost[] {
  return ALL_POSTS.filter((p) => isLive(p.publishedAt, now)).sort(byNewest);
}

export function findLivePost(slug: string, now: Date = new Date()): BlogPost | undefined {
  return livePosts(now).find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, limit = 3, now: Date = new Date()): BlogPost[] {
  const live = livePosts(now);
  const self = live.find((p) => p.slug === slug);
  if (!self) return live.slice(0, limit);

  // Score by shared topics, then bias toward the same category.
  const scored = live
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.topics.filter((t) => self.topics.includes(t)).length + (p.category === self.category ? 0.5 : 0),
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.post);
}

export const SITE_URL = "https://employlabs.ai";
