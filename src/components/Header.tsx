import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  currentPage: "home" | "sleep" | "law" | "home-services";
  setPage: (page: "home" | "sleep" | "law" | "home-services") => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Header({ currentPage, setPage, onNavigateToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePageLinkClick = (pageId: "home" | "sleep" | "law" | "home-services") => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSectionLinkClick = (sectionId: string) => {
    setPage("home");
    setTimeout(() => {
      onNavigateToSection(sectionId);
    }, 100);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-rose-100/80 py-3 shadow-lg shadow-rose-100/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handlePageLinkClick("home")}
          >
            <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shadow-lg shadow-rose-200">
              <span className="font-display font-bold text-white text-xl">a</span>
            </div>
            <div>
              <span className="font-display font-black text-rose-600 tracking-tight text-xl">
                adlovers<span className="text-slate-900">.</span>
              </span>
              <span className="block text-[9px] text-slate-400 font-mono tracking-wider uppercase font-semibold">
                Relationship Marketing & RevOps
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handlePageLinkClick("home")}
              className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                currentPage === "home" ? "text-rose-600 bg-rose-50" : "text-slate-600 hover:text-rose-600 hover:bg-rose-50/60"
              }`}
            >
              Home
            </button>

            {/* Specialties Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1 ${
                  ["sleep", "law", "home-services"].includes(currentPage)
                    ? "text-rose-600 bg-rose-50"
                    : "text-slate-600 hover:text-rose-600 hover:bg-rose-50/60"
                }`}
              >
                <span>Specialties</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-0 mt-1 w-52 rounded-2xl bg-white border border-rose-100 shadow-xl py-2 z-50">
                  <button
                    onClick={() => {
                      handlePageLinkClick("sleep");
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider hover:bg-rose-50 hover:text-rose-600 transition-colors ${
                      currentPage === "sleep" ? "text-rose-600 bg-rose-50/40" : "text-slate-600"
                    }`}
                  >
                    Sleep Apnea
                  </button>
                  <button
                    onClick={() => {
                      handlePageLinkClick("law");
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider hover:bg-rose-50 hover:text-rose-600 transition-colors ${
                      currentPage === "law" ? "text-rose-600 bg-rose-50/40" : "text-slate-600"
                    }`}
                  >
                    Injury Law
                  </button>
                  <button
                    onClick={() => {
                      handlePageLinkClick("home-services");
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider hover:bg-rose-50 hover:text-rose-600 transition-colors ${
                      currentPage === "home-services" ? "text-rose-600 bg-rose-50/40" : "text-slate-600"
                    }`}
                  >
                    Home Services
                  </button>
                </div>
              )}
            </div>

            <span className="w-px h-4 bg-slate-200 mx-2" />

            <button
              onClick={() => handleSectionLinkClick("promise")}
              className="px-3 py-2 rounded-lg text-xs font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50/60 transition-all cursor-pointer uppercase tracking-wider"
            >
              The Promise
            </button>

            <button
              onClick={() => handleSectionLinkClick("revops")}
              className="px-3 py-2 rounded-lg text-xs font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50/60 transition-all cursor-pointer uppercase tracking-wider"
            >
              RevOps Hub
            </button>

            <button
              onClick={() => handleSectionLinkClick("pricing")}
              className="px-3 py-2 rounded-lg text-xs font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50/60 transition-all cursor-pointer uppercase tracking-wider"
            >
              Pricing
            </button>
          </nav>

          {/* Let's Meet CTA */}
          <div className="hidden xl:flex items-center space-x-3">
            <button
              onClick={() => handleSectionLinkClick("revops")}
              className="px-6 py-3 text-xs font-display font-black tracking-widest text-white uppercase rounded-full bg-rose-600 hover:bg-rose-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-rose-200"
            >
              Let's Meet for Coffee
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-rose-100 text-slate-700 hover:text-rose-600 bg-white transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-lg border-b border-rose-100 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          <div className="space-y-1">
            <button
              onClick={() => handlePageLinkClick("home")}
              className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all text-left ${
                currentPage === "home" ? "text-rose-600 bg-rose-50" : "text-slate-700 hover:text-rose-600 hover:bg-rose-50"
              }`}
            >
              Home
            </button>

            {/* Mobile Specialties Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all text-left text-slate-700 hover:text-rose-600 hover:bg-rose-50"
              >
                <span>Specialties</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "transform rotate-180" : ""}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 space-y-1 bg-rose-50/30 rounded-xl py-1 border-l-2 border-rose-100">
                  <button
                    onClick={() => handlePageLinkClick("sleep")}
                    className={`w-full flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-left ${
                      currentPage === "sleep" ? "text-rose-600 bg-rose-50" : "text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                    }`}
                  >
                    Sleep Apnea
                  </button>
                  <button
                    onClick={() => handlePageLinkClick("law")}
                    className={`w-full flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-left ${
                      currentPage === "law" ? "text-rose-600 bg-rose-50" : "text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                    }`}
                  >
                    Injury Law
                  </button>
                  <button
                    onClick={() => handlePageLinkClick("home-services")}
                    className={`w-full flex items-center px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-left ${
                      currentPage === "home-services" ? "text-rose-600 bg-rose-50" : "text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                    }`}
                  >
                    Home Services
                  </button>
                </div>
              )}
            </div>

            <div className="h-px bg-rose-100 my-2" />

            <button
              onClick={() => handleSectionLinkClick("promise")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all text-left uppercase tracking-wider"
            >
              The Promise
            </button>
            <button
              onClick={() => handleSectionLinkClick("revops")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all text-left uppercase tracking-wider"
            >
              RevOps Hub
            </button>
            <button
              onClick={() => handleSectionLinkClick("pricing")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all text-left uppercase tracking-wider"
            >
              Pricing
            </button>
          </div>
          <div className="pt-4 border-t border-rose-100">
            <button
              onClick={() => handleSectionLinkClick("revops")}
              className="w-full py-3.5 text-center text-xs font-display font-black tracking-widest text-white uppercase rounded-full bg-rose-600 shadow-lg shadow-rose-200"
            >
              Let's Meet for Coffee
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
