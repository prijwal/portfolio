import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { Mail, MapPin, Phone } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export default function ContactPage() {
  return (
    <Section title="Contact Me" description="Get in touch for collaborations, opportunities, or just to say hello">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <Card className="card-hover elegant-card overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-heading">Get In Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm currently available for freelance projects, consulting work, and full-time positions. If you
                    have a project that you want to get started, think you need my help with something, or just want to
                    say hello, then get in touch.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 group">
                      <Mail className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">prijwal@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">Bangalore, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Connect with me</h4>
                    <SocialLinks />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 gradient-heading">Send a Message</h3>
                  <Button
                    href="mailto:prijwal@example.com"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    Send Email
                  </Button>

                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                    <h4 className="font-medium mb-2">Prefer a quick call?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a 30-minute call to discuss your project or opportunity.
                    </p>
                    <div className="flex items-center gap-2 group">
                      <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span>+91 98765 43210</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
