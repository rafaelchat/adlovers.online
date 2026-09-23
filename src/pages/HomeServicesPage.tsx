import { useState } from "react";
import { Home, AlertTriangle, ArrowRight, Check, TrendingUp, Sparkles, Star, ChevronLeft } from "lucide-react";

interface HomeServicesPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function HomeServicesPage({ onBackToHome, onNavigateToSection }: HomeServicesPageProps) {
  // Home Services state
  const [idleVans, setIdleVans] = useState<number>(3);
  const [adSpend, setAdSpend] = useState<number>(1500);
  const [roiCalculated, setRoiCalculated] = useState(false);

  const t = {
    title: "Local Home Services Cash Injection",
    subtitle: "Technician & Idle Truck Scheduling Dominance",
    desc: "Stop renting low-quality shared leads from sites like Angi or Yelp that resell the same customer to 5 hungry contractors. We build high-intent local emergency pipelines and extreme Google Business (Maps) authority to flood your schedule with direct calls.",
    painPointsTitle: "Chronic Contractor Obstacles",
    solutionsTitle: "The Adlovers Advantage",
    caseStudyTitle: "Validated Case Study & ROI",
    simulatorsTitle: "Idle Truck Capacity & Ad ROI Calculator",
    heroText: "Immediate scheduling injection to maximize technician utilization for HVAC, roofing, and local specialists.",
    quote: "Your trucks must stay on the move and your staff must stay active. We engineer instant liquidity channels.",
    painPoints: [
      "Technicians sitting idle during unpredictable off-peak seasonal shifts.",
      "Lead sites (Yelp/Angi) reselling the exact same low-quality lead to 5 competitors simultaneously.",
      "Invisible local search presence allowing lower-quality competitors to steal urgent service calls."
    ],
    solutions: [
      "Hyper-optimized Google Business Profile (Maps) architecture to capture high-intent emergency searches.",
      "Hyper-targeted geolocalized emergency ads backed by immediate call tracking pipelines.",
      "Automated review acquisition templates generating continuous 5-star organic credibility."
    ],
    client: "Total Home Technologies",
    metrics: "26x Revenue ROI & 90% Call Closing Performance",
    result: "Built the contractor's digital footprint from zero. Kept the phones ringing at such high volume the client recovered 10x their initial investment within 60 days.",
    calcTitle: "Idle Truck Capacity & Ad ROI Calculator",
    vansLabel: "Number of idle trucks/techs available:",
    spendLabel: "Monthly planned ad investment ($):",
    calcBtn: "Calculate Potential Return",
    calcResult1: "Estimated new monthly emergency calls: ",
    calcResult2: "Potential monthly added revenue (US average ticket): "
  };

  const calculateHomeROI = () => {
    const costPerLead = 45; // average high-intent local call cost
    const closingRate = 0.40; // 40% closing rate
    const averageTicket = 350; // local average service repair ticket
    
    const calls = Math.round(adSpend / costPerLead);
    const bookings = Math.round(calls * closingRate);
    const addedRevenue = bookings * averageTicket * idleVans;

    return {
      calls,
      addedRevenue: addedRevenue.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
    };
  };

  const roi = calculateHomeROI();

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
              <Home className="w-4 h-4" />
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
                    “Our phone lines are ringing constantly. Our trucks went from sitting idle 4 days a week to completely booked schedules in under 60 days.”
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono">— Operations Manager</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Simulator Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border-2 border-rose-600 rounded-[40px] p-6 sm:p-8 shadow-xl shadow-rose-200/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono font-black text-[9px] uppercase tracking-widest px-4 py-1 rounded-full">
                Interactive ROI Calculator
              </div>

              <h3 className="text-base font-display font-black text-slate-900 mb-2 mt-2">
                {t.calcTitle}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Calculate the immediate added cash flow potential by activating our local emergency response ad playbook to fill empty technician slots.
              </p>

              {/* Questions */}
              <div className="space-y-4 font-sans text-xs mb-6">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{t.vansLabel}</span>
                    <span className="font-mono text-rose-600 text-sm font-black">{idleVans}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={idleVans}
                    onChange={(e) => {
                      setIdleVans(parseInt(e.target.value));
                      setRoiCalculated(false);
                    }}
                    className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{t.spendLabel}</span>
                    <span className="font-mono text-rose-600 text-sm font-black">${adSpend}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="250"
                    value={adSpend}
                    onChange={(e) => {
                      setAdSpend(parseInt(e.target.value));
                      setRoiCalculated(false);
                    }}
                    className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              {!roiCalculated ? (
                <button
                  type="button"
                  onClick={() => setRoiCalculated(true)}
                  className="w-full py-4 rounded-full font-display font-black tracking-widest uppercase text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 cursor-pointer text-xs"
                >
                  {t.calcBtn}
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-3xl bg-rose-50 border border-rose-100/80 text-xs text-rose-800 leading-relaxed font-semibold space-y-2">
                    <span className="block font-mono text-[9px] text-rose-600 uppercase tracking-widest font-black">ROI Projection Model</span>
                    <div>
                      <span className="text-slate-500 block text-[10px] font-bold">{t.calcResult1}</span>
                      <span className="text-lg font-bold text-slate-950">{roi.calls} calls</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] font-bold">{t.calcResult2}</span>
                      <span className="text-xl font-black text-rose-700">{roi.addedRevenue}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRoiCalculated(false)}
                    className="w-full py-2.5 border border-rose-100 hover:border-rose-200 hover:bg-rose-50/50 rounded-full text-xs text-rose-600 transition-all font-display font-black cursor-pointer text-center"
                  >
                    Reset Calculator
                  </button>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-rose-100/60 flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold">
                <span>Direct CRM Injection</span>
                <span>Active Screener</span>
              </div>
            </div>

            {/* Specialty Package Lead Box */}
            <div className="bg-slate-900 text-white rounded-[40px] p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-black block">Specialty Package</span>
              <h4 className="text-xl font-display font-black leading-snug">
                Ready to own your local emergency calls?
              </h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                We grant geographic exclusivity. Once we partner with your contractor team in your service area, we reject all competing accounts in your focus area.
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
