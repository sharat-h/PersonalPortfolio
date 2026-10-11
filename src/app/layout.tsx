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
  title: "Sharathkumar K M — AI & Machine Learning Engineer | Creative Developer",
  description:
    "Portfolio of Sharathkumar K M. B.E. Artificial Intelligence & Machine Learning engineer from Bengaluru, Creator of PrepBot (AI Placement Mentor), and Flinders AI Hackathon Winner.",
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
      <body className="bg-[#080d0e] text-[#e8f0f0] min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
