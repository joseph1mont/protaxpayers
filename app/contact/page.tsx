"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - Replace with your actual keys
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Overlapping Logo */}
        <section className="relative">
          {/* Hero Image */}
          <div className="relative h-64 w-full sm:h-80 md:h-96">
            <Image
              src="/jacksonville-hero.jpg"
              alt="Jacksonville, Florida skyline"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-balance text-center text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl">
                Contact Pro Tax Payers
              </h1>
            </div>
          </div>

          {/* Overlapping Logo */}
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-background bg-white shadow-xl sm:h-32 sm:w-32 md:h-36 md:w-36">
              <Image
                src="/logo.webp"
                alt="Pro Tax Payers Logo"
                width={120}
                height={120}
                unoptimized
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
              />
            </div>
          </div>
        </section>

        {/* Spacer for overlapping logo */}
        <div className="h-20 sm:h-24 md:h-28" />

        {/* Contact Content */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Details & Map */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Pro Tax Payers
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Professional tax preparation services in Jacksonville, FL
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <address className="mt-1 text-sm not-italic text-muted-foreground">
                        1650 Art Museum Dr, Unit 17
                        <br />
                        Jacksonville, FL 32207
                      </address>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a
                        href="tel:+19048013988"
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        (904) 801-3988
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:info@protaxpayers.com"
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        info@protaxpayers.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Hours</h3>
                      <div className="mt-1 text-sm text-muted-foreground">
                        <p>Mon - Fri: 9AM - 6PM</p>
                        <p>Sat: 10AM - 2PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps */}
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5234567890123!2d-81.6095!3d30.3227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b0d3c1e3d3a9%3A0x1234567890abcdef!2s1650%20Art%20Museum%20Dr%2C%20Jacksonville%2C%20FL%2032207!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pro Tax Payers Location"
                  className="w-full"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="border-border shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>

                  {isSubmitted ? (
                    <div className="mt-8 flex flex-col items-center gap-4 rounded-lg bg-green-50 p-8 text-center">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">
                          Message Sent!
                        </h3>
                        <p className="mt-1 text-sm text-green-700">
                          Thank you for contacting Pro Tax Payers. We&apos;ll
                          respond within 1-2 business days.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-2"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            Email <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border-input"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(904) 555-1234"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-foreground"
                          >
                            Subject <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            placeholder="Tax Preparation Inquiry"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="border-input"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        />
                      </div>

                      {error && (
                        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                          {error}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        Or call us directly at{" "}
                        <a
                          href="tel:+19048013988"
                          className="font-medium text-primary hover:underline"
                        >
                          (904) 801-3988
                        </a>
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
