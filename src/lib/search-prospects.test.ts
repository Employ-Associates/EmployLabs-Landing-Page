import { afterEach, describe, expect, it, vi } from "vitest";

import {
  MIN_JD_CHARS,
  UNREADABLE_BOARD_LIST,
  unreadableBoard,
  cleanJdText,
  domainIssue,
  emailIssue,
  jdContentIssue,
  MAX_JD_CHARS,
  normalizeUrl,
  requestInvite,
  runUrl,
  urlIssue,
} from "./search-prospects";

describe("emailIssue", () => {
  it.each(["", "nope", "a@b", "a@b.c", "a..b@acme.com", "a b@acme.com"])("flags %j", (v) => {
    expect(emailIssue(v)).not.toBeNull();
  });

  it("passes a real-looking address", () => {
    expect(emailIssue(" Priya@Acme.io ")).toBeNull();
  });

  it("offers the fix for a provider typo", () => {
    expect(emailIssue("sam@gmial.com")).toEqual({ message: "Did you mean sam@gmail.com?", suggestion: "sam@gmail.com" });
  });
});

describe("urlIssue / domainIssue", () => {
  it("accepts a link without its scheme", () => {
    expect(urlIssue("careers.acme.com/jobs/1")).toBeNull();
  });

  it.each(["not a link", "https://localhost/x", "https://acme.com/jd.pdf"])("flags %j", (v) => {
    expect(urlIssue(v)).not.toBeNull();
  });

  it("wants a website, not an email or a name", () => {
    expect(domainIssue("acme.com")).toBeNull();
    expect(domainIssue("a@acme.com")).not.toBeNull();
    expect(domainIssue("Acme Inc")).not.toBeNull();
  });
});

describe("runUrl", () => {
  it("carries the job in the fragment, never the query", () => {
    const u = new URL(runUrl("/search-prospects?invite=sp_x", { mode: "url", url: "jobs.acme.com/1?a=b&c=d", companyName: "Acme" }));
    expect(u.search).toBe("?invite=sp_x");
    const p = new URLSearchParams(u.hash.slice(1));
    expect(Object.fromEntries(p)).toEqual({ mode: "url", url: "https://jobs.acme.com/1?a=b&c=d", company: "Acme" });
  });

  it("round-trips a pasted JD with & and #", () => {
    const text = "R&D lead #1 — build things";
    const u = new URL(runUrl("/search-prospects?invite=sp_x", { mode: "text", text, domain: "acme.com", companyName: "" }));
    const p = new URLSearchParams(u.hash.slice(1));
    expect(p.get("text")).toBe(text);
    expect(p.get("domain")).toBe("acme.com");
    expect(p.has("company")).toBe(false);
  });
});

describe("cleanJdText / jdContentIssue", () => {
  it("drops invisible characters and blank-line runs", () => {
    expect(cleanJdText("﻿Senior​ Engineer\r\n\r\n\r\n\r\nBuild  things \n")).toBe("Senior Engineer\n\nBuild  things");
  });

  it("sends a pasted link to the Job link tab", () => {
    expect(jdContentIssue("https://acme.com/jobs/1")?.switchToLink).toBe("https://acme.com/jobs/1");
  });

  it("lets a real posting through", () => {
    expect(jdContentIssue("Senior Backend Engineer. ".repeat(20))).toBeNull();
  });

  it("flags text that is mostly symbols", () => {
    expect(jdContentIssue("#### ".repeat(100))).not.toBeNull();
  });
});

describe("normalizeUrl", () => {
  it("keeps just the link when it was pasted with words around it", () => {
    expect(normalizeUrl("Check this out: https://acme.com/jobs/1?x=1. Thanks!")).toBe("https://acme.com/jobs/1?x=1");
    expect(normalizeUrl("see careers.acme.com/jobs/9 please")).toBe("https://careers.acme.com/jobs/9");
  });
  it("keeps the 10,000-character JD limit", () => {
    expect(MAX_JD_CHARS).toBe(10_000);
  });
});

describe("unreadable job boards", () => {
  const NAUKRI = "https://www.naukri.com/job-listings-java-full-stack-lead-hexaware-technologies-pune-8-to-12-years-010226004753?src=seo_srp&sid=1";
  it("flags a Naukri link before any request is made", () => {
    expect(unreadableBoard(NAUKRI)).toBe("naukri.com");
    expect(urlIssue(NAUKRI)).toMatch(/paste it instead/);
  });
  it("matches subdomains but not look-alikes", () => {
    expect(unreadableBoard("in.indeed.com/viewjob?jk=1")).toBe("indeed.com");
    expect(unreadableBoard("https://notnaukri.com/x")).toBeNull();
    expect(unreadableBoard("https://boards.greenhouse.io/acme/jobs/1")).toBeNull();
  });
});

describe("shared rules (must match el-platform's packages/shared/src/test/job-url.test.ts)", () => {
  it("uses the same limits and unreadable boards as the app", () => {
    expect([MIN_JD_CHARS, MAX_JD_CHARS]).toEqual([300, 10_000]);
    expect([...UNREADABLE_BOARD_LIST].sort()).toEqual(["naukri.com", "glassdoor.com", "glassdoor.co.in", "indeed.com", "indeed.co.in", "instahyre.com", "foundit.in", "monster.com", "shine.com"].sort());
  });
});

describe("requestInvite — the server body is untrusted JSON", () => {
  afterEach(() => vi.unstubAllGlobals());

  const answer = (status: number, body: unknown) =>
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify(body), { status })));

  // `hero_run_failed.has_suggestion` is `Boolean(res.suggestion)`; a `null` that
  // leaked through as a present key once reported "a correction was offered".
  it.each([null, "", "   ", 42])("a %j suggestion is no suggestion at all", async (suggestion) => {
    answer(400, { error: "Bad address.", suggestion });
    const res = await requestInvite("a@acme.com", "");
    expect(res).toEqual({ ok: false, message: "Bad address." });
    expect("suggestion" in res).toBe(false);
  });

  it("keeps a real suggestion", async () => {
    answer(400, { error: "Did you mean a@gmail.com?", suggestion: "a@gmail.com" });
    expect(await requestInvite("a@gmial.com", "")).toEqual({
      ok: false,
      message: "Did you mean a@gmail.com?",
      suggestion: "a@gmail.com",
    });
  });

  it("falls back to a fixed message when the error is not a string", async () => {
    answer(429, { error: null });
    expect(await requestInvite("a@acme.com", "")).toEqual({ ok: false, message: "That email address doesn't look right." });
  });
});
