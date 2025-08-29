// about/IndustrialDischargesSection.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function IndustrialDischargesSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Get Grip on Industrial Discharges",
      subtitle: "Reduce complexity to overview and work focused on WFD goals",
      button: "Schedule an appointment",
    },
    nl: {
      title: "Krijg Grip op Industriële Lozingen",
      subtitle:
        "Breng complexiteit terug tot overzicht en werk gericht aan KRW-doelen",
      button: "Plan een afspraak",
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 rounded-3xl overflow-hidden p-12 text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/Kopie van image (2).jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-800/80" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {currentContent.title}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              {currentContent.subtitle}
            </p>
            <Link href="/contact">
              <Button className="bg-muted-foreground hover:cursor-pointer text-white hover:bg-foreground">
                {currentContent.button}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
