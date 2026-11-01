import { blog } from "./blog";

export const LINKS = [
  {
    label: "Resume",
    url: "/resume",
  },
  {
    label: "Portfolio",
    url: "/portfolio",
  },
  ...(blog.posts.length
    ? [
        {
          label: "Blog",
          url: "/blog",
        },
      ]
    : []),
  {
    label: "Contact",
    url: "#contact",
  },
];
