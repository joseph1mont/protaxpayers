// file path: app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Tax Payers | Professional Tax Preparation Jacksonville FL 32207",
  description:
    "Expert tax preparation services at 1650 Art Museum Dr, Jacksonville. Specializing in individual, multi-state, and business tax returns for San Marco, Southside, and the greater Jacksonville area.",
  keywords: [
    "tax preparation Jacksonville FL",
    "multi-state tax filing services",
    "tax professionals 32207",
    "San Marco tax preparation",
    "Southside Jacksonville tax services",
    "business tax filing Florida",
    "out of state tax returns",
    "Pro Tax Payers Art Museum Dr",
  ],
  authors: [{ name: "Pro Tax Payers" }],
  openGraph: {
    title: "Pro Tax Payers | Expert Tax Prep & Multi-State Filing Jacksonville",
    description:
      "Reliable tax preparation for individuals and businesses. We handle Florida and multi-state returns from our San Marco area office.",
    type: "website",
    locale: "en_US",
    url: "https://protaxpayers.com",
    siteName: "Pro Tax Payers",
  },
};

export const viewport: Viewport = {
  themeColor: "#ee1c25",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-KTREP9HBDV" />
    </html>
  );
}
