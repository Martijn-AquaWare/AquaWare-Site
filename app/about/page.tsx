import Header from "@/components/header";
import BookCallSection from "@/components/about/BookCallSection";
import GetToKnowSection from "@/components/about/GetToKnowSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import StrategySection from "@/components/about/StrategySection";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/footer";
import AboutAquaWareSection from "@/components/about/AboutAquaWareSection";
import NameBehindGoalSection from "@/components/about/NameBehindGoalSection";
import IndustrialDischargesSection from "@/components/about/IndustrialDischargesSection";

export default function AboutPage() {
  return (
    <>
      {/* <GetToKnowSection /> */}
      <AboutAquaWareSection />
      <NameBehindGoalSection />
      {/* <StrategySection /> */}
      {/* <PrinciplesSection /> */}

      {/* <MissionVisionSection /> */}
      <IndustrialDischargesSection />

      {/* <TeamSection /> */}
      {/* <BookCallSection /> */}
    </>
  );
}
