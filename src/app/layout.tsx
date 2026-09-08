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
      className={`${poppins.variable} ${barlow.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-body antialiased">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
