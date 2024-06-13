import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monica Laura Burns Portfolio",
  description: "Web Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-darkBlue overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />

        {children}
      </body>
    </html>
  );
}
