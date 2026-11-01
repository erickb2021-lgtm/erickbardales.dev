import { LINKS } from "./links";
import { profile } from "./profile";
import { jobExperiences } from "./jobExperiences";
import { education } from "./education";
import { portfolioItems } from "./portfolioItems";
import { socialLinks } from "./socialLinks";
import { skills } from "./skills";
import { blog } from "./blog";
import { projects } from "./projects";

const CONTENT = {
  ...profile,
  jobExperiences,
  education,
  portfolioItems,
  socialLinks,
  skills,
  blog,
  projects,
};

export { LINKS, CONTENT };
