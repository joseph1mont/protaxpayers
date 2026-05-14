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
  title: "Pro Tax Payers | Professional Tax Preparation in Mandarin, Jacksonville FL",
  description:
    "Pro Tax Payers provides professional tax preparation services in Mandarin, Jacksonville FL 32223. Trusted local tax professionals serving the Jacksonville community with expert individual and business tax services.",
  keywords: [
    "tax preparation Mandarin",
    "tax preparation Jacksonville FL",
    "tax professionals 32223",
    "Jacksonville tax services",
    "Mandarin FL tax preparation",
    "business tax preparation Jacksonville",
    "individual tax services Mandarin",
  ],
  authors: [{ name: "Pro Tax Payers" }],
  openGraph: {
    title: "Pro Tax Payers | Professional Tax Preparation in Mandarin, Jacksonville FL",
    description:
      "Trusted local tax professionals serving the Mandarin and Jacksonville community with expert tax preparation services.",
    type: "website",
    locale: "en_US",
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
