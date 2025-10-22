import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ children, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
