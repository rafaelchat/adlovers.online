import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AntiAgencyPromise from "./components/AntiAgencyPromise";
import SpecialistPortals from "./components/SpecialistPortals";
import RevOpsCenter from "./components/RevOpsCenter";
import PricingPlaybooks from "./components/PricingPlaybooks";
import Footer from "./components/Footer";

// Specialty Pages
import SleepPage from "./pages/SleepPage";
import LawPage from "./pages/LawPage";
import HomeServicesPage from "./pages/HomeServicesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "sleep" | "law" | "home-services">("home");

  const handleScrollToSection = (sectionId: string) => {
    // If we are not on home, first go to home, then scroll
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-rose-50/40 text-slate-900 flex flex-col justify-between selection:bg-rose-600/20 selection:text-rose-900">
      {/* Header Navigation */}
      <Header
        currentPage={currentPage}
        setPage={setCurrentPage}
        onNavigateToSection={handleScrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === "home" && (
          <>
            {/* Hero Section */}
            <Hero onActionClick={handleScrollToSection} />

            {/* Anti-Agency Promise guarantees */}
            <AntiAgencyPromise />

            {/* Specialty Niche Portals Entry Grid */}
            <SpecialistPortals onSelectPage={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />

            {/* AI RevOps Center containing Audit and Call Recorder Auditor simulators */}
            <RevOpsCenter />

            {/* Pricing Playbooks & Decoys */}
            <PricingPlaybooks />
          </>
        )}

        {currentPage === "sleep" && (
          <SleepPage
            onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0 });
            }}
            onNavigateToSection={handleScrollToSection}
          />
        )}

        {currentPage === "law" && (
          <LawPage
            onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0 });
            }}
            onNavigateToSection={handleScrollToSection}
          />
        )}

        {currentPage === "home-services" && (
          <HomeServicesPage
            onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0 });
            }}
            onNavigateToSection={handleScrollToSection}
          />
        )}
      </main>

      {/* Footer & HIPAA Disclaimers */}
      <Footer />
    </div>
  );
}
