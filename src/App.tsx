import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AntiAgencyPromise from "./components/AntiAgencyPromise";
import AdWasteCalculator from "./components/AdWasteCalculator";
import PricingPlaybooks from "./components/PricingPlaybooks";
import FreeAuditForm from "./components/FreeAuditForm";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectPlan = (planName: string) => {
    handleScrollToSection("audit-form");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-rose-600/30 selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Header onNavigateToSection={handleScrollToSection} />

      {/* Main Single-Page High-Conversion Funnel */}
      <main className="flex-grow">
        {/* 1. Hero Section with Core Value Proposition */}
        <Hero onActionClick={handleScrollToSection} />

        {/* 2. Anti-Agency Comparison Manifesto (Why Fire Your $3,000/mo Agency) */}
        <AntiAgencyPromise />

        {/* 3. Interactive ROI & Google Ads Waste Calculator */}
        <AdWasteCalculator onClaimAudit={() => handleScrollToSection("audit-form")} />

        {/* 4. Transparent Flat Pricing Matrix ($149 / $297 / $497 / $797) */}
        <PricingPlaybooks onSelectPlan={handleSelectPlan} />

        {/* 5. Free 5-Minute Video Loom Audit Request Form */}
        <FreeAuditForm />
      </main>

      {/* Transparent Global Footer */}
      <Footer />
    </div>
  );
}
