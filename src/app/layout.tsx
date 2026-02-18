import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yikei.ai | Data & AI Solutions Builder",
  description: "Empowering Your Business with Data & AI-Driven Solutions. Expert guidance for scaling AI while remaining compliant.",
  keywords: ["Data Science", "AI Solutions", "Strategic Advisory", "Machine Learning", "Data Engineering", "Compliance", "AI Act", "GDPR"],
  openGraph: {
    title: "yikei.ai | Data & AI Solutions Builder",
    description: "Empowering Your Business with Data & AI-Driven Solutions.",
    url: "https://yikei.ai",
    siteName: "yikei.ai",
    type: "website",
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
