"use client";

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";

export default function PrivacyContent() {
  const { language } = useLanguage();

  // ---- EN content (verbatim from PDF) ----
  const en = {
    title: "Privacy Policy AquaWare",
    lastUpdated: "Last updated: August 28, 2025",
    intro: null as string | null, // EN version has no separate intro paragraph beyond sections
    sections: [
      {
        title: "1. Information We Collect",
        content: (
          <>
            <p>
              We only collect personal data that you provide directly, for
              example when contacting us via form or email, subscribing to our
              newsletter, or visiting our website (technical data or analytics
              cookies). This may include name, email, phone, and company
              details. Our hosting provider (Vercel) may process anonymous
              technical data to keep the site operational.
            </p>
          </>
        ),
      },
      {
        title: "2. How We Use Your Data",
        content: (
          <p>
            Your data is used solely to respond to requests, communicate about
            services, send newsletters (if subscribed), and improve our site and
            services. We never use it for other purposes without your consent.
          </p>
        ),
      },
      {
        title: "3. Newsletter",
        content: (
          <p>
            If you subscribe, your email will only be used for newsletters. You
            can unsubscribe anytime via the link in emails or by contacting us.
          </p>
        ),
      },
      {
        title: "4. Cookies and Analytics",
        content: (
          <p>
            No tracking cookies are used by default. If analytics are added, we
            will clearly inform users and request consent if required.
          </p>
        ),
      },
      {
        title: "5. Data Sharing",
        content: (
          <p>
            We do not sell or rent personal data. Data may only be shared with
            Vercel for hosting, a newsletter provider (if used), legal
            authorities, or with explicit consent.
          </p>
        ),
      },
      {
        title: "6. Data Security",
        content: (
          <p>
            We apply technical and organizational measures to protect your data,
            including SSL/TLS encryption and strict access control.
          </p>
        ),
      },
      {
        title: "7. Retention Periods",
        content: (
          <p>
            Contact details: as long as necessary to process requests or as
            legally required. Newsletter data: until unsubscribed, then deleted.
            Cookies/analytics: per provider policy.
          </p>
        ),
      },
      {
        title: "8. Your Rights",
        content: (
          <p>
            Under GDPR you have rights of access, rectification, erasure,
            restriction, portability, and objection. Contact us to exercise
            these rights.
          </p>
        ),
      },
      {
        title: "9. Changes",
        content: (
          <p>
            We may update this Privacy Policy, e.g., if we add newsletters or
            analytics. The most recent version is always available on our
            website.
          </p>
        ),
      },
      {
        title: "10. Contact",
        content: (
          <>
            <p>AquaWare</p>
            <p>Email: info@aquaware.nl</p>
            <p>Phone: +31 (0)6 24178896</p>
          </>
        ),
      },
    ],
  };

  // ---- NL content (verbatim from PDF) ----
  const nl = {
    title: "Privacybeleid AquaWare",
    lastUpdated: null as string | null, // NL PDF doesn’t specify a 'Laatst bijgewerkt' line in the header text provided
    intro:
      "Inleiding\nBij AquaWare vinden wij het belangrijk dat uw persoonsgegevens zorgvuldig en veilig worden behandeld. In dit Privacybeleid leggen wij uit welke gegevens wij verwerken, waarom wij dat doen en welke rechten u daarbij heeft. Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).",
    sections: [
      {
        title: "1. Welke gegevens verzamelen wij?",
        content: (
          <>
            <p>
              Wij verzamelen persoonsgegevens die u zelf aan ons verstrekt,
              bijvoorbeeld wanneer u het contactformulier invult of ons
              rechtstreeks een e-mail stuurt, zich in de toekomst aanmeldt voor
              onze nieuwsbrief, of onze website bezoekt (technische gegevens of,
              indien actief, analytische cookies). Dit kan onder meer uw naam,
              e-mailadres, telefoonnummer en bedrijfsgegevens zijn. Daarnaast
              kan onze hostingpartij (Vercel) anonieme technische gegevens
              verwerken (zoals foutmeldingen of prestatiegegevens) om de website
              beschikbaar en veilig te houden.
            </p>
          </>
        ),
      },
      {
        title: "2. Hoe gebruiken wij uw gegevens?",
        content: (
          <p>
            Wij gebruiken de verzamelde gegevens uitsluitend voor de volgende
            doeleinden: het beantwoorden van uw vraag of verzoek, het
            onderhouden van contact over onze diensten, het versturen van een
            nieuwsbrief (alleen indien u zich heeft ingeschreven), en het
            verbeteren van onze website en dienstverlening (bij gebruik van
            analytics). Uw gegevens worden nooit voor andere doeleinden gebruikt
            zonder uw toestemming.
          </p>
        ),
      },
      {
        title: "3. Nieuwsbrief",
        content: (
          <p>
            Indien wij een nieuwsbrief aanbieden, gebruiken wij uitsluitend het
            e-mailadres dat u zelf aan ons verstrekt. U ontvangt deze
            nieuwsbrief alleen als u zich hier actief voor inschrijft. U kunt
            zich op elk moment afmelden via de afmeldlink onderaan de
            nieuwsbrief of door contact met ons op te nemen.
          </p>
        ),
      },
      {
        title: "4. Cookies en analytics",
        content: (
          <p>
            Onze website plaatst standaard geen trackingcookies. Indien wij in
            de toekomst gebruikmaken van analytische cookies (bijvoorbeeld
            Google Analytics of een privacyvriendelijk alternatief), zullen wij
            dit duidelijk melden en indien nodig om toestemming vragen via een
            cookiemelding.
          </p>
        ),
      },
      {
        title: "5. Met wie delen wij gegevens?",
        content: (
          <p>
            Uw gegevens worden niet verkocht of verhuurd. Ze worden alleen
            gedeeld met onze hostingprovider (Vercel), voor zover nodig om de
            website technisch te laten functioneren, met een
            nieuwsbriefdienstverlener (indien in gebruik), uitsluitend voor het
            versturen van de nieuwsbrief, wanneer wij wettelijk verplicht zijn
            gegevens te verstrekken, of alleen met uw expliciete toestemming in
            andere gevallen.
          </p>
        ),
      },
      {
        title: "6. Hoe beveiligen wij uw gegevens?",
        content: (
          <p>
            Wij nemen passende maatregelen om uw gegevens te beschermen,
            waaronder beveiligde verbindingen (SSL/TLS), sterke toegangscontrole
            en versleuteling waar nodig.
          </p>
        ),
      },
      {
        title: "7. Bewaartermijnen",
        content: (
          <p>
            - Contactgegevens die u via het formulier of e-mail verstrekt:
            zolang als nodig is voor de afhandeling van uw verzoek, of zolang
            wettelijk verplicht. - Nieuwsbriefgegevens: zolang u bent
            ingeschreven. Na afmelding verwijderen wij uw gegevens direct. -
            Cookies/analytics: conform de bewaartermijnen van de betreffende
            dienstverlener.
          </p>
        ),
      },
      {
        title: "8. Uw rechten",
        content: (
          <p>
            Onder de AVG heeft u de volgende rechten: inzage in de gegevens die
            wij van u verwerken, correctie of verwijdering van uw gegevens,
            beperking van verwerking, overdraagbaarheid van gegevens
            (dataportabiliteit), en bezwaar tegen verwerking. U kunt uw rechten
            uitoefenen door contact met ons op te nemen via onderstaande
            gegevens.
          </p>
        ),
      },
      {
        title: "9. Wijzigingen in dit beleid",
        content: (
          <p>
            Wij kunnen dit Privacybeleid van tijd tot tijd aanpassen,
            bijvoorbeeld wanneer wij een nieuwsbrief of analytics toevoegen. De
            meest actuele versie is altijd beschikbaar op onze website.
          </p>
        ),
      },
      {
        title: "10. Contact",
        content: (
          <>
            <p>
              Heeft u vragen of wilt u gebruik maken van uw rechten? Neem dan
              contact met ons op:
            </p>
            <p>AquaWare</p>
            <p>E-mail: info@aquaware.nl</p>
            <p>Telefoon: +31 (0)6 24178896</p>
          </>
        ),
      },
    ],
  };

  const content = language === "nl" ? nl : en;

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h1>
          {content.lastUpdated && (
            <p className="text-muted-foreground text-lg">
              {content.lastUpdated}
            </p>
          )}
        </motion.div>

        {(content.intro || language === "nl") && content.intro && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert mb-12 whitespace-pre-line"
          >
            <p className="text-muted-foreground leading-relaxed">
              {content.intro}
            </p>
          </motion.div>
        )}

        <div className="space-y-12">
          {content.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
