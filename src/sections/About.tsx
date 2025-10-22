import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { skills, skillCategories } from "@/constants/skills";
import { achievements } from "@/constants/experience";

import hackathon from "@/assets/hackathon.png";
import rockstar from "@/assets/miniOrangeRockstar.jpeg";
import rating from "@/assets/rating.png";

const achievementImages = [hackathon, rockstar, rating];

export const achievementsWithImages = achievements.map((item, index) => ({
  ...item,
  image: achievementImages[index],
}));

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle subtitle="Building scalable systems and solving complex problems">
          About Me
        </SectionTitle>

        {/* Professional Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card variant="glass" className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Senior Full-Stack Engineer with expertise in building scalable
              microservices, enterprise security solutions, and modern web
              applications. Proven track record of transforming monolithic
              architectures into resilient distributed systems and delivering
              high-impact products in FinTech and Identity & Access Management
              domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about system design, clean architecture, and leveraging
              cutting-edge technologies to solve real-world business challenges.
              Experienced in leading technical initiatives from concept to
              production.
            </p>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.key} variant="glass" className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-4">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills[category.key as keyof typeof skills].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md bg-muted/50 border border-border text-sm text-foreground hover:border-primary/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievementsWithImages.map((achievement) => (
              <Card
                key={achievement.title}
                variant="glass"
                className="p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <h6 className="text-lg font-semibold text-muted-foreground mb-2">
                  {achievement.date}
                </h6>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="ghost"
            size="lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1BOF9BBrB10LNI3suUe17Fy0whPU4RdYE/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
