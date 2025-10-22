import { contactInfo } from "@/constants/contact";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <a
              href={contactInfo.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={contactInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Email
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} {contactInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
