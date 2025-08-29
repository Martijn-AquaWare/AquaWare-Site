"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ContactInfo() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      title: t("contact.email.title"),
      content: t("contact.email.address"),
      href: `mailto:${t("contact.email.address")}`,
    },
    {
      icon: Phone,
      title: t("contact.phone.title"),
      content: t("contact.phone.number"),
      href: `tel:${t("contact.phone.number")}`,
    },
    {
      icon: MapPin,
      title: t("contact.address.title"),
      content: (
        <div className="space-y-1">
          <div>{t("contact.address.line2")}</div>
          <div>{t("contact.address.line3")}</div>
        </div>
      ),
    },
  ];

  return (
    <section className="pt-16 pb-8   px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    {item.content}
                  </a>
                ) : (
                  <div className="text-muted-foreground text-lg">
                    {item.content}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
