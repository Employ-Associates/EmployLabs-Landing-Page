import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

import {
  buildGaBootstrap,
  buildInternalCookie,
  isEmployLabsHost,
} from "@/lib/internal-traffic";

type Run = { calls: unknown[][]; writes: string[]; internal: boolean };

/** Evaluates the bootstrap in a fake browser: a real global scope, a recording cookie jar. */
const run = (href: string, existingCookie = ""): Run => {
  const url = new URL(href);
  const writes: string[] = [];
  const document = {
    get cookie() {
      return existingCookie;
    },
    set cookie(value: string) {
      writes.push(value);
    },
  };
  const ctx: Record<string, unknown> = {
    document,
    location: { hostname: url.hostname, protocol: url.protocol, search: url.search },
    URLSearchParams,
  };
  ctx.window = ctx;
  runInNewContext(buildGaBootstrap("G-KEVEJ1JSJK"), ctx);
  const calls = (ctx.dataLayer as ArrayLike<unknown>[]).map((a) => Array.from(a));
  return { calls, writes, internal: ctx.__elInternal as boolean };
};

const configOf = (r: Run) => r.calls.find((c) => c[0] === "config");

describe("isEmployLabsHost", () => {
  it.each(["employlabs.ai", "app.employlabs.ai", "www.employlabs.ai"])("accepts %s", (h) => {
    expect(isEmployLabsHost(h)).toBe(true);
  });
  it.each(["localhost", "x.vercel.app", "evilemploylabs.ai", "employlabs.ai.evil.com", "www.weemploy.world"])(
    "rejects %s",
    (h) => {
      expect(isEmployLabsHost(h)).toBe(false);
    },
  );
});

describe("buildInternalCookie", () => {
  it("sets the shared Domain on employlabs.ai", () => {
    expect(buildInternalCookie({ hostname: "employlabs.ai", protocol: "https:", on: true })).toBe(
      "el_internal=1; Path=/; Max-Age=31536000; SameSite=Lax; Secure; Domain=.employlabs.ai",
    );
  });
  it("is host-only on a vercel preview", () => {
    expect(buildInternalCookie({ hostname: "x.vercel.app", protocol: "https:", on: true })).toBe(
      "el_internal=1; Path=/; Max-Age=31536000; SameSite=Lax; Secure",
    );
  });
  it("omits Secure on http localhost", () => {
    expect(buildInternalCookie({ hostname: "localhost", protocol: "http:", on: true })).toBe(
      "el_internal=1; Path=/; Max-Age=31536000; SameSite=Lax",
    );
  });
  it("deletes with the same Path and Domain", () => {
    expect(buildInternalCookie({ hostname: "app.employlabs.ai", protocol: "https:", on: false })).toBe(
      "el_internal=; Path=/; Max-Age=0; SameSite=Lax; Secure; Domain=.employlabs.ai",
    );
  });
});

describe("buildGaBootstrap, evaluated", () => {
  it("no cookie, no query: config is exactly {send_page_view:false}, nothing written", () => {
    const r = run("https://employlabs.ai/pricing");
    expect(configOf(r)).toEqual(["config", "G-KEVEJ1JSJK", { send_page_view: false }]);
    expect(r.writes).toEqual([]);
    expect(r.internal).toBe(false);
  });

  it("cookie present: config carries traffic_type internal", () => {
    const r = run("https://employlabs.ai/", "_ga=GA1.1.1; el_internal=1");
    expect(configOf(r)).toEqual([
      "config",
      "G-KEVEJ1JSJK",
      { send_page_view: false, traffic_type: "internal" },
    ]);
    expect(r.writes).toEqual([]);
  });

  it("does not match a lookalike cookie name", () => {
    expect(run("https://employlabs.ai/", "xel_internal=1").internal).toBe(false);
    expect(run("https://employlabs.ai/", "el_internal=10").internal).toBe(false);
  });

  it("?el_internal=1 on employlabs.ai writes the shared-domain cookie and marks this page", () => {
    const r = run("https://employlabs.ai/?el_internal=1");
    expect(r.writes).toEqual([buildInternalCookie({ hostname: "employlabs.ai", protocol: "https:", on: true })]);
    expect(r.writes[0]).toContain("Domain=.employlabs.ai");
    expect((configOf(r) as unknown[])[2]).toEqual({ send_page_view: false, traffic_type: "internal" });
  });

  it("?el_internal=1 on a vercel preview writes a HOST-ONLY cookie (no Domain)", () => {
    const r = run("https://el-landing-abc.vercel.app/?el_internal=1");
    expect(r.writes).toEqual(["el_internal=1; Path=/; Max-Age=31536000; SameSite=Lax; Secure"]);
    expect(r.writes[0]).not.toContain("Domain");
  });

  it("?el_internal=1 on http localhost omits Secure and Domain", () => {
    const r = run("http://localhost:3000/?el_internal=1");
    expect(r.writes).toEqual(["el_internal=1; Path=/; Max-Age=31536000; SameSite=Lax"]);
  });

  it("?el_internal=0 deletes the cookie and this page is NOT internal, even with the cookie present", () => {
    const r = run("https://app.employlabs.ai/?el_internal=0", "el_internal=1");
    expect(r.writes).toEqual([
      "el_internal=; Path=/; Max-Age=0; SameSite=Lax; Secure; Domain=.employlabs.ai",
    ]);
    expect(configOf(r)).toEqual(["config", "G-KEVEJ1JSJK", { send_page_view: false }]);
  });

  it("the inline snippet and buildInternalCookie agree on every host", () => {
    for (const href of ["https://employlabs.ai/", "https://a.vercel.app/", "http://localhost/"]) {
      for (const on of [true, false]) {
        const u = new URL(href);
        const r = run(`${href}?el_internal=${on ? 1 : 0}`);
        expect(r.writes).toEqual([buildInternalCookie({ hostname: u.hostname, protocol: u.protocol, on })]);
      }
    }
  });

  it("pushes Arguments objects (gtag.js discards real Arrays) and configures once", () => {
    const snippet = buildGaBootstrap("G-KEVEJ1JSJK");
    expect(snippet).toContain("dataLayer.push(arguments)");
    expect(snippet.match(/gtag\('config'/g)).toHaveLength(1);
  });
});
