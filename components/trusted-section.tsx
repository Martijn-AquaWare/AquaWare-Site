"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";

export default function TrustedSection() {
  const { t } = useLanguage();

  const companies = [
    { name: "Deltares", logo: "/water-research-institute-logo.png" },
    { name: "Rijkswaterstaat", logo: "/dutch-water-authority-logo.png" },
    { name: "Royal HaskoningDHV", logo: "/engineering-consultancy-logo.png" },
    { name: "Arcadis", logo: "/placeholder-qc0j3.png" },
    { name: "Witteveen+Bos", logo: "/water-consultancy-logo.png" },
    { name: "Sweco", logo: "/water-infrastructure-logo.png" },
  ];

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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-lg">{t("trusted.header")}</p>
        </motion.div> */}

        {/* <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow mx-3 min-w-[200px] flex-shrink-0"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start  gap-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-wide">
              {t("trusted.titleFirst")}
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
              {t("trusted.titleSecond")}
            </h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-muted-foreground text-center lg:text-start text-xl leading-relaxed">
              {t("trusted.description")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-12 items-stretch"
        >
          <motion.div variants={itemVariants}>
            <div className="rounded-2xl overflow-hidden h-full">
              <Image
                src="/Lozingen afvalstoffen bedreigen waterkwaliteit - Drinkwaterplatform.jpeg"
                alt="Water management professionals in meeting"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4  lg:justify-between h-full"
          >
            <div className="space-y-0">
              {[
                t("trusted.feature1"),
                t("trusted.feature2"),
                t("trusted.feature3"),
                t("trusted.feature4"),
                t("trusted.feature5"),
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="border-t border-b border-border py-6 first:border-t-2 last:border-b-2"
                >
                  <div className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-xl font-medium text-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* <Button
              variant="outline"
              className="flex bg-blue-600 text-white border-white  hover:bg-white hover:text-blue-600 hover:border-blue-600  transition-colors "
            >
              {t("trusted.cta")}
            </Button> */}
            <Link href="/knowledge">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700  text-white px-7 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              {t("trusted.cta")}
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
