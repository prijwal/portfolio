import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { contactInfo } from "@/constants/contact";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // https://dashboard.emailjs.com/admin
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_bkxlpbg";
    const templateID = "template_nwd66v4";
    const publicKey = "D9SO8FgIjGAs6Yfpk";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
      title: "Contact Form",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast({
          title: "Failed to send",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <SectionTitle subtitle="Let's collaborate on your next project">
          Get In Touch
        </SectionTitle>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card variant="glass" className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Email
                </h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg text-primary hover:text-primary-glow transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Phone
                </h4>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg text-primary hover:text-primary-glow transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  GitHub
                </h4>
                <a
                  href={contactInfo.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:text-primary-glow transition-colors"
                >
                  {contactInfo.github.display}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  LinkedIn
                </h4>
                <a
                  href={contactInfo.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:text-primary-glow transition-colors"
                >
                  {contactInfo.linkedin.display}
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </Card>

          {/* Contact Form */}
          <Card variant="glass" className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
