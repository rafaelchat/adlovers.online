import { useState } from "react";
import { DollarSign, AlertTriangle, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

interface CalculatorProps {
  onClaimAudit: () => void;
}

export default function AdWasteCalculator({ onClaimAudit }: CalculatorProps) {
  const [monthlySpend, setMonthlySpend] = useState<number>(2500);
  const [industry, setIndustry] = useState<string>("home-services");

  const industryMultipliers: Record<string, { wasteRate: number; name: string; avgCpc: number }> = {
    "home-services": { wasteRate: 0.38, name: "Home Services (Plumbing, Roofing, HVAC)", avgCpc: 28 },
    "legal": { wasteRate: 0.45, name: "Legal & Attorneys (Personal Injury, Criminal)", avgCpc: 85 },
    "healthcare": { wasteRate: 0.35, name: "Healthcare & Dental (Implants, Sleep Apnea)", avgCpc: 22 },
    "b2b": { wasteRate: 0.40, name: "B2B & Corporate Services", avgCpc: 35 },
    "local-retail": { wasteRate: 0.30, name: "Local Retail / Specialty Services", avgCpc: 12 }
  };

  const currentIndustry = industryMultipliers[industry] || industryMultipliers["home-services"];
  const estimatedWasteMonthly = Math.round(monthlySpend * currentIndustry.wasteRate);
  const estimatedWasteAnnual = estimatedWasteMonthly * 12;

  // Traditional agency cost ($2,500/mo) vs AdLovers ($497/mo)
  const agencyCostAnnual = 2500 * 12; // $30,000
  const adloversCostAnnual = 497 * 12; // $5,964
  const agencySavingsAnnual = agencyCostAnnual - adloversCostAnnual; // $24,036 savings!

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Interactive ROI Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
            How much ad budget are you <br />
            <span className="text-rose-500">flushing down the toilet?</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium">
            Google’s default "Smart" settings and broad match keywords are designed to extract maximum budget from you. See what daily negative keyword pruning and flat retainers save your business.
          </p>
        </div>

        {/* Calculator Interactive Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Input Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. Your Target Monthly Google Ads Budget:
                </label>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-white">
                    ${monthlySpend.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-slate-400">/month</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>$500/mo</span>
                  <span>$5,000/mo</span>
                  <span>$10,000/mo</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  2. Select Your Business Industry:
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-sm font-sans text-white focus:outline-none focus:border-rose-500"
                >
                  <option value="home-services">Home Services (Plumbing, Roofing, HVAC)</option>
                  <option value="legal">Legal & Attorneys (Personal Injury, Criminal)</option>
                  <option value="healthcare">Healthcare & Dental (Sleep Apnea, Implants)</option>
                  <option value="b2b">B2B & Corporate Consulting</option>
                  <option value="local-retail">Local Retail & Specialty Services</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex justify-between font-mono">
                  <span>Average industry waste on bad clicks:</span>
                  <span className="text-rose-400 font-bold">{Math.round(currentIndustry.wasteRate * 100)}%</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  *Based on typical Google Ads accounts lacking strict exact match grouping and daily search term negative pruning.
                </p>
              </div>
            </div>

            {/* Results Output (6 cols) */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 border border-rose-500/30 shadow-xl space-y-6">
              <div className="border-b border-slate-800 pb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                  Estimated Monthly Capital Bleed:
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-display font-black text-rose-500">
                    ${estimatedWasteMonthly.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-slate-400">wasted every month</span>
                </div>
                <span className="text-xs font-mono text-slate-400 mt-1 block">
                  That's <strong>${estimatedWasteAnnual.toLocaleString()}</strong> lost per year to irrelevant clicks.
                </span>
              </div>

              <div className="border-b border-slate-800 pb-5 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  Agency Fee Savings with AdLovers:
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl font-display font-black text-emerald-400">
                    ${agencySavingsAnnual.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-slate-400">saved / year</span>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Instead of paying $30,000/yr for a traditional agency retainer, our flat <strong>$497/mo</strong> plan ($5,964/yr) delivers dedicated senior specialist attention.
                </p>
              </div>

              <button
                onClick={onClaimAudit}
                className="w-full py-4 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-rose-950 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Audit My Wasted Clicks For Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
