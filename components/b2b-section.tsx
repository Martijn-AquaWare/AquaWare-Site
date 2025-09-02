"use client";

import {
  ArrowRight,
  Wallet,
  Users,
  Target,
  CheckCircle2,
  Loader2,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useCallback, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

export default function B2BSection() {
  const { language } = useLanguage();

  const content = useMemo(
    () => ({
      en: {
        header: {
          title: "Get a Grip on Industrial Discharges",
          subtitle:
            "The task is large and complex. With AquaWare, you bundle data on companies, routes, and permits into one view, so teams can work more targeted towards KRW goals.",
        },
        newsletter: {
          title: "Stay in the loop",
          subtitle: "Get product updates and water-quality insights—no spam.",
          placeholder: "you@example.com",
          cta: "Subscribe",
          success:
            "Thanks! You have successfully subscribed to the newsletter.",
          error: "Something went wrong. Please try again.",
          privacy: "We’ll only use your email to send updates.",
        },
        cards: [
          {
            id: 1,
            title: "No extra FTEs needed, but save",
            description:
              "Empower your team without hiring. The data-driven right hand that takes work off your hands.",
            icon: Wallet,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
          },
          {
            id: 2,
            title: "Collaborate in the chain",
            description:
              "Province, water board and OD work with one dashboard, share insights and policy. Local and national collaboration is strengthened.",
            icon: Users,
            iconBg: "bg-teal-100 dark:bg-teal-900/30",
            iconColor: "text-teal-600 dark:text-teal-400",
          },
          {
            id: 3,
            title: "From reactive to proactive",
            description:
              "Proactively get to work to track down sources, revise permits and update if necessary, and make policy.",
            icon: Target,
            iconBg: "bg-green-100 dark:bg-green-900/30",
            iconColor: "text-green-600 dark:text-green-400",
          },
        ],
      },
      nl: {
        header: {
          title: "Krijg Grip op Industriële Lozingen",
          subtitle:
            "De opgave is groot en complex. AquaWare bundelt jouw data over bedrijven, routes, en vergunningen tot één beeld, zodat overheden gerichter kunnen werken aan KRW-doelen.",
        },
        newsletter: {
          title: "Blijf op de hoogte",
          subtitle:
            "Ontvang productupdates en inzichten over waterkwaliteit—geen spam.",
          placeholder: "jij@voorbeeld.nl",
          cta: "Aanmelden",
          success: "Bedankt! U bent succesvol geabonneerd op de nieuwsbrief.",
          error: "Er ging iets mis. Probeer opnieuw.",
          privacy: "We gebruiken je e-mail alleen voor updates.",
        },
        cards: [
          {
            id: 1,
            title: "Geen extra FTE's nodig, maar bespaar",
            description:
              "Versterk je team zonder aan te nemen. De datagedreven rechterhand die werk uit handen neemt",
            icon: Wallet,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
          },
          {
            id: 2,
            title: "Samenwerken in de keten",
            description:
              "Provincie, waterschap en OD werken met één dashboard, delen inzichten en beleid. Lokale en landelijke samenwerking wordt versterkt.",
            icon: Users,
            iconBg: "bg-teal-100 dark:bg-teal-900/30",
            iconColor: "text-teal-600 dark:text-teal-400",
          },
          {
            id: 3,
            title: "Van reactief naar proactief",
            description:
              "Proactief aan het werk gaan om bronnen op te sporen, vergunningen te herzien en zo nodig te updaten, en beleid te maken.",
            icon: Target,
            iconBg: "bg-green-100 dark:bg-green-900/30",
            iconColor: "text-green-600 dark:text-green-400",
          },
        ],
      },
    }),
    []
  );

  const t = content[language as "en" | "nl"]; // type narrow for TS

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with in-hero Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative mb-8 rounded-3xl overflow-hidden p-12 text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/Kopie van image (2).jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-800/80" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t.header.title}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {t.header.subtitle}
          </p>

          {/* Newsletter glass card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-8 max-w-2xl"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-5 sm:p-6 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.5)]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_45%,transparent)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-white/10" />
              </div>
              <div className="relative">
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  {t.newsletter.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {t.newsletter.subtitle}
                </p>
                <NewsletterForm
                  placeholder={t.newsletter.placeholder}
                  cta={t.newsletter.cta}
                  successText={t.newsletter.success}
                  errorText={t.newsletter.error}
                  privacyText={t.newsletter.privacy}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {t.cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group bg-card hover:bg-accent/50 border border-border rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${card.iconBg} rounded-xl`}>
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function NewsletterForm({
  placeholder,
  cta,
  successText,
  errorText,
  privacyText,
}: {
  placeholder: string;
  cta: string;
  successText: string;
  errorText: string;
  privacyText: string;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const isValidEmail = useCallback((v: string) => {
    // RFC 5322-ish simple check; rely on browser too
    return /.+@.+\..+/.test(v);
  }, []);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isValidEmail(email)) {
        setStatus("error");
        setMessage(errorText);
        return;
      }

      try {
        setLoading(true);
        setStatus("idle");
        setMessage("");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateId = process.env
          .NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS env vars are missing");
        }

        // Align these keys with your EmailJS template variables (e.g. user_email). This uses the newsletter-specific template ID.
        await emailjs.send(
          serviceId,
          templateId,
          {
            user_email: email,
            context: "newsletter", // optional extra variable for your template
            timestamp: new Date().toISOString(),
          },
          { publicKey }
        );

        setStatus("success");
        setMessage(successText);
        setEmail("");
      } catch (err) {
        console.error(err);
        setStatus("error");
        setMessage(errorText);
      } finally {
        setLoading(false);
      }
    },
    [email, errorText, successText, isValidEmail]
  );

  return (
    <form onSubmit={onSubmit} className="mt-4">
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
          <input
            type="email"
            inputMode="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            aria-label="Email address"
            aria-invalid={status === "error" && !isValidEmail(email)}
            className="w-full rounded-xl border border-white/20 bg-white/15 pl-10 pr-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-4 focus:ring-white/20 focus:border-white/40 transition"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ y: -1 }}
          disabled={loading}
          type="submit"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white text-blue-900 font-semibold px-5 py-3 disabled:opacity-70 disabled:cursor-not-allowed shadow hover:shadow-lg transition"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>…</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <span>{cta}</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </motion.button>
      </div>

      <p className="mt-2 text-[13px] text-white/70">{privacyText}</p>

      {/* Status */}
      <AnimatePresence mode="wait">
        {status !== "idle" && (
          <motion.div
            key={status}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-3 flex items-center gap-2 text-sm"
          >
            {status === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-white" />
                <span className="text-white">{message}</span>
              </>
            ) : (
              <>
                <span className="inline-block h-2 w-2 rounded-full bg-red-300" />
                <span className="text-red-100">{message}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
