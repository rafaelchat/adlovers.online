import { useState, FormEvent } from "react";
import { CheckCircle2, Video, Send, Sparkles, ShieldCheck } from "lucide-react";

export default function FreeAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    website: "",
    businessName: "",
    monthlySpend: "$1,000 - $3,000/mo",
    email: "",
    notes: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.website || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="audit-form" className="py-24 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                Audit Request Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Our senior Google Ads specialist is analyzing <strong>{formData.website}</strong>. You will receive a direct, 5-minute video Loom link at <strong>{formData.email}</strong> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono font-bold text-rose-400 hover:text-rose-300 underline"
                >
                  Submit another website
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold uppercase mb-3">
                  <Video className="w-3.5 h-3.5" />
                  <span>No Sales Pitch • 100% Actionable Loom</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
                  Get a Free 5-Minute Google Ads Video Audit
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 font-medium">
                  We record our screen showing your market competitors, search term opportunities, and where your current campaigns are bleeding money.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Website URL *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. acmeplumbing.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Services"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@yourdomain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Estimated Monthly Ad Spend
                    </label>
                    <select
                      value={formData.monthlySpend}
                      onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-rose-500"
                    >
                      <option value="Not started yet">Not advertising on Google yet</option>
                      <option value="Under $1,000/mo">Under $1,000 / month</option>
                      <option value="$1,000 - $3,000/mo">$1,000 - $3,000 / month</option>
                      <option value="$3,000 - $7,500/mo">$3,000 - $7,500 / month</option>
                      <option value="$7,500+/mo">$7,500+ / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Main Challenge or Goal (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Clicks are too expensive, not getting enough booked calls, or want to start fresh."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-rose-950 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Me My Free Video Audit</span>
                </button>

                <div className="flex items-center justify-center space-x-4 text-[11px] font-mono text-slate-500 pt-2">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Free & Confidential</span>
                  </span>
                  <span>•</span>
                  <span>No Sales Pressure</span>
                  <span>•</span>
                  <span>Delivered via Loom in 24h</span>
                </div>
              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
