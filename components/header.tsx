"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl  w-full xl:max-w-7xl ${
          isScrolled
            ? "backdrop-blur-md bg-background/95 border border-border/50 shadow-lg"
            : "bg-background/80 backdrop-blur-sm border border-border/30 shadow-md"
        }`}
      >
        <div className="w-full  xl:min-w-7xl  px-6 lg:px-8">
          <div className="flex items-center  justify-between h-16">
            <Link href="/">
              <Image
                src="/Logo AquaWare FINAL.001 kopie.png"
                alt="Aqua Ware Logo"
                width={0}
                height={0}
                className="h-8 lg:h-9 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`${
                  isActive("/") ? "text-foreground" : "text-muted-foreground"
                } hover:text-primary text-md font-medium transition-colors duration-200`}
              >
                {t("nav.home")}
              </Link>
              {/* <Link
                href="/products"
                className={`${
                  isActive("/products")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-md font-medium transition-colors duration-200`}
              >
                {t("nav.products")}
              </Link> */}
              <Link
                href="/about"
                className={`${
                  isActive("/about")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-md font-medium transition-colors duration-200`}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/knowledge"
                className={`${
                  isActive("/knowledge")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-md font-medium transition-colors duration-200`}
              >
                {t("nav.knowledge")}
              </Link>
              <Link
                href="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-md font-medium transition-colors duration-200`}
              >
                {t("nav.contact")}
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              {/* Theme toggle - keeping exactly as requested */}
              <button
                onClick={toggleTheme}
                className="flex items-center text-muted-foreground hover:text-foreground hover:cursor-pointer p-2 rounded-lg hover:bg-muted transition-all duration-200"
                title={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 lg:w-5 lg:h-5" />
                ) : (
                  <Moon className="w-4 h-4 lg:w-5 lg:h-5" />
                )}
              </button>

              {/* Language switcher - keeping exactly as requested */}
              <button
                onClick={toggleLanguage}
                className="flex items-center text-muted-foreground hover:text-foreground hover:cursor-pointer p-2 rounded-lg hover:bg-muted transition-all duration-200"
                title={
                  language === "en" ? "Switch to Dutch" : "Switch to English"
                }
              >
                <Globe className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
                <span className="text-md font-medium">
                  {language === "en" ? "EN" : "NL"}
                </span>
              </button>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-foreground"></div>
                    <div className="w-full h-0.5 bg-foreground"></div>
                    <div className="w-full h-0.5 bg-foreground"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={toggleMobileMenu}
          ></div>
          <div className="fixed top-24 left-4 right-4 bg-background border border-border rounded-2xl shadow-lg p-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${
                  isActive("/") ? "text-foreground" : "text-muted-foreground"
                } hover:text-primary text-lg font-medium transition-colors duration-200 py-2`}
                onClick={toggleMobileMenu}
              >
                {t("nav.home")}
              </Link>
              {/* <Link
                href="/products"
                className={`${
                  isActive("/products")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-lg font-medium transition-colors duration-200 py-2`}
                onClick={toggleMobileMenu}
              >
                {t("nav.products")}
              </Link> */}
              <Link
                href="/about"
                className={`${
                  isActive("/about")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-lg font-medium transition-colors duration-200 py-2`}
                onClick={toggleMobileMenu}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/knowledge"
                className={`${
                  isActive("/knowledge")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-lg font-medium transition-colors duration-200 py-2`}
                onClick={toggleMobileMenu}
              >
                {t("nav.knowledge")}
              </Link>
              <Link
                href="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground text-lg font-medium transition-colors duration-200 py-2`}
                onClick={toggleMobileMenu}
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
