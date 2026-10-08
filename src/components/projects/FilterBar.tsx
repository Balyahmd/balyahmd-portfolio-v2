"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { portfolio } from "@/src/config/portfolio";

interface FilterBarProps {
  active: string;
  onChange: (category: string) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap gap-2"
    >
      {portfolio.categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150",
            active === category
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}