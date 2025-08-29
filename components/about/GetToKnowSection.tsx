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
      ease: "easeOut",
    },
  },
};

export default function GetToKnowSection() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Get to know Aqua Ware Water Management Consulting",
      description:
        "We are your long-term growth partners. Discover who we are and how we help water management companies unlock their potential.",
      button: "Explore our services",
      sectors:
        "Expertise across key sectors / Municipal / Industrial / Agricultural / Environmental / Infrastructure / Regulatory",
      cards: [
        {
          image: "/water-assessment-card.avif",
          alt: "Water system assessment",
          label: "Water Assessment Firm",
          status: "Completed",
          progress: "90%",
          dates: "25 May, 2025 - 3 Jun, 2025",
        },
        {
          image: "/water-consulting-team.webp",
          alt: "Water consulting team",
          label: "",
        },
        {
          image: "/sustainable-water-flower.jpeg",
          alt: "Sustainable water innovation",
          label: "",
        },
      ],
    },
    nl: {
      title: "Leer Aqua Ware Waterbeheer Consulting kennen",
      description:
        "Wij zijn uw langetermijn groeipartners. Ontdek wie we zijn en hoe we waterbeheer bedrijven helpen hun potentieel te ontgrendelen.",
      button: "Ontdek onze diensten",
      sectors:
        "Expertise in sleutelsectoren / Gemeentelijk / Industrieel / Agrarisch / Milieu / Infrastructuur / Regelgevend",
      cards: [
        {
          image: "/water-assessment-card.avif",
          alt: "Beoordeling watersysteem",
          label: "Water Beoordelingsfirma",
          status: "Voltooid",
          progress: "90%",
          dates: "25 mei, 2025 - 3 jun, 2025",
        },
        {
          image: "/water-consulting-team.webp",
          alt: "Water consulting team",
          label: "",
        },
        {
          image: "/sustainable-water-flower.jpeg",
          alt: "Duurzame waterinnovatie",
          label: "",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-6 mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            {currentContent.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {currentContent.description}
          </motion.p>
          {/* <motion.div variants={itemVariants}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {currentContent.button}
            </Button>
          </motion.div> */}
        </motion.div>

        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {currentContent.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              {index === 0 && (
                <div className="absolute bottom-4 left-4 bg-background/80 p-4 rounded-lg space-y-2">
                  <p className="font-medium">{card.label}</p>
                  <p className="text-sm">Status: {card.status}</p>
                  <p className="text-sm">Progress: {card.progress}</p>
                  <p className="text-sm">Dates: {card.dates}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div> */}

        {/* <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground"
        >
          {currentContent.sectors}
        </motion.p> */}
      </div>
    </section>
  );
}
