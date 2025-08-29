// about/NameBehindGoalSection.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
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

export default function NameBehindGoalSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "The power behind our name",
      subtitle:
        "AquaWare stands for data, insight and conscious water management.",
      cards: [
        {
          term: "Aqua",
          description:
            "[Aqua]Ware - for water. Our most valuable natural system and the heart of our mission: contributing to a better water quality.",
        },
        {
          term: "Ware",
          description:
            "Aqua[Ware] - refers to software. We provide digital tools with which governments can monitor, analyze and convert water data into action.",
        },
        {
          term: "Aware",
          description:
            "Aqu[Aware] - plays on the word 'aware' = to be aware. We want to create awareness among governments about the state of the water, the impact of industrial discharges and the importance of data-driven decision-making.",
        },
      ],
      button: "Schedule an appointment",
    },
    nl: {
      title: "De kracht achter onze naam",
      subtitle: "AquaWare staat voor data, inzicht en bewust waterbeheer.",
      cards: [
        {
          term: "Aqua",
          description:
            "[Aqua]Ware – voor water. Ons meest waardevolle natuurlijke systeem en het hart van onze missie: bijdragen aan een betere waterkwaliteit.",
        },
        {
          term: "Ware",
          description:
            "Aqua[Ware] – verwijst naar software. Wij leveren digitale tools waarmee overheden waterdata kunnen monitoren, analyseren en omzetten in actie.",
        },
        {
          term: "Aware",
          description:
            "Aqu[Aware] – speelt op het woord 'aware' = bewust zijn. Wij willen bewustwording creëren bij overheden over de staat van het water, de impact van industriële lozingen en het belang van data-gedreven besluitvorming.",
        },
      ],
      button: "Plan een afspraak",
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-4 mb-12 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-4xl mx-auto"
          >
            {currentContent.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-2xl overflow-hidden h-full"
          >
            <Image
              src="/image (3).jpeg"
              alt="Dutch water landscape"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            {currentContent.cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-xl"
              >
                <h3 className="text-xl font-bold text-blue-600">{card.term}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
