import { Smile, Briefcase, Home, ArrowRight, TrendingUp } from "lucide-react";

interface SpecialistPortalsProps {
  onSelectPage: (page: "sleep" | "law" | "home-services") => void;
}

export default function SpecialistPortals({ onSelectPage }: SpecialistPortalsProps) {
  const specialties = [
    {
      id: "sleep" as const,
      title: "Sleep Apnea Dentistry",
      niche: "Medical / Dental Sleep Specialists",
      icon: Smile,
      color: "from-rose-500 to-rose-600",
      textColor: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-100",
      desc: "Attract CPAP-intolerant patients seeking comfortable oral appliance therapy. Highly clinical, objection-killing sleep screening funnels.",
      teaserMetric: "80+ qualified leads/mo",
      teaserCase: "Sleep Cycle Center"
    },
    {
      id: "law" as const,
      title: "Injury Law Practice",
      niche: "Elite Personal Injury Attorneys",
      icon: Briefcase,
      color: "from-amber-500 to-amber-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      desc: "David vs. Goliath SEO & organic dominance templates that drive premium crash and surgery cases straight to your retainer contracts.",
      teaserMetric: "Top 3 Organic Ranking",
      teaserCase: "Thompson Law Austin"
    },
    {
      id: "home" as const,
      title: "Local Home Services",
      niche: "HVAC, Plumbing, & Roofing Contractors",
      icon: Home,
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      desc: "Immediate truck capacity injection playbooks. Escape shared-lead systems and build direct high-intent local emergency call streams.",
      teaserMetric: "26x Verified Revenue ROI",
      teaserCase: "Total Home Technologies"
    }
  ];

  return (
    <section id="verticals" className="py-24 relative bg-rose-50/10 border-t border-rose-100 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-rose-200/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-black flex items-center justify-center space-x-1.5">
            <LayoutGrid className="w-4 h-4" />
            <span>Niche Specialties</span>
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
            High-Ticket Playbook Portals
          </p>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed">
            We reject generalist advertising templates. Choose your industry below to open its dedicated, standalone operations portal and see real conversion widgets at work.
          </p>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                className="bg-white border border-rose-100/80 rounded-[40px] p-8 flex flex-col justify-between shadow-xl shadow-rose-100/30 hover:shadow-rose-100 hover:border-rose-300 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {spec.niche}
                    </span>
                    <div className={`w-10 h-10 rounded-full ${spec.bgColor} ${spec.textColor} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-black text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans mb-6">
                    {spec.desc}
                  </p>

                  {/* Teaser Metrics */}
                  <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60 mb-8 space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-rose-600 font-black uppercase">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Teaser Metrics</span>
                    </div>
                    <div className="text-sm font-display font-black text-slate-950">
                      {spec.teaserMetric}
                    </div>
                    <span className="block text-[10px] text-slate-400 font-mono">Case Study: {spec.teaserCase}</span>
                  </div>
                </div>

                {/* Portal CTA */}
                <button
                  onClick={() => {
                    if (spec.id === "home") {
                      onSelectPage("home-services");
                    } else {
                      onSelectPage(spec.id);
                    }
                  }}
                  className="w-full py-4 rounded-full font-display font-black text-xs tracking-wider uppercase text-center transition-all bg-rose-50 text-rose-700 hover:bg-rose-100/80 border border-rose-100/60 cursor-pointer flex items-center justify-center space-x-2 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 group-hover:shadow-lg group-hover:shadow-rose-200"
                >
                  <span>Enter Dedicated Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function LayoutGrid({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="14" rx="1"/></svg>
  );
}
