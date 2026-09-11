"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail, MapPin, Send, Building2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Contact Info Column */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Get in Touch</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Whether you have questions about trip itineraries, travel recommendations,
            sponsorships, or partnership opportunities with Aaditya Travels &amp;
            Aaditya Corporation, we would love to hear from you.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card/40">
            <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-medium text-muted-foreground">Email</div>
              <a
                href="mailto:aadityaraut369@gmail.com"
                className="text-sm font-medium hover:underline text-foreground"
              >
                aadityaraut369@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card/40">
            <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-medium text-muted-foreground">Organization</div>
              <div className="text-sm font-medium text-foreground">
                Aaditya Corporation
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card/40">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-medium text-muted-foreground">Location</div>
              <div className="text-sm font-medium text-foreground">
                Global Travel &amp; Remote Explorer
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-muted/50 border text-xs text-muted-foreground leading-normal">
          💡 Response time: We usually reply to inquiries within 24 to 48 hours.
        </div>
      </div>

      {/* Form Column */}
      <div className="lg:col-span-7">
        <div className="rounded-xl border bg-card p-6 md:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Message Received!</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Thank you for reaching out to Aaditya Travels. We have received your message
                and will get back to you shortly.
              </p>
              <div className="pt-2">
                <Button variant="outline" onClick={handleReset}>
                  Send Another Message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name</Label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Share your travel inquiry, collaboration ideas, or feedback..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
