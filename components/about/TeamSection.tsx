// about/TeamSection.tsx
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

export default function TeamSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Meet the talent behind the transformation",
      members: [
        {
          name: "Alicia Keys",
          role: "Managing Director",
          image: "/team-member-1.jpg",
        },
        {
          name: "Nina Kapoor",
          role: "Financial Consultant",
          image: "/team-member-2.jpg",
        },
        {
          name: "Graham Smith",
          role: "Senior Marketing Consultant",
          image: "/team-member-3.jpg",
        },
        {
          name: "Liam Cheng",
          role: "Lead Business Analyst",
          image: "/team-member-4.jpg",
        },
      ],
    },
    nl: {
      title: "Ontmoet het talent achter de transformatie",
      members: [
        {
          name: "John Carter",
          role: "Managing Director",
          image: "/team-member-1.png",
        },
        {
          name: "Nina Kapoor",
          role: "Financieel Consultant",
          image: "/team-member-2.png",
        },
        {
          name: "Alicia Morgan",
          role: "Senior Marketing Consultant",
          image: "/team-member-3.png",
        },
        {
          name: "Liam Cheng",
          role: "Lead Business Analyst",
          image: "/team-member-4.png",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          {currentContent.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-6"
        >
          {currentContent.members.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-muted rounded-2xl overflow-hidden text-center"
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="font-medium text-white">{member.name}</h4>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
