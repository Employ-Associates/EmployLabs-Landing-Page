import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CoverArt } from "@/components/blog/CoverArt";
import { CategoryChip, formatDate } from "@/components/blog/PostCard";
import { Answer } from "@/components/blog/prose";
import { livePosts, findLivePost, relatedPosts, SITE_URL } from "@/content/blog";
import { buildPostJsonLd } from "@/content/blog/builders";

type Params = { params: Promise<{ slug: string }> };

/**
 * ⛔ ISR, for the same reason as the index: `generateStaticParams` runs at
 * BUILD time, so a scheduled post is not in the param list when the site is
 * built and would never be reachable without this.
 *
 * `dynamicParams` stays at its default (true), so a slug outside the built
 * list is rendered on demand — and a post whose date has not arrived still
 * 404s, because `findLivePost` is the gate rather than the param list.
 *
 * ⚠ THE HONEST BOUND: a scheduled post goes live WITHIN THE REVALIDATION
 * WINDOW of its instant, not exactly at it. If somebody requests a future
 * slug before its publish time, that 404 is a cached route entry and clears on
 * the same hourly timer. So worst case is roughly an hour late, which is
 * nothing against a 24–36h posting cadence — but do not claim instant
 * publication, and do not shorten the window expecting precision instead of
 * paying for it in rebuild traffic.
 *
 * ⚠ Same Cache Components caveat as the index page: enabling it in Next 16
 * removes this export silently. See the note in ../page.tsx.
 */
export const revalidate = 3600;

export function generateStaticParams() {
  return livePosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = findLivePost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} — EmployLabs`,
    description: post.answer,
    keywords: post.topics,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.answer,
      url,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.answer },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = findLivePost(slug);
  if (!post) notFound();

  const related = relatedPosts(post.slug);

  const jsonLd = buildPostJsonLd(post, SITE_URL);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-accent/30 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav variant="dark" />

      <main className="mx-auto max-w-[1180px] px-6 md:px-8">
        <article className="mx-auto max-w-[720px] pt-52 md:pt-56">
          <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 hover:text-accent transition-colors">
            ← All posts
          </Link>

          <div className="mt-7">
            <CategoryChip category={post.category} />
          </div>

          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.3rem] font-bold leading-[1.04] tracking-tight text-balance">
            {post.title}
          </h1>

          <p className="mt-6 font-title text-xl leading-relaxed text-zinc-400">{post.dek}</p>

          <div className="mt-8 flex items-center gap-3.5 border-y border-border py-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-[#1f7a4d] font-display text-[13px] font-bold text-[#04120a]">
              EL
            </span>
            <div>
              <div className="font-display text-sm font-medium">The EmployLabs team</div>
              <div className="font-mono text-[11px] text-zinc-500">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {" · "}
                {post.readingMinutes} min read
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm border border-border">
            <CoverArt motif={post.motif} category={post.category} className="aspect-video w-full" />
          </div>

          <Answer>{post.answer}</Answer>

          <post.Body />

          {post.faq?.length ? (
            <section className="mt-16 border-t border-border pt-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">Common questions</h2>
              <dl className="mt-6 space-y-7">
                {post.faq.map((f) => (
                  <div key={f.q}>
                    <dt className="font-display text-[17px] font-semibold text-white">{f.q}</dt>
                    <dd className="mt-2 font-title text-[17px] leading-relaxed text-zinc-400">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {related.length > 0 && (
            <section className="mt-16 border-t border-border pt-10">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Related reading</h2>
                <Link
                  href="/blog"
                  className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 transition-colors hover:text-accent"
                >
                  All posts →
                </Link>
              </div>
              {/* Column count follows the item count — the 1px gap is the
                  border showing through, so a short row leaves an empty cell. */}
              <div
                className={`mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border ${
                  related.length >= 3 ? "sm:grid-cols-3" : related.length === 2 ? "sm:grid-cols-2" : ""
                }`}
              >
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="flex flex-col bg-card transition-colors hover:bg-[#1b1b1b]">
                    <CoverArt motif={r.motif} category={r.category} className="aspect-video w-full border-b border-border" />
                    <div className="flex flex-col gap-2.5 p-5">
                      <CategoryChip category={r.category} />
                      <h3 className="font-display text-[15.5px] font-semibold leading-snug tracking-tight text-white">{r.title}</h3>
                      <span className="font-mono text-[11px] text-zinc-500">{r.readingMinutes} min read</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="glass-card my-14 rounded-sm p-10 text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight">See it on one of your own roles</h2>
            <p className="mx-auto mt-2.5 max-w-[46ch] text-[15px] text-zinc-400">
              Upload a job description and watch the pipeline run before you commit to anything.
            </p>
            <a
              href="https://app.employlabs.ai"
              className="mt-6 inline-block rounded-sm bg-accent px-6 py-2.5 font-display text-sm font-semibold text-[#04120a] transition-colors hover:bg-accent-hover"
            >
              Start for free
            </a>
          </section>

          {/* Always rendered, unlike the link in Related reading — that whole
              section is hidden when a post has no related posts, which is the
              case early on when few posts are live. A reader who reaches the
              bottom must always have a way back to the list without scrolling
              to the top for the nav. */}
          <div className="mb-24 flex justify-center border-t border-border pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 font-display text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <span aria-hidden="true">←</span> All posts
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
