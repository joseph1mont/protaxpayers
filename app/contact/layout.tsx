import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pro Tax Payers | Tax Office in Jacksonville 32207",
  description: "Contact our Jacksonville tax office on Art Museum Dr. Schedule your tax preparation appointment or call (904) 801-3988. Serving San Marco and Mandarin.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}