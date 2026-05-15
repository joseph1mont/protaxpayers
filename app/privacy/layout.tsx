import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pro Tax Payers Jacksonville",
  description: "Our commitment to protecting your personal and financial information at Pro Tax Payers.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}