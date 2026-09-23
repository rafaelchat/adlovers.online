import { useState } from "react";
import { Smile, AlertTriangle, ArrowRight, Check, TrendingUp, Sparkles, Star, ChevronLeft } from "lucide-react";

interface SleepPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function SleepPage({ onBackToHome, onNavigateToSection }: SleepPageProps) {
  // Sleep Screener state
  const [screenerAnswers, setScreenerAnswers] = useState<number[]>([0, 0, 0]);
  const [screenerCalculated, setScreenerCalculated] = useState(false);

  const t = {
    title: "Dental Sleep Medicine Marketing",
    subtitle: "High-Ticket Oral Appliance Patient Acquisition",
    desc: "Stop competing for low-ticket dental cleanings. We build segregated, clinically polished landing portals and interactive screening funnels designed exclusively to attract CPAP-intolerant patients seeking comfortable oral appliance alternatives.",
    painPointsTitle: "Chronic Industry Friction",
    solutionsTitle: "The Adlovers Advantage",
    caseStudyTitle: "Validated Case Study & ROI",
    simulatorsTitle: "Interactive Epworth Sleepiness Screener",
    heroText: "Your patients hate CPAP. We bridge them to your comfortable oral appliance and audit your desk conversion.",
    quote: "You aren't selling dental cleanings. You are selling a $3.5k+ medical solution to a life-threatening sleep disorder.",
    painPoints: [
      "Generic marketing agencies attracting window-shoppers who scheduled but never showed.",
      "Front desk teams lacking sales scripts, collapsing under complex medical insurance queries.",
      "Low patient urgency, unaware that severe snoring is linked to heart disease and stroke."
    ],
    solutions: [
      "Segregated, clinical landing portals devoid of general family dentist logos to project medical authority.",
      "Interactive sleepiness surveys (Epworth scales) to engage and pre-qualify high-risk sufferers.",
      "New Patient Conversion Program: 1-on-1 call audits, patient liaison training, and 'Fast & Easy' scripts."
    ],
    client: "Sleep Cycle Center (Dr. Chad Denman)",
    metrics: "80+ qualified leads/mo & 40+ appliances delivered",
    result: "We audited and rebuilt their entire physical intake and digital flow. Generated over $1.5M in sleep apnea revenues without relying on external medical referrals.",
    screenerTitle: "Epworth Screener Simulator (Deployed on client sites)",
    q1: "Chance of dozing while watching TV:",
    q2: "Chance of dozing sitting in a public place:",
    q3: "Chance of dozing lying down to rest in the afternoon:",
    screenerOptions: ["Never", "Slight", "Moderate", "High"],
    screenerBtn: "Calculate Sleep Apnea Risk Score",
    screenerResultLow: "Low Risk (0-3). Maintain active sleep hygiene monitoring.",
    screenerResultMed: "Moderate Risk (4-6). Oral Appliance Therapy highly suitable. Schedule a pre-verification.",
    screenerResultHigh: "Severe Risk (7-9). CPAP intolerance likely. Schedule an immediate priority consultation!"
  };

  const handleScreenerChange = (qIndex: number, value: number) => {
    const updated = [...screenerAnswers];
    updated[qIndex] = value;
    setScreenerAnswers(updated);
    setScreenerCalculated(false);
  };

  const calculateScreenerScore = () => {
    const sum = screenerAnswers.reduce((a, b) => a + b, 0);
    if (sum <= 3) return t.screenerResultLow;
    if (sum <= 6) return t.screenerResultMed;
    return t.screenerResultHigh;
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
              <Smile className="w-4 h-4" />
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
                    “The ROI has been life-changing. We completely stopped looking at clicks and started seeing actual qualified people in our schedule.”
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono">— Clinical Director</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Simulator Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border-2 border-rose-600 rounded-[40px] p-6 sm:p-8 shadow-xl shadow-rose-200/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono font-black text-[9px] uppercase tracking-widest px-4 py-1 rounded-full">
                Interactive Patient Screener
              </div>

              <h3 className="text-base font-display font-black text-slate-900 mb-2 mt-2">
                {t.screenerTitle}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                Test the exact pre-qualification widget we place on your sleep portal to filter out tire-kickers and capture warm candidates automatically.
              </p>

              {/* Questions */}
              <div className="space-y-4 font-sans text-xs mb-6">
                {[t.q1, t.q2, t.q3].map((question, qIdx) => (
                  <div key={qIdx} className="space-y-2">
                    <label className="text-slate-700 font-bold block">{question}</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {t.screenerOptions.map((opt, val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleScreenerChange(qIdx, val)}
                          className={`py-2 px-1 rounded-xl text-center font-semibold text-[10px] transition-all cursor-pointer border ${
                            screenerAnswers[qIdx] === val
                              ? "bg-rose-100/60 border-rose-500 text-rose-700 font-bold"
                              : "bg-rose-50/20 border-rose-100/60 text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Calculate Button */}
              {!screenerCalculated ? (
                <button
                  type="button"
                  onClick={() => setScreenerCalculated(true)}
                  className="w-full py-4 rounded-full font-display font-black tracking-widest uppercase text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 cursor-pointer text-xs"
                >
                  {t.screenerBtn}
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-3xl bg-rose-50 border border-rose-100/80 text-xs text-rose-800 leading-relaxed font-semibold">
                    <span className="block font-mono text-[9px] text-rose-600 uppercase tracking-widest mb-1 font-black">Screener Result Evaluation</span>
                    <p className="font-sans font-bold text-slate-950 text-sm">
                      {calculateScreenerScore()}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setScreenerCalculated(false)}
                    className="w-full py-2.5 border border-rose-100 hover:border-rose-200 hover:bg-rose-50/50 rounded-full text-xs text-rose-600 transition-all font-display font-black cursor-pointer text-center"
                  >
                    Reset Screener
                  </button>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-rose-100/60 flex items-center justify-between text-[10px] text-slate-400 font-mono font-bold">
                <span>HIPAA Compliant Data Pipeline</span>
                <span>Active Screener</span>
              </div>
            </div>

            {/* Specialty Package Lead Box */}
            <div className="bg-slate-900 text-white rounded-[40px] p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-black block">Specialty Package</span>
              <h4 className="text-xl font-display font-black leading-snug">
                Ready to deploy Sleep Apnea dominance in your city?
              </h4>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                We grant geographic exclusivity. Once we partner with your sleep clinic in your region, we reject all competing accounts in your service area.
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
