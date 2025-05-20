import "./globals.css"; // If you're using Tailwind
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crucible",
  description: "Crucible Innovation Forum",
  other: {
    "google-site-verification": "_saz9b-4f-4ifeydh4BWiZA7xoD4Na0EJ8YoNTDta-A"
  }
};

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
