"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from "lucide-react";
import { knowledgeData } from "@/lib/knowledge-data";

/**
 * Simple cross-browser copy helper
 */
function copyToClipboard(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

/* ---------- COVER IMAGE HELPERS (same behavior as grid) ---------- */
const PLACEHOLDER = "/smart-water-grid-amsterdam-detailed.png";

function normalizeImage(src?: string) {
  if (!src) return PLACEHOLDER;
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src.replace(/^\.?\//, "")}`;
}

function extractFirstImgSrcFromHtml(html?: string): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

export default function KnowledgeDetailPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const id = params.id as string;

  const content = knowledgeData.find((item) => item.id === id);

  const relatedContent = knowledgeData
    .filter((item) => item.id !== id)
    .slice(0, 2);

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Content not found
          </h1>
          <Link href="/knowledge">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("knowledge.backToKnowledge")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Pick the same cover image as the grid:
  // 1) first <img> in content (current lang, then EN)
  // 2) explicit item.image
  // 3) placeholder
  const getCoverForItem = (item: (typeof knowledgeData)[number]) => {
    const htmlPreferred = item.content?.[language as "en" | "nl"];
    const htmlFallback = item.content?.en;
    const first =
      extractFirstImgSrcFromHtml(htmlPreferred) ||
      extractFirstImgSrcFromHtml(htmlFallback) ||
      item.image ||
      PLACEHOLDER;
    return normalizeImage(first);
  };

  return (
    <div className="min-h-screen bg-background pt-12">
      {/* Back Navigation (kept hidden by default; uncomment if needed) */}
      <div className="py-6 px-4">{/* ... */}</div>

      {/* Excerpt → Title → Meta (EXACT order before any content) */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Type + Category */}
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant={content.type === "blog" ? "secondary" : "default"}
                className="bg-background border-border text-foreground"
              >
                {t(
                  content.type === "blog"
                    ? "knowledge.blog.tag"
                    : "knowledge.caseStudy.tag"
                )}
              </Badge>
              <span className="text-primary font-medium">
                {content.category[language]}
              </span>
            </div>

            {/* EXCERPT FIRST (from data, not duplicated) */}
            {content.excerpt[language] && (
              <blockquote className="text-lg md:text-xl text-foreground border-l-4 border-primary/40 pl-4 mb-6">
                {content.excerpt[language]}
              </blockquote>
            )}

            {/* TITLE SECOND */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {content.title[language]}
            </h1>

            {/* Meta row */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(content.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {content.readTime}
              </div>
              <div >
                <button className="flex items-center justify-between gap-1 bg-foreground px-2 pr-3 py-2 rounded-lg cursor-pointer text-slate-300 dark:text-slate-700">
                  <span>
                  <Share2 className="w-4 h-4  hover:cursor-pointer" /></span>
                  <span>{t("knowledge.shareArticle")}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4
              prose-p:text-muted-foreground prose-p:mb-6
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-ul:mb-6
              prose-ol:text-muted-foreground prose-ol:mb-6
              prose-li:text-muted-foreground
              prose-blockquote:border-l-4 prose-blockquote:my-8
              prose-blockquote:border-primary/40 prose-blockquote:text-foreground
              prose-img:rounded-xl
              prose-figcaption:text-muted-foreground prose-figcaption:mt-2
              prose-figure:my-8
            "
          >
            <div
              dangerouslySetInnerHTML={{ __html: content.content[language] }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Content */}
      {relatedContent.length > 0 && (
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {t("knowledge.relatedContent")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedContent.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Link href={`/knowledge/${item.id}`}>
                      <Card className="group h-full !py-0 overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                        <div className="relative overflow-hidden">
                          <img
                            src={getCoverForItem(item)}
                            alt={item.title[language]}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant={
                                item.type === "blog" ? "secondary" : "default"
                              }
                              className="bg-background/90 text-foreground border-border/50"
                            >
                              {t(
                                item.type === "blog"
                                  ? "knowledge.blog.tag"
                                  : "knowledge.caseStudy.tag"
                              )}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title[language]}
                          </h3>
                          <div className="flex items-center text-primary font-medium mt-4 group-hover:gap-2 transition-all">
                            {t("knowledge.readMore")}
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
