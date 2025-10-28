import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jan Elia – Portfolio",
  description: "Full-stack dev • Next.js, Java, Node",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Nav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
