// about/BookCallSection.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

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

export default function BookCallSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Take the first step toward sustainable growth",
      subtitle:
        "Looking to scale your water management business with clarity and confidence? Our consulting experts are ready to guide every step of the way.",
      button: "Book a free call",
    },
    nl: {
      title: "Neem de eerste stap naar duurzame groei",
      subtitle:
        "Op zoek om uw waterbeheer bedrijf te schalen met duidelijkheid en vertrouwen? Onze consulting experts staan klaar om elke stap te begeleiden.",
      button: "Boek een gratis oproep",
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
          className="bg-muted rounded-2xl p-8 md:p-12 text-center space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {currentContent.subtitle}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {currentContent.button}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
