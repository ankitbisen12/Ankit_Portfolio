import type { Metadata } from "next";
// TypeScript may not have declarations for CSS side-effect imports in some setups.
// @ts-expect-error CSS is processed by Next.js at build time.
import "./globals.css";
import { spaceGrotesk } from "../app/fonts";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "sonner";
import AnkitGPT from "@/components/AnkitGPT";

export const metadata: Metadata = {
  title: "Ankit Portfolio",
  description: "Portfolio website of Ankit Bisen",
  icons: {
    icon: "/assets/Site_logo.png",
    apple: "/assets/Site_logo.png",
  },
  openGraph: {
    title: "Ankit Bisen Portfolio",
    description: "A portfolio website of Data Engineer Ankit Bisen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster toastOptions={{
          style: {
            padding: '10px',
          }
        }} />
        <AnkitGPT/>
      </body>
    </html>
  );
}
