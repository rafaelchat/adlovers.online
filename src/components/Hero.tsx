import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, TrendingUp, Video, X, DollarSign } from "lucide-react";

interface HeroProps {
  onActionClick: (targetId: string) => void;
}

export default function Hero({ onActionClick }: HeroProps) {
  const [showProofModal, setShowProofModal] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Anti-Agency Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-rose-400 uppercase">
            Senior Solo PPC Specialist • Zero Agency Markup
          </span>
        </div>

        {/* Main Value Proposition Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] max-w-5xl mx-auto text-slate-100">
          Stop paying <span className="text-rose-500 underline decoration-rose-500/40 decoration-wavy decoration-2">$3,000/mo</span> to agencies that hand your ads to an intern.
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-sans font-medium leading-relaxed">
          Get high-touch, senior Google Ads management tailored for US service businesses and lean startups. 
          Predictable flat fees from <strong className="text-white font-bold">$297/mo</strong>. 
          Zero 6-month contracts. 100% account ownership.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onActionClick("audit-form")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-rose-950/60 flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Claim Free 5-Min Loom Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onActionClick("pricing")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>See Flat Retainers ($297–$497)</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-semibold leading-snug">
              Month-to-Month (Cancel Anytime)
            </span>
          </div>
          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-semibold leading-snug">
              Weekly 3-Min Video Loom Updates
            </span>
          </div>
          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-semibold leading-snug">
              Daily Negative Keyword Pruning
            </span>
          </div>
          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-semibold leading-snug">
              You Own 100% of Your Ad Account
            </span>
          </div>
        </div>

        {/* Why so affordable badge */}
        <div className="mt-10 inline-block">
          <button
            onClick={() => setShowProofModal(true)}
            className="text-xs font-mono font-bold text-rose-400 hover:text-rose-300 underline underline-offset-4 flex items-center justify-center space-x-1 mx-auto cursor-pointer"
          >
            <span>Wait, how can senior management cost only $297–$497/mo? Click to see the math.</span>
          </button>
        </div>

      </div>

      {/* The Math Modal */}
      {showProofModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl">
            <button
              onClick={() => setShowProofModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-bold uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Zero Agency Overhead Economics</span>
            </div>

            <h3 className="text-2xl font-display font-black text-white mb-4">
              Why we charge $297–$497 instead of $2,500/mo:
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
              When you hire a traditional US agency charging $2,500/mo, here is where your money actually goes:
            </p>

            <div className="space-y-3 font-sans text-xs mb-6">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Fancy Agency Office in NYC / Austin / LA</span>
                <span className="text-rose-400 font-mono font-bold">$750 / mo per client</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Sales VP Commission & Account Execs</span>
                <span className="text-rose-400 font-mono font-bold">$850 / mo per client</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Internal Meetings & 40-page Fluff Reports</span>
                <span className="text-rose-400 font-mono font-bold">$600 / mo per client</span>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex justify-between items-center">
                <span className="text-emerald-300 font-bold">The Actual Junior Specialist touching your account</span>
                <span className="text-emerald-400 font-mono font-bold">Only $300 / mo!</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 bg-rose-500/10 p-4 rounded-xl border border-rose-500/20 leading-relaxed">
              <strong>Our model eliminates 100% of the agency fat.</strong> You pay directly for the senior specialist doing the actual keyword engineering, negative bidding, and high-conversion ad copywriting. No middlemen, no vanity decks.
            </p>

            <button
              onClick={() => {
                setShowProofModal(false);
                onActionClick("pricing");
              }}
              className="mt-6 w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-display font-black text-xs uppercase tracking-wider text-center"
            >
              Explore Our Flat Retainers
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
