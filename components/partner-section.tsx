"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { ShieldCheck, FileText, BarChart3, MapPin } from "lucide-react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const translations = {
  en: {
    title: "Supporting government activities",
    subtitle:
      "Gain insight into water quality and translate data into practical tools",
    expertise: {
      title: "Regulation and Compliance",
      description:
        "Determine where deployment is needed with data-driven insights. We help you get businesses on the radar faster and more targeted.",
    },
    consulting: {
      title: "Policy Development",
      description:
        "By combining trends, risk zones, and sector analyses, substantiated and future-proof water quality policy is created.",
    },
    datadriven: {
      title: "Risk Assessment",
      description:
        "Identify business risks and analyze which companies are likely to discharge ZZS/KRW substances, via which route, and with what impact.",
    },
    bronopsporing: {
      title: "Source Detection",
      description:
        "Trace discharge routes back from RWZI hotspots and match them with sectors and substance groups. See which companies are potentially responsible for pollution and plan targeted actions.",
    },
    goal: {
      quote:
        "AquaWare centralizes data on indirect industrial discharges into a single data layer. This gives governments direct insight and priorities for permits, supervision, enforcement, and maintenance. Less searching, faster action, better collaboration in the chain.",
    },
    testimonials: [
      {
        quote:
          "Aqua Ware's expertise in sustainable water solutions transformed our municipal systems. Their data-driven strategies reduced waste by 30% and ensured long-term compliance with regulations.",
        author: "Henrik van der Berg, Director of Operations",
        image: "/water-engineer-headshot.png",
        alt: "Henrik van der Berg",
      },
      {
        quote:
          "Aqua Ware's expertise in sustainable water solutions transformed our municipal systems. Their data-driven strategies reduced waste by 30% and ensured long-term compliance with regulations.",
        author: "Maria Gonzalez, City Infrastructure Manager",
        image: "/testimonial 2.jpg",
        alt: "Maria Gonzalez",
      },
      {
        quote:
          "The end-to-end consulting from Aqua Ware made our irrigation project seamless. From initial assessment to implementation, their team delivered innovative results on time and within budget.",
        author: "Dr. Alex Chen, Agricultural Engineer",
        image: "/testimonial 3.jpg",
        alt: "Dr. Alex Chen",
      },
    ],
  },
  nl: {
    title: "Ondersteunen van overheidsactiviteiten",
    subtitle:
      "Maak waterkwaliteit inzichtelijk en vertaal data naar praktische handvatten",
    expertise: {
      title: "VTH",
      description:
        "Bepaal waar inzet nodig is met datagedreven inzichten. We helpen om sneller én gerichter bedrijven op de radar te krijgen.",
    },
    consulting: {
      title: "Beleidsontwikkeling",
      description:
        "Door trends, risicozones en sectoranalyses te combineren, ontstaat onderbouwd en toekomstbestendig waterkwaliteitsbeleid.",
    },
    datadriven: {
      title: "Risicobeoordeling",
      description:
        "Identificeer bedrijfsrisico’s en analyseer welke bedrijven vermoedelijk ZZS/KRW-stoffen lozen, via welke route en met welke impact.",
    },
    bronopsporing: {
      title: "Bronopsporing",
      description:
        "Volg lozingsroutes terug vanaf RWZI-hotspots en match met sectoren en stofgroepen. Zie welke bedrijven potentieel verantwoordelijk zijn voor vervuiling en plan gerichte acties.",
    },
    goal: {
      quote:
        "AquaWare centraliseert data over indirecte industriële lozingen tot één gedeelde datalaag. Daarmee krijgen overheden direct inzicht en prioriteiten voor vergunningen, toezicht en handhaving. Minder zoeken, sneller handelen, betere samenwerking in de keten.",
    },
    testimonials: [
      {
        quote:
          "Samenwerken met Aqua Ware was een game-changer voor onze waterinfrastructuur strategie. Hun team bood niet alleen advies — ze werden een verlengstuk van ons leiderschap. Hun inzichten, professionaliteit en op maat gemaakte aanpak hielpen ons nieuwe efficiëntie te ontgrendelen en onze operaties te stroomlijnen.",
        author: "Henrik van der Berg, Directeur Operaties",
        image: "/water-engineer-headshot.png",
        alt: "Henrik van der Berg",
      },
      {
        quote:
          "Aqua Ware's expertise in duurzame wateroplossingen transformeerde onze gemeentelijke systemen. Hun data-gedreven strategieën verminderden afval met 30% en zorgden voor langdurige naleving van regelgeving.",
        author: "Maria Gonzalez, Manager Stedelijke Infrastructuur",
        image: "/placeholder-headshot-2.png",
        alt: "Maria Gonzalez",
      },
      {
        quote:
          "De end-to-end consulting van Aqua Ware maakte ons irrigatieproject naadloos. Van initiële beoordeling tot implementatie, hun team leverde innovatieve resultaten op tijd en binnen budget.",
        author: "Dr. Alex Chen, Landbouwingenieur",
        image: "/placeholder-headshot-3.png",
        alt: "Dr. Alex Chen",
      },
    ],
  },
};

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function PartnerSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const testimonials = t.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(intervalRef.current);
    }
  }, [testimonials.length]);

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-8 mb-16"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl  font-semibold text-foreground">
                {t.expertise.title}
              </h3>
            </div>
            <p className="text-muted-foreground  leading-relaxed">
              {t.expertise.description}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl  font-semibold text-foreground">
                {t.consulting.title}
              </h3>
            </div>
            <p className="text-muted-foreground  leading-relaxed">
              {t.consulting.description}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {t.datadriven.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.datadriven.description}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {t.bronopsporing.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.bronopsporing.description}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 relative bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 lg:p-12 overflow-hidden"
        >
          <div className="flex-shrink-0">
            <Image
              src="/Circle.png"
              alt="AquaWare logo"
              width={120}
              height={120}
              className="rounded-full  object-contain"
            />
          </div>
          <div className="flex-1 z-10">
            <blockquote className="text-center lg:text-start text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
              "{t.goal.quote}"
            </blockquote>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex min-h-max relative bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0  bg-cover bg-center opacity-10 dark:opacity-5"></div>
          <div className=" z-10">
            {testimonials.length === 1 ? (
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[0].image}
                    alt={testimonials[0].alt}
                    width={80}
                    height={80}
                    className="rounded-full object-contain  border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4 italic">
                    "{testimonials[0].quote}"
                  </blockquote>
                  <cite className="text-gray-600 dark:text-gray-400 font-medium not-italic">
                    {testimonials[0].author}
                  </cite>
                </div>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].alt}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-white dark:border-gray-700 object-contain  shadow-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4 italic">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      <cite className="text-gray-600 dark:text-gray-400 font-medium not-italic">
                        {testimonials[currentIndex].author}
                      </cite>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={handlePrev}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-900/50 hover:bg-accent/50 dark:hover:bg-accent/50 text-gray-800 dark:text-white p-2 rounded-full shadow-md transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-900/50 hover:bg-accent/50 dark:hover:bg-accent/50 text-gray-800 dark:text-white p-2 rounded-full shadow-md transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
