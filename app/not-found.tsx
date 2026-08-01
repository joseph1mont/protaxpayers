import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36">
        {/* Background gradient layout matching updated homepage styling */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-accent/30 via-background to-background" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          {/* Visual Anchor matching your brand theme icons */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
            <FileQuestion className="h-8 w-8" />
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Page Not Found
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground italic">
            The page you are looking for does not exist, has been removed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row mt-4">
            <Button size="lg" asChild className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" /> Return to Homepage
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link href="/resources">
                <ArrowLeft className="h-4 w-4" /> Tax Resources
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
