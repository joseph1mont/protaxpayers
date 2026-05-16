import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pro Tax Payers | Tax Office in Jacksonville 32207",
  description: "Contact our Jacksonville tax office on Art Museum Dr. Schedule your tax preparation appointment or call (904) 801-3988. Serving the San Marco and Southside communities with federal and multi-state tax filing solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}