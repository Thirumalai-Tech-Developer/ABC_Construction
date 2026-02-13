import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = "center", 
  className,
  dark = false 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12",
      align === "center" && "text-center mx-auto max-w-3xl",
      align === "left" && "text-left",
      align === "right" && "text-right",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-sm font-bold uppercase tracking-wider mb-2 block",
            dark ? "text-accent" : "text-accent"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl font-extrabold tracking-tight",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "60px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={cn(
          "h-1 bg-accent mt-4",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
