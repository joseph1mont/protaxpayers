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
  Clock,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  ClipboardCheck,
  Globe,
} from "lucide-react";

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Pro Tax Payers",
  description:
    "Professional tax preparation and multi-state filing services in Jacksonville, FL. Serving individuals and businesses in the 32207, San Marco, and Southside areas.",  
    url: "https://protaxpayers.com",
  telephone: "+1-904-801-3988",
  email: "PTPJax@gmail.com",
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
    latitude: 30.3065,
    longitude: -81.6375,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Jacksonville",
    },
    {
      "@type": "State",
      name: "Florida",
    },
    {
      "@type": "Country",
      name: "United States",
    }
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
  serviceType: ["Tax Preparation", "Multi-State Tax Returns", "Business Tax Services"],
};

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Our professionals stay current with evolving tax codes to maximize your legal deductions and credits.",
  },
  {
    icon: Globe,
    title: "Multi-State Filing",
    description:
      "Whether you lived in another state or have out-of-state business interests, we handle complex multi-jurisdiction returns.",
  },
  {
    icon: MapPin,
    title: "Jacksonville Local",
    description:
      "Conveniently located on Art Museum Dr, we proudly serve the San Marco and Southside communities.",
  },
  {
    icon: CheckCircle,
    title: "Accuracy Guaranteed",
    description:
      "We stand behind our work with thorough review processes to ensure every return is filed correctly the first time.",
  },
];

const services = [
  {
    icon: FileText,
    title: "Individual & Multi-State",
    description:
      "Specialized tax preparation for Florida residents and those with out-of-state filing requirements.",
  },
  {
    icon: Building2,
    title: "Business Tax & Compliance",
    description:
      "Expert filing for small businesses, LLCs, and corporations throughout Jacksonville and beyond.",
  },
  {
    icon: Calculator,
    title: "Strategic Tax Planning",
    description:
      "Proactive advice to minimize your future tax liability and streamline your business growth.",
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
                  Serving Jacksonville & Beyond | San Marco & Southside
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Expert Tax Preparation & Multi-State Filing
                </h1>
                <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Streamline your taxes with professionals who understand the Jacksonville market. From local business returns to complex out-of-state filings, we get it right the first time.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild className="gap-2">
                    <Link href="/resources">
                      View Tax Resources
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+19048013988">Call (904) 801-3988</a>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/30" />
                <div className="relative flex aspect-square items-center justify-center rounded-xl border border-border bg-card p-8 shadow-lg">
                  <Image
                    src="/protaxpayers-logo.webp"
                    alt="Pro Tax Payers - Jacksonville Tax Services"
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
                Experience You Can Count On
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                We manage the technical complexities of tax filings across state lines so you can focus on your business and family.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Time Optimization",
                  description: "Whether you're an individual or a business owner, we save you the hours spent navigating tax forms and regulations.",
                  icon: Clock,
                },
                {
                  title: "Precision Filing",
                  description: "Accuracy is our priority. Filing correctly ensures you avoid penalties and maximize your potential returns.",
                  icon: ShieldCheck,
                },
                {
                  title: "Local Experience",
                  description: "Deeply rooted in the 32207 area, we understand the specific tax environment for Jacksonville residents.",
                  icon: GraduationCap,
                },
                {
                  title: "Growth Strategy",
                  description: "We provide insights that help your business stay compliant while optimizing your year-over-year tax strategy.",
                  icon: TrendingUp,
                },
              ].map((feature) => (
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
                    <p className="text-sm leading-relaxed text-muted-foreground italic">
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
                Tax & Business Solutions
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Comprehensive tax support for individuals and entities in San Marco, Southside, and throughout the US.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Tax & Multi-State",
                  description: "Individual, Corporate, and State filings. We specialize in handling returns for residents with interests in multiple states.",
                  icon: Globe,
                },
                {
                  title: "Entity Formation",
                  description: "New business setup, business licenses, permits, and EBT authorizations to get your venture started right.",
                  icon: Building2,
                },
                {
                  title: "Business Compliance",
                  description: "Annual reports, Tangible Tax, Virtual Office solutions, and Notary services to keep your business running smoothly.",
                  icon: ClipboardCheck,
                },
              ].map((service) => (
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
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
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
                Ready to Simplify Your Taxes?
              </h2>
              <p className="max-w-2xl text-pretty text-lg text-primary-foreground/90">
                Access our tax resources and IRS forms or call our Jacksonville office today to schedule your consultation.
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