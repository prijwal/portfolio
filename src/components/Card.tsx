import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass";
  hover?: boolean;
}

export const Card = ({ 
  children, 
  className, 
  variant = "default",
  hover = true 
}: CardProps) => {
  const baseStyles = "rounded-xl border border-border transition-all duration-300";
  
  const variants = {
    default: "bg-card",
    glass: "bg-card/50 backdrop-blur-lg",
  };
  
  const hoverStyles = hover 
    ? "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:scale-[1.02]" 
    : "";
  
  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
};
