"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    tag: {
      en: "Infrastructure & IoT",
      nl: "Infrastructuur & IoT",
    },
    title: {
      en: "Smart water monitoring system",
      nl: "Slim waterbewakingssysteem",
    },
    company: "Amsterdam Water Authority",
    challenge: {
      en: "Managing water quality across 200+ monitoring points with outdated manual processes.",
      nl: "Waterkwaliteit beheren op 200+ meetpunten met verouderde handmatige processen.",
    },
    solution: {
      en: "Implemented IoT sensors and real-time dashboard for automated monitoring and alerts.",
      nl: "IoT-sensoren en real-time dashboard geïmplementeerd voor geautomatiseerde monitoring en waarschuwingen.",
    },
    metrics: [
      {
        value: "85%",
        label: {
          en: "Faster issue detection",
          nl: "Snellere probleemdetectie",
        },
      },
      {
        value: "200+",
        label: {
          en: "Monitoring points connected",
          nl: "Meetpunten verbonden",
        },
      },
    ],
    image: "/water-monitoring-facility.png",
  },
  {
    id: 2,
    tag: {
      en: "Digital transformation",
      nl: "Digitale transformatie",
    },
    title: {
      en: "Flood prediction platform",
      nl: "Overstromingsvoorspellingsplatform",
    },
    company: "Dutch Water Management",
    challenge: {
      en: "Predicting flood risks with limited historical data and manual forecasting methods.",
      nl: "Overstromingsrisico's voorspellen met beperkte historische data en handmatige voorspellingsmethoden.",
    },
    solution: {
      en: "Developed AI-powered platform using weather data and machine learning for accurate predictions.",
      nl: "AI-aangedreven platform ontwikkeld met weerdata en machine learning voor nauwkeurige voorspellingen.",
    },
    metrics: [
      {
        value: "92%",
        label: {
          en: "Prediction accuracy",
          nl: "Voorspellingsnauwkeurigheid",
        },
      },
      {
        value: "48hrs",
        label: {
          en: "Early warning time",
          nl: "Vroege waarschuwingstijd",
        },
      },
    ],
    image: "/flood-prediction-dashboard.png",
  },
  {
    id: 3,
    tag: {
      en: "Process optimization",
      nl: "Procesoptimalisatie",
    },
    title: {
      en: "Water treatment automation",
      nl: "Waterzuiveringsautomatisering",
    },
    company: "Rotterdam Water Works",
    challenge: {
      en: "Optimizing chemical dosing and treatment processes to reduce costs and improve efficiency.",
      nl: "Chemische dosering en behandelingsprocessen optimaliseren om kosten te verlagen en efficiëntie te verbeteren.",
    },
    solution: {
      en: "Automated control systems with real-time optimization algorithms for precise treatment.",
      nl: "Geautomatiseerde controlesystemen met real-time optimalisatie-algoritmen voor precieze behandeling.",
    },
    metrics: [
      {
        value: "30%",
        label: {
          en: "Cost reduction achieved",
          nl: "Kostenverlaging behaald",
        },
      },
      {
        value: "99.8%",
        label: {
          en: "Treatment efficiency",
          nl: "Behandelingsefficiëntie",
        },
      },
    ],
    image: "/water-treatment-plant.png",
  },
]

export default function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const currentCase = caseStudies[currentIndex]

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-20  bg-background">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Outer card details */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {currentCase.tag[language]}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">{currentCase.title[language]}</h2>
              </div>

              {/* Inner card details */}
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                {/* Left side - Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={currentCase.image || "/placeholder.svg"}
                      alt={currentCase.title[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="bg-muted/50 rounded-2xl p-4 lg:p-8 relative">
                  <div className="absolute top-2  lg:top-6 lg:right-6">
                    <Button variant="ghost" size="sm" className=" text-muted-foreground border hover:text-foreground">
                      {language === "en" ? "View detail" : "Bekijk details"}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mt-10 lg:mt-0 mb-6">{currentCase.company}</h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                        {language === "en" ? "Challenge:" : "Uitdaging:"}
                      </h4>
                      <p className="text-foreground leading-relaxed">{currentCase.challenge[language]}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                        {language === "en" ? "Solution:" : "Oplossing:"}
                      </h4>
                      <p className="text-foreground leading-relaxed">{currentCase.solution[language]}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid lg:grid-cols-2 gap-4">
                    {currentCase.metrics.map((metric, index) => (
                      <div key={index} className="bg-background border rounded-xl p-4">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label[language]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom navigation */}
          <div className="flex lg:flex-row  flex-col gap-4 justify-between lg:items-center mt-12">
            <Button variant="outline" className="bg-primary  dark:border-primary text-primary-foreground dark:text-primary hover:bg-primary/90">
              {language === "en" ? "View case studies" : "Bekijk casestudies"}
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevCase}
                className="h-10 w-10 rounded-full border-2 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextCase}
                className="h-10 w-10 rounded-full border-2 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
