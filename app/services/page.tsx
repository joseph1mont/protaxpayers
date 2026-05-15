"use client";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { PageHero } from "@/components/page-hero";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Building2, BadgeCheck, MapPin, Briefcase, PencilLine } from "lucide-react";

const serviceGroups = [
  {
    title: "Tax Preparation & Filing",
    icon: FileText,
    items: [
      { name: "Personal & Corporate Tax Filing", desc: "Accurate, on-time returns for individuals and corporations." },
      { name: "State Sales Tax Filings", desc: "Complete preparation and filing for Florida-based businesses." },
      { name: "Tangible Business Tax", desc: "Local compliance management for business assets." },
    ],
  },
  {
    title: "Business Formation & Growth",
    icon: Building2,
    items: [
      { name: "New Entity Formation", desc: "Creation of Corporations/LLCs and Registered Agent services." },
      { name: "Business Licenses & Permits", desc: "Expert handling of Beverage, Tobacco, and Food permits." },
      { name: "EBT Authorizations", desc: "Navigating the application process for retail businesses." },
    ],
  },
  {
    title: "Compliance & Office Support",
    icon: BadgeCheck,
    items: [
      { name: "Annual Reports", desc: "Keeping your business in good standing with state requirements." },
      { name: "Virtual Office & Address", desc: "Professional Florida-based contact point and address services." },
      { name: "Notary Services", desc: "Certified support for your legal and business documents." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero title="Our Services" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From individual tax returns to complex business licensing, we provide the expertise 
              Jacksonville entrepreneurs need to thrive.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <group.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">{group.title}</h2>
                </div>
                {group.items.map((service) => (
                  <Card key={service.name} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-secondary/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Specific License or Permit?</h3>
            <p className="text-muted-foreground mb-6">
              We specialize in Florida-specific filings including Beverage, Tobacco, and Sales Tax certificates.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors">
              Get Started Today
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}