import { BigAssTitle } from "@/components/common/BigAssTitle";
import { BlogPostCard } from "@/components/common/BlogPostCard";
import { blog } from "@/constants/content/blog";

export default function Blog() {
  return (
    <article className="min-h-fit py-8 flex flex-col px-8">
      <BigAssTitle>BLOG</BigAssTitle>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl text-center mx-auto">
        {blog.description} Read more on{" "}
        <a
          href={blog.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
        >
          {blog.title}
        </a>
        .
      </p>

      <a
        href={blog.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-4xl mx-auto mb-12 overflow-hidden rounded-lg shadow-xl group"
      >
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-auto transition-transform group-hover:scale-105"
        />
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blog.posts.map((post) => (
          <BlogPostCard key={post.link} {...post} imageUrl={null} />
        ))}
      </div>
    </article>
  );
}
