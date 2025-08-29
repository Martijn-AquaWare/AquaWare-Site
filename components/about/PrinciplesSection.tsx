"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PrinciplesSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Principles that shape our strategy",
      subtitle:
        "At the heart of our consulting practice lies a set of core values that guide how we think, work, and lead.",
      principles: [
        {
          title: "Integrity first",
          description: "We operate with honesty and transparency.",
        },
        {
          title: "Client-Centric",
          description: "Your success is our priority.",
        },
        {
          title: "Strategic thinking",
          description: "Every decision is backed by data and insights.",
        },
        {
          title: "Collaboration",
          description: "We believe in working together, not just consulting.",
        },
        {
          title: "Innovation",
          description: "We challenge the norms to find smarter solutions.",
        },
      ],
    },
    nl: {
      title: "Principes die onze strategie vormen",
      subtitle:
        "In het hart van onze consulting praktijk ligt een set kernwaarden die leiden hoe we denken, werken en leiden.",
      principles: [
        {
          title: "Integriteit eerst",
          description: "We opereren met eerlijkheid en transparantie.",
        },
        { title: "Klantgericht", description: "Uw succes is onze prioriteit." },
        {
          title: "Strategisch denken",
          description: "Elke beslissing is gesteund door data en inzichten.",
        },
        {
          title: "Samenwerking",
          description: "We geloven in samenwerken, niet alleen adviseren.",
        },
        {
          title: "Innovatie",
          description:
            "We dagen de normen uit om slimmere oplossingen te vinden.",
        },
      ],
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
          className="space-y-4 mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            {currentContent.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-6"
        >
          {currentContent.principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-muted p-6 rounded-4xl flex-grow ${
                index < 3
                  ? "basis-full md:basis-1/3"
                  : "basis-full md:basis-1/2"
              }`}
            >
              <h4 className="font-medium text-xl text-primary">• {principle.title}</h4>
              <p className="text-lg text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
