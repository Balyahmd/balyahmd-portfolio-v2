"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";

export function TechStack() {
  const items = [...portfolio.techStack, ...portfolio.techStack];

  return (
    <section className="overflow-hidden border-y border-border bg-secondary/40 py-14">
      <LazyMotion features={domAnimation} strict>
        <div className="mx-auto mb-8 max-w-6xl px-6">
          <m.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Technologies I work with
          </m.p>
        </div>
      </LazyMotion>

      <div className="marquee relative [mask:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-scroll flex w-max gap-3 pr-3">
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
      {name}
    </div>
  );
}
