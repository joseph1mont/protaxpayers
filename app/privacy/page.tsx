"use client";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { PageHero } from "@/components/page-hero";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <PageHero title="Privacy Policy" />
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h1 className="text-4xl font-bold mb-4 italic">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">
            Effective Date: June 2026
          </p>

          <div className="space-y-10 text-sm sm:text-base leading-relaxed">
            {/* 1. Commitment to Security */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Our Commitment to Security
              </h2>
              <p>
                At Pro Tax Payers, we take the privacy and security of your
                personal and financial information seriously. We maintain
                physical, electronic, and procedural safeguards that comply with
                federal standards, including the FTC Safeguards Rule and IRS
                requirements, to protect your Non-public Personal Information
                (NPI).
              </p>
            </section>

            {/* 2. Information Collection */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                What information do we collect?
              </h2>
              <p className="mb-4">
                We collect information when you voluntarily submit forms on our
                site to request services. This may include your name, email
                address, mailing address, and phone number.
              </p>
              <p className="bg-secondary/30 p-4 rounded-lg">
                <strong>Technical Data:</strong> We use Google Analytics to
                collect non-identifiable technical data (such as your browser
                type and IP address) to improve website performance. This data
                does not identify you as an individual.
              </p>
            </section>

            {/* 3. Usage & Disclosure */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                How we use your information
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Service Delivery:</strong> We use your information
                  solely to process your tax filings, business registrations,
                  and service requests.
                </li>
                <li>
                  <strong>No Sale of Data:</strong> We do not sell, trade, or
                  rent your personal information to outside parties.
                </li>
                <li>
                  <strong>Trusted Providers:</strong> We only share information
                  with trusted third-party service providers (such as tax
                  software or secure cloud storage) who are contractually
                  obligated to keep your data confidential.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required to do so by law or to comply with
                  professional tax regulations.
                </li>
              </ul>
            </section>

            {/* 4. Data Retention */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Data Retention & Destruction
              </h2>
              <p>
                We retain client records only for as long as necessary to
                fulfill our professional obligations and comply with applicable
                tax laws. When records are no longer required, we ensure they
                are destroyed using secure methods, such as professional data
                wiping or physical document shredding.
              </p>
            </section>

            {/* 5. Disclaimer */}
            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Professional Relationship
              </h2>
              <p>
                Information provided on this website is for general
                informational purposes only and does not constitute a
                professional tax-client relationship. A formal relationship is
                established only upon the signing of an official engagement
                letter.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Contacting Us
              </h2>
              <p className="mb-4">
                If you have any questions regarding this privacy policy, please
                contact us:
              </p>
              <div className="font-medium">
                <p className="text-lg text-foreground">Pro Tax Payers</p>
                <p>1650 Art Museum Dr</p>
                <p>Jacksonville, FL 32207</p>
                <p className="text-primary font-bold mt-2">(904) 801-3988</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
