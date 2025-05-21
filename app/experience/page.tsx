import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { experiences } from "@/lib/data"
import { Briefcase } from "lucide-react"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function ExperiencePage() {
  return (
    <Section
      title="Professional Experience"
      description="My journey as a software engineer across different companies and roles"
    >
      <div className="max-w-4xl mx-auto">
        <StaggerContainer>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <Card className="relative overflow-hidden card-hover elegant-card">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          <span className="text-sm font-medium text-muted-foreground">{exp.duration}</span>
                        </div>
                        <p className="text-lg font-medium mb-1">{exp.role}</p>
                        <p className="text-sm text-muted-foreground mb-6">{exp.location}</p>

                        <h4 className="text-base font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-primary">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </Section>
  )
}
