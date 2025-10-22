import { Button } from "@/components/Button";
import { contactInfo } from "@/constants/contact";
import profileImage from "@/assets/profileImage.jpeg";

export const Profile = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-8 animate-glow">
            <img
              src={profileImage || "/default-avatar.png"}
              alt={contactInfo.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            {contactInfo.name}
          </h1>

          <p className="text-2xl md:text-3xl text-primary mb-6 font-medium">
            {contactInfo.role}
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Passionate about building scalable, resilient systems with Java,
            Spring Boot, Quarkus, and React. Experienced in microservices
            architecture, cloud-native development, and enterprise security
            solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={scrollToContact}>
              Contact Me
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToProjects}>
              View Work
            </Button>
          </div>

          {/* Tech Stack Quick Overview */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            {[
              "Java",
              "Spring Boot",
              "React",
              "Microservices",
              "Docker",
              "Kubernetes",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-muted-foreground text-sm hover:border-primary/50 hover:text-foreground transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
