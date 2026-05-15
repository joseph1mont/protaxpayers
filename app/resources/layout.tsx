import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Resources & IRS Forms | Pro Tax Payers Jacksonville",
  description: "Find essential IRS forms, tax tools, and Florida state resources. Pro Tax Payers provides the community with the latest tax filing information.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}