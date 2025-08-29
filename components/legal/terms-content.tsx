"use client";

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";

export default function TermsContent() {
  const { language } = useLanguage();

  // ---- EN content (verbatim from PDF) ----
  const en = {
    title: "Terms of Service AquaWare",
    lastUpdated: "Last updated: August 28, 2025",
    sections: [
      {
        title: "1. Definitions",
        content: (
          <ul className="list-disc pl-6">
            <li>
              Services: all products, software, consulting, and support by
              AquaWare.
            </li>
            <li>
              User: any natural or legal entity using AquaWare’s services.
            </li>
            <li>Agreement: any arrangement between AquaWare and the user.</li>
            <li>
              Software: all software developed and/or provided by AquaWare,
              including updates and documentation.
            </li>
          </ul>
        ),
      },
      {
        title: "2. Our Services",
        content: (
          <p>
            AquaWare provides digital solutions, consulting, and software
            products in water management and data analysis. Services are
            provided as described in quotations, contracts, or license
            agreements.
          </p>
        ),
      },
      {
        title: "3. Use of Services",
        content: (
          <p>
            Users are responsible for lawful use. Access credentials must be
            kept confidential. Accurate and up-to-date information is required.
          </p>
        ),
      },
      {
        title: "4. Intellectual Property",
        content: (
          <p>
            All IP rights in AquaWare’s software, documentation, reports, and
            materials remain with AquaWare or licensors. Unauthorized use,
            reproduction, or distribution is prohibited.
          </p>
        ),
      },
      {
        title: "5. Fees and Payment",
        content: (
          <p>
            Fees and payment terms are per quotations or agreements. Invoices
            must be paid on time. Late payments may incur interest and
            collection costs.
          </p>
        ),
      },
      {
        title: "6. Limitation of Liability",
        content: (
          <p>
            AquaWare is only liable for direct damages due to proven negligence.
            Liability per incident is limited to the agreed amount or fees paid
            in the past 12 months. AquaWare is not liable for indirect or
            consequential damages, loss of profits, or business interruption.
          </p>
        ),
      },
      {
        title: "7. Maintenance and Availability",
        content: (
          <p>
            AquaWare strives to keep services available and updated. Temporary
            interruptions may occur due to maintenance or updates.
          </p>
        ),
      },
      {
        title: "8. Force Majeure",
        content: (
          <p>
            AquaWare is not liable for obligations hindered by events beyond its
            control, including outages, disasters, war, strikes, or government
            actions.
          </p>
        ),
      },
      {
        title: "9. Changes",
        content: (
          <p>
            AquaWare may amend these Terms of Service. Updates will be published
            on the website. Significant changes will be notified in advance.
          </p>
        ),
      },
      {
        title: "10. Privacy and Data Protection",
        content: (
          <p>
            Personal data is processed in accordance with the GDPR. See our
            separate Privacy Policy.
          </p>
        ),
      },
      {
        title: "11. Termination",
        content: (
          <p>
            Either party may terminate with the agreed notice period. Access
            rights end upon termination unless otherwise agreed. Provisions on
            IP, liability, and law remain in force.
          </p>
        ),
      },
      {
        title: "12. Governing Law and Jurisdiction",
        content: (
          <p>
            These terms and agreements are governed by Dutch law. Disputes shall
            be submitted exclusively to Dutch courts.
          </p>
        ),
      },
      {
        title: "13. Contact",
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
    title: "Algemene Voorwaarden AquaWare",
    lastUpdated: "Laatst bijgewerkt: 28 augustus 2025",
    sections: [
      {
        title: "1. Definities",
        content: (
          <ul className="list-disc pl-6">
            <li>
              Diensten: alle door AquaWare aangeboden producten, software,
              advies en ondersteuning.
            </li>
            <li>
              Gebruiker: de natuurlijke persoon of rechtspersoon die
              gebruikmaakt van de diensten van AquaWare.
            </li>
            <li>
              Overeenkomst: iedere afspraak tussen AquaWare en de gebruiker met
              betrekking tot de levering van diensten of producten.
            </li>
            <li>
              Software: alle door AquaWare ontwikkelde en/of geleverde
              programmatuur, inclusief updates en documentatie.
            </li>
          </ul>
        ),
      },
      {
        title: "2. Onze Diensten",
        content: (
          <p>
            AquaWare ontwikkelt en levert digitale oplossingen, adviesdiensten
            en gerelateerde softwareproducten op het gebied van waterbeheer en
            dataverwerking. Onze diensten zijn gericht op organisaties en
            overheden en worden geleverd zoals omschreven in de overeengekomen
            offertes, contracten of licentieovereenkomsten.
          </p>
        ),
      },
      {
        title: "3. Gebruik van de Diensten",
        content: (
          <p>
            U bent verantwoordelijk voor het juiste gebruik van onze diensten en
            software, in overeenstemming met de geldende wet- en regelgeving.
            Indien u een account of toegang tot software krijgt, bent u
            verantwoordelijk voor het waarborgen van de vertrouwelijkheid van
            inloggegevens en alle activiteiten die plaatsvinden onder uw
            account. U dient correcte en actuele informatie te verstrekken bij
            het gebruik van onze diensten.
          </p>
        ),
      },
      {
        title: "4. Intellectueel Eigendom",
        content: (
          <p>
            Alle rechten van intellectuele eigendom op de door AquaWare
            geleverde software, documentatie, analyses, ontwerpen, rapporten en
            andere materialen berusten bij AquaWare of haar licentiegevers.
            Zonder voorafgaande schriftelijke toestemming van AquaWare is het
            niet toegestaan deze materialen te kopiëren, verspreiden, openbaar
            te maken of anderszins te gebruiken buiten het overeengekomen doel.
          </p>
        ),
      },
      {
        title: "5. Vergoedingen en Betaling",
        content: (
          <p>
            Tenzij anders overeengekomen, zijn op onze diensten de tarieven en
            betalingsvoorwaarden van toepassing zoals vermeld in offertes of
            overeenkomsten. Facturen dienen binnen de op de factuur vermelde
            termijn te worden voldaan. Bij te late betaling behoudt AquaWare
            zich het recht voor rente en (buiten)gerechtelijke incassokosten in
            rekening te brengen.
          </p>
        ),
      },
      {
        title: "6. Beperking van Aansprakelijkheid",
        content: (
          <p>
            AquaWare is slechts aansprakelijk voor directe schade die het
            rechtstreekse gevolg is van een toerekenbare tekortkoming in de
            nakoming van de overeenkomst. De aansprakelijkheid van AquaWare is
            per gebeurtenis (waarbij een reeks van samenhangende gebeurtenissen
            als één gebeurtenis wordt beschouwd) beperkt tot het bedrag dat in
            de betreffende overeenkomst of SLA is vastgelegd, of – indien geen
            bedrag is bepaald – tot het bedrag van de door de klant betaalde
            vergoedingen in de laatste 12 maanden voorafgaand aan de
            schadeveroorzakende gebeurtenis. AquaWare is niet aansprakelijk voor
            indirecte schade, gevolgschade, gederfde winst, gemiste besparingen
            of schade door bedrijfsstagnatie.
          </p>
        ),
      },
      {
        title: "7. Onderhoud en Beschikbaarheid",
        content: (
          <p>
            AquaWare streeft ernaar haar software en diensten zorgvuldig te
            onderhouden en beschikbaar te houden. Tijdelijke onderbrekingen in
            verband met onderhoud of updates kunnen voorkomen. AquaWare zal dit
            waar mogelijk tijdig communiceren en beperken.
          </p>
        ),
      },
      {
        title: "8. Overmacht",
        content: (
          <p>
            AquaWare is niet gehouden tot het nakomen van verplichtingen indien
            dit onmogelijk wordt gemaakt door omstandigheden die buiten haar
            macht liggen (‘overmacht’), waaronder begrepen storingen in
            netwerken, internet- of telecomdiensten, natuurrampen, oorlog,
            stakingen of overheidsmaatregelen.
          </p>
        ),
      },
      {
        title: "9. Wijzigingen in de Voorwaarden",
        content: (
          <p>
            AquaWare behoudt zich het recht voor deze Algemene Voorwaarden te
            wijzigen. Wijzigingen worden via de website bekendgemaakt. Bij
            ingrijpende wijzigingen die gevolgen hebben voor bestaande
            overeenkomsten, zal AquaWare de gebruiker hiervan tijdig op de
            hoogte stellen.
          </p>
        ),
      },
      {
        title: "10. Privacy & Gegevensbescherming",
        content: (
          <p>
            De verwerking van persoonsgegevens door AquaWare vindt plaats in
            overeenstemming met de Algemene Verordening Gegevensbescherming
            (AVG). Zie hiervoor ons afzonderlijke Privacybeleid dat beschikbaar
            is op onze website.
          </p>
        ),
      },
      {
        title: "11. Beëindiging",
        content: (
          <p>
            Beide partijen kunnen de overeenkomst beëindigen met inachtneming
            van de overeengekomen opzegtermijn. Bij beëindiging vervalt het
            recht op toegang tot de diensten en software, tenzij anders
            schriftelijk overeengekomen. Bepalingen die naar hun aard bedoeld
            zijn om ook na beëindiging van kracht te blijven (zoals bepalingen
            over intellectueel eigendom, aansprakelijkheid en toepasselijk
            recht), blijven van toepassing.
          </p>
        ),
      },
      {
        title: "12. Toepasselijk Recht en Geschillen",
        content: (
          <p>
            Op deze voorwaarden en op alle overeenkomsten tussen u en AquaWare
            is Nederlands recht van toepassing. Geschillen worden bij
            uitsluiting voorgelegd aan de bevoegde rechter in Nederland.
          </p>
        ),
      },
      {
        title: "13. Contact",
        content: (
          <>
            <p>
              Voor vragen over deze Algemene Voorwaarden kunt u contact opnemen
              met:
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
