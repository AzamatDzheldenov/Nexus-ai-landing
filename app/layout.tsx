import type { Metadata, Viewport } from "next";

import { BackToTop } from "@/components/BackToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexus-ai.app";
const title = "Nexus AI - AI-помощник для фрилансеров и малого бизнеса";
const ruDescription =
  "Nexus AI помогает фрилансерам и небольшим командам держать клиентов, задачи, документы и оплаты в одном спокойном AI-workspace.";
const enDescription =
  "Nexus AI is a calm AI workspace for freelancers and small teams to manage clients, tasks, documents, and payments without operational noise.";
const description = `${ruDescription} ${enDescription}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Nexus AI",
  title: {
    default: title,
    template: "%s | Nexus AI",
  },
  description,
  keywords: [
    "Nexus AI",
    "AI assistant for freelancers",
    "AI workspace",
    "фриланс",
    "AI помощник",
    "малый бизнес",
    "управление задачами",
    "автоматизация документов",
  ],
  authors: [{ name: "Nexus AI" }],
  creator: "Nexus AI",
  publisher: "Nexus AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Nexus AI",
    title,
    description,
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nexus AI premium dark workspace preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "description:ru": ruDescription,
    "description:en": enDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#05070c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body>
        <LanguageProvider>
          {children}
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
