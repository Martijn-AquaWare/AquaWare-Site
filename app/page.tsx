import Header from "@/components/header";
import HeroSection from "@/components/hero-content";
import TrustedSection from "@/components/trusted-section";
import PartnerSection from "@/components/partner-section";
import ExpertServicesSection from "@/components/expert-services-section";
import PerformanceSection from "@/components/performance-section";
import CaseStudyCarousel from "@/components/case-study-carousel";
import MethodSection from "@/components/method-section";
import B2BSection from "@/components/b2b-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function ShaderShowcase() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <ExpertServicesSection />
      <PartnerSection />
      {/* <PerformanceSection /> */}
      {/* <CaseStudyCarousel /> */}
      <MethodSection />
      <B2BSection />
      <ContactSection />
    </>
  );
}
