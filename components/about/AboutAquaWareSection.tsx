// about/AboutAquaWareSection.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

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

export default function AboutAquaWareSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About AquaWare",
      subtitle:
        "With AquaWare we want to build together a future in which clean water is the standard.",
      whatWeDo: {
        title: "What we do",
        description:
          "We develop digital solutions that translate complex water data into actionable insights. With smart analyses, interactive dashboards, and clear visualizations, we make information directly applicable in practice.",
      },
      ourGoal: {
        title: "Our goal",
        description:
          "Enabling governments to act data-driven and with insight. This allows them to formulate policies, set priorities, and implement measures that lead to clean and healthy water – today and in the future.",
      },
    },
    nl: {
      title: "Over AquaWare",
      subtitle:
        "Met AquaWare willen we samen bouwen aan een toekomst waarin schoon water de standaard is.",
      whatWeDo: {
        title: "Wat we doen",
        description:
          "Wij ontwikkelen digitale oplossingen die complexe waterdata vertalen naar bruikbare inzichten. Met slimme analyses, interactieve dashboards en duidelijke visualisaties maken we informatie direct toepasbaar in de praktijk.",
      },
      ourGoal: {
        title: "Ons doel",
        description:
          "Overheden in staat stellen om datagedreven en met inzicht te handelen. Zo kunnen zij beleid maken, prioriteiten stellen en maatregelen nemen die leiden tot schoon en gezond water – vandaag én in de toekomst.",
      },
    },
  };

  const currentContent = content[language];

  return (
    <>
      <section className="relative pb-2  pt-32 px-4 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-4 mb-12 text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl !opacity-100 md:text-5xl font-bold text-foreground"
            >
              {currentContent.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg mb-6 !opacity-100 text-muted-foreground max-w-4xl mx-auto"
            >
              {currentContent.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className="lg:pb-16 lg:pt-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              variants={cardVariants}
              className="bg-muted p-6 rounded-2xl space-y-4"
            >
              <h3 className="text-xl font-bold text-primary">
                ✿ {currentContent.whatWeDo.title}
              </h3>
              <p className="text-muted-foreground">
                {currentContent.whatWeDo.description}
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-muted p-6 rounded-2xl space-y-4"
            >
              <h3 className="text-xl font-bold text-primary">
                ✿ {currentContent.ourGoal.title}
              </h3>
              <p className="text-muted-foreground">
                {currentContent.ourGoal.description}
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl overflow-hidden h-40 md:h-64 lg:h-80"
          >
            <Image
              src="/image (4).jpeg"
              alt="About AquaWare image"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
