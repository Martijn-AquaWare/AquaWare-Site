"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "nl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.knowledge": "Knowledge",
    "nav.contact": "Contact",
    "nav.requestConsultation": "Request Consultation",

    // Hero Section
    "hero.title": "Control of indirect industrial discharges",
    "hero.subtitle":
      "Gain immediate insight into potential sources of SVHCs and WFD priority substances and act proactively towards WFD objectives",
    "hero.cta.primary": "Schedule a demo",
    "hero.cta.secondary": "View Case Studies",
    "hero.features.provincies": "Provinces",
    "hero.features.waterschappen": "Water boards",
    "hero.features.Omgevingsdiensten": "Environmental Services",
    "hero.features.Gemeenten": "Municipalities",
    "hero.features.Rijkswaterstaat": "Directorate-General-Water Management",
    "hero.stats.uptime": "System Uptime",
    "hero.stats.monitoring": "Monitoring",

    // Trusted Section
    "trusted.header": "Trusted by fast-moving water management teams",
    "trusted.titleFirst": "Water quality",
    "trusted.titleSecond": "under pressure",
    "trusted.description":
      "Indirect discharges are difficult to monitor due to fragmented data and outdated files. AquaWare helps governments with a single overview and clear priorities, so that supervision and permitting are more effective with the same capacity.",
    "trusted.feature1":
      "PFAS, heavy metals, and other SVHCs enter the water system through indirect discharges",
    "trusted.feature2": "Many indirect industrial discharges are blind spots",
    "trusted.feature3": "Discharge permits are outdated or incomplete",
    "trusted.feature4":
      "Insufficient capacity and poor chain collaboration make supervision inefficient.",
    "trusted.feature5":
      "Lack of a data-driven foundation and fragmented data hamper prioritization and decision-making.",
    "trusted.cta": "Read More",

    // Knowledge Page
    "knowledge.title": "Knowledge Base",
    "knowledge.subtitle": "Blogs and insights for a cleaner water system",
    "knowledge.filter.all": "All Knowledge",
    "knowledge.filter.blogs": "Blogs",
    "knowledge.filter.caseStudies": "Case Studies",
    "knowledge.readMore": "Read More",
    "knowledge.backToKnowledge": "Back to Knowledge",
    "knowledge.relatedContent": "Related Content",
    "knowledge.shareArticle": "Share Article",

    // Knowledge Content
    "knowledge.blog.tag": "Blog",
    "knowledge.caseStudy.tag": "Case Study",
    "knowledge.featured": "Featured",

    // Contact Page
    "contact.title": "Connect with us",
    "contact.subtitle":
      "Have questions about our solutions? We're here to help.",
    "contact.email.title": "Email",
    "contact.email.address": "info@aquaware.nl",
    "contact.phone.title": "Phone",
    "contact.phone.number": "+31-6-24178896",
    "contact.address.title": "Office address",
    "contact.address.line2": "Rotterdam, Netherlands ",
    "contact.address.line3": "Antwerp, Belgium",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email address",
    "contact.form.phone": "Your phone number",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit",
    "contact.form.success":
      "Thank you for your message. We'll get back to you soon!",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last updated",
    "privacy.intro":
      "At AquaWare, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.",
    "privacy.dataCollection.title": "Information We Collect",
    "privacy.dataCollection.content":
      "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, company information, and technical data related to water management systems.",
    "privacy.dataUse.title": "How We Use Your Information",
    "privacy.dataUse.content":
      "We use your information to provide and improve our services, communicate with you, ensure system security, and comply with legal obligations. We may also use aggregated data for research and development purposes.",
    "privacy.dataSharing.title": "Information Sharing",
    "privacy.dataSharing.content":
      "We do not sell or rent your personal information. We may share information with trusted service providers, when required by law, or with your explicit consent.",
    "privacy.dataSecurity.title": "Data Security",
    "privacy.dataSecurity.content":
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    "privacy.yourRights.title": "Your Rights",
    "privacy.yourRights.content":
      "Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. Contact us to exercise these rights.",
    "privacy.contact.title": "Contact Us",
    "privacy.contact.content":
      "If you have questions about this Privacy Policy, please contact us at info@aquaware.nl or +31-6-24178896.",

    // Terms of Service
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last updated",
    "terms.intro":
      "These Terms of Service govern your use of AquaWare's services and products. By using our services, you agree to these terms.",
    "terms.services.title": "Our Services",
    "terms.services.content":
      "AquaWare provides water management solutions, consulting services, and related software products to help organizations optimize their water infrastructure and operations.",
    "terms.userResponsibilities.title": "User Responsibilities",
    "terms.userResponsibilities.content":
      "You are responsible for maintaining the confidentiality of your account, providing accurate information, and using our services in compliance with applicable laws and regulations.",
    "terms.intellectualProperty.title": "Intellectual Property",
    "terms.intellectualProperty.content":
      "All content, software, and materials provided by AquaWare are protected by intellectual property rights. You may not copy, modify, or distribute our proprietary materials without permission.",
    "terms.limitation.title": "Limitation of Liability",
    "terms.limitation.content":
      "AquaWare's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of our services.",
    "terms.termination.title": "Termination",
    "terms.termination.content":
      "Either party may terminate the service agreement with appropriate notice. Upon termination, your access to our services will cease, and certain provisions will survive termination.",
    "terms.governingLaw.title": "Governing Law",
    "terms.governingLaw.content":
      "These terms are governed by Dutch law. Any disputes will be resolved in the competent courts of the Netherlands.",
    "terms.contact.title": "Contact Information",
    "terms.contact.content":
      "For questions about these Terms of Service, contact us at info@aquaware.nl or +31-6-24178896",
  },
  nl: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Producten",
    "nav.about": "Over ons",
    "nav.knowledge": "Kennisbank",
    "nav.contact": "Contact",
    "nav.requestConsultation": "Consultatie Aanvragen",

    // Hero Section
    "hero.title": "Grip op indirecte industriële lozingen",
    "hero.subtitle":
      "Krijg direct zicht op potentiële bronnen van ZZS en KRW prioritaire stoffen en handel proactief richting de KRW-doelen",
    "hero.cta.primary": "Plan een demo",
    "hero.cta.secondary": "Bekijk Casestudies",
    "hero.features.provincies": "Provinces",
    "hero.features.waterschappen": "Waterschappen",
    "hero.features.Omgevingsdiensten": "Omgevingsdiensten",
    "hero.features.Gemeenten": "Gemeenten",
    "hero.features.Rijkswaterstaat": "Rijkswaterstaat",
    "hero.stats.uptime": "Systeembeschikbaarheid",
    "hero.stats.monitoring": "Monitoring",

    // Trusted Section
    "trusted.header": "Vertrouwd door snelgroeiende waterbeheer teams",
    "trusted.titleFirst": "Waterkwaliteit",
    "trusted.titleSecond": "onder druk",
    "trusted.description":
      "Indirecte lozingen zijn lastig zichtbaar door versnipperde data en verouderde dossiers. AquaWare helpt overheden met één overzicht en duidelijke prioriteiten, zodat toezicht en vergunningen met dezelfde capaciteit meer effect hebben. ",
    "trusted.feature1":
      "PFAS, zware metalen, en andere ZZS komen via indirecte lozingen in het watersysteem",
    "trusted.feature2":
      "Veel indirecte industriële lozingen zijn blinde vlekken",
    "trusted.feature3": "Lozingsvergunningen zijn verouderd of incompleet",
    "trusted.feature4":
      "Te weinig capaciteit en gebrekkige ketensamenwerking maken toezicht inefficiënt",
    "trusted.feature5":
      "Geen datagedreven basis en versnipperde data bemoeilijken prioritering en besluitvorming",
    "trusted.cta": "Lees meer",

    // Knowledge Page
    "knowledge.title": "Kennisbank",
    "knowledge.subtitle": "Blogs en inzichten voor een schoner watersysteem ",
    "knowledge.filter.all": "Alle Kennis",
    "knowledge.filter.blogs": "Blogs",
    "knowledge.filter.caseStudies": "Casestudies",
    "knowledge.readMore": "Lees Meer",
    "knowledge.backToKnowledge": "Terug naar Kennis",
    "knowledge.relatedContent": "Gerelateerde Inhoud",
    "knowledge.shareArticle": "Artikel Delen",

    // Knowledge Content
    "knowledge.blog.tag": "Blog",
    "knowledge.caseStudy.tag": "Casestudie",
    "knowledge.featured": "Uitgelicht",

    // Contact Page
    "contact.title": "Neem contact met ons op",
    "contact.subtitle":
      "Heeft u vragen over onze oplossingen? Wij helpen u graag!",
    "contact.email.title": "E-mail",
    "contact.email.address": "info@aquaware.nl",
    "contact.phone.title": "Telefoon",
    "contact.phone.number": "+31-6-24178896",
    "contact.address.title": "Adres",
    "contact.address.line2": "Rotterdam, Nederland ",
    "contact.address.line3": "Antwerpen, België",
    "contact.form.name": "Uw naam",
    "contact.form.email": "Uw e-mailadres",
    "contact.form.phone": "Uw telefoonnummer",
    "contact.form.message": "Bericht",
    "contact.form.submit": "Versturen",
    "contact.form.success":
      "Bedankt voor uw bericht. We nemen binnenkort contact met u op!",

    // Privacy Policy
    "privacy.title": "Privacybeleid",
    "privacy.lastUpdated": "Laatst bijgewerkt",
    "privacy.intro":
      "Bij AquaWare zijn we toegewijd aan het beschermen van uw privacy en het waarborgen van de veiligheid van uw persoonlijke informatie. Dit Privacybeleid legt uit hoe we uw gegevens verzamelen, gebruiken en beschermen.",
    "privacy.dataCollection.title": "Informatie die We Verzamelen",
    "privacy.dataCollection.content":
      "We verzamelen informatie die u direct aan ons verstrekt, zoals wanneer u een account aanmaakt, contact met ons opneemt, of onze diensten gebruikt. Dit kan uw naam, e-mailadres, bedrijfsinformatie en technische gegevens gerelateerd aan waterbeheer systemen omvatten.",
    "privacy.dataUse.title": "Hoe We Uw Informatie Gebruiken",
    "privacy.dataUse.content":
      "We gebruiken uw informatie om onze diensten te leveren en te verbeteren, met u te communiceren, systeemveiligheid te waarborgen, en te voldoen aan wettelijke verplichtingen. We kunnen ook geaggregeerde gegevens gebruiken voor onderzoek en ontwikkeling.",
    "privacy.dataSharing.title": "Informatie Delen",
    "privacy.dataSharing.content":
      "We verkopen of verhuren uw persoonlijke informatie niet. We kunnen informatie delen met vertrouwde dienstverleners, wanneer vereist door de wet, of met uw expliciete toestemming.",
    "privacy.dataSecurity.title": "Gegevensbeveiliging",
    "privacy.dataSecurity.content":
      "We implementeren passende technische en organisatorische maatregelen om uw persoonlijke informatie te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.",
    "privacy.yourRights.title": "Uw Rechten",
    "privacy.yourRights.content":
      "Onder de AVG heeft u het recht op toegang, rectificatie, wissing, beperking van verwerking, gegevensportabiliteit, en bezwaar tegen verwerking van uw persoonlijke gegevens. Neem contact met ons op om deze rechten uit te oefenen.",
    "privacy.contact.title": "Contact Opnemen",
    "privacy.contact.content":
      "Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via info@aquaware.nl of +31-6-24178896.",

    // Terms of Service
    "terms.title": "Algemene Voorwaarden",
    "terms.lastUpdated": "Laatst bijgewerkt",
    "terms.intro":
      "Deze Algemene Voorwaarden regelen uw gebruik van AquaWare's diensten en producten. Door onze diensten te gebruiken, gaat u akkoord met deze voorwaarden.",
    "terms.services.title": "Onze Diensten",
    "terms.services.content":
      "AquaWare biedt waterbeheer oplossingen, adviesdiensten en gerelateerde softwareproducten om organisaties te helpen hun waterinfrastructuur en operaties te optimaliseren.",
    "terms.userResponsibilities.title": "Gebruikersverantwoordelijkheden",
    "terms.userResponsibilities.content":
      "U bent verantwoordelijk voor het handhaven van de vertrouwelijkheid van uw account, het verstrekken van accurate informatie, en het gebruik van onze diensten in overeenstemming met toepasselijke wetten en regelgeving.",
    "terms.intellectualProperty.title": "Intellectueel Eigendom",
    "terms.intellectualProperty.content":
      "Alle inhoud, software en materialen verstrekt door AquaWare zijn beschermd door intellectuele eigendomsrechten. U mag onze eigendomsmaterialen niet kopiëren, wijzigen of distribueren zonder toestemming.",
    "terms.limitation.title": "Beperking van Aansprakelijkheid",
    "terms.limitation.content":
      "AquaWare's aansprakelijkheid is beperkt tot de maximale mate toegestaan door de wet. We zijn niet aansprakelijk voor indirecte, incidentele of gevolgschade voortvloeiend uit uw gebruik van onze diensten.",
    "terms.termination.title": "Beëindiging",
    "terms.termination.content":
      "Beide partijen kunnen de dienstovereenkomst beëindigen met passende kennisgeving. Bij beëindiging zal uw toegang tot onze diensten ophouden, en bepaalde bepalingen zullen de beëindiging overleven.",
    "terms.governingLaw.title": "Toepasselijk Recht",
    "terms.governingLaw.content":
      "Deze voorwaarden worden beheerst door Nederlands recht. Eventuele geschillen worden opgelost in de bevoegde rechtbanken van Nederland.",
    "terms.contact.title": "Contactinformatie",
    "terms.contact.content":
      "Voor vragen over deze Algemene Voorwaarden, neem contact met ons op via info@aquaware.nl of +31-6-24178896.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "nl")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
