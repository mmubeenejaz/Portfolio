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
  title: "Mubeen Ejaz | AI Product Engineer & Technical Product Owner",
  description:
    "Portfolio of Mubeen Ejaz, AI Product Engineer and Technical Product Owner turning business problems into working software with hands-on AI-assisted development.",
  keywords: [
    "Mubeen Ejaz",
    "AI Product Engineer",
    "Technical Product Owner",
    "Business Analyst",
    "Claude Code",
    "Next.js",
  ],
  authors: [{ name: "Mubeen Ejaz" }],
  openGraph: {
    title: "Mubeen Ejaz | AI Product Engineer & Technical Product Owner",
    description:
      "Turning business problems into working software with hands-on AI-assisted development.",
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
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
