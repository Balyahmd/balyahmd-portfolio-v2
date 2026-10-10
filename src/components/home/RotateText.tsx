"use client";

import * as React from "react";
import {
  LazyMotion,
  m,
  domAnimation,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/src/lib/utils";

interface RotatingTextProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 2800,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = React.useState(0);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      aria-live="polite"
      className={cn(
        "relative inline-flex overflow-hidden align-bottom",
        className,
      )}
    >
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={words[index]}
            initial={reduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {words[index]}
          </m.span>
        </AnimatePresence>
      </LazyMotion>
    </span>
  );
}
