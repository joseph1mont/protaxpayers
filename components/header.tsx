"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Pro Tax Payers Logo"
            width={48}
            height={48}
            unoptimized
            className="h-12 w-12"
          />
          <span className="text-xl font-semibold text-foreground">
            Pro Tax Payers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Resources
          </Link>
          <Button asChild>
            <Link href="/resources">View Tax Resources</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Button asChild className="w-full">
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)}>
                View Tax Resources
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
