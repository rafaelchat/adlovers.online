import { useState } from "react";
import { Check, ShieldAlert, Sparkles, Building, Briefcase, CheckCircle2 } from "lucide-react";

export default function PricingPlaybooks() {
  const [showWebsites, setShowWebsites] = useState(false);

  const t = {
    title: "Playbooks & Investment Matrix",
    subtitle: "Predictable, Productized Investments",
    desc: "We completely abandoned vague open-ended agency proposals. Our services are cleanly bundled into high-performance 'Playbooks' with fixed pricing. Choose your velocity.",
    milestoneTitle: "The first step is ours.",
    milestoneDesc: "Tell us what you need, and only pay when you begin to see your assets taking shape.*",
    milestoneNote: "*This first milestone is agreed upfront. For example: see your site live before paying for the website build, or review the Google Ads campaign structure before payment and monthly invoices begin.",
    
    decoyTag: "MOST POPULAR (DECOY PERFECT)",
    popularTag: "BEST VALUE",
    period: "month",
    ctaBtn: "Activate This Playbook",
    
    cmoTitle: "Fractional Department Economics",
    cmoDesc: "Building an expert internal digital team in the US carries massive monthly overhead:",
    cmoItems: [
      { role: "Fractional CMO / Lead Strategist", cost: "$8,500/mo" },
      { role: "Elite Medical/Legal Copywriter", cost: "$6,000/mo" },
      { role: "Expert PPC Traffic Specialist", cost: "$5,000/mo" },
      { role: "Technical SEO Analyst", cost: "$4,500/mo" }
    ],
    cmoFoot: "Total Internal Cost: $24,000/mo+. Our Playbooks deliver the exact same top-tier intelligence at a fraction of the cost.",

    websiteMenuTitle: "A La Carte Web Design (Non-Subsidized)",
    websiteMenuSubtitle: "Webstructures Re-engineered for Raw Conversion",
    websiteToggleOpen: "View Web Design Pricing Menu",
    websiteToggleClose: "Hide Web Design Pricing Menu",
    websiteNote: "Adlovers rejects cheap $50 templates. We custom-code blazing-fast engines tailored specifically to rank on Google and convert visitors to calls.",

    webPlans: [
      { name: "Informative / High-Intent Landing Page", price: "$6,000+", desc: "For solo specialists and fast campaign testing. Targeted copy addressing emotional client objections." },
      { name: "Full Custom Corporate Website", price: "$7,500 - $15,000", desc: "Our primary build. Re-unified branding, customized graphic structure, and clean SEO architecture for clinics or firms." },
      { name: "Enterprise Portals & Multi-Location Platforms", price: "$15,000+", desc: "For medical chains (5+ locations), local franchises, and systems with deep scheduling or booking integrations." }
    ],

    playbooks: [
      {
        id: "growth",
        name: "Local Launch Program",
        price: "$1,200",
        period: "mo",
        target: "Website + Local Market Foundation",
        description: "Built for businesses that need a serious digital base, clear local positioning, and consistent market intelligence before scaling spend.",
        tag: "LOCAL FOUNDATION",
        features: [
          "Conversion-focused website or landing page build",
          "Local marketing strategy for your service area",
          "Weekly trend monitoring for your market and niche",
          "Google Business Profile optimization roadmap",
          "Core SEO structure for local discovery",
          "Weekly strategic check-in and action plan"
        ],
        isDecoy: false
      },
      {
        id: "authority",
        name: "Market Authority Program",
        price: "$2,500",
        period: "mo",
        target: "Elite Medical & Attorney Firms",
        description: "For specialists who need stronger organic authority, sharper positioning, and a durable content engine around high-value demand.",
        tag: "AUTHORITY & ORGANIC DEPTH",
        features: [
          "Everything in Local Launch Program",
          "Advanced onsite technical SEO improvements",
          "Specialist content strategy and monthly content briefs",
          "Competitor and local SERP opportunity tracking",
          "Conversion and messaging improvements on key pages",
          "No Handcuffs: Total Digital Asset Ownership",
          "✕ Excludes Paid Advertising Campaigns"
        ],
        isDecoy: false
      },
      {
        id: "dominance",
        name: "Regional Dominance Program",
        price: "$3,700",
        period: "mo",
        target: "Complete Regional Dominance",
        description: "Our flagship program. It combines the authority engine with paid acquisition, call intelligence, and weekly revenue operations guidance.",
        tag: "BEST VALUE (DECOY CHOICE)",
        features: [
          "Everything in Market Authority Program",
          "Google Ads campaign creation and optimization",
          "Local paid traffic strategy for priority services",
          "Call tracking, lead quality review, and conversion notes",
          "Weekly budget pacing and live ROI forecasting",
          "Highest priority strategist access"
        ],
        isDecoy: true
      }
    ]
  };

  return (
    <section id="pricing" className="py-24 relative bg-rose-50/20 border-t border-rose-100 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-bold flex items-center justify-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-rose-600 animate-pulse" />
            <span>Investment Guide</span>
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
            {t.title}
          </p>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Trust-building payment milestone */}
        <div className="max-w-5xl mx-auto mb-16 rounded-[32px] bg-white border border-rose-100 shadow-xl shadow-rose-100/20 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-5 md:items-start">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-rose-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Risk-Reversal Milestone</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight leading-tight">
                {t.milestoneTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed max-w-3xl">
                {t.milestoneDesc}
              </p>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-3xl">
                {t.milestoneNote}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Playbook Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {t.playbooks.map((play) => (
            <div
              key={play.id}
              className={`rounded-[40px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                play.isDecoy
                  ? "bg-slate-900 text-white border-2 border-rose-600 shadow-2xl shadow-rose-200/50 transform md:-translate-y-4"
                  : "bg-white border border-rose-100/80 shadow-xl shadow-rose-100/20 hover:border-rose-300"
              }`}
            >
              {/* Top Pill / Badge */}
              {play.isDecoy && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rose-600 text-white font-mono font-black text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md shadow-rose-200/30">
                  {t.decoyTag}
                </div>
              )}

              <div>
                <span className={`text-[10px] font-mono tracking-wider uppercase block mb-1 font-black ${play.isDecoy ? "text-rose-400" : "text-slate-400"}`}>
                  {play.tag}
                </span>
                
                <h3 className="text-2xl font-display font-black tracking-tight leading-none mb-1">
                  {play.name}
                </h3>
                
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block mb-6 ${play.isDecoy ? "text-slate-300" : "text-slate-500"}`}>
                  {play.target}
                </span>

                <div className="flex items-baseline mb-6 border-b border-rose-100/10 pb-6">
                  <span className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none">
                    {play.price}
                  </span>
                  <span className={`text-xs font-mono font-bold ml-1.5 ${play.isDecoy ? "text-slate-400" : "text-slate-500"}`}>
                    /{play.period}
                  </span>
                </div>

                <p className={`text-xs font-semibold leading-relaxed mb-8 ${play.isDecoy ? "text-slate-300" : "text-slate-500"}`}>
                  {play.description}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-3.5 text-xs font-sans mb-10">
                  {play.features.map((feat, idx) => {
                    const isExclusion = feat.startsWith("✕") || feat.startsWith("✕");
                    return (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isExclusion ? "text-rose-500" : play.isDecoy ? "text-rose-500" : "text-rose-600"}`} />
                        <span className={`font-semibold leading-normal ${isExclusion ? "text-slate-500 line-through" : play.isDecoy ? "text-slate-200" : "text-slate-700"}`}>
                          {feat}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className={`w-full py-4 rounded-full font-display font-black text-xs tracking-wider uppercase transition-all shadow-lg cursor-pointer ${
                  play.isDecoy
                    ? "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-950/30"
                    : "bg-slate-900 hover:bg-slate-850 text-white shadow-rose-100"
                }`}
              >
                {t.ctaBtn}
              </button>
            </div>
          ))}
        </div>

        {/* 2-column Bottom Addons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* CMO Math Box (7 columns) */}
          <div className="lg:col-span-7 bg-white border border-rose-100 rounded-[40px] p-6 sm:p-8 shadow-xl shadow-rose-100/10">
            <h3 className="text-base font-display font-black text-slate-900 flex items-center space-x-2 mb-2">
              <Building className="w-5 h-5 text-rose-600" />
              <span>{t.cmoTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 font-semibold mb-6">
              {t.cmoDesc}
            </p>
            <div className="space-y-3 mb-6 font-mono text-[11px] font-bold">
              {t.cmoItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2.5 border-b border-rose-50">
                  <span className="text-slate-600">{item.role}</span>
                  <span className="text-slate-900">{item.cost}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-semibold text-rose-700 bg-rose-50 p-4 rounded-2xl border border-rose-100/80 leading-relaxed font-sans">
              {t.cmoFoot}
            </p>
          </div>

          {/* Web Design Box (5 columns) */}
          <div className="lg:col-span-5 bg-white border border-rose-100 rounded-[40px] p-6 sm:p-8 shadow-xl shadow-rose-100/10">
            <h3 className="text-base font-display font-black text-slate-900 flex items-center space-x-2 mb-2">
              <Briefcase className="w-5 h-5 text-rose-600" />
              <span>{t.websiteMenuTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 font-semibold mb-6">
              {t.websiteMenuSubtitle}
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans mb-6">
              {t.websiteNote}
            </p>

            <button
              onClick={() => setShowWebsites(!showWebsites)}
              className="w-full py-3.5 rounded-full font-display font-black text-xs uppercase text-center bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-100/60 transition-all cursor-pointer"
            >
              {showWebsites ? t.websiteToggleClose : t.websiteToggleOpen}
            </button>

            {showWebsites && (
              <div className="mt-6 space-y-4 pt-4 border-t border-rose-100 font-sans text-xs">
                {t.webPlans.map((plan, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/60 space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-slate-900">{plan.name}</h4>
                      <span className="font-mono text-rose-700 font-black shrink-0 ml-2">{plan.price}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                      {plan.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
