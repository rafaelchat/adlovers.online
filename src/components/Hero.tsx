import { useState } from "react";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onActionClick: (targetId: string) => void;
}

export default function Hero({ onActionClick }: HeroProps) {
  const [showMagnetModal, setShowMagnetModal] = useState(false);

  const t = {
    preTitle: "Relationship Marketing & Revenue Operations (RevOps)",
    title: "You worked hard to build your legacy.",
    accentTitle: "We make sure people know it.",
    subtitle: "No more traditional agencies chasing empty clicks and holding your domains hostage. We are the anti-agency partner focused entirely on your actual cash flow.",
    ctaPrimary: "Run Free AI Marketing Audit",
    ctaSecondary: "Download Secret Checklist",
    socialProof: "High-end operations driving premium US Dollar revenue for specialists and local brands in America.",
    badge: "The Anti-Agency Partnership",
    modalTitle: "3 Reasons Your Current Marketing Sucks",
    modalIntro: "The agency market is broken. If you are experiencing these 3 critical flaws, you are throwing precious capital down the drain:",
    reasons: [
      {
        title: "The 'Handcuffs' Effect (Hostage Assets)",
        desc: "Did your current agency register your domains or ad accounts in their name? If you leave, you lose everything. This is hostile holding of your digital wealth."
      },
      {
        title: "Zero Real-Call Auditing",
        desc: "They show you reports with 10k impressions and 500 clicks. But did the phone ring? Was the caller qualified, or did your front desk drop the ball? If they don't audit calls, they don't do RevOps."
      },
      {
        title: "Opaque Hours & Blind Invoicing",
        desc: "Variegated quotes designed to obscure true margins. We turn marketing into high-performance, predictable 'Playbooks' with clear outcomes."
      }
    ],
    modalCta: "Stop Bleeding Capital Now"
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50/30">
      {/* Decorative Grid and Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fda4af12_1px,transparent_1px),linear-gradient(to_bottom,#fda4af12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Anti-Agency Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-rose-100 bg-amber-400/95 mb-6 shadow-md shadow-rose-200/30 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-rose-600" />
          <span className="text-xs font-mono tracking-widest font-black text-slate-900 uppercase">
            {t.badge}
          </span>
        </div>

        {/* Display Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] max-w-5xl mx-auto">
          {t.title}{" "}
          <span className="text-rose-600 block md:inline mt-2 md:mt-0">
            {t.accentTitle}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        {/* Pre-title/Context */}
        <div className="mt-4 text-xs font-mono tracking-widest uppercase text-rose-500 font-bold">
          {t.preTitle}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={() => onActionClick("revops")}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-black text-sm uppercase tracking-tighter text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setShowMagnetModal(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-black text-sm uppercase tracking-tighter text-slate-800 bg-white hover:bg-rose-50 border border-rose-200 hover:border-rose-300 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-rose-100"
          >
            <FileText className="w-5 h-5 text-amber-500" />
            <span>{t.ctaSecondary}</span>
          </button>
        </div>

        {/* Trust/Social Proof Indicator */}
        <div className="mt-16 pt-8 border-t border-rose-100 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-left">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-rose-50 bg-rose-100 flex items-center justify-center text-xs font-mono font-bold text-rose-600">PI</div>
              <div className="w-10 h-10 rounded-full border-2 border-rose-50 bg-amber-100 flex items-center justify-center text-xs font-mono font-bold text-amber-600">DS</div>
              <div className="w-10 h-10 rounded-full border-2 border-rose-50 bg-sky-100 flex items-center justify-center text-xs font-mono font-bold text-sky-600">HS</div>
            </div>
            <div className="text-xs text-slate-500 font-mono leading-relaxed text-center md:text-left">
              <span className="text-slate-700 font-bold">{t.socialProof}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Lead Magnet Modal */}
      <AnimatePresence>
        {showMagnetModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white border border-rose-100 rounded-[40px] overflow-hidden shadow-2xl shadow-rose-200/50 p-6 sm:p-8"
            >
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setShowMagnetModal(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title */}
              <div className="flex items-center space-x-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight">
                  {t.modalTitle}
                </h3>
              </div>

              <p className="text-sm text-slate-600 font-medium mb-6 font-sans">
                {t.modalIntro}
              </p>

              {/* Reasons list */}
              <div className="space-y-4 mb-8">
                {t.reasons.map((reason, index) => (
                  <div key={index} className="p-4 rounded-[24px] bg-rose-50/50 border border-rose-100">
                    <h4 className="flex items-center space-x-2 text-sm font-black text-rose-600 font-display">
                      <span className="text-xs bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-mono font-bold">0{index+1}</span>
                      <span>{reason.title}</span>
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed pl-8">
                      {reason.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Modal CTA */}
              <button
                onClick={() => {
                  setShowMagnetModal(false);
                  onActionClick("revops");
                }}
                className="w-full py-4 rounded-full font-display font-black text-sm uppercase tracking-tighter text-white bg-rose-600 hover:bg-rose-700 transition-all text-center shadow-lg shadow-rose-200 cursor-pointer"
              >
                {t.modalCta}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
