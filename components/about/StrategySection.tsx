// about/StrategySection.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function StrategySection() {
  const { language } = useLanguage();

  const content = {
    en: {
      description:
        "We are a strategy-first water management consulting firm dedicated to helping businesses solve complex challenges and accelerate their growth. ",
      stats: [
        { value: "4X", label: "Average ROI on water efficiency projects" },
        { value: "5", label: "Countries served with B2B services" },
        { value: "300%", label: "Increase in organic traffic for B2B clients" },
      ],
      ctaTitle: "It's time to rethink your water strategy",
      ctaButton: "Schedule a free consultation",
    },
    nl: {
      description:
        "Wij zijn een strategie-eerste waterbeheer consulting firma gewijd aan het helpen van bedrijven om complexe uitdagingen op te lossen en hun groei te versnellen.",
      stats: [
        { value: "4X", label: "Gemiddeld ROI op water efficiëntie projecten" },
        { value: "5", label: "Landen bediend met B2B diensten" },
        {
          value: "300%",
          label: "Toename in organisch verkeer voor B2B klanten",
        },
      ],
      ctaTitle: "Het is tijd om uw waterstrategie te heroverwegen",
      ctaButton: "Plan een gratis consultatie",
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 mb-12 flex items-center justify-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground max-w-4xl"
          >
            {currentContent.description}
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={itemVariants}
            className="flex-1 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/water-strategy-background.jpg"
              alt="Water strategy visualization"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="flex-1 space-y-4 flex justify-between flex-col">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 h-full "
            >
              {currentContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  className="bg-muted p-4 rounded-lg text-center flex flex-col justify-between"
                >
                  <h3 className="text-2xl lg:text-4xl font-bold text-primary">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-muted p-4 rounded-lg flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-primary">
                  {currentContent.ctaTitle}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {currentContent.ctaButton}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
