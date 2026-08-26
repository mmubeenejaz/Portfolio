import type { Metadata } from "next";
import { Poppins, Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mubeen Ejaz | Product Owner & AI Product Engineer",
  description:
    "I turn ideas into software. Product Owner and AI Product Engineer: I understand the problem, design the product, build the software and ship it.",
  keywords: [
    "Mubeen Ejaz",
    "AI Product Engineer",
    "Product Owner",
    "Business Analyst",
    "Claude Code",
    "Next.js",
  ],
  authors: [{ name: "Mubeen Ejaz" }],
  openGraph: {
    title: "Mubeen Ejaz | Product Owner & AI Product Engineer",
    description:
      "I used to write the specs. Now I build and ship the product.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${barlow.variable} ${jetbrainsMono.variable} h-full overflow-x-hidden`}
    >
      <body className="min-h-full overflow-x-hidden bg-background font-sans text-body antialiased">
        {/* Without JS the reveal effect never runs, so show everything. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
