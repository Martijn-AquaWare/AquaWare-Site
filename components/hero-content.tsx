"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";
import Image from "next/image";

// Dynamic data with translations
const heroData = {
  en: {
    badge: "The data-driven platform for industrial discharges",
    shortBadge: "The data-driven platform for discharges",
    stats: {
      uptime: "99.9%",
      monitoring: "24/7",
    },
  },
  nl: {
    badge: "Het datagedreven platform voor industriële lozingen",
    shortBadge: "Het datagedreven platform voor lozingen",
    stats: {
      uptime: "99,9%",
      monitoring: "24/7",
    },
  },
};

export default function HeroSection() {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleScrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact-form");
    if (!target) return;

    const OFFSET = 100; // tweak this to land “a bit above” your form
    const y = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;

    // update the URL hash without jumping
    window.history.pushState(null, "", "#contact-form");

    // smooth scroll
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-background pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start justify-center space-y-8 lg:pr-8"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-2">
                <span className="text-blue-600 dark:text-blue-400 text-xs lg:text-sm font-medium">
                  💧{" "}
                  <span className="lg:hidden">
                    {heroData[language].shortBadge}
                  </span>
                  <span className="hidden lg:inline">
                    {heroData[language].badge}
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-center lg:text-start text-5xl lg:text-6xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t("hero.title").split(" ").slice(0, 2).join(" ")}
              </span>
              <br />
              <span className="text-foreground">
                {t("hero.title").split(" ").slice(2).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-center lg:text-start text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap  justify-center lg:justify-start gap-4 lg:gap-2 "
            >
              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-muted border ">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs xl:text-sm text-muted-foreground">
                  {t("hero.features.provincies")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-muted border">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs lg:text-sm text-muted-foreground">
                  {t("hero.features.waterschappen")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-muted border">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-xs lg:text-sm text-muted-foreground">
                  {t("hero.features.Omgevingsdiensten")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-muted border">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs lg:text-sm text-muted-foreground">
                  {t("hero.features.Gemeenten")}
                </span>
              </div>
              {/* <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted border">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs lg:text-sm text-muted-foreground">
                  {t("hero.features.Rijkswaterstaat")}
                </span>
              </div> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 "
            >
              <Link href="#contact-form" onClick={handleScrollToContact}>
                <button className="inline-flex items-center justify-center px-4 xl:px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md xl:text-lg hover:bg-primary/90 hover:cursor-pointer transition-colors duration-200 group">
                  {t("hero.cta.primary")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              {/* <button className="inline-flex items-center justify-center px-4 xl:px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold text-md xl:text-lg hover:bg-muted transition-colors duration-200 group">
                <Play className="mr-2 w-5 h-5" />
                {t("hero.cta.secondary")}
              </button> */}
            </motion.div>
          </motion.div>

          {/* Right image section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:pl-8"
          >
            {/* Apply the previous height classes to the container and use Image with `fill` */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
              <Image
                src="/Een dikke onvoldoende voor waterkwaliteit - WUR1.jpeg"
                alt="Modern Water Treatment Facility"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
