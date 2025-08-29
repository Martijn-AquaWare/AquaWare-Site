"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function ContactHeader() {
  const { t } = useLanguage();

  return (
    <section className="relative py-10 pt-30 px-4 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
        >
          {t("contact.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {t("contact.subtitle")}
        </motion.p>
      </div>
    </section>
  );
}
