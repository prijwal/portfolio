import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { Section } from "@/components/ui/section"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { experiences, projects, skills } from "@/lib/data"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-heading">Hi, I'm Prijwal</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Senior Software Engineer specializing in Microservices Architecture and Backend Development
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="elegant-border">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <Section
        title="Experience"
        description="Over 5 years of professional experience building scalable applications and systems"
      >
        <StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.slice(0, 3).map((exp, index) => (
              <StaggerItem key={index}>
                <Card className="h-full card-hover elegant-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-muted-foreground mb-1">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.duration} • {exp.location}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        <ScrollReveal>
          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild className="group elegant-border">
              <Link href="/experience" className="flex items-center gap-2">
                View All Experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Featured Projects */}
      <Section
        title="Projects"
        description="A selection of my recent work and personal projects"
        className="bg-gradient-to-b from-background to-secondary/30"
      >
        <StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <StaggerItem key={index}>
                <Card className="h-full card-hover elegant-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-medium">{project.impact}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        <ScrollReveal>
          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild className="group elegant-border">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Skills Overview */}
      <Section title="Skills" description="Technical expertise and professional competencies">
        <StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <Card className="card-hover elegant-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover elegant-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Microservices</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.microservices.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover elegant-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
        <ScrollReveal>
          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild className="group elegant-border">
              <Link href="/skills" className="flex items-center gap-2">
                View All Skills
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 -z-10"></div>
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Interested in working together?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              I'm currently available for freelance projects, consulting work, and full-time positions.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
