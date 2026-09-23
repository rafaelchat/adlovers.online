import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Header({ onNavigateToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3.5 shadow-2xl shadow-black/40"
          : "bg-slate-950/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick("hero")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-600/30 group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-xl">a</span>
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-black text-white tracking-tight text-xl">
                  adlovers<span className="text-rose-500">.</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                  Solo PPC
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 block -mt-1">
                Zero Agency Overhead
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("comparison")}
              className="text-xs font-mono font-semibold text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
            >
              Why Solo vs. Agency
            </button>
            <button
              onClick={() => handleNavClick("calculator")}
              className="text-xs font-mono font-semibold text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
            >
              Ad Waste Calculator
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="text-xs font-mono font-semibold text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
            >
              Flat Pricing ($297–$497)
            </button>
            <button
              onClick={() => handleNavClick("guarantees")}
              className="text-xs font-mono font-semibold text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
            >
              No-Contract Guarantee
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick("audit-form")}
              className="text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Get Free 5-Min Audit
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-900/40 flex items-center space-x-2 cursor-pointer"
            >
              <span>View Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-3 font-mono text-sm">
            <button
              onClick={() => handleNavClick("comparison")}
              className="block w-full text-left py-2 text-slate-300 hover:text-rose-400"
            >
              Why Solo vs. Agency
            </button>
            <button
              onClick={() => handleNavClick("calculator")}
              className="block w-full text-left py-2 text-slate-300 hover:text-rose-400"
            >
              Ad Waste Calculator
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="block w-full text-left py-2 text-slate-300 hover:text-rose-400"
            >
              Flat Pricing ($297–$497)
            </button>
            <button
              onClick={() => handleNavClick("guarantees")}
              className="block w-full text-left py-2 text-slate-300 hover:text-rose-400"
            >
              No-Contract Guarantee
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => handleNavClick("audit-form")}
              className="w-full py-3 rounded-full bg-slate-900 text-slate-200 border border-slate-800 font-mono text-xs font-bold text-center"
            >
              Request Free Audit
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="w-full py-3 rounded-full bg-rose-600 text-white font-display font-black text-xs uppercase tracking-wider text-center shadow-lg shadow-rose-950/50"
            >
              See Pricing ($297–$497)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
