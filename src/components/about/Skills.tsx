"use client";

import { LazyMotion, m, domAnimation } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import TechStackIcon from "tech-stack-icons";
import { portfolio } from "@/src/config/portfolio";

const categoryMeta: Record<
  string,
  { icon: LucideIcon; accent: string; description: string }
> = {
  Frontend: {
    icon: Monitor,
    accent: "from-sky-500/20 via-sky-500/5 to-transparent",
    description: "Building responsive user interfaces",
  },
  Backend: {
    icon: Server,
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    description: "Server logic & API integration",
  },
  Database: {
    icon: Database,
    accent: "from-amber-500/20 via-amber-500/5 to-transparent",
    description: "Data management & design",
  },
  Other: {
    icon: Wrench,
    accent: "from-violet-500/20 via-violet-500/5 to-transparent",
    description: "Tools that support my workflow",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

export function Skills() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <LazyMotion features={domAnimation} strict>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Expertise
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mt-3 text-muted-foreground">
              The technologies I use every day to build web products, from the
              interface all the way to the data layer.
            </p>
          </m.div>

          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.skillCategories.map((category, idx) => {
              const meta = categoryMeta[category.title] ?? categoryMeta.Other;
              const Icon = meta.icon;

              return (
                <m.div
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${meta.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold leading-tight text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {meta.description}
                        </p>
                      </div>
                      <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {category.skills.length}
                      </span>
                    </div>

                    <m.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="grid grid-cols-3 gap-3 sm:grid-cols-4"
                    >
                      {category.skills.map((skill) => (
                        <m.div
                          key={skill.name}
                          variants={item}
                          whileHover={{ y: -4 }}
                          className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-2 py-3.5 text-center shadow-sm transition-colors hover:border-primary/50 hover:shadow-md"
                        >
                          <div className="flex h-8 w-8 items-center justify-center">
                            {skill.icon ? (
                              <TechStackIcon
                                name={skill.icon}
                                className="h-8 w-8"
                              />
                            ) : (
                              <span className="text-lg font-bold text-muted-foreground">
                                {skill.name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-medium leading-tight text-foreground">
                            {skill.name}
                          </span>
                        </m.div>
                      ))}
                    </m.div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
