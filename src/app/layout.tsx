import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import NextTopLoader from "nextjs-toploader";
import CursorGlow from "@/components/cursor-glow";

export const metadata: Metadata = {
  metadataBase: new URL("https://jan-elia.dev"), // change to my domain later (or Vercel URL)
  title: {
    default: "Jan Elia – Portfolio",
    template: "%s | Jan Elia",
  },
  description:
    "Full-stack developer crafting modern web experiences with Next.js, React, Angular, Node, C#, and Java.",
  keywords: [
    "Jan Elia",
    "Full-stack developer",
    "Next.js",
    "React",
    "Angular",
    "Node",
    "C#",
    "Java",
    "Portfolio",
  ],
  authors: [{ name: "Jan Elia" }],
  openGraph: {
    title: "Jan Elia – Portfolio",
    description:
      "Modern web apps where design meets performance and code feels alive.",
    url: "https://jan-elia.dev",
    siteName: "Jan Elia – Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Elia – Portfolio",
    description:
      "Modern web apps where design meets performance and code feels alive.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <NextTopLoader showSpinner={false} height={2} />
        <CursorGlow />
        <Nav />
        <div className="pt-16">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
