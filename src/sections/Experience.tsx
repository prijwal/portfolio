import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { experiences } from "@/constants/experience";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle subtitle="Professional journey building enterprise systems and leading technical initiatives">
          Work Experience
        </SectionTitle>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} variant="glass" className="p-8 relative">
              {/* Timeline Indicator */}
              <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:block" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 px-3 py-1 rounded-full bg-muted/50 border border-border inline-block">
                  {exp.duration}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" 
             style={{ marginLeft: "calc(50% - 30rem)" }} />
      </div>
    </section>
  );
};
