import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
  FileText,
  Calculator,
  Building2,
} from "lucide-react";

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Pro Tax Payers",
  description:
    "Professional tax preparation services in Mandarin, Jacksonville FL. Expert tax professionals serving individuals and businesses in the 32223 area.",
  url: "https://protaxpayers.com",
  telephone: "+1-904-555-1234",
  email: "info@protaxpayers.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1650 Art Museum Dr. Unit 17",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32207",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3113,
    longitude: -81.5963,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Jacksonville",
      containedIn: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@type": "PostalCode",
      postalCode: "32223",
    },
    {
      "@type": "PostalCode",
      postalCode: "32207",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  serviceType: ["Tax Preparation", "Business Tax Services", "Individual Tax Services"],
};

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Our experienced tax professionals stay current with the latest tax laws and regulations to maximize your returns.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "We take the time to understand your unique financial situation and provide tailored tax solutions.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "As Mandarin locals, we understand the Jacksonville community and the specific needs of Florida residents.",
  },
  {
    icon: CheckCircle,
    title: "Accuracy Guaranteed",
    description:
      "We stand behind our work with thorough review processes to ensure your tax return is accurate and complete.",
  },
];

const services = [
  {
    icon: FileText,
    title: "Individual Tax Preparation",
    description:
      "Comprehensive tax preparation for individuals and families in Mandarin and Jacksonville.",
  },
  {
    icon: Building2,
    title: "Business Tax Services",
    description:
      "Expert tax preparation for small businesses, LLCs, and partnerships in the 32223 area.",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description:
      "Strategic tax planning to help you minimize your tax burden and maximize your financial goals.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-background to-background" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-accent/50 px-4 py-1.5 text-sm font-medium text-primary">
                  <MapPin className="h-4 w-4" />
                  Serving Mandarin, Jacksonville FL 32223
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Professional Tax Preparation in Mandarin, Jacksonville
                </h1>
                <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Trust your taxes to experienced professionals who understand
                  your needs. Pro Tax Payers delivers accurate, reliable tax
                  preparation services for individuals and businesses throughout
                  Jacksonville.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild className="gap-2">
                    <Link href="/resources">
                      View Tax Resources
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+19045551234">Call (904) 555-1234</a>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/30" />
                <div className="relative flex aspect-square items-center justify-center rounded-xl border border-border bg-card p-8 shadow-lg">
                  <Image
                    src="/logo.webp"
                    alt="Pro Tax Payers - Professional Tax Preparation Services"
                    width={280}
                    height={280}
                    unoptimized
                    className="h-auto w-full max-w-[280px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pro Tax Payers Section */}
        <section className="border-t border-border bg-secondary/50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Pro Tax Payers?
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Jacksonville residents trust us for professional, accurate, and
                personalized tax preparation services in the Mandarin area.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-border bg-card transition-shadow hover:shadow-md"
                >
                  <CardContent className="flex flex-col gap-4 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-t border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Tax Services
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Comprehensive tax preparation services for individuals and
                businesses in Mandarin, Jacksonville FL and the 32223 area.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-2xl text-pretty text-lg text-primary-foreground/90">
                Access our comprehensive collection of tax resources, IRS forms,
                and helpful links to prepare for your tax appointment.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="mt-2 gap-2"
              >
                <Link href="/resources">
                  View Tax Resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
