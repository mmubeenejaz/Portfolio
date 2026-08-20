import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mubeen Ejaz — Business Analyst, Product Owner & AI Engineer",
  description:
    "Portfolio of Mubeen Ejaz — Business Analyst and Product Owner building AI-powered applications end-to-end with Claude Code and modern AI tooling.",
  keywords: [
    "Mubeen Ejaz",
    "Business Analyst",
    "Product Owner",
    "AI Engineer",
    "Claude Code",
    "Next.js",
  ],
  authors: [{ name: "Mubeen Ejaz" }],
  openGraph: {
    title: "Mubeen Ejaz — Business Analyst, Product Owner & AI Engineer",
    description:
      "Business Analyst and Product Owner building AI-powered applications end-to-end.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
