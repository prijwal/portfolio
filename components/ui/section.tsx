import type React from "react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

interface SectionProps {
  id?: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 gradient-heading">{title}</h2>
            {description && <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>}
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  )
}
