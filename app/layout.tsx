import type { Metadata, Viewport } from "next";
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
  title: "Pro Tax Payers | Tax Preparation Jacksonville FL 32207 & 32223",
  description:
    "Professional tax preparation services at 1650 Art Museum Dr, Jacksonville FL 32207. Trusted local tax experts serving Mandarin, San Marco, and the Southside with individual and business tax solutions.",
  keywords: [
    "tax preparation Jacksonville FL",
    "tax professionals 32207",
    "tax preparation Mandarin FL",
    "tax services 32223",
    "San Marco tax prep",
    "business tax services Jacksonville",
    "individual tax preparation Florida",
    "Pro Tax Payers Art Museum Dr",
  ],
  authors: [{ name: "Pro Tax Payers" }],
  openGraph: {
    title: "Pro Tax Payers | Professional Tax Prep in Jacksonville FL",
    description:
      "Expert tax preparation services for individuals and businesses in Jacksonville. Visit our office on Art Museum Dr or schedule a consultation today.",
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
    </html>
  );
}
