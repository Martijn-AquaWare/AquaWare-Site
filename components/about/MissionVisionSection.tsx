// about/MissionVisionSection.tsx
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

export default function MissionVisionSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Mission & Vision",
      subtitle:
        "Defining our purpose and aspirations in water management excellence.",
      vision: {
        title: "Our vision",
        description:
          "We envision a business world where water companies thrive on clarity, speed, and agility. Our long-term vision is to build a global network of high-impact water partnerships that redefine how strategy is implemented.",
        tags: [
          "Global partnerships",
          "Strategic execution",
          "Digital leadership",
          "Client empowerment",
          "People-First culture",
        ],
      },
      mission: {
        title: "Our mission",
        description:
          "Our mission is to provide innovative water management solutions that ensure sustainability and efficiency for future generations. Our long-term commitment is to environmental stewardship and technological advancement in water infrastructure.",
      },
    },
    nl: {
      title: "Onze Missie & Visie",
      subtitle:
        "Definiëren van ons doel en aspiraties in waterbeheer excellentie.",
      vision: {
        title: "Onze visie",
        description:
          "We voorzien een bedrijfs wereld waar waterbedrijven floreren op duidelijkheid, snelheid en wendbaarheid. Onze langetermijnvisie is om een globaal netwerk van hoog-impact waterpartnerschappen te bouwen die herdefiniëren hoe strategie wordt geïmplementeerd.",
        tags: [
          "Globale partnerschappen",
          "Strategische uitvoering",
          "Digitaal leiderschap",
          "Klant empowerment",
          "Mensen-Eerste cultuur",
        ],
      },
      mission: {
        title: "Onze missie",
        description:
          "Onze missie is om innovatieve waterbeheer oplossingen te bieden die duurzaamheid en efficiëntie verzekeren voor toekomstige generaties. Onze langetermijn commitment is aan milieubeheer en technologische vooruitgang in waterinfrastructuur.",
      },
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
          className="flex flex-col space-y-4 mb-12 items-center justify-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl !opacity-100 md:text-4xl font-bold text-foreground"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg mb-6 !opacity-100 text-muted-foreground"
          >
            {currentContent.subtitle}
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={cardVariants}
            className="bg-muted p-6 rounded-2xl space-y-4"
          >
            <h3 className="text-xl font-bold text-primary">
              ✿ {currentContent.vision.title}
            </h3>
            <p className="text-muted-foreground">
              {currentContent.vision.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentContent.vision.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-muted p-6 rounded-2xl space-y-4"
          >
            <h3 className="text-xl font-bold text-primary">
              ✿ {currentContent.mission.title}
            </h3>
            <p className="text-muted-foreground">
              {currentContent.mission.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
