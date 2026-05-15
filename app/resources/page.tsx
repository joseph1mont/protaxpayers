"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  ExternalLink,
  Building,
  Calculator,
  Users,
  Briefcase,
  DollarSign,
  FileCheck,
  Landmark,
  Globe,
  BookOpen,
} from "lucide-react";

// Resource data structure ready for Sanity.io CMS integration
// Replace this with: const resources = await sanityClient.fetch(RESOURCES_QUERY)
const resources = [
  {
    id: "1",
    title: "IRS Form 1040",
    description: "U.S. Individual Income Tax Return - The main form for filing your federal individual income tax return.",
    category: "IRS Forms",
    url: "https://www.irs.gov/forms-pubs/about-form-1040",
    icon: "FileText",
  },
  {
    id: "2",
    title: "IRS Form W-2",
    description: "Wage and Tax Statement - Report wages paid to employees and the taxes withheld.",
    category: "IRS Forms",
    url: "https://www.irs.gov/forms-pubs/about-form-w-2",
    icon: "FileCheck",
  },
  {
    id: "3",
    title: "IRS Form 1099",
    description: "Information returns for reporting various types of income other than wages, salaries, and tips.",
    category: "IRS Forms",
    url: "https://www.irs.gov/forms-pubs/about-form-1099-misc",
    icon: "FileText",
  },
  {
    id: "4",
    title: "IRS Form W-4",
    description: "Employee Withholding Certificate - Determine the correct federal income tax withholding.",
    category: "IRS Forms",
    url: "https://www.irs.gov/forms-pubs/about-form-w-4",
    icon: "Users",
  },
  {
    id: "5",
    title: "Schedule C",
    description: "Profit or Loss From Business - Report income or loss from a business operated as a sole proprietor.",
    category: "Business",
    url: "https://www.irs.gov/forms-pubs/about-schedule-c-form-1040",
    icon: "Briefcase",
  },
  {
    id: "6",
    title: "IRS Free File",
    description: "Free online tax preparation and filing options for eligible taxpayers.",
    category: "Tools",
    url: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free",
    icon: "Calculator",
  },
  {
    id: "7",
    title: "Florida Department of Revenue",
    description: "Official Florida state tax agency for sales tax, corporate tax, and other state taxes.",
    category: "State Resources",
    url: "https://floridarevenue.com/",
    icon: "Landmark",
  },
  {
    id: "8",
    title: "IRS Refund Status",
    description: "Check the status of your federal tax refund with the Where's My Refund tool.",
    category: "Tools",
    url: "https://www.irs.gov/refunds",
    icon: "DollarSign",
  },
  {
    id: "9",
    title: "Tax Withholding Estimator",
    description: "IRS tool to estimate your federal income tax withholding for accurate paycheck deductions.",
    category: "Tools",
    url: "https://www.irs.gov/individuals/tax-withholding-estimator",
    icon: "Calculator",
  },
  {
    id: "10",
    title: "Small Business Tax Center",
    description: "IRS resources specifically for small business owners, self-employed, and entrepreneurs.",
    category: "Business",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed",
    icon: "Building",
  },
  {
    id: "11",
    title: "Publication 17",
    description: "Your Federal Income Tax - Comprehensive guide covering individual tax rules and regulations.",
    category: "Guides",
    url: "https://www.irs.gov/publications/p17",
    icon: "BookOpen",
  },
  {
    id: "12",
    title: "IRS Tax Calendar",
    description: "Important tax due dates and deadlines for individuals and businesses.",
    category: "Tools",
    url: "https://www.irs.gov/pub/irs-pdf/p509.pdf",
    icon: "Globe",
  },
];

const categories = [
  "All",
  "IRS Forms",
  "State Resources",
  "Business",
  "Tools",
  "Guides",
];

const quickLinks = [
  { title: "IRS.gov", url: "https://www.irs.gov", description: "Official IRS Website" },
  { title: "Florida DOR", url: "https://floridarevenue.com", description: "Florida Department of Revenue" },
  { title: "Check Refund", url: "https://www.irs.gov/refunds", description: "Where's My Refund?" },
  { title: "Free File", url: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free", description: "IRS Free File Program" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  FileCheck,
  Users,
  Briefcase,
  Calculator,
  Landmark,
  DollarSign,
  Building,
  BookOpen,
  Globe,
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        searchQuery === "" ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <Header />
      <main className="flex-1">
      <PageHero title="Tax Resources" />
        {/* Main Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
              {/* Resources Grid */}
              <div className="flex flex-col gap-6">
                {/* Search and Filter */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="relative max-w-md flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Results Count */}
                <p className="text-sm text-muted-foreground">
                  Showing {filteredResources.length} of {resources.length}{" "}
                  resources
                </p>

                {/* Resources Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {filteredResources.map((resource) => {
                    const IconComponent = iconMap[resource.icon] || FileText;
                    return (
                      <Card
                        key={resource.id}
                        className="group border-border transition-all hover:border-primary/30 hover:shadow-md"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <IconComponent className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-base font-semibold leading-tight">
                                  {resource.title}
                                </CardTitle>
                                <Badge
                                  variant="secondary"
                                  className="mt-1 text-xs"
                                >
                                  {resource.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                            {resource.description}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full gap-2"
                          >
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Resource
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* No Results */}
                {filteredResources.length === 0 && (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/30 py-12 text-center">
                    <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
                    <h3 className="text-lg font-semibold text-foreground">
                      No resources found
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search or filter criteria.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("All");
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-6">
                {/* Quick Resources */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    {quickLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-3 transition-all hover:border-primary/30 hover:bg-secondary"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary">
                            {link.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                      </a>
                    ))}
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border-primary/20 bg-accent/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground">
                      Our Mandarin, Jacksonville tax professionals are here to
                      assist you with all your tax preparation needs.
                    </p>
                    <Button asChild className="w-full">
                      <a href="tel:+19048013988">Call (904) 801-3988</a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Location Info */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic">
                      <p className="text-sm font-medium text-foreground">
                        Pro Tax Payers
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        1650 Art Museum Dr. Unit 17
                        <br />
                        Jacksonville, FL 32207
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Serving Mandarin, Jacksonville FL 32223
                      </p>
                    </address>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
