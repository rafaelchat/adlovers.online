import { useState, useEffect, FormEvent } from "react";
import { 
  Activity, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  RefreshCw, 
  Search, 
  TrendingUp, 
  Key, 
  AlertTriangle, 
  ArrowRight,
  ChevronRight,
  Layers,
  Award
} from "lucide-react";
import { AuditResult } from "../types";

export default function RevOpsCenter() {
  // Deep Research Audit States
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [industry, setIndustry] = useState("Medical / Dentistry");
  const [targetVertical, setTargetVertical] = useState("");
  const [auditLoading, setAuditLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [auditError, setAuditError] = useState<string | null>(null);

  // "Shall We Continue Together" contact form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSent, setContactSent] = useState(false);

  // List of Deep Research steps to simulate real-time scanning
  const loadingSteps = [
    "Initiating deep digital presence scan...",
    "Connecting to Google Ads Transparency Center to validate active ads...",
    "Querying geographic trends and search volume on Google Trends...",
    "Analyzing domain authority and SEO gaps on SEMrush...",
    "Auditing conversion leak points (CRO) on the website...",
    "Sistematizing regional competitive intelligence with AdLovers AI...",
    "Preparing your strategic positioning report..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (auditLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingSteps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [auditLoading]);

  // Run Audit
  const handleRunAudit = async (e: FormEvent) => {
    e.preventDefault();
    if (!companyName) return;

    setAuditLoading(true);
    setAuditResult(null);
    setAuditError(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          url: websiteUrl,
          industry,
          targetVertical: targetVertical || "General"
        })
      });
      const data = await res.json();
      if (res.ok && !data.error) {
        setAuditResult(data);
      } else {
        setAuditError(data?.error || "Error processing audit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setAuditError("Connection failure. Please try again later.");
    } finally {
      setAuditLoading(false);
    }
  };

  // Send contact "Shall We Continue Together"
  const handleSendContact = (e: FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  return (
    <section id="revops" className="py-24 relative bg-slate-50 border-t border-rose-100 overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-rose-600 uppercase font-black flex items-center justify-center space-x-1.5">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>AdLovers RevOps & Analytics</span>
          </h2>
          <p className="mt-3 text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Digital Health & Deep Research Audit
          </p>
          <p className="mt-4 text-base text-slate-600 font-medium leading-relaxed">
            We do not camouflage data with confusing marketing jargon. Use our advanced deep research engine to audit your presence, investigate competitor ads, and measure your competitive positioning instantly.
          </p>
        </div>
 
        {/* Layout Split: Form & Informational Preview / Results view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT PANEL: Audit Configuration Form (Always visible or compact) */}
          <div className="lg:col-span-4 bg-white border border-rose-100/70 rounded-[40px] p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-rose-100/10">
            <div>
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-rose-50/80">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center">
                  <Search className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-base font-display font-black text-slate-900 uppercase tracking-tight">
                    Research Scanner
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono font-bold uppercase">Real-time audit</p>
                </div>
              </div>
 
              <form onSubmit={handleRunAudit} className="space-y-4 text-xs font-sans">
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold block">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sleep & Health Clinic"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl bg-rose-50/10 border border-rose-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-all font-medium text-xs"
                    id="audit-company-input"
                  />
                </div>
 
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold block">Website / URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://yourclinic.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl bg-rose-50/10 border border-rose-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-all font-medium text-xs"
                    id="audit-url-input"
                  />
                </div>
 
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold block">Industry</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl bg-rose-50/10 border border-rose-100 text-slate-800 focus:outline-none focus:border-rose-500 bg-white cursor-pointer font-bold text-xs"
                    id="audit-industry-select"
                  >
                    <option value="Medical / Dentistry">Medicine / Dentistry (Sleep Apnea etc)</option>
                    <option value="Legal / Law Firm">Legal / Law Firm (Accidents etc)</option>
                    <option value="Home Services">Home Services (Installations etc)</option>
                    <option value="Professional B2B">Professional Services / B2B</option>
                  </select>
                </div>
 
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold block">Target Focus / Specialty</label>
                  <input
                    type="text"
                    placeholder="e.g. Sleep Apnea, Traffic Accidents"
                    value={targetVertical}
                    onChange={(e) => setTargetVertical(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl bg-rose-50/10 border border-rose-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-all font-medium text-xs"
                    id="audit-vertical-input"
                  />
                </div>
 
                <button
                  type="submit"
                  disabled={auditLoading}
                  className="w-full py-4 mt-2 rounded-2xl font-display font-black tracking-wider uppercase text-white bg-rose-600 hover:bg-rose-700 disabled:opacity-50 transition-all shadow-lg shadow-rose-200 cursor-pointer text-xs flex items-center justify-center space-x-2"
                  id="audit-submit-btn"
                >
                  {auditLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Scan Now</span>
                    </>
                  )}
                </button>
              </form>
 
              <div className="mt-8 p-4 rounded-3xl bg-slate-50 border border-rose-100/40 text-[11px] text-slate-500 font-medium leading-relaxed">
                <span className="font-bold text-slate-800 block mb-1">How does the audit work?</span>
                Our smart engine dynamically analyzes competitor bids, Google Ads Transparency Center connections, search trends, and local keyword visibility to generate an instant diagnostic report.
              </div>
            </div>
 
            <div className="mt-6 pt-4 border-t border-rose-100/40 flex items-center justify-between text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider">
              <span>Google API Grounding</span>
              <span>AdLovers Property</span>
            </div>
          </div>
 
          {/* RIGHT PANEL: Dynamic Audit Dashboard & Report Screen (8 columns) */}
          <div className="lg:col-span-8 bg-white border border-rose-100/70 rounded-[40px] p-6 sm:p-10 shadow-xl shadow-rose-100/10 flex flex-col justify-between min-h-[500px]">
            
            {/* 1. STATE: INITIAL PLACEHOLDER (Waiting for search) */}
            {!auditResult && !auditLoading && !auditError && (
              <div className="h-full flex flex-col justify-center py-8">
                <div className="max-w-xl mx-auto text-center space-y-6">
                  <div className="inline-flex p-4 bg-rose-50 rounded-full text-rose-600 mb-2">
                    <Layers className="w-10 h-10 animate-pulse" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight">
                    Ready to Start Deep Research
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                    Enter your company information in the panel. Our system will scan key marketing intelligence channels to generate your strategic positioning and revenue diagnostics instantly.
                  </p>

                  {/* Grid showing checked parameters */}
                  <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto mt-6">
                    <div className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100/40 space-y-1">
                      <div className="flex items-center space-x-2 text-rose-600">
                        <Globe className="w-4 h-4" />
                        <span className="text-[11px] font-mono font-black uppercase">Google Ads</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">We investigate active campaigns in the Google Ads Transparency Center.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100/40 space-y-1">
                      <div className="flex items-center space-x-2 text-rose-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-[11px] font-mono font-black uppercase">Google Trends</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">We measure geographical interest and search volume trends.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100/40 space-y-1">
                      <div className="flex items-center space-x-2 text-rose-600">
                        <Search className="w-4 h-4" />
                        <span className="text-[11px] font-mono font-black uppercase">SEMrush SEO</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">We search organic authority and conversion leak keywords.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50/30 border border-rose-100/40 space-y-1">
                      <div className="flex items-center space-x-2 text-rose-600">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[11px] font-mono font-black uppercase">Transparency</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">We audit whether your assets truly belong 100% to you.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. STATE: ERROR ENCOUNTERED */}
            {auditError && !auditLoading && (
              <div className="h-full flex flex-col justify-center py-8 animate-fadeIn">
                <div className="max-w-md mx-auto text-center space-y-6">
                  <div className="inline-flex p-4 bg-red-50 rounded-full text-red-600 mb-2">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight">
                    An Issue Occurred
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                    {auditError}
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        setAuditError(null);
                        setAuditResult(null);
                      }}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-bold font-display uppercase tracking-wider text-slate-700 rounded-xl transition-all border border-slate-200 cursor-pointer inline-flex items-center space-x-2"
                    >
                      <span>Try Again</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. STATE: LOADING SCREEN WITH STAGGERED STEPS */}
            {auditLoading && (
              <div className="h-full flex flex-col items-center justify-center py-16 space-y-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-rose-100 border-t-rose-600 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-rose-600 animate-pulse" />
                  </div>
                </div>

                <div className="text-center space-y-3 max-w-md">
                  <h4 className="text-sm font-display font-black text-slate-900 tracking-tight">
                    Deep Research Audit in Progress...
                  </h4>
                  <p className="text-xs text-rose-600 font-mono font-bold animate-pulse">
                    {loadingSteps[loadingStep]}
                  </p>
                  
                  {/* Progress lines */}
                  <div className="flex space-x-1 justify-center pt-2">
                    {loadingSteps.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx <= loadingStep ? "w-6 bg-rose-600" : "w-2 bg-rose-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. STATE: DYNAMIC COMPREHENSIVE AUDIT REPORT */}
            {auditResult && !auditLoading && (
              <div className="space-y-8 animate-fadeIn">
                
                {/* Score & Evaluation Header */}
                <div className="p-6 rounded-[32px] bg-rose-50/30 border border-rose-100/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex px-3 py-1 bg-rose-100 text-rose-700 text-[10px] font-mono font-black uppercase rounded-full">
                      Deep Research Audit Result
                    </div>
                    <h3 className="text-lg font-display font-black text-slate-900 leading-tight">
                      {companyName}
                    </h3>
                    {websiteUrl && (
                      <a href={websiteUrl} target="_blank" rel="noreferrer" className="text-xs text-slate-500 font-semibold underline hover:text-rose-600">
                        {websiteUrl}
                      </a>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-400 font-mono font-bold uppercase">Overall Score</span>
                      <span className="block text-xs font-mono font-black uppercase text-rose-600 mt-0.5">
                        {auditResult.score >= 70 ? "High Potential" : "Critical Bottlenecks"}
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-rose-500/20 bg-rose-50 flex items-center justify-center font-display font-black text-xl text-rose-700 shadow-inner">
                      {auditResult.score}
                    </div>
                  </div>
                </div>

                {/* Main 2-Column Dashboard grid of research results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Box 1: Google Ads Transparency Center check */}
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                      <span className="text-[10px] font-mono font-black uppercase text-slate-500 flex items-center space-x-1.5">
                        <Globe className="w-3.5 h-3.5 text-rose-600" />
                        <span>Google Ads Transparency</span>
                      </span>
                      <span className="text-[9px] font-mono bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-bold font-black">Verified</span>
                    </div>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                      {auditResult.adsStatus}
                    </p>
                  </div>

                  {/* Box 2: Google Trends Search Momentum */}
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                      <span className="text-[10px] font-mono font-black uppercase text-slate-500 flex items-center space-x-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
                        <span>Trends & Demand (Google Trends)</span>
                      </span>
                      <span className="text-[9px] font-mono bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Volume</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Vertical Interest</span>
                        <span className="font-mono text-rose-600">{auditResult.trendsScore}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-600 rounded-full" style={{ width: `${auditResult.trendsScore}%` }} />
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium">Increasing regional interest with high propensity for immediate bookings.</p>
                    </div>
                  </div>
 
                  {/* Box 3: SEMrush High-Intent Keywords */}
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                      <span className="text-[10px] font-mono font-black uppercase text-slate-500 flex items-center space-x-1.5">
                        <Key className="w-3.5 h-3.5 text-rose-600" />
                        <span>Recommended Keywords (SEMrush)</span>
                      </span>
                      <span className="text-[9px] font-mono bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">Opportunity</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {auditResult.seoKeywords?.map((kw, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-200/60 rounded-lg text-[10px] font-semibold text-slate-700 font-mono">
                          {kw}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">Local terms with inflated competition but containing high direct conversion rates.</p>
                  </div>
 
                  {/* Box 4: Competitor Overlays */}
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                      <span className="text-[10px] font-mono font-black uppercase text-slate-500 flex items-center space-x-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Regional Competitor Analysis</span>
                      </span>
                      <span className="text-[9px] font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">Alert</span>
                    </div>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                      {auditResult.competitorInsights}
                    </p>
                  </div>
 
                </div>
 
                {/* Score breakdown metrics bars */}
                <div className="space-y-3 font-sans text-xs">
                  <h4 className="text-[11px] font-mono tracking-wider text-rose-600 uppercase font-black">Strategic Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Search Visibility", val: auditResult.scores.visibility, color: "bg-rose-600" },
                      { label: "Lead Conversion Rate", val: auditResult.scores.conversion, color: "bg-amber-500" },
                      { label: "IP & Asset Ownership", val: auditResult.scores.transparency, color: "bg-emerald-500" }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-600 block">{item.label}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                          </div>
                          <span className="font-mono text-slate-900 font-black text-xs">{item.val}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* AI Detailed Review and Recommendations */}
                <div className="p-6 rounded-[32px] bg-rose-50/10 border border-rose-100/50 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-rose-600 uppercase font-black block mb-2">AdLovers AI Strategist Analysis</span>
                    <div className="text-xs text-slate-700 leading-relaxed font-semibold space-y-2 whitespace-pre-wrap">
                      {auditResult.analysis}
                    </div>
                  </div>
 
                  <div className="pt-4 border-t border-rose-100/50 space-y-2">
                    <span className="text-[10px] font-mono tracking-wider text-rose-600 uppercase font-black block">Key Growth Recommendations</span>
                    <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-600 font-semibold">
                      {auditResult.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
 
                {/* THE INVITATION: "Vamos continuar juntos" Personalized CTA Card */}
                <div className="p-8 sm:p-10 rounded-[40px] bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                  {/* Subtle glowing lights */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
 
                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex p-3 bg-rose-600/35 rounded-2xl text-rose-400 mb-1 border border-rose-500/20">
                      <Award className="w-6 h-6 animate-pulse" />
                    </div>
 
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight text-white leading-tight">
                        Shall We Continue Together?
                      </h3>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">
                        {auditResult.invitation}
                      </div>
                    </div>
 
                    {/* Integrated Contact Lead Capture Form inside the Invitation */}
                    <div className="pt-6 border-t border-slate-800">
                      {contactSent ? (
                        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-900 text-center space-y-2 animate-fadeIn">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                          <h4 className="text-sm font-bold text-white">Request Received Successfully!</h4>
                          <p className="text-[11px] text-emerald-300">Our Revenue Engineering team will contact you in the next few business hours to schedule your diagnostic deep dive.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSendContact} className="space-y-4">
                          <p className="text-xs text-slate-400 font-semibold">Enter your details to receive the full audit report as a PDF and schedule your 15-minute diagnostic call:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <input
                              type="text"
                              required
                              placeholder="Your Name"
                              value={contactName}
                              onChange={(e) => setContactName(e.target.value)}
                              className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-all"
                              id="invite-name-input"
                            />
                            <input
                              type="email"
                              required
                              placeholder="Your Email"
                              value={contactEmail}
                              onChange={(e) => setContactEmail(e.target.value)}
                              className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-all"
                              id="invite-email-input"
                            />
                            <input
                              type="tel"
                              required
                              placeholder="Phone / WhatsApp"
                              value={contactPhone}
                              onChange={(e) => setContactPhone(e.target.value)}
                              className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-all"
                              id="invite-phone-input"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-display font-black tracking-wider text-xs uppercase transition-all shadow-lg shadow-rose-900/30 flex items-center justify-center space-x-2 cursor-pointer"
                            id="invite-submit-btn"
                          >
                            <span>Speak to an AdLovers Specialist</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

                {/* Reset button to run another scan */}
                <button
                  onClick={() => setAuditResult(null)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200/70 border border-slate-200 rounded-2xl text-xs text-slate-600 transition-all font-display font-black cursor-pointer text-center flex items-center justify-center space-x-1"
                >
                  <span>Perform a New Company Audit</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
