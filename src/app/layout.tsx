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
  title: "Mallikarjun — Creative Developer & Experience Engineer",
  description: "Awwwards-recognized Creative Developer crafting high-performance interactive web experiences, WebGL, and generative design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-[#080d0e] text-[#e8f0f0] min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
