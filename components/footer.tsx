import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/protaxpayers-logo.webp"
                alt="Pro Tax Payers Logo"
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10"
              />
              <span className="text-lg font-semibold text-foreground">
                Pro Tax Payers
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional tax preparation services serving Mandarin,
              Jacksonville FL and the surrounding 32223 area.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <address className="flex flex-col gap-3 not-italic">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  1650 Art Museum Dr. Unit 17
                  <br />
                  Jacksonville, FL 32207
                </span>
              </div>
              <a
                href="tel:+19048013988"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>(904) 801-3988</span>
              </a>
              <a
                href="mailto:info@protaxpayers.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@protaxpayers.com</span>
              </a>
            </address>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Hours
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Sat: 10AM - 2PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/resources"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Tax Resources
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
              <a
                href="https://www.irs.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                IRS Website
              </a>
              <a
                href="https://floridarevenue.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Florida DOR
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Pro Tax Payers. All Rights Reserved. Pro Tax Payers is
              a subsidiary of Yazgi Corp.
            </p>
            <p className="text-xs text-muted-foreground">
              Serving Mandarin, Jacksonville FL 32223 and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
