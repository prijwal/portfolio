import { Section } from "@/components/ui/section"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function ProjectsPage() {
  return (
    <Section title="Projects" description="A collection of my work, personal projects, and contributions">
      <StaggerContainer>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Card className="flex flex-col h-full card-hover elegant-card">
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Impact:</h4>
                    <p className="text-sm">{project.impact}</p>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" asChild className="w-full group elegant-border">
                    <Link href={project.link} className="flex items-center justify-center gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  )
}
