"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    en: {
      title: "Send us a message",
      subtitle:
        "Please leave your details and question below and we will contact you soon.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message",
      },
      placeholders: {
        name: "Enter your full name",
        email: "Enter your email address",
        message: "Tell us about your water management needs...",
      },
      messages: {
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      },
    },
    nl: {
      title: "Stuur ons een bericht",
      subtitle:
        "Laat hieronder uw gegevens en vraag achter, dan nemen wij snel contact met u op.",
      form: {
        name: "Voor- en achternaam",
        email: "Email adres",
        message: "Bericht",
        submit: "Verstuur bericht",
      },
      placeholders: {
        name: "Vul uw voor- en achternaam in",
        email: "Vul uw email adres in",
        message: "Hier kunt u uw bericht typen. ",
      },
      messages: {
        success: "Bericht succesvol verzonden!",
        error: "Verzenden mislukt. Probeer het opnieuw.",
      },
    },
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      console.error("Public key is missing or undefined.");
      toast.error(currentContent.messages.error);
      setIsSubmitting(false);
      return;
    }

    const params = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    try {
      emailjs
        .send(
          serviceId as string,
          templateId as string,
          params,
          publicKey as string
        )
        .then((response) => {
          console.log("EmailJS Response:", response);
          if (response.status === 200) {
            toast.success(currentContent.messages.success);
            setFormData({ name: "", email: "", message: "" });
          } else {
            console.error("Unexpected response status:", response.status);
            toast.error(currentContent.messages.error);
          }
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          toast.error(currentContent.messages.error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (syncError) {
      console.error("Synchronous Error:", syncError);
      toast.error(currentContent.messages.error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-4 pb-16 px-6 max-w-4xl mx-auto">
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {currentContent.title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {currentContent.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-8 shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="w-4 h-4 text-blue-600" />
                {currentContent.form.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={currentContent.placeholders.name}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail className="w-4 h-4 text-teal-600" />
                {currentContent.form.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={currentContent.placeholders.email}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              {currentContent.form.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={currentContent.placeholders.message}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 hover:cursor-pointer text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Send className="w-4 h-4" />
            {isSubmitting
              ? language === "en"
                ? "Sending..."
                : "Verzenden..."
              : currentContent.form.submit}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
