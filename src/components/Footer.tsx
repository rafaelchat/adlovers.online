import { Heart, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const t = {
    storyTitle: "Our Operational Mission & Values",
    storyDesc: "Adlovers was built as the ultimate anti-agency partner. We operate on principles of radical transparency, absolute asset ownership, and active defense of your digital estate. No tricks, no handcuffs—just direct cash-flow results for high-value US specialists and local brands.",
    contactTitle: "Presence & Connection",
    disclaimerTitle: "Compliance & Safety Disclaimers",
    disclaimerDesc: "Adlovers is a high-performance independent marketing platform specializing in Revenue Operations and local sales enablement coaching for US firms. We do not provide clinical medical advice, legal counsel, or financial audits. Sleep apnea marketing and recording pipelines follow absolute HIPAA confidentiality guidelines.",
    allRights: "All rights reserved.",
    partnerLabel: "Official Growth Partner"
  };

  return (
    <footer className="bg-white border-t border-rose-100 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Core Mission (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                <span className="font-display font-black text-rose-600 text-base">a</span>
              </div>
              <span className="font-display font-black text-slate-900 tracking-tight text-lg">
                adlovers
              </span>
            </div>
            <h4 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-black">
              {t.storyTitle}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md font-medium">
              {t.storyDesc}
            </p>
          </div>

          {/* Column 2: Quick Contacts (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-black">
              {t.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 font-semibold">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span>agenciaadlovers@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  Austin, TX &middot; Florida, USA <br />
                  <span className="text-slate-400 block mt-0.5 font-medium">Operations based out of Brazil & USA</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Disclaimers (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-black flex items-center space-x-1.5">
              <Shield className="w-4 h-4 text-rose-500" />
              <span>{t.disclaimerTitle}</span>
            </h4>
            <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
              {t.disclaimerDesc}
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono font-bold">
          <div>
            &copy; {new Date().getFullYear()} Adlovers. {t.allRights}
          </div>
          <div className="flex items-center space-x-1.5 text-slate-500">
            <span>{t.partnerLabel}</span>
            <Heart className="w-3 h-3 text-rose-500 animate-pulse" />
            <span>Adlovers Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
