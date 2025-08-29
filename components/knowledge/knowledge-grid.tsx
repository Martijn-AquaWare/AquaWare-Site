"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface KnowledgeItem {
  id: string;
  type: "blog" | "case-study";
  title: { en: string; nl: string };
  excerpt: { en: string; nl: string };
  category: { en: string; nl: string };
  date: string;
  readTime: string;
  image: string; // can be "/foo.jpg" or "https://..."
  featured?: boolean;
  // new fields already present in your knowledge-data.ts:
  content: { en: string; nl: string };
  heroCaption?: { en: string; nl: string };
  metrics?: Array<{ value: string; label: { en: string; nl: string } }>;
  lead: { en: string; nl: string };
  quote: { en: string; nl: string };
  secondImage?: string;
  secondImageAlt?: { en: string; nl: string };
  secondImageCaption?: { en: string; nl: string };
  tipTitle: { en: string; nl: string };
  tipContent: { en: string; nl: string };
}

interface KnowledgeGridProps {
  items: KnowledgeItem[];
}

const PLACEHOLDER = "/smart-water-grid-amsterdam-detailed.png";

function normalizeImage(src?: string) {
  if (!src) return PLACEHOLDER;
  if (src.startsWith("http") || src.startsWith("/")) return src;
  // Convert relative ("images/cover.jpg") to root-relative
  return `/${src.replace(/^\.?\//, "")}`;
}

// Very small HTML img src extractor for our controlled content
function extractFirstImgSrcFromHtml(html?: string): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

export default function KnowledgeGrid({ items }: KnowledgeGridProps) {
  const { t, language } = useLanguage();

  // Build a map: id -> first content image (from localized content, fallback to EN)
  const firstContentImg: Record<string, string | null> = useMemo(() => {
    const out: Record<string, string | null> = {};
    for (const it of items) {
      // Try current language, then fallback to English
      const htmlPreferred = it.content?.[language as "en" | "nl"];
      const htmlFallback = it.content?.en;
      const src =
        extractFirstImgSrcFromHtml(htmlPreferred) ??
        extractFirstImgSrcFromHtml(htmlFallback) ??
        null;
      out[it.id] = src;
    }
    return out;
  }, [items, language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Decide the image for a card with graceful fallbacks:
  // 1) first <img> in content (localized, fallback EN)
  // 2) item.image if provided
  // 3) placeholder
  const getCardImage = (item: KnowledgeItem) =>
    normalizeImage(firstContentImg[item.id] || item.image || PLACEHOLDER);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`${
                item.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <Card className="group h-full !py-0 overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <Link href={`/knowledge/${item.id}`}>
                  <div className="relative overflow-hidden">
                    <div
                      className={`relative ${item.featured ? "h-64" : "h-48"}`}
                    >
                      <Image
                        src={getCardImage(item)}
                        alt={item.title[language]}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index < 3}
                      />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge
                        variant={
                          item.type === "case-study" ? "default" : "secondary"
                        }
                        className="bg-background/90 text-foreground border-border/50"
                      >
                        {t(
                          item.type === "case-study"
                            ? "knowledge.caseStudy.tag"
                            : "knowledge.blog.tag"
                        )}
                      </Badge>
                      {item.featured && (
                        <Badge className="bg-primary text-primary-foreground">
                          {t("knowledge.featured")}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="text-primary font-medium">
                        {item.category[language]}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(item.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.excerpt[language]}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      {t("knowledge.readMore")}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
