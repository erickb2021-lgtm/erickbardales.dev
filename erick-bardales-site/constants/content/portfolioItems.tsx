import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { skills as sk } from "./skills";

export const GITHUB_URL = "https://github.com/erickb2021-lgtm";

export const portfolioItems: PortfolioItemProps[] = [
  {
    title: "HushKey",
    imageUrl: "/images/projects/hushkey.webp",
    description:
      "A free, open-source password manager for Windows and Mac. Your logins are encrypted on your own device, you can recover your vault with a code sent to your email, and it has light and dark mode.",
    link: "https://github.com/erickb2021-lgtm/HushKey",
    linkLabel: "View on GitHub",
    stack: [sk.python, sk.supabase, sk.sql, sk.git],
  },
  {
    title: "shURLock",
    imageUrl: "/images/projects/shurlock.webp",
    description:
      "The consulting link detective: a free, no-sign-up URL shortener and QR code generator that inspects every link for disguises (brand look-alikes, hidden redirects, risky downloads) before it shortens it.",
    link: "https://erickb2021-lgtm.github.io/shURLock/",
    stack: [sk.web],
  },
  {
    title: "EriB.log",
    imageUrl: "/images/projects/eriblog.webp",
    description:
      "My journal on artificial intelligence, cybersecurity, and tech careers. Research-backed, jargon-free entries with sources, written for students, career changers, and everyday readers.",
    link: "https://erickb2021-lgtm.github.io/EriB.log/",
    stack: [sk.web, sk.llm, sk.aiEval],
  },
];
