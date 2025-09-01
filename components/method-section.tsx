"use client";

import { useMemo, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

type LangKey = "en" | "nl";

/** Use the SAME color for leader lines and subtitle text */
const LABEL_COLOR = "#94a3b8";

const i18n: Record<
  LangKey,
  {
    title: string;
    description: string;
    additionalDescription: string;
    benefits: string[];
    button: string;
    steps: string[];
    bands: { title: string; subtitle: string }[];
  }
> = {
  en: {
    title: "From overview to action plan",
    description:
      "Using our funnel-based approach, we first identify all companies in your area. Then, we filter to those that are truly relevant to water quality—based on their business profile, discharge risks, and other critical characteristics. This results in a data-driven prioritization overview, allowing you to immediately identify the greatest risks and opportunities.",
    additionalDescription:
      "The result: complex data translated into clear insights, greater control over water quality and more efficient use of time and resources.",
    benefits: [],
    button: "Request Demo",
    steps: ["Step 1", "Step 2", "Step 3"],
    bands: [
      {
        title: "All companies in view",
        subtitle: "All companies with linked data",
      },
      {
        title: "Water-relevant companies",
        subtitle: "Selection based on company profile",
      },
      { title: "Prioritization", subtitle: "List based on risk profile" },
    ],
  },
  nl: {
    title: "Van totaalbeeld naar gerichte actie",
    description:
      "Met onze trechteraanpak brengen we eerst álle bedrijven in uw werkgebied in beeld. Vervolgens filteren we naar de bedrijven die echt relevant zijn voor de waterkwaliteit – op basis van hun bedrijfsprofiel, lozingsrisico’s en andere kritische kenmerken. Dit leidt tot een datagedreven prioriteringsoverzicht, waarmee u direct ziet waar de grootste risico’s en kansen liggen.",
    additionalDescription:
      "Het resultaat: complexe data vertaald naar heldere inzichten, meer grip op waterkwaliteit en een efficiëntere inzet van tijd en middelen.",
    benefits: [],
    button: "Plan een demo",
    steps: ["Stap 1", "Stap 2", "Stap 3"],
    bands: [
      {
        title: "Alle bedrijven in beeld",
        subtitle: "Alle bedrijven met gekoppelde data",
      },
      {
        title: "Waterrelevante bedrijven",
        subtitle: "Selectie volgens bedrijfsprofiel",
      },
      { title: "Prioritering", subtitle: "Lijst o.b.v. risicoprofiel" },
    ],
  },
};

const STEPS = [1, 2, 3] as const;

/* ----------------------------- Mobile (equal bars) ----------------------------- */
function MobileFunnel({
  activeStep,
  bands,
}: {
  activeStep: 1 | 2 | 3;
  bands: { title: string; subtitle: string }[];
}) {
  return (
    <div className="block md:hidden">
      <div className="space-y-4">
        {bands.map((b, idx) => {
          const visible = (activeStep >= idx + 1) as 1 | 2 | 3;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0.25, y: visible ? 0 : 20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 shadow">
                <div className="text-white font-semibold text-[18px] sm:text-[20px] leading-snug">
                  {b.title}
                </div>
                {/* Use the SAME color as the leader line */}
                <div
                  className="text-[15px] sm:text-[16px] leading-snug mt-1"
                  style={{ color: LABEL_COLOR }}
                >
                  {b.subtitle}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------- SVG text helpers (Safari-safe) -------------------------- */
function wrap(text: string, maxChars: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length <= maxChars) cur = next;
    else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function SvgMultiline({
  x,
  y,
  lines,
  size,
  fill,
  weight = 600,
  anchor = "middle",
  lineHeight = 1.25,
}: {
  x: number;
  y: number;
  lines: string[];
  size: number;
  fill: string;
  weight?: number;
  anchor?: "start" | "middle" | "end";
  lineHeight?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={fill}
      textAnchor={anchor}
      dominantBaseline="start"
      fontWeight={weight}
      style={{ fontFamily: "inherit" }}
    >
      {lines.map((ln, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : `${lineHeight}em`}>
          {ln}
        </tspan>
      ))}
    </text>
  );
}

/* ----------------------- Desktop Triangle (aligned edges) ----------------------- */
function DesktopTriangle({
  activeStep,
  bands,
  onStepClick,
}: {
  activeStep: 1 | 2 | 3;
  bands: { title: string; subtitle: string }[];
  onStepClick: (s: 1 | 2 | 3) => void;
}) {
  // Geometry for a single overall inverted triangle; bands are slices of it.
  const H = 500;
  const Wtop = 800;
  const cx = 500;
  const yTop = 50;
  const gap = 18;
  const sliceH = (H - 2 * gap) / 3;

  const xL = (y: number) => {
    const t = (y - yTop) / H;
    return cx - (Wtop * (1 - t)) / 2;
  };
  const xR = (y: number) => {
    const t = (y - yTop) / H;
    return cx + (Wtop * (1 - t)) / 2;
  };

  const bandsGeom = useMemo(() => {
    const y1Top = yTop;
    const y1Bot = y1Top + sliceH;

    const y2Top = y1Bot + gap;
    const y2Bot = y2Top + sliceH;

    const y3Top = y2Bot + gap;
    const y3Bot = yTop + H;

    const makePoly = (yT: number, yB: number) =>
      [
        [xL(yT), yT],
        [xR(yT), yT],
        [xR(yB), yB],
        [xL(yB), yB],
      ] as [number, number][];

    return [
      {
        idx: 1 as const,
        yT: y1Top,
        yB: y1Bot,
        poly: makePoly(y1Top, y1Bot),
        cy: (y1Top + y1Bot) / 2,
      },
      {
        idx: 2 as const,
        yT: y2Top,
        yB: y2Bot,
        poly: makePoly(y2Top, y2Bot),
        cy: (y2Top + y2Bot) / 2,
      },
      {
        idx: 3 as const,
        yT: y3Top,
        yB: y3Bot,
        poly: [
          [xL(y3Top), y3Top],
          [xR(y3Top), y3Top],
          [cx, y3Bot],
        ] as [number, number][],
        cy: (y3Top + (y3Top + (y3Bot - y3Top) * 0.7)) / 2,
      },
    ];
  }, [H, Wtop, cx, yTop, gap, sliceH]);

  // Tight viewBox around the triangle ONLY, align to right
  const rightMost = Math.max(
    ...bandsGeom.map((g) => Math.max(...g.poly.map((p) => p[0])))
  );
  const triLeft = cx - Wtop / 2;
  const vbPad = 8;
  const vbMinX = triLeft - vbPad;
  const vbMinY = yTop - 30;
  const vbWidth = rightMost - triLeft + vbPad * 2;
  const vbHeight = H + 60;

  const fills = ["#3b82f6", "#1f64d6", "#1749a6"];
  const titleWrap = [28, 26, 22];
  const titleSize = [22, 22, 20];

  return (
    <div className="hidden md:block">
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative h-[360px] lg:h-[400px] xl:h-[420px] w-full ml-auto overflow-hidden"
      >
        <svg
          viewBox={`${vbMinX} ${vbMinY} ${vbWidth} ${vbHeight}`}
          preserveAspectRatio="xMaxYMid meet"
          className="absolute inset-0 block w-full h-full"
        >
          {/* Slices (clickable) */}
          {bandsGeom.map((g, i) => {
            const visible = activeStep >= g.idx;
            const pts = g.poly.map((p) => `${p[0]},${p[1]}`).join(" ");
            return (
              <polygon
                key={`slice-${g.idx}`}
                points={pts}
                fill={fills[i]}
                opacity={visible ? 1 : 0.25}
                className="cursor-pointer"
                onClick={() => onStepClick(g.idx)}
                role="button"
                aria-label={`Go to step ${g.idx}`}
              />
            );
          })}

          {/* Titles inside slices */}
          {bandsGeom.map((g, i) => {
            const visible = activeStep >= g.idx;
            const cxMid =
              (Math.min(...g.poly.map((p) => p[0])) +
                Math.max(...g.poly.map((p) => p[0]))) /
              2;
            const tLines = wrap(bands[g.idx - 1].title, titleWrap[i]);
            return (
              <motion.g
                key={`title-${g.idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <SvgMultiline
                  x={cxMid}
                  y={g.cy}
                  lines={tLines}
                  size={titleSize[i]}
                  fill="#ffffff"
                  weight={700}
                  anchor="middle"
                />
              </motion.g>
            );
          })}

          {/* (leader lines + subtitles remain commented out) */}
        </svg>
      </motion.div>
    </div>
  );
}

/* --------------------------------- Page ---------------------------------- */
export default function MethodSection() {
  const [activeStep, setActiveStep] = useState<(typeof STEPS)[number]>(1);
  const { language } = useLanguage();
  const t = i18n[language as LangKey];

  const handleScrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact-form");
    if (!target) return;
    const OFFSET = 100;
    const y = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
    window.history.pushState(null, "", "#contact-form");
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-transparent overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-14 sm:gap-12 lg:gap-16 items-start w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 sm:space-y-7 flex flex-col items-center sm:items-start text-center sm:text-start"
          >
            <h2 className="text-center sm:text-start text-4xl sm:text-[36px] lg:text-5xl font-bold text-foreground leading-tight">
              {t.title}
            </h2>

            <p className="text-center sm:text-start text-xl text-muted-foreground leading-relaxed">
              {t.description}
            </p>

            {/* <p className="text-center sm:text-start text-xl text-muted-foreground leading-relaxed">
              {t.additionalDescription}
            </p> */}
            <Link href="#contact-form" onClick={handleScrollToContact}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              >
                {t.button}
              </Button>
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 sm:space-y-6 lg:space-y-0 xl:space-y-0 flex flex-col"
          >
            {/* Step tabs — scrollable on very small screens without resizing page */}
            <div
              className="flex justify-center w-full max-w-full overflow-x-auto"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="inline-flex bg-gray-900/70 backdrop-blur-sm rounded-4xl p-1.5 sm:p-2 whitespace-nowrap">
                {STEPS.map((id) => (
                  <button
                    key={id}
                    onClick={() => setActiveStep(id)}
                    className={`shrink-0 px-4 sm:px-6 lg:px-8 py-2 hover:cursor-pointer rounded-4xl font-semibold transition-all duration-300 relative overflow-hidden ${
                      activeStep === id
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {activeStep === id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-4xl"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{t.steps[id - 1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile-only (equal bars) */}
            <MobileFunnel activeStep={activeStep} bands={t.bands} />

            {/* Desktop/Tablet triangle (right-aligned) */}
            <DesktopTriangle
              activeStep={activeStep}
              bands={t.bands}
              onStepClick={(s) => setActiveStep(s)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
