import Link from "next/link";
import { CoverArt } from "./CoverArt";
import { CATEGORY_LABEL, type BlogPost } from "@/content/blog/types";

const CHIP: Record<BlogPost["category"], string> = {
  update: "border-accent/40 bg-accent/[0.12] text-accent",
  article: "border-gold/40 bg-gold/[0.12] text-gold",
  compare: "border-[#6ea8fe]/40 bg-[#6ea8fe]/[0.12] text-[#6ea8fe]",
};

export function CategoryChip({ category }: { category: BlogPost["category"] }) {
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${CHIP[category]}`}>
      {CATEGORY_LABEL[category]}
    </span>
  );
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-category={post.category}
      className="group flex flex-col bg-card transition-colors hover:bg-[#1b1b1b]"
    >
      <CoverArt motif={post.motif} category={post.category} className="aspect-video w-full border-b border-border" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <CategoryChip category={post.category} />
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-white text-pretty">
          {post.title}
        </h3>
        <p className="font-title text-[14.5px] leading-relaxed text-zinc-400">{post.dek}</p>
        <div className="mt-auto pt-1 font-mono text-[11px] text-zinc-500">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {" · "}
          {post.readingMinutes} min read
        </div>
      </div>
    </Link>
  );
}
