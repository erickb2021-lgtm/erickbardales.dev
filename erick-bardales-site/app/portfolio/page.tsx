import { BigAssTitle } from "@/components/common/BigAssTitle";
import { PortfolioItem } from "@/components/common/PortfolioItem";
import { CONTENT } from "@/constants/content";
import { GITHUB_URL } from "@/constants/content/portfolioItems";

const { portfolioItems } = CONTENT;

export default function Portfolio() {
  return (
    <article className="min-h-fit py-8 flex flex-col px-8 relative">
      <BigAssTitle>PORTFOLIO</BigAssTitle>
      <>
        {portfolioItems.map((item, idx) => (
          <PortfolioItem key={item.title} {...item} rtl={idx % 2 !== 0} />
        ))}
      </>
      <p className="text-xl text-center mb-16">
        See everything I'm building on{" "}
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          GitHub ↗
        </a>
      </p>
    </article>
  );
}
