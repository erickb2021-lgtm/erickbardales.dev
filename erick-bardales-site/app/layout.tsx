import type { Metadata } from "next";
import "./styles/globals.css";
import { AppShell } from "@/components/AppShell";
import Script from "next/script";
import { CONTENT } from "@/constants/content";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
// Set NEXT_PUBLIC_SITE_URL to your live domain once the site is hosted
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const DEFAULT_TITLE = CONTENT.siteTitle;
const DEFAULT_DESCRIPTION = CONTENT.siteDescription;

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    url: BASE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        url: `${BASE_URL}/images/default-share.jpeg`,
        width: 1200,
        height: 640,
        alt: DEFAULT_TITLE,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
        {GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            />
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GOOGLE_ANALYTICS_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
