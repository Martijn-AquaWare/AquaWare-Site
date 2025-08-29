"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function PerformanceSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Water knows no boundaries",
      description:
        "We work in river basins, not in administrative areas. What is discharged upstream affects water quality downstream. AquaWare offers a cross-regional, universal approach: a clear picture from source to mouth.",
      metrics: [
        {
          value: "2 Million",
          label: "Companies collected and analyzed",
        },
        {
          value: "1000 km²",
          label: "Area covered",
        },
      ],
    },
    nl: {
      title: "Water kent geen grenzen",
      description:
        "We werken in stroomgebieden, niet in bestuursvakken. Wat stroomopwaarts wordt geloosd, beïnvloedt stroomafwaarts de waterkwaliteit. AquaWare biedt een gebiedsoverstijgende, universele aanpak: van bron tot monding een eenduidig beeld.",
      metrics: [
        {
          value: "2 miljoen",
          label: "bedrijven verzameld en geanalyseerd",
        },
        {
          value: "1000 km2",
          label: "Oppervlakte gedekt",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Water network visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/abstract-water-network.png"
                alt="Water management network visualization"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </motion.div>

          {/* Right side - Content and metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 pt-8">
              {currentContent.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2 "
                >
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400">
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground text-md leading-relaxed">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
