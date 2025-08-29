"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function KnowledgeHeader() {
  const { t } = useLanguage();

  return (
    <section className="relative pb-10 pt-30 px-4 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t("knowledge.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("knowledge.subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
