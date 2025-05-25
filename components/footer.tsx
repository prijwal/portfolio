import { Github, Linkedin, ExternalLink, Code2 } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-lg font-semibold gradient-heading">Prijwal</h3>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Professional portfolio showcasing skills, projects, and achievements
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">LeetCode</span>
            </a>
            <a
              href="https://geeksforgeeks.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Code2 className="h-5 w-5" />
              <span className="sr-only">GeeksforGeeks</span>
            </a>
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prijwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
