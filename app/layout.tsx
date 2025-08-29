import type React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AquaWare",
  description: "AquaWare which works for the better water solutions",
  generator: "Developer",
  icons: "/AquaWare Circle.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
          html {
            font-family: ${figtree.style.fontFamily};
            --font-sans: ${figtree.variable};
            --font-mono: ${GeistMono.variable};
            --font-instrument-serif: ${instrumentSerif.variable};
          }`}
        </style>
      </head>
      <body className={`${figtree.variable} ${instrumentSerif.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {" "}
            <Header /> {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
