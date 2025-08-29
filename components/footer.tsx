"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      company: {
        name: "AquaWare BV",
        description:
          "With AquaWare we want to build a future together in which clean water is the standard",
      },
      links: {
        services: {
          title: "Functionalities",
          items: [
            "Central database",
            "Interactive, user-friendly dashboards",
            "Company priority list",
            "Company reports",
            "Heatmaps",
          ],
        },
        company: {
          title: "Explore",
          items: ["About ", "Knowledge", "Contact"],
          link: ["/about", "/knowledge", "/contact"],
        },
        support: {
          title: "Support",
          items: ["Contact", "Documentation", "FAQ", "Technical Support"],
        },
      },
      contact: {
        companyName: "AquaWare BV",
        title: "Contact Info",
        email: "info@aquaware.nl",
        phone: "+31-6-24178896",
        addressLine1: "Rotterdam, Netherlands",
        addressLine2: "Antwerp, Belgium",
      },
      bottom: {
        copyright: "© 2025 AquaWare. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    nl: {
      company: {
        name: "AquaWare BV",
        description:
          "Met AquaWare willen we samen bouwen aan een toekomst waarin schoon water de standaard is",
      },
      links: {
        services: {
          title: "Functionaliteiten",
          items: [
            "Centrale database",
            "Interactieve, gebruiksvriendelijke dashboards",
            "Prioriteitenlijst bedrijven",
            "Bedrijfsrapporten",
            "Heatmaps",
          ],
        },
        company: {
          title: "Ontdekken",
          items: ["Over ons", "Kennisbank", "Contact"],
          link: ["/about", "/knowledge", "/contact"],
        },
        support: {
          title: "Ondersteuning",
          items: ["Contact", "Documentatie", "FAQ", "Technische Ondersteuning"],
        },
      },
      contact: {
        companyName: "AquaWare BV",
        title: "Contactgegevens",
        email: "info@aquaware.nl",
        phone: "+31-6-24178896",
        addressLine1: "Rotterdam, Nederland",
        addressLine2: "Antwerpen, België",
      },
      bottom: {
        copyright: "© 2025 AquaWare. Alle rechten voorbehouden.",
        privacy: "Privacybeleid",
        terms: "Servicevoorwaarden",
      },
    },
  };

  const currentContent = content[language];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center my-0 lg:mb-1">
              <Link href="/">
                <Image
                  src="/Logo AquaWare FINAL.001 kopie.png"
                  width={210}
                  height={200}
                  alt="Aqua Ware"
                  priority
                />
              </Link>
              {/* <h3 className="text-lg font-bold text-foreground">
                {currentContent.company.name}
              </h3> */}
            </div>
            <p className="text-muted-foreground text-sm">
              {currentContent.company.description}
            </p>
            {/* <div className="flex gap-3">
              <Link
                href="#"
                className="p-2 bg-background border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </Link>
            </div> */}
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {currentContent.links.services.title}
            </h4>
            <ul className="space-y-2">
              {currentContent.links.services.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#expert"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {currentContent.links.company.title}
            </h4>
            <ul className="space-y-2">
              {currentContent.links.company.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={currentContent.links.company.link[index]}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {currentContent.contact.title}
            </h4>
            <div className="space-y-3">
              {/* <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-muted-foreground font-bold hover:text-foreground transition-colors text-sm"
                >
                  {currentContent.contact.companyName}
                </Link>
              </div> */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <Link
                  href={`mailto:${currentContent.contact.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {currentContent.contact.email}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <Link
                  href={`tel:${currentContent.contact.phone}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {currentContent.contact.phone}
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-sm">
                    {currentContent.contact.addressLine1}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {currentContent.contact.addressLine2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            {currentContent.bottom.copyright}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policies"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {currentContent.bottom.privacy}
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {currentContent.bottom.terms}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
