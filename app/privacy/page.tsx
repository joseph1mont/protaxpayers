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
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 italic">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12 italic">Effective Date: May 2026</p>

          <div className="space-y-10 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1: Information Collection */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">What information do we collect?</h2>
              <p className="mb-4">
                We collect information from you when you fill out a form or submit business information on our site. When ordering or registering, you may be asked to enter your: name, e-mail address, mailing address, or phone number. You may, however, visit our site anonymously.
              </p>
              <p className="italic bg-secondary/30 p-4 rounded-lg">
                <strong>Technical Data:</strong> We may collect information about your computer, including your IP address, operating system, and browser type using <strong>Google Analytics</strong>. This is to improve browsing for everyone and does not identify any individual.
              </p>
            </section>

            {/* Section 2: Usage */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">What do we use your information for?</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>To process transactions:</strong> Your information will not be sold, exchanged, or given to any other company for any reason whatsoever without your consent, other than for the express purpose of delivering the service requested.</li>
                <li><strong>To send periodic emails:</strong> The email address you provide may be used to respond to inquiries, requests, or questions.</li>
              </ul>
            </section>

            {/* Section 3: Remarketing & Cookies */}
            <section className="border-l-4 border-primary/20 pl-6">
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">Remarketing & Google Ads</h2>
              <p className="mb-4">
                Pro Tax Payers may use 3rd party vendor re-marketing tracking cookies, including the Google Ads tracking cookie. This means we may continue to show ads to you across the internet, specifically on the Google Content Network (GCN).
              </p>
              <p className="italic">
                Third-party vendors, including Facebook and Google, use cookies to serve ads based on a user’s prior visits to our website. This allows us to make special offers and market our services to those who have shown interest in our tax and business solutions.
              </p>
            </section>

            {/* Section 4: Third Parties */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">Disclosure to Outside Parties</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential. 
              </p>
            </section>

            {/* Section 5: Specific Professional Info */}
            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">Personal & Financial Information</h2>
              <p className="italic">
                Our company provides professional tax and business services that require you to submit certain information so we can assist with your filing or licensing situation. This information is for our use only and will not be shared with outside parties unless as required by law or to solve your specific tax or registration requirements.
              </p>
            </section>

            {/* Section 6: Contact */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">Contacting Us</h2>
              <p className="mb-4 italic">If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
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