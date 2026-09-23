import { useState } from "react";
import { Check, ShieldAlert, Sparkles, Zap, ArrowRight, Video, HelpCircle } from "lucide-react";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export default function PricingPlaybooks({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"month">("month");

  const plans = [
    {
      id: "starter",
      name: "Starter PPC",
      tagline: "For Solo Practitioners & Micro SMBs",
      price: "$297",
      period: "month",
      adSpendCap: "Supported Ad Spend: up to $1,500/mo",
      description: "Best for local service owners or solo practices that need clean, steady leads without wasting money on irrelevant clicks.",
      badge: "ENTRY FOUNDATION",
      isPopular: false,
      features: [
        "1 High-Intent Search Campaign (Google Search)",
        "Daily Negative Keyword Pruning (Stop wasted ad spend)",
        "Conversion & Call Tracking Verification",
        "Geofencing & Negative Location Setup",
        "Bi-weekly Email Performance Brief",
        "Month-to-Month (No contract locks)",
        "100% Client Account Ownership"
      ],
      ctaText: "Start With Starter ($297)"
    },
    {
      id: "growth",
      name: "Growth Engine",
      tagline: "Our Flagship Lead Generation Machine",
      price: "$497",
      period: "month",
      adSpendCap: "Supported Ad Spend: up to $3,500/mo",
      description: "Built for established businesses ready to dominate their territory and aggressively turn searchers into booked calls and paid jobs.",
      badge: "MOST POPULAR • BEST ROI",
      isPopular: true,
      features: [
        "Up to 3 Campaigns (Search + Remarketing / Local Ads)",
        "Relentless Daily Negative Keyword Auditing",
        "Continuous Ad Copy A/B Testing & RSA Optimization",
        "Advanced Call Tracking & Form Lead Verification",
        "Weekly 3-Minute Video Loom Review (Watch on your phone)",
        "Direct Slack or WhatsApp Access with Senior Specialist",
        "Landing Page Conversion Recommendations",
        "Month-to-Month (Cancel anytime)"
      ],
      ctaText: "Activate Growth Engine ($497)"
    },
    {
      id: "scale",
      name: "Scale & Dominate",
      tagline: "Multi-Service or High-Spend Accounts",
      price: "$797",
      period: "month",
      adSpendCap: "Supported Ad Spend: up to $7,500/mo",
      description: "For aggressive multi-location operators, e-commerce, or competitive niches (legal, medical, emergency home services).",
      badge: "SCALE ACCELERATOR",
      isPopular: false,
      features: [
        "Everything in Growth Engine",
        "Multi-Campaign Architecture (Search + PMax + YouTube/Display)",
        "Competitive Bid Strategy Adjustments 3x/week",
        "Call Lead Transcript & Quality Review",
        "Dedicated Monthly 30-Min Strategy Zoom with Senior Specialist",
        "Landing Page Messaging Tweaks & CRO Consultation",
        "Priority Support (Response in < 4 hours)"
      ],
      ctaText: "Scale My Campaigns ($797)"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Flat Investments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Simple, honest pricing. <br />
            <span className="text-rose-500">Zero agency markups.</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium leading-relaxed">
            No percentage of ad spend penalties. No 6-month contracts. You pay Google directly for your clicks, and pay us a predictable flat monthly retainer for ruthless optimization.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? "bg-slate-900 border-2 border-rose-500 shadow-2xl shadow-rose-950/50 transform md:-translate-y-3"
                  : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-mono font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-rose-950">
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.isPopular && (
                  <span className="text-[10px] font-mono tracking-wider uppercase block mb-1 font-bold text-slate-400">
                    {plan.badge}
                  </span>
                )}
                
                <h3 className="text-2xl font-display font-black tracking-tight text-white mb-1">
                  {plan.name}
                </h3>
                
                <span className="text-xs font-mono font-semibold text-rose-400 block mb-4">
                  {plan.tagline}
                </span>

                {/* Price Display */}
                <div className="flex items-baseline mb-2 pb-4 border-b border-slate-800">
                  <span className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400 ml-1.5">
                    /{plan.period}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-slate-950 text-slate-300 font-mono text-[11px] font-semibold mb-6 border border-slate-800/80">
                  {plan.adSpendCap}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-8 font-medium">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3.5 text-xs font-sans mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? "text-rose-400" : "text-emerald-400"}`} />
                      <span className="font-semibold text-slate-300 leading-normal">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action button */}
              <button
                type="button"
                onClick={() => onSelectPlan && onSelectPlan(plan.name)}
                className={`w-full py-4 rounded-full font-display font-black text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                  plan.isPopular
                    ? "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* The Tripwire Audit Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 to-slate-900/90 border border-rose-500/40 p-6 sm:p-8 shadow-2xl relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                <Video className="w-3.5 h-3.5" />
                <span>Want to test us first without commitment?</span>
              </div>
              <h3 className="text-2xl font-display font-black text-white">
                The 48-Hour Google Ads Waste Audit Sprint — Only $149
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
                We dive into your search query logs, negative keywords, bidding strategies, and conversion tags. You get a personalized 15-minute video Loom showing exactly where you are bleeding money.
              </p>
              <p className="text-[11px] font-mono text-emerald-400 font-bold">
                ★ 100% Risk Reversal: If you choose to hire us for monthly management within 14 days, the $149 is fully credited to your first invoice!
              </p>
            </div>

            <button
              onClick={() => onSelectPlan && onSelectPlan("Tripwire Audit ($149)")}
              className="shrink-0 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950 flex items-center space-x-2 cursor-pointer"
            >
              <span>Get $149 Audit Sprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
