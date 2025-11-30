import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import WhoWeBuildFor from "@/components/WhoWeBuildFor";
import WhatWeBuild from "@/components/WhatWeBuild";
import HowWeBuild from "@/components/HowWeBuild";
import InvestmentTiers from "@/components/InvestmentTiers";
import RecentLaunches from "@/components/RecentLaunches";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <main className="min-h-screen">
        <Hero />
        {/* <LogoCarousel /> */}
        <WhoWeBuildFor />
        <WhatWeBuild />
        <HowWeBuild />
        <InvestmentTiers />
        <RecentLaunches />
        <WhyChooseUs />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
