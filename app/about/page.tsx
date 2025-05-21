import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export default function AboutPage() {
  return (
    <>
      <Section title="About Me" description="Learn more about my background, skills, and career goals">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Card className="card-hover elegant-card overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6 md:p-8">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a Senior Software Engineer with over 5 years of experience specializing in building scalable,
                    resilient microservices and backend systems. My journey in software development began with a passion
                    for solving complex problems and creating efficient solutions.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 gradient-heading">Domain Focus</h3>
                  <p className="leading-relaxed mb-6">
                    My primary focus is on designing and implementing microservices architectures, API development, and
                    cloud-native applications. I have extensive experience with distributed systems, event-driven
                    architecture, and containerization technologies. I'm particularly interested in system design
                    patterns that enhance scalability, reliability, and maintainability.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 gradient-heading">Soft Skills</h3>
                  <p className="leading-relaxed mb-6">
                    Beyond technical expertise, I pride myself on being an effective communicator and team player. I
                    enjoy mentoring junior developers and sharing knowledge with peers. I approach challenges with a
                    problem-solving mindset and believe in continuous learning and improvement. I'm adaptable to
                    changing requirements and comfortable working in fast-paced environments.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 gradient-heading">Career Intent</h3>
                  <p className="leading-relaxed mb-6">
                    I'm passionate about building systems that scale and solve real-world problems. My goal is to
                    continue growing as an architect and technical leader, contributing to projects that push the
                    boundaries of what's possible with modern software development. I'm particularly interested in
                    opportunities that involve complex system design, performance optimization, and mentoring others.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 gradient-heading">Outside of Work</h3>
                  <p className="leading-relaxed">
                    When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                    participating in hackathons. I'm also an avid reader of technical books and blogs, always looking to
                    expand my knowledge and stay current with industry trends.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
