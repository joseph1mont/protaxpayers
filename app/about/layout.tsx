import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pro Tax Payers | Local & Multi-State Tax Experts in Jacksonville",
  description: "Learn about the expertise behind Pro Tax Payers. Serving the Jacksonville, San Marco, and Southside communities with professional federal and multi-state tax solutions.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}