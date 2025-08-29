"use client";

import { useState } from "react";
import Header from "@/components/header";
import KnowledgeHeader from "@/components/knowledge/knowledge-header";
import KnowledgeFilter from "@/components/knowledge/knowledge-filter";
import KnowledgeGrid from "@/components/knowledge/knowledge-grid";
import Footer from "@/components/footer";
import { knowledgeData } from "@/lib/knowledge-data";

export default function KnowledgePage() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "blog" | "case-study"
  >("all");

  const filteredKnowledge = knowledgeData.filter(
    (item) => activeFilter === "all" || item.type === activeFilter
  );

  return (
    <div className="min-h-screen bg-background">
      <KnowledgeHeader />
      {/* <KnowledgeFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      /> */}
      <KnowledgeGrid items={filteredKnowledge} />
    </div>
  );
}
