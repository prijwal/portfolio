import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/lib/data"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function SkillsPage() {
  return (
    <Section
      title="Skills & Expertise"
      description="Technical skills, tools, and competencies I've developed throughout my career"
    >
      <StaggerContainer>
        <div className="grid gap-8 md:grid-cols-2">
          <StaggerItem>
            <Card className="card-hover elegant-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-heading">Backend Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="card-hover elegant-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-heading">Microservices & System Architecture</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.microservices.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="card-hover elegant-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-heading">Frontend Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="card-hover elegant-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-heading">DevOps & Cloud-Native Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.devops.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="card-hover elegant-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-heading">Security & Identity</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.security.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="card-hover elegant-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-heading">Soft Skills & Recognition</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.soft.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </Section>
  )
}
