"use client";

import { ArrowRight, Wallet, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function B2BSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      header: {
        title: "Get a Grip on Industrial Discharges",
        subtitle:
          "The task is large and complex. With AquaWare, you bundle data on companies, routes, and permits into one view, so teams can work more targeted towards KRW goals.",
      },
      cards: [
        {
          id: 1,
          title: "No extra FTEs needed, but save",
          description:
            "Empower your team without hiring. The data-driven right hand that takes work off your hands.",
          icon: Wallet,
          iconBg: "bg-blue-100 dark:bg-blue-900/30",
          iconColor: "text-blue-600 dark:text-blue-400",
        },
        {
          id: 2,
          title: "Collaborate in the chain",
          description:
            "Province, water board and OD work with one dashboard, share insights and policy. Local and national collaboration is strengthened.",
          icon: Users,
          iconBg: "bg-teal-100 dark:bg-teal-900/30",
          iconColor: "text-teal-600 dark:text-teal-400",
        },
        {
          id: 3,
          title: "From reactive to proactive",
          description:
            "Proactively get to work to track down sources, revise permits and update if necessary, and make policy.",
          icon: Target,
          iconBg: "bg-green-100 dark:bg-green-900/30",
          iconColor: "text-green-600 dark:text-green-400",
        },
      ],
    },
    nl: {
      header: {
        title: "Krijg Grip op Industriële Lozingen",
        subtitle:
          "De opgave is groot en complex. AquaWare bundelt jouw data over bedrijven, routes, en vergunningen tot één beeld, zodat overheden gerichter kunnen werken aan KRW-doelen.",
      },
      cards: [
        {
          id: 1,
          title: "Geen extra FTE's nodig, maar bespaar",
          description:
            "Versterk je team zonder aan te nemen. De datagedreven rechterhand die werk uit handen neemt",
          icon: Wallet,
          iconBg: "bg-blue-100 dark:bg-blue-900/30",
          iconColor: "text-blue-600 dark:text-blue-400",
        },
        {
          id: 2,
          title: "Samenwerken in de keten",
          description:
            "Provincie, waterschap en OD werken met één dashboard, delen inzichten en beleid. Lokale en landelijke samenwerking wordt versterkt.",
          icon: Users,
          iconBg: "bg-teal-100 dark:bg-teal-900/30",
          iconColor: "text-teal-600 dark:text-teal-400",
        },
        {
          id: 3,
          title: "Van reactief naar proactief",
          description:
            "Proactief aan het werk gaan om bronnen op te sporen, vergunningen te herzien en zo nodig te updaten, en beleid te maken.",
          icon: Target,
          iconBg: "bg-green-100 dark:bg-green-900/30",
          iconColor: "text-green-600 dark:text-green-400",
        },
      ],
    },
  };

  const currentContent = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
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
            {currentContent.header.title}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {currentContent.header.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {currentContent.cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group bg-card hover:bg-accent/50 border border-border rounded-2xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${card.iconBg} rounded-xl`}>
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
