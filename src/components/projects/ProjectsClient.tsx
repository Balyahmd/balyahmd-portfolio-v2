"use client";

import * as React from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { FilterBar } from "@/src/components/projects/FilterBar";
import { ProjectCard } from "@/src/components/projects/ProjectCard";

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = portfolio.projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            All Projects
          </h1>
          <p className="text-muted-foreground max-w-lg">
            A collection of projects I&apos;ve built — from full-stack web apps
            to open-source tools and UI experiments.
          </p>
        </m.div>

        <div className="mb-10">
          <FilterBar active={activeCategory} onChange={setActiveCategory} />
        </div>

        <AnimatePresence mode="wait">
          <m.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </m.div>
            ))}
          </m.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center text-muted-foreground"
          >
            No projects in this category yet.
          </m.div>
        )}
      </LazyMotion>
    </div>
  );
}
