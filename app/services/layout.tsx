import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax & Business Services Jacksonville | Entity Formation & Licensing",
  description: "Professional tax filing, sales tax, new entity formation, beverage licenses, and EBT authorizations in Jacksonville, FL. Your partner for business compliance.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}