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

import { post as multichannel } from "./posts/candidates-reply-where-they-want";
import { post as emailThread } from "./posts/zia-replies-in-your-own-email-thread";
import { post as ninetyDays } from "./posts/what-this-hire-needs-in-90-days";
import { post as sampleFirst } from "./posts/see-real-profiles-before-anyone-is-contacted";
import { post as replyStops } from "./posts/the-moment-a-candidate-replies";
import { post as rubricAnchors } from "./posts/interview-scoring-rubric-behavioural-anchors";
import { post as screeningBar } from "./posts/set-a-screening-bar-you-can-trust";
import { post as readingReport } from "./posts/reading-an-ai-interview-report";
import { post as indiaGuide } from "./posts/high-volume-hiring-in-india";
import { post as toolVsRecruiter } from "./posts/ai-sourcing-tool-vs-ai-recruiter";
import { post as vsJuicebox } from "./posts/employlabs-vs-juicebox";
import { post as vsInHouse } from "./posts/employlabs-vs-hiring-another-recruiter";

import { post as finalistCount } from "./posts/tell-us-how-many-finalists-you-want";
import { post as alignmentLevel } from "./posts/alignment-not-a-percentage-match";
import { post as screenBeforeSlot } from "./posts/zia-screens-before-you-spend-a-slot";
import { post as humanClick } from "./posts/nothing-sends-or-spends-without-your-click";
import { post as oneTimeline } from "./posts/every-touch-in-one-timeline";
import { post as whatIsAnAgent } from "./posts/what-is-an-ai-recruiting-agent";
import { post as screeningQuestions } from "./posts/screening-questions-a-machine-can-verify";
import { post as offerSilence } from "./posts/why-candidates-go-quiet-at-offer-stage";
import { post as metricsAfterAutomation } from "./posts/recruiting-metrics-that-survive-automation";
import { post as noticePeriods } from "./posts/notice-periods-buyouts-joining-dates";
import { post as vsParadox } from "./posts/employlabs-vs-paradox";
import { post as juiceboxAlts } from "./posts/juicebox-alternatives-2026";
import { post as vsEightfold } from "./posts/employlabs-vs-eightfold";


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
  multichannel,
  emailThread,
  ninetyDays,
  sampleFirst,
  replyStops,
  rubricAnchors,
  screeningBar,
  readingReport,
  indiaGuide,
  toolVsRecruiter,
  vsJuicebox,
  vsInHouse,
  finalistCount,
  alignmentLevel,
  screenBeforeSlot,
  humanClick,
  oneTimeline,
  whatIsAnAgent,
  screeningQuestions,
  offerSilence,
  metricsAfterAutomation,
  noticePeriods,
  vsParadox,
  juiceboxAlts,
  vsEightfold,
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
