import { useState } from "react";
import { Briefcase, AlertTriangle, ArrowRight, Check, TrendingUp, Sparkles, Star, ChevronLeft } from "lucide-react";

interface LawPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function LawPage({ onBackToHome, onNavigateToSection }: LawPageProps) {
  // Legal Intake state
  const [caseSeverity, setCaseSeverity] = useState<"mild" | "moderate" | "severe">("moderate");
  const [hasPoliceReport, setHasPoliceReport] = useState<boolean>(true);
  const [hasTreatment, setHasTreatment] = useState<boolean>(true);
  const [intakeCalculated, setIntakeCalculated] = useState(false);

  const t = {
    title: "Injury Law SEO & Authority Playbook",
    subtitle: "Organic Dominance & Zero-Spillover Intake Systems",
    desc: "Stop blowing $250+ per click on low-gravity PPC bids. We deploy high-intent organic search authority silos and clean online retainer/intake pipelines designed to lock down premium personal injury cases before big national firms can buy them.",
    painPointsTitle: "Chronic Attorney Lead Obstacles",
    solutionsTitle: "The Adlovers Advantage",
    caseStudyTitle: "Validated Case Study & ROI",
    simulatorsTitle: "Injury Intake Assessment Simulator",
    heroText: "The David vs. Goliath blueprint for independent firms to command the organic search engine.",
    quote: "We don't just level the playing field; we shift the battle to a terrain where you win by legal mastery, not by budget.",
    painPoints: [
      "Exorbitant Google Ads bids ($150-$300+ per click) inflated by national mega-firms (Big Law).",
      "Ad budgets hemorrhaged on low-gravity accidents or competitor/bot clicks.",
      "Expert lawyers hidden behind low-converting directories and templated generic sites."
    ],
    solutions: [
      "Authority-driven SEO and deep semantic writing targeting high-gravity injury cases.",
      "Lead friction reduction via online retainer agreements and rapid case evaluation forms.",
      "Dominating local, hyper-specific geographic courtroom intent terms."
    ],
    client: "Thompson Law (Austin, TX)",
    metrics: "Top 3 Organic Ranking & 175 High-Value Injury Leads",
    result: "In just 5 months, we overtook national competitors. Placed the client in Top 3 organic slots for Texas' most profitable legal search terms, spending zero on paid ads.",
    intakeTitle: "Injury Case Intake Assessment Scorer",
    injuryLabel: "Injury Severity:",
    injuryOptions: { mild: "Soft tissue pain / No ER visit", moderate: "ER visit / Confirmed Fracture", severe: "Surgery / Heavy Hospitalization" },
    policeLabel: "Is there a police report filed:",
    treatmentLabel: "Active ongoing medical treatment:",
    calculateCaseBtn: "Evaluate Intake Lead Grade",
    caseScoreHigh: "Premium Case (A+ Grade). Hot lead. Transfer instantly to main attorney.",
    caseScoreMed: "Moderate Case (B Grade). Send online retainer and book call queue.",
    caseScoreLow: "Low Case (C Grade). Refer to legal partners or flag for review."
  };

  const evaluateCaseIntake = () => {
    if (caseSeverity === "severe" && hasPoliceReport) return t.caseScoreHigh;
    if (caseSeverity === "moderate" && (hasPoliceReport || hasTreatment)) return t.caseScoreMed;
    return t.caseScoreLow;
  };

  return (
    <div className="pt-28 pb-24 bg-rose-50/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="mb-8 inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to main portfolio</span>
        </button>

        {/* Header Block */}
        <div className="bg-white border border-rose-100 rounded-[40px] p-8 sm:p-12 shadow-xl shadow-rose-100/20 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-600 mb-6 border border-rose-100">
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-mono tracking-widest font-bold uppercase">Dedicated Specialty Page</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="mt-3 text-lg font-display font-bold text-rose-600">
              {t.subtitle}
            </p>
            <p className="mt-4 text-slate-600 font-medium leading-relaxed">
              {t.desc}
            </p>
          </div>
        </div>

        {/* Detailed Offer Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Columns (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Quote Callout */}
            <div className="p-6 sm:p-8 rounded-[30px] bg-amber-400/10 border border-amber-400/20 relative">
              <span className="absolute -top-4 left-6 text-4xl text-amber-500 font-serif leading-none">“</span>
              <p className="text-slate-800 font-semibold italic text-base leading-relaxed pl-4">
                {t.quote}
              </p>
            </div>

            {/* Pain Points vs Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pain Points */}
              <div className="bg-white border border-rose-100/80 rounded-[30px] p-6 shadow-lg shadow-rose-100/10">
                <h3 className="text-sm font-mono tracking-wider text-rose-600 uppercase font-black mb-4 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{t.painPointsTitle}</span>
                </h3>
                <ul className="space-y-4">
                  {t.painPoints.map((p, i) => (
                    <li key={i} className="flex items-start space-x-3 text-xs text-slate-600 font-semibold leading-relaxed">
                      <span className="text-rose-500 font-black shrink-0">✕</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-white border border-rose-100/80 rounded-[30px] p-6 shadow-lg shadow-rose-100/10">
                <h3 className="text-sm font-mono tracking-wider text-emerald-600 uppercase font-black mb-4 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.solutionsTitle}</span>
                </h3>
                <ul className="space-y-4">
                  {t.solutions.map((s, i) => (
                    <li key={i} className="flex items-start space-x-3 text-xs text-slate-700 font-bold leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verified Case Study */}
            <div className="bg-white border border-rose-100 rounded-[40px] p-6 sm:p-8 shadow-xl shadow-rose-100/20">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
                <h3 className="text-base font-display font-black text-slate-900 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-rose-600" />
                  <span>{t.caseStudyTitle}</span>
                </h3>
                <span className="text-xs font-mono font-bold text-rose-600">{t.client}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-xs text-slate-400 font-mono font-bold uppercase">Documented Outcome</div>
                  <div className="text-xl sm:text-2xl font-display font-black text-slate-950 mt-1 leading-snug">
                    {t.metrics}
                  </div>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed mt-3">
                    {t.result}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/60 space-y-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] font-mono font-bold text-slate-800">
                    “In Texas personal injury, SEO is notoriously hostile. Adlovers built our semantic footprint, bypassed big aggregators, and actually filled our cases.”
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono">— Senior Partner</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Simulator Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border-2 border-rose-600 rounded-[40px] p-6 sm:p-8 shadow-xl shadow-rose-200/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono font-black text-[9px] uppercase tracking-widest px-4 py-1 rounded-full">
                Interactive Case Evaluator
              </div>

              <h3 className="text-base font-display font-black text-slate-900 mb-2 mt-2">
                {t.intakeTitle}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Test how our custom intake flow grades inbound crash leads to flag premium surgery cases for immediate call-transfer.
              </p>

              {/* Questions */}
              <div className="space-y-4 font-sans text-xs mb-6">
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold block">{t.injuryLabel}</label>
                  <select
                    value={caseSeverity}
                    onChange={(e) => {
                      setCaseSeverity(e.target.value as "mild" | "moderate" | "severe");
                      setIntakeCalculated(false);
                    }}
                    className="w-full px-4 py-2.5 rounded-2xl bg-rose-50/20 border border-rose-100 text-slate-800 font-semibold focus:outline-none focus:border-rose-500 cursor-pointer text-xs"
                  >
                    <option value="mild">{t.injuryOptions.mild}</option>
                    <option value="moderate">{t.injuryOptions.moderate}</option>
                    <option value="severe">{t.injuryOptions.severe}</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-50/20 border border-rose-100/60">
                  <span className="text-slate-700 font-bold text-xs">{t.policeLabel}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setHasPoliceReport(!hasPoliceReport);
                      setIntakeCalculated(false);
                    }}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest transition-all ${
                      hasPoliceReport ? "bg-emerald-100 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}
                  >
                    {hasPoliceReport ? "Yes" : "No"}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-50/20 border border-rose-100/60">
                  <span className="text-slate-700 font-bold text-xs">{t.treatmentLabel}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setHasTreatment(!hasTreatment);
                      setIntakeCalculated(false);
                    }}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest transition-all ${
                      hasTreatment ? "bg-emerald-100 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}
                  >
                    {hasTreatment ? "Yes" : "No"}
                  </button>
                </div>
              </div>

              {/* Calculate Button */}
              {!intakeCalculated ? (
                <button
                  type="button"
                  onClick={() => setIntakeCalculated(true)}
                  className="w-full py-4 rounded-full font-display font-black tracking-widest uppercase text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 cursor-pointer text-xs"
                >
                  {t.calculateCaseBtn}
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-3xl bg-rose-50 border border-rose-100/80 text-xs text-rose-800 leading-relaxed font-semibold">
                    <span className="block font-mono text-[9px] text-rose-600 uppercase tracking-widest mb-1 font-black">Lead Qualification Result</span>
                    <p className="font-sans font-bold text-slate-950 text-sm">
                      {evaluateCaseIntake()}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIntakeCalculated(false)}
                    className="w-full py-2.5 border border-rose-100 hover:border-rose-200 hover:bg-rose-50/50 rounded-full text-xs text-rose-600 transition-all font-display font-black cursor-pointer text-center"
                  >
                    Reset Intake
                  </button>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-rose-100/60 flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold">
                <span>Secure SSL Encryption</span>
                <span>Active Screener</span>
              </div>
            </div>

            {/* Specialty Package Lead Box */}
            <div className="bg-slate-900 text-white rounded-[40px] p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-black block">Specialty Package</span>
              <h4 className="text-xl font-display font-black leading-snug">
                Ready to own your local courthouse searches?
              </h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                We grant geographic exclusivity. Once we partner with your law firm in your judicial region, we reject all competing accounts in your specialty.
              </p>
              <button
                onClick={() => onNavigateToSection("revops")}
                className="w-full py-3.5 mt-2 rounded-full font-display font-black text-xs tracking-wider uppercase text-center transition-all bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-800 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Request Regional Exclusivity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
