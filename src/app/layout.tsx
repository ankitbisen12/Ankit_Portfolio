import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "../app/fonts";

export const metadata: Metadata = {
  title: "Ankit Portfolio",
  description: "Portfolio website of Ankit Bisen",
  icons: {
    icon: "/assets/Site_logo.png",
    apple: "/assets/Site_logo.png",
  },
  openGraph: {
    title: "Ankit Bisen Portfolio",
    description: "A portfolio website of Software Developer Ankit Bisen",
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
        {children}
      </body>
    </html>
  );
}
