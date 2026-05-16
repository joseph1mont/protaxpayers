import { PageHero } from "@/components/page-hero";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, Users, Landmark, Clock, Award, MapPin, Search, Globe } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Meticulous Accuracy",
    description: "Every return undergoes a multi-point verification process to ensure 100% compliance with current IRS regulations.",
  },
  {
    icon: Globe,
    title: "Multi-State Expertise",
    description: "We handle out-of-state returns and multi-jurisdiction filings smoothly, ensuring accuracy across different state tax regulations.",
  },
  {
    icon: Target,
    title: "Maximized Refunds",
    description: "We don't just enter numbers; we look for every legal credit and deduction available to your specific situation.",
  },
  {
    icon: Landmark,
    title: "Yazgi Corp Standards",
    description: "As part of a larger corporate family, we provide the stability of a big firm with the heart of a local boutique.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">

        <PageHero title="Expert Tax Preparation & Multi-State Filing" />
        
        {/* Main Content Section */}
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* Left Column: The Narrative */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">A Trusted Partner for Jacksonville and Multi-State Tax Needs</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Navigating the ever-changing landscape of federal and state tax laws requires more than just software—it requires experience and a commitment to detail. At **Pro Tax Payers**, we have built our reputation on providing high-quality, reliable tax preparation services that cater specifically to individuals, families, and small business owners who require expert oversight on both Florida and out-of-state returns.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Located conveniently on Art Museum Drive, we serve a diverse local clientele from **San Marco and the Southside area**, while simultaneously managing filings for clients with diverse income streams across multiple US states. Our mission is simple: to provide peace of mind through professional financial guidance. Whether you are filing a straightforward local return or managing complex cross-state business tax requirements, our team is equipped to handle your finances with precision.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Award className="text-primary h-6 w-6" /> Local Insight with a National Reach
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Tax laws aren&apos;t just national; they vary greatly across state borders. Being based in Jacksonville means we understand the specific needs of Florida taxpayers, but our capabilities extend far beyond state lines. We routinely assist clients who have moved across states, own rental properties across different regions, or operate businesses that cross state jurisdictions.
                </p>
                <p className="mt-3 text-muted-foreground">
                  We focus on building multi-generational relationships, taking inspiration from long-standing local institutions that have served this community for decades. We aren&apos;t just here for one tax season; we are here for your entire financial journey, tracking state and federal regulatory changes year-round to protect your hard-earned income.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-2xl font-semibold text-foreground">The Yazgi Corp Advantage</h3>
                <p className="mt-3 text-muted-foreground italic">
                  Pro Tax Payers is proud to be a member of the **Yazgi Corp** family. This connection allows us to combine the personalized, responsive feel of a local boutique office with the robust analytical resources and professional standards of a major corporate entity. This gives our clients the absolute best of both worlds: individual attention paired with top-tier file safety, security, and institutional accuracy.
                </p>
              </div>
            </div>

            {/* Right Column: Sidebar Stats & Info */}
            <div className="space-y-6">
              <Card className="bg-secondary/20 border-none shadow-none">
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-4">Quick Facts</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <MapPin className="text-primary h-5 w-5 shrink-0" />
                      <span className="text-sm italic">Located in Jacksonville (32207) serving San Marco & Southside</span>
                    </li>
                    <li className="flex gap-3">
                      <Globe className="text-primary h-5 w-5 shrink-0" />
                      <span className="text-sm italic">Full Multi-State and out-of-state tax return filing capabilities</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="text-primary h-5 w-5 shrink-0" />
                      <span className="text-sm italic">Year-round tracking of changing state tax guidelines</span>
                    </li>
                    <li className="flex gap-3">
                      <Search className="text-primary h-5 w-5 shrink-0" />
                      <span className="text-sm italic">Specialists in Individual & Small Business Tax compliance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="p-6 border-l-4 border-primary bg-background shadow-sm">
                <p className="text-sm font-medium">&quot;Our mission is to provide high-quality, reliable tax services at competitive prices, ensuring our clients’ cross-jurisdictional financial success and peace of mind."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl font-bold italic">The Pillars of Our Practice</h2>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground italic">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl italic">Let’s Work Together</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Ready to experience a higher standard of local and cross-state tax preparation? Start by calling **(904) 801-3988** or visit our contact page to schedule your consultation. We look forward to solving your tax problems.
            </p>
            <div className="mt-10">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary hover:bg-secondary transition-colors"
              >
                Schedule an Appointment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}