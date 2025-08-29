"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

interface KnowledgeFilterProps {
  activeFilter: "all" | "blog" | "case-study";
  onFilterChange: (filter: "all" | "blog" | "case-study") => void;
}

export default function KnowledgeFilter({
  activeFilter,
  onFilterChange,
}: KnowledgeFilterProps) {
  const { t } = useLanguage();

  return (
    <section className="py-8 px-4 border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => onFilterChange("all")}
            className="rounded-full"
          >
            {t("knowledge.filter.all")}
          </Button>
          <Button
            variant={activeFilter === "blog" ? "default" : "outline"}
            onClick={() => onFilterChange("blog")}
            className="rounded-full"
          >
            {t("knowledge.filter.blogs")}
          </Button>
          <Button
            variant={activeFilter === "case-study" ? "default" : "outline"}
            onClick={() => onFilterChange("case-study")}
            className="rounded-full"
          >
            {t("knowledge.filter.caseStudies")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
