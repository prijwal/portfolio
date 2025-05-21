import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { achievements } from "@/lib/data"
import { Trophy } from "lucide-react"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function AchievementsPage() {
  return (
    <Section title="Achievements" description="Recognition, awards, and notable accomplishments throughout my career">
      <div className="max-w-4xl mx-auto">
        <StaggerContainer>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <StaggerItem key={index}>
                <Card className="overflow-hidden card-hover elegant-card">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Trophy className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{achievement.title}</h3>
                          <span className="text-sm font-medium text-muted-foreground">{achievement.year}</span>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
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
