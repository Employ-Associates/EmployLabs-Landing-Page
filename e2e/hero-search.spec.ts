import { expect, test, type Page } from "@playwright/test";

const APP = "http://localhost:4120";
const NAUKRI =
  "https://www.naukri.com/job-listings-java-full-stack-lead-hexaware-technologies-pune-chennai-mumbai-all-areas-8-to-12-years-010226004753?src=seo_srp&sid=17909939099721994&xp=1&px=1";
const LINKEDIN =
  "https://www.linkedin.com/jobs/search-results/?currentJobId=4469614386&refId=biHDXZRoKfuBzBY73GVxLA%3D%3D&keywords=AI%20Engineer&origin=QUALIFICATION_LANDING";

/** A believable posting of exactly `n` characters. */
const jd = (n: number) => {
  const base =
    "Senior Backend Engineer. Responsibilities: build and run payment APIs in Go and Postgres. Requirements: 5 years of experience with distributed systems. ";
  return base.repeat(Math.ceil(n / base.length)).slice(0, n);
};

const card = (page: Page) => page.locator(".hero-glass");
const startRun = (page: Page) => card(page).getByRole("button", { name: /start run/i });
const jobTab = (page: Page) => card(page).getByRole("tab", { name: "Job link" });
const jdTab = (page: Page) => card(page).getByRole("tab", { name: "Paste JD" });
const linkBox = (page: Page) => card(page).getByRole("textbox", { name: "Job posting link" });
const jdBox = (page: Page) => card(page).getByRole("textbox", { name: "Job description" });
const siteBox = (page: Page) => card(page).getByRole("textbox", { name: "Company website" });
const emailBox = (page: Page) => card(page).getByRole("textbox", { name: "Your work email" });

/** Paste without typing every character (and without the keystroke cost of 10k chars). */
const fill = async (box: ReturnType<typeof jdBox>, text: string) => {
  await box.fill(text);
};

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(card(page)).toBeVisible();
});

test("an empty submit says what is missing and puts the cursor on it", async ({ page }) => {
  await startRun(page).click();
  await expect(card(page).getByText("Paste a job link to start.")).toBeVisible();
  await expect(linkBox(page)).toBeFocused();
});

test("a Naukri link is stopped with the reason, and Paste the JD moves the cursor into the JD box", async ({ page }) => {
  await linkBox(page).fill(NAUKRI);
  await linkBox(page).blur();
  await expect(card(page).getByText(/naukri\.com only shows its postings to a signed-in browser/)).toBeVisible();
  await startRun(page).click();
  await expect(card(page).getByRole("textbox", { name: "Your work email" })).toHaveCount(0);

  await card(page).getByRole("button", { name: "Paste the JD" }).click();
  await expect(jdTab(page)).toHaveAttribute("aria-selected", "true");
  await expect(jdBox(page)).toBeFocused();
});

test("a LinkedIn link is accepted and the card says the company's website comes next", async ({ page }) => {
  await linkBox(page).fill(LINKEDIN);
  await expect(card(page).getByText(/LinkedIn doesn't share the company's website/)).toBeVisible();
  await startRun(page).click();
  await expect(emailBox(page)).toBeVisible();
});

test("a link pasted with words around it is reduced to the link", async ({ page }) => {
  await linkBox(page).fill("Have a look at careers.acme.com/jobs/42 and tell me");
  await startRun(page).click();
  await expect(card(page).getByText("careers.acme.com/jobs/42")).toBeVisible();
});

test("JD length: under 300 is refused, exactly 10,000 passes, 10,001 is refused with the limit", async ({ page }) => {
  await jdTab(page).click();
  await siteBox(page).fill("acme.com");

  await fill(jdBox(page), jd(299));
  await expect(card(page).getByText("299 of 300 characters minimum")).toBeVisible();
  await startRun(page).click();
  await expect(jdBox(page)).toBeFocused();

  await fill(jdBox(page), jd(10_000));
  await expect(card(page).getByText("10,000 / 10,000 characters")).toBeVisible();

  await fill(jdBox(page), jd(10_001));
  await expect(card(page).getByText(/10,001 characters, over the 10,000 limit/)).toBeVisible();
  await startRun(page).click();
  await expect(emailBox(page)).toHaveCount(0);
});

test("invisible characters and Windows line endings do not count against the limit", async ({ page }) => {
  await jdTab(page).click();
  const text = jd(9_500).replace(/\. /g, ".\r\n\r\n\r\n​");
  await fill(jdBox(page), text);
  await expect(card(page).getByText(/\/ 10,000 characters/)).toBeVisible();
  await expect(card(page).getByText(/over the 10,000 limit/)).toHaveCount(0);
});

test("a link pasted into the JD box offers to use it as the job link", async ({ page }) => {
  await jdTab(page).click();
  await fill(jdBox(page), "https://jobs.acme.com/senior-engineer/123");
  await card(page).getByRole("button", { name: "Use as job link" }).click();
  await expect(jobTab(page)).toHaveAttribute("aria-selected", "true");
  await expect(linkBox(page)).toHaveValue("https://jobs.acme.com/senior-engineer/123");
});

test("the tabs work from the keyboard", async ({ page }) => {
  await jobTab(page).focus();
  await page.keyboard.press("ArrowRight");
  await expect(jdTab(page)).toHaveAttribute("aria-selected", "true");
  await expect(jdTab(page)).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(jobTab(page)).toHaveAttribute("aria-selected", "true");
});

test("job link to the app: email checks, then the job rides in the fragment, never the query", async ({ page }) => {
  await linkBox(page).fill("jobs.acme.com/roles/9?x=1&y=2");
  await card(page).getByRole("textbox", { name: "Company name (optional)" }).fill("Acme");
  await startRun(page).click();

  await expect(emailBox(page)).toBeFocused();
  await emailBox(page).fill("sam@gmial.com");
  await startRun(page).click();
  await expect(card(page).getByRole("button", { name: "sam@gmail.com" })).toBeVisible();

  await emailBox(page).fill("bad@nowhere.example");
  await startRun(page).click();
  await expect(card(page).getByText("That domain can't receive email.")).toBeVisible();

  await emailBox(page).fill("sam@acme.io");
  await startRun(page).click();
  await page.waitForURL(`${APP}/search-prospects**`);
  const url = new URL(page.url());
  expect(url.search).toBe("?invite=sp_stub");
  const frag = new URLSearchParams(url.hash.slice(1));
  expect(Object.fromEntries(frag)).toEqual({ mode: "url", url: "https://jobs.acme.com/roles/9?x=1&y=2", company: "Acme" });
});

test("a 10,000-character JD survives the hand-off intact", async ({ page }) => {
  await jdTab(page).click();
  const text = jd(10_000);
  await fill(jdBox(page), text);
  await siteBox(page).fill("acme.com");
  await startRun(page).click();
  await emailBox(page).fill("sam@acme.io");
  await startRun(page).click();
  await page.waitForURL(`${APP}/search-prospects**`);
  const frag = new URLSearchParams(new URL(page.url()).hash.slice(1));
  expect(frag.get("mode")).toBe("text");
  expect(frag.get("domain")).toBe("acme.com");
  expect(frag.get("text")).toBe(text.trim());
});

test("server errors on the email step are shown in words and the form stays usable", async ({ page }) => {
  await linkBox(page).fill("https://jobs.acme.com/1");
  await startRun(page).click();
  await emailBox(page).fill("rate@acme.io");
  await startRun(page).click();
  await expect(card(page).getByText(/Too many searches from here/)).toBeVisible();

  await emailBox(page).fill("boom@acme.io");
  await startRun(page).click();
  await expect(card(page).getByText(/can't start from here right now/)).toBeVisible();
  await expect(emailBox(page)).toBeEnabled();
});

test("Change goes back to the job without losing what was typed", async ({ page }) => {
  await linkBox(page).fill("https://jobs.acme.com/77");
  await startRun(page).click();
  await card(page).getByRole("button", { name: "Change" }).click();
  await expect(linkBox(page)).toHaveValue("https://jobs.acme.com/77");
});

test("reduced motion: the whole flow still works", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await linkBox(page).fill("https://jobs.acme.com/5");
  await startRun(page).click();
  await emailBox(page).fill("slow@acme.io");
  await startRun(page).click();
  await page.waitForURL(`${APP}/search-prospects**`);
});

test("the card shows the hand-off beat while the invite is being made", async ({ page }) => {
  await linkBox(page).fill("https://jobs.acme.com/5");
  await startRun(page).click();
  await emailBox(page).fill("slow@acme.io");
  await startRun(page).click();
  await expect(card(page).getByRole("button", { name: /checking your email/i })).toBeVisible();
  await expect(card(page).getByText("Opening your search")).toBeVisible();
});

test("no hydration warnings, with or without reduced motion (RED if server and client render different motion props)", async ({ browser }) => {
  for (const reducedMotion of ["no-preference", "reduce"] as const) {
    const context = await browser.newContext({ reducedMotion });
    const page = await context.newPage();
    const problems: string[] = [];
    page.on("console", (m) => {
      if (/hydrat/i.test(m.text())) problems.push(m.text().slice(0, 120));
    });
    page.on("pageerror", (e) => problems.push(e.message.slice(0, 120)));
    await page.goto("/");
    await expect(page.locator(".hero-glass")).toBeVisible();
    await page.locator(".hero-glass").getByRole("tab", { name: "Paste JD" }).click();
    expect(problems, reducedMotion).toEqual([]);
    await context.close();
  }
});
