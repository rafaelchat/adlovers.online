import { Shield, Mail, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-display font-black text-base shadow-md shadow-rose-900/40">
                a
              </div>
              <span className="font-display font-black text-white text-xl tracking-tight">
                adlovers<span className="text-rose-500">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-medium">
              Independent, senior Google Ads consultancy for US small businesses and solo specialists. 
              Zero agency overhead, no 6-month lock-in contracts, 100% transparent asset ownership.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Dedicated Solo Specialist Model</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-slate-200">
              Explore
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#comparison" className="hover:text-rose-400 transition-colors">Why Solo vs Agency</a></li>
              <li><a href="#calculator" className="hover:text-rose-400 transition-colors">Ad Waste Calculator</a></li>
              <li><a href="#pricing" className="hover:text-rose-400 transition-colors">Flat Pricing ($297–$497)</a></li>
              <li><a href="#audit-form" className="hover:text-rose-400 transition-colors">Free Video Loom Audit</a></li>
            </ul>
          </div>

          {/* Guarantees */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-slate-200">
              Guarantees
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>✓ Month-to-Month Retainers</li>
              <li>✓ You Own 100% of Your Account</li>
              <li>✓ Ad Spend Directly on Your Card</li>
              <li>✓ Daily Negative Pruning</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} AdLovers. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Built for High-ROI US Businesses</span>
            <span>•</span>
            <span>No Agency Fluff</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
