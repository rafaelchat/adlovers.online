import { Eye, KeyRound, CheckSquare, XCircle, CheckCircle2 } from "lucide-react";

export default function AntiAgencyPromise() {
  const t = {
    title: "The Adlovers Promise",
    subtitle: "The Safeguards of Trust",
    desc: "We completely eliminate the risk and friction typically found in agency-client dynamics. We build our partnerships upon three inalienable contractual guarantees:",
    promises: [
      {
        id: "transparency",
        title: "Radical Transparency",
        desc: "Supreme administrator access across all build engines. No manipulated spreadsheets. You get a direct dashboard updated in real-time to watch metrics that actually drive profits.",
        icon: Eye,
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
        borderColor: "border-rose-500/20"
      },
      {
        id: "handcuffs",
        title: "No Handcuffs",
        desc: "You own 100% of your domains, web structures, ad listings, and copy. If you decide to move on, everything moves with you cleanly, without lock-in penalties or digital piracy.",
        icon: KeyRound,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/20"
      },
      {
        id: "results",
        title: "Audited Results",
        desc: "Our strategists manually listen and grade recorded call interactions, cleaning out double leads, spam, and ghost clicks. You only analyze pristine cash opportunities.",
        icon: CheckSquare,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20"
      }
    ],
    comparisonTitle: "Direct Industry Comparison",
    tableHeaderAgency: "Traditional Agencies",
    tableHeaderAdlovers: "The Adlovers Approach",
    comparisonRows: [
      {
        label: "Digital Asset Ownership",
        agency: "Registered in their accounts to hold your business hostage.",
        adlovers: "Your brand, your credentials, 100% owned by you from day one.",
        status: true
      },
      {
        label: "Contract Lock-In",
        agency: "Strict 12-month commitments with heavy cancellation fees.",
        adlovers: "No handcuffs. We earn your partnership on a monthly basis.",
        status: true
      },
      {
        label: "Core Performance Reporting",
        agency: "Vanity metrics: impressions, clicks, search views, fake likes.",
        adlovers: "True cash values: call quality audits, sales scripts, real revenue.",
        status: true
      },
      {
        label: "Communication Support",
        agency: "Robotized ticket systems with account managers rotating constantly.",
        adlovers: "Your primary campaign builder is your direct strategist.",
        status: true
      }
    ]
  };

  return (
    <section id="promise" className="py-24 relative bg-white border-t border-rose-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-black">
            {t.title}
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
            {t.subtitle}
          </p>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 3 Promises Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {t.promises.map((p) => {
            const Icon = p.icon;
            const bgClass = p.id === "transparency" ? "bg-rose-50 text-rose-600" : p.id === "handcuffs" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600";
            return (
              <div
                key={p.id}
                className="p-8 rounded-[40px] bg-white border border-rose-100/60 shadow-xl shadow-rose-100/30 hover:shadow-rose-100 hover:border-rose-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-full ${bgClass} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-black text-slate-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-rose-600 uppercase font-black font-semibold">Adlovers Guarantee</span>
                  <span className="text-xs text-slate-400 font-mono font-bold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Card */}
        <div className="max-w-4xl mx-auto bg-white border border-rose-100 rounded-[40px] overflow-hidden shadow-xl shadow-rose-100/30">
          <div className="p-6 sm:p-8 border-b border-rose-100">
            <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
              <span>{t.comparisonTitle}</span>
            </h3>
          </div>
          <div className="divide-y divide-rose-100 font-sans">
            {t.comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 md:gap-6 items-center hover:bg-rose-50/30 transition-all">
                <div className="font-display font-bold text-sm text-slate-900">
                  {row.label}
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-500">
                  <XCircle className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-400 block md:hidden mb-0.5 font-mono text-[10px] uppercase tracking-wider">{t.tableHeaderAgency}</strong>
                    {row.agency}
                  </span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-rose-600 block md:hidden mb-0.5 font-mono text-[10px] uppercase tracking-wider font-bold">{t.tableHeaderAdlovers}</strong>
                    {row.adlovers}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
