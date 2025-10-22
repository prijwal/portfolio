import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "md", 
  className,
  children,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105",
    ghost: "bg-transparent border-2 border-primary text-foreground hover:bg-primary/10 hover:border-primary-glow hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    outline: "bg-transparent border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
    light: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg hover:scale-105",
    dark: "bg-background border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-105",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
