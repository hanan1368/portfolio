import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ImpactSection from "@/components/ImpactSection";
import ResearchSection from "@/components/ResearchSection";
import JourneySection from "@/components/JourneySection";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ImpactSection />
      <ResearchSection />
      <JourneySection />
      <ClosingSection />
    </main>
  );
}
