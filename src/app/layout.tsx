import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Jan Elia – Portfolio",
  description: "Full-stack dev • Next.js, React, Angular, Node, C#, Java",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <NextTopLoader showSpinner={false} height={2} />
        <Nav />
        <div className="pt-16">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
