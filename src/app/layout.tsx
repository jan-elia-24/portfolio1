import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import NextTopLoader from "nextjs-toploader";
import CursorGlow from "@/components/cursor-glow";
import { Toaster } from "sonner";

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
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              backdropFilter: "blur(10px)",
              background: "rgba(20,20,20,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#f1f1f1",
              boxShadow: "0 0 25px rgba(16,185,129,0.15)",
            },
            className:
              "animate-[toastIn_0.6s_ease-out] data-[state=closed]:animate-[toastOut_0.4s_ease-in]",
          }}
        />
        <Nav />
        <div className="pt-16">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
