import type { Metadata } from "next";

import { BackToTop } from "@/components/BackToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus AI - AI помощник для фрилансеров",
  description:
    "Премиальный AI-помощник для фрилансеров и малого бизнеса: клиенты, задачи, финансы и операционка в одном рабочем контуре.",
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
