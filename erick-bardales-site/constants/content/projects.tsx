// Projects listed on the Resume page
export const projects = [
  {
    title: "Workout and Meal Prep Application",
    description:
      "Built a full-stack AI health app (React, FastAPI, Supabase/PostgreSQL) that generates personalized workout/meal plans via OpenAI's GPT-4o-mini, backed by a custom rules engine that validates every AI recommendation against a database for allergens and injury contraindications, auto-substituting unsafe items with reasoned explanations. Implemented bcrypt-based authentication with server-side sessions, a 12+ endpoint REST API, and 68 pytest unit tests.",
  },
  {
    title: "Aquifer Conservation Alliance Website",
    description:
      "Developed and customized a responsive web application for the Aquifer Conservation Alliance, implementing features for aquifer data tracking and automated updates on water-related events. Focused on responsive design, user accessibility, and clear presentation of environmental data.",
  },
  {
    title: "HushKey",
    link: "https://github.com/erickb2021-lgtm/HushKey",
    description:
      "A free, open-source password manager for Windows and Mac (Python, Supabase). Logins are encrypted on-device, the vault can be recovered with an emailed code, and it ships with light and dark mode and automated tests.",
  },
  {
    title: "shURLock",
    link: "https://erickb2021-lgtm.github.io/shURLock/",
    description:
      "A free, no-sign-up URL shortener and QR code generator that inspects every link for disguises (look-alike domains, hidden redirects, punycode, risky file types) before shortening it.",
  },
];
