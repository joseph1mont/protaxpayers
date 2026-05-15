import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pro Tax Payers | Local Tax Experts in Jacksonville",
  description: "Learn about the expertise behind Pro Tax Payers. Serving the Jacksonville and Mandarin community with professional tax solutions and personalized service.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}