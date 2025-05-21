import "./globals.css"; // If you're using Tailwind
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crucible",
  description: "Crucible Innovation Forum",
  keywords: [
    "Crucible",
    "sustainability",
    "innovation",
    "ESG",
    "technology",
    "climate action"
  ],
  authors: [{ name: "Crucible Team" }],
  themeColor: "#1e3a8a",
  openGraph: {
    type: "website",
    title: "Crucible - Empowering Innovation Through Sustainability",
    description: "Explore how Crucible leads innovation with impact in sustainability and tech.",
    images: ["https://example.com/og-image.jpg"],
    url: "https://crucible.org.in/",
    siteName: "Crucible"
  },
  twitter: {
    card: "summary_large_image",
    title: "Crucible - Empowering Innovation Through Sustainability",
    description: "Explore how Crucible leads innovation with impact in sustainability and tech.",
    images: ["https://example.com/twitter-image.jpg"],
    creator: "@CrucibleHQ"
  },
  other: {
    "google-site-verification": "_saz9b-4f-4ifeydh4BWiZA7xoD4Na0EJ8YoNTDta-A"
  }
};
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
