import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { projects } from "@/constants/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <SectionTitle subtitle="Building impactful solutions across FinTech, Security, and Cloud Infrastructure">
          Featured Projects
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="glass"
              className="p-6 flex flex-col"
            >
              {/* Company Badge */}
              {project.company && (
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                    {project.company}
                  </span>
                </div>
              )}

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-secondary/20 border border-secondary/30 text-secondary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-muted/50 border border-border text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && (
                <div className="flex gap-4 pt-4 border-t border-border">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary-glow transition-colors font-medium"
                    >
                      View Code →
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary-glow transition-colors font-medium"
                    >
                      Link for project →
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
