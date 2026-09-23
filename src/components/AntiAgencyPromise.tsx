import { CheckCircle2, XCircle, ShieldCheck, Zap, Lock, Unlock, HelpCircle } from "lucide-react";

export default function AntiAgencyPromise() {
  const comparisonRows = [
    {
      feature: "Monthly Retainer Fee",
      agency: "$2,500 – $5,000+ per month",
      solo: "$297 – $497 flat per month",
      highlight: true
    },
    {
      feature: "Contract Commitment",
      agency: "Mandatory 6 to 12-month lock-in",
      solo: "Month-to-month. Cancel anytime with 15 days notice.",
      highlight: true
    },
    {
      feature: "Who actually works on your ads?",
      agency: "Junior account manager or intern",
      solo: "100% senior specialist with 7+ years PPC experience",
      highlight: true
    },
    {
      feature: "Negative Keyword Pruning",
      agency: "Monthly (or completely forgotten)",
      solo: "Daily search query filtering to kill wasted clicks",
      highlight: false
    },
    {
      feature: "Reporting Style",
      agency: "40-page confusing PDF with vanity clicks",
      solo: "3-minute weekly video Loom showing booked calls & ROI",
      highlight: false
    },
    {
      feature: "Ad Account & Pixel Ownership",
      agency: "Held hostage in their agency master account",
      solo: "100% yours. You own all history, tags, and data.",
      highlight: false
    },
    {
      feature: "Setup & Onboarding Time",
      agency: "3 to 4 weeks of bureaucracy and meetings",
      solo: "Live and generating calls in 3 to 5 business days",
      highlight: false
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Anti-Agency Manifesto</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Traditional Agency vs. <br />
            <span className="text-rose-500">AdLovers Solo Specialist</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium">
            See the honest, side-by-side truth of why smart business owners are firing traditional agencies.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900">
                <th className="py-5 px-6 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Feature / Parameter
                </th>
                <th className="py-5 px-6 font-mono text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/20">
                  Traditional US Agency
                </th>
                <th className="py-5 px-6 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/30">
                  AdLovers Solo PPC Specialist
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-sans text-xs">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? "bg-slate-850/50" : "hover:bg-slate-900/30 transition-colors"}>
                  <td className="py-4 px-6 font-bold text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-400 bg-rose-950/10 font-medium">
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white font-semibold bg-emerald-950/20">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-emerald-300">{row.solo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 Pillars of Security underneath */}
        <div id="guarantees" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Unlock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-black text-white">No Handcuffs Policy</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              We never hold your Google Ads account, keyword research, or conversion tags hostage. Everything is created inside your master account.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-black text-white">Loom-First Communication</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              You are busy running your company. Instead of wasting 1 hour on awkward Zoom meetings, you get a 3-minute video showing your exact lead flow and action steps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-black text-white">Zero Spend Penalty</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Agencies charging 15% to 20% of your ad spend are incentivized to make you spend more. Our flat fee ensures we are only incentivized to make you more profitable.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
