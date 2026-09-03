import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PostCard, CategoryChip, formatDate } from "@/components/blog/PostCard";
import { CoverArt } from "@/components/blog/CoverArt";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { livePosts, SITE_URL } from "@/content/blog";
import { buildBlogIndexJsonLd } from "@/content/blog/builders";

/**
 * ⛔ ISR IS WHAT MAKES SCHEDULING WORK. Without it this page is prerendered
 * once at build time and a post dated next Tuesday NEVER appears, because
 * `livePosts()` was evaluated during the build. Revalidating hourly is the
 * only reason a scheduled post goes live without a deploy.
 *
 * ⚠ Next 16 REMOVES `revalidate` (and `dynamic`, `dynamicParams`,
 * `fetchCache`) when Cache Components is enabled in next.config.ts. It is off
 * today, which is why this works. Turning it on would silently strip this
 * export and freeze the blog at whatever was live on the last deploy — with no
 * error. If Cache Components is ever enabled, scheduling must be rebuilt on
 * `"use cache"` + `cacheLife` first.
 */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — EmployLabs",
  description:
    "Product updates and field notes from running autonomous hiring pipelines: evidence-backed candidate scoring, AI interviews, candidate conversations and outreach that protects your brand.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: { "application/rss+xml": `${SITE_URL}/blog/feed.xml` },
  },
  openGraph: {
    title: "EmployLabs Blog",
    description: "How roles actually get filled. Written for the person doing the hiring.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = livePosts();
  const [lead, ...rest] = posts;

  const jsonLd = buildBlogIndexJsonLd(posts, SITE_URL);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-accent/30 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav variant="dark" />

      <main className="mx-auto max-w-[1180px] px-6 md:px-8">
        <header className="pt-56 pb-12 md:pt-60">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent mb-5">The EmployLabs blog</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] text-balance max-w-[15ch]">
            How roles <span className="font-light text-zinc-400">actually get</span> filled.
          </h1>
          <p className="mt-6 max-w-[56ch] font-title text-lg leading-relaxed text-zinc-400">
            Product updates from Meera, Naira and Zia, plus what we learn running real hiring pipelines.
            Written for the person doing the hiring.
          </p>
        </header>

        <BlogFilter>
          {lead && (
            <article
              data-category={lead.category}
              className="glass-card mb-11 grid grid-cols-1 overflow-hidden rounded-sm md:grid-cols-2"
            >
              <Link href={`/blog/${lead.slug}`} className="border-b border-border md:border-b-0 md:border-r">
                <CoverArt motif={lead.motif} category={lead.category} className="h-full w-full aspect-video md:aspect-auto md:min-h-[320px]" />
              </Link>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div>
                  <CategoryChip category={lead.category} />
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-balance">
                  <Link href={`/blog/${lead.slug}`} className="hover:text-accent transition-colors">
                    {lead.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-[46ch] font-title text-base leading-relaxed text-zinc-400">{lead.dek}</p>
                <div className="mt-5 font-mono text-[11px] text-zinc-500">
                  <time dateTime={lead.publishedAt}>{formatDate(lead.publishedAt)}</time>
                  {" · "}
                  {lead.readingMinutes} min read
                </div>
                <Link
                  href={`/blog/${lead.slug}`}
                  className="mt-7 w-fit rounded-sm bg-accent px-5 py-2.5 font-display text-sm font-semibold text-[#04120a] transition-colors hover:bg-accent-hover"
                >
                  Read the post
                </Link>
              </div>
            </article>
          )}

          {/* The 1px gap is the border colour showing through, so a partly
              filled row leaves a visible empty cell. Track the count until
              there are enough posts to fill three columns. */}
          <div
            className={`grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border ${
              rest.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : rest.length === 2 ? "sm:grid-cols-2" : ""
            }`}
          >
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </BlogFilter>

        <section className="glass-card my-14 flex flex-wrap items-center justify-between gap-7 rounded-sm p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">New posts, every day or two</h2>
            <p className="mt-2 max-w-[46ch] text-[15px] text-zinc-400">
              Product updates and what we learn from real pipelines. No newsletter filler.
            </p>
          </div>
          <a
            href="/blog/feed.xml"
            className="rounded-sm border border-border px-5 py-2.5 font-display text-sm font-medium text-white transition-colors hover:border-zinc-600"
          >
            Subscribe by RSS
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
