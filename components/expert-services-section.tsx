"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Database,
  BarChart3,
  List,
  FileText,
  Map,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ExpertServicesSection() {
  const { language } = useLanguage();
  const [expandedService, setExpandedService] = useState<number>(0);

  const content = {
    en: {
      header: "One central platform with valuable functionalities",
      subHeader: "Complete insight. Less worries. Free up capacity.",
      services: [
        {
          title: "Centralized Database",
          description:
            "A single, central database for every business in your area, including KvK profile, location, discharge routes, expected substances, risk scores, and administrative information.",
          tags: [
            "Chamber of Commerce profile",
            "Location",
            "WWTP (Wastewater Treatment Plant)",
            "Discharge route",
            "ZZS and WFD substances",
            "Risk score",
            "Permit data",
            "Competent authority",
          ],
          image: "/Centrale Database.png",
        },
        {
          title: "Interactive, User-Friendly Dashboards",
          description:
            "Filter in seconds by business data, discharge points, sectors, substances, and pumping stations. See key figures and trends in clear graphs, tables, and GIS maps. Everything is searchable and exportable.",
          tags: [
            "Data filtering",
            "GIS maps",
            "Graphs & tables",
            "Data visualization",
          ],
          image: "/Dashboard AquaWare industriële lozingen.png",
        },
        {
          title: "Priority list of companies",
          description:
            "All businesses matching your filters appear in a clear list. The table shows key data, including expected substances. You can sort and prioritize (e.g., by risk score) and export the list to CSV/Excel.",
          tags: [
            "Overview lists",
            "Key data",
            "Expected substances",
            "Risk analysis",
            "Sorting & prioritizing",
          ],
          image: "/prioriteitenlijst.png",
        },
        {
          title: "Business Reports",
          description:
            "A single file per company with all available information. Ideal for putting a specific business under the microscope. Exportable to PDF and CSV for consultation and decision-making.",
          tags: ["Company file", "Detailed information"],
          image: "/Bedrijfsoverzicht.png",
        },
        {
          title: "Heatmaps",
          description:
            "Visualize the distribution and intensity of sectors, substance groups, and substances with heatmaps. This makes hotspots in an area quickly visible for targeted supervision.",
          tags: [
            "Hotspots",
            "Spread & intensity",
            "Sectors & substances",
            "Targeted supervision",
          ],
          image: "/heatmaps.png",
        },
      ],
    },
    nl: {
      header: "Één centraal platform met waardevolle functionaliteiten",
      subHeader: "Volledig inzicht. Minder zorgen. Vrijspelen capaciteit.",
      services: [
        {
          title: "Centrale database",
          description:
            "Eén centrale database met per bedrijf in het werkgebied: KvK-profiel, locatie, lozingsroute, verwachte stoffen, risicoscore en bestuurlijke informatie.",
          tags: [
            "KvK-profiel",
            "Locatie",
            "RWZI",
            "Lozingsroute",
            "ZZS en KRW-stoffen",
            "Risicoscore",
            "Vergunningsdata",
            "Bevoegd gezag",
          ],
          image: "/Centrale Database.png",
        },
        {
          title: "Interactieve, gebruiksvriendelijke dashboards",
          description:
            "Filter in seconden op bedrijfsgegevens, lozingspunten, sectoren, stoffen en RWZI’s. Zie direct kerncijfers en trends in heldere grafieken, tabellen en GIS-kaarten. Alles is doorzoekbaar en exporteerbaar.",
          tags: [
            "Datafiltering",
            "GIS-kaarten",
            "Grafieken & tabellen",
            "Datavisualisatie",
          ],
          image: "/Dashboard AquaWare industriële lozingen.png",
        },
        {
          title: "Prioriteitenlijst bedrijven",
          description:
            "Alle bedrijven die aan de filters voldoen, verschijnen in een overzichtelijke lijst. De tabel toont kerngegevens, inclusief verwachte stoffen. U kunt sorteren, prioriteren en het overzicht direct exporteren naar CSV/Excel.",
          tags: [
            "Overzichtslijsten",
            "Kerngegevens",
            "Verwachte stoffen",
            "Risicoanalyse ",
            "Sorteren & prioriteren",
          ],
          image: "/prioriteitenlijst.png",
        },
        {
          title: "Bedrijfsrapporten",
          description:
            "Eén dossier per bedrijf met alle beschikbare informatie. Ideaal om een bedrijf gericht onder de loep te nemen. Exporteerbaar naar PDF en CSV voor overleg en besluitvorming.",
          tags: ["Bedrijfsdossier", "Detailinformatie "],
          image: "/Bedrijfsoverzicht.png",
        },
        {
          title: "Heatmaps",
          description:
            "Visualiseer de spreiding en intensiteit van sectoren, stofgroepen en stoffen met heatmaps. Zo worden hotspots per gebied snel zichtbaar voor gericht toezicht.",
          tags: [
            "Hotspots",
            "Spreiding & intensiteit",
            "Sectoren & stoffen",
            "Gericht toezicht",
          ],
          image: "/heatmaps.png",
        },
      ],
    },
  };

  const currentContent = content[language];
  const serviceIcons = [Database, BarChart3, List, FileText, Map];

  const displayImage =
    currentContent.services[expandedService]?.image ||
    currentContent.services[0].image;

  const toggleService = (index: number) => setExpandedService(index);

  return (
    <section className="py-20 bg-background" id="expert">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 text-center justify-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {currentContent.header}
            </h2>
            <h3 className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {currentContent.subHeader}
            </h3>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-3">
              {currentContent.services.map((service, index) => {
                const Icon = serviceIcons[index];
                const isExpanded = expandedService === index;

                return (
                  <motion.div
                    key={index}
                    variants={serviceVariants}
                    className={`cursor-pointer transition-all duration-300 ${
                      isExpanded
                        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                        : "bg-card border-border hover:bg-accent/50"
                    } border rounded-xl`}
                    onClick={() => toggleService(index)}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg ${
                              isExpanded
                                ? "bg-blue-200 dark:bg-blue-800/50"
                                : "bg-blue-100 dark:bg-blue-900/30"
                            }`}
                          >
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-foreground font-medium">
                            {service.title}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isExpanded
                              ? "rotate-90 text-blue-600"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800"
                        >
                          <p className="text-muted-foreground mb-4">
                            {service.description}
                          </p>

                          {/* IMAGE INSIDE ACCORDION for < lg */}
                          <div className="lg:hidden">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-xl px-2 py-6">
                              <motion.div
                                key={`mobile-${index}`}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25 }}
                                className="relative aspect-[4/3] rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-contain object-center"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  loading="lazy"
                                />
                              </motion.div>
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right Column - Dashboard (SHOW ONLY ON lg+) */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-2xl px-2 py-6 w-full flex items-center justify-center">
                <div className="rounded-xl overflow-hidden w-full max-w-3xl min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                  <motion.div
                    key={expandedService}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] w-full"
                  >
                    <Image
                      src={displayImage}
                      alt={
                        currentContent.services[expandedService]?.title ||
                        currentContent.services[0].title
                      }
                      fill
                      className="object-contain object-center"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority={expandedService === 0}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
