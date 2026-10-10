"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Download } from "lucide-react";
import { m, LazyMotion, domAnimation, type Variants } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { portfolio } from "@/src/config/portfolio";
import { RotatingText } from "@/src/components/home/RotateText";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <LazyMotion features={domAnimation} strict>
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 text-center md:text-left md:max-w-xl">
            {portfolio.available && (
              <m.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex justify-center md:justify-start"
              >
                <Badge
                  variant="secondary"
                  className="gap-1.5 py-1 px-3 text-xs"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for work
                </Badge>
              </m.div>
            )}

            <m.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-foreground">{portfolio.name}</span>
            </m.h1>

            <m.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg font-medium"
            >
              <RotatingText words={portfolio.roles} />
            </m.div>

            <m.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base text-muted-foreground leading-relaxed"
            >
              {portfolio.bio}
            </m.p>

            <m.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start"
            >
              <MapPin className="h-4 w-4" />
              {portfolio.location}
            </m.div>

            <m.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row justify-center md:justify-start"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  View my work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Button asChild variant="outline" size="lg">
                  <a href="/CV.pdf" download="CV.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </Button>
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-spin [animation-duration:20s]" />
              <div className="absolute inset-4 overflow-hidden rounded-full bg-secondary">
                <Image
                  src={portfolio.avatar}
                  alt={portfolio.name}
                  fill
                  className="object-cover"
                  preload
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-muted-foreground">
                  {portfolio.initials}
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
}
