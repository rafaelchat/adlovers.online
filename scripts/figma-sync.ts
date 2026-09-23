import fs from "fs";
import path from "path";

/**
 * Figma to Code Bridge Helper for AdLovers
 * 
 * This module enables seamless translation from Figma design URLs / Frames
 * into production-ready React + Tailwind components and pages.
 * 
 * Usage from Chat:
 * Simply share a Figma link like:
 * https://www.figma.com/design/<fileKey>/<title>?node-id=<nodeId>
 * and ask: "Create a page from this Figma frame"
 */

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  fills?: any[];
  strokes?: any[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  style?: {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: number;
    textAlignHorizontal?: string;
    lineHeightPx?: number;
  };
  characters?: string;
  layoutMode?: "HORIZONTAL" | "VERTICAL" | "NONE";
  primaryAxisAlignItems?: string;
  counterAxisAlignItems?: string;
  itemSpacing?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export function parseFigmaUrl(url: string): { fileKey: string; nodeId?: string } | null {
  try {
    const match = url.match(/figma\.com\/(?:file|design)\/([a-zA-Z0-9]+)(?:\/[^?#]*)?(?:\?[^#]*node-id=([a-zA-Z0-9%:-]+))?/);
    if (!match) return null;
    return {
      fileKey: match[1],
      nodeId: match[2] ? decodeURIComponent(match[2]).replace("-", ":") : undefined
    };
  } catch (e) {
    return null;
  }
}

export function generatePageBoilerplate(pageName: string, title: string, subtitle: string) {
  const componentName = pageName.endsWith("Page") ? pageName : `${pageName}Page`;
  return `import React from "react";
import { ArrowLeft, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

interface ${componentName}Props {
  onBack?: () => void;
  onBookCall?: () => void;
}

export default function ${componentName}({ onBack, onBookCall }: ${componentName}Props) {
  return (
    <div className="min-h-screen bg-rose-50/20 text-slate-900 pb-24">
      {/* Top Banner Navigation */}
      <nav className="border-b border-rose-100 bg-white/80 backdrop-blur-md sticky top-0 z-30 px-4 py-4 sm:px-8 flex items-center justify-between">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-600 hover:text-rose-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Overview</span>
          </button>
        )}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
            Figma Live Synced Component
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-100/60 text-rose-700 text-xs font-mono font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Productized Google Ads Specialist</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-tight">
          ${title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          ${subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookCall}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-rose-200/50 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Claim Free 15-Min Strategy Audit</span>
          </button>
        </div>
      </header>

      {/* Main Section Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Placeholder for imported Figma components */}
        <section className="bg-white border border-rose-100 rounded-[32px] p-8 sm:p-12 shadow-xl shadow-rose-100/20">
          <h2 className="text-2xl font-display font-black text-slate-900 mb-4">
            Specialized High-Intent Search Architecture
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
            Designed to capture high-ticket clients with absolute budget efficiency and zero traditional agency overhead.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-rose-100">
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="font-mono text-xs font-black text-rose-600 block mb-1">01. Precision Targeting</span>
              <p className="text-xs text-slate-600 font-semibold">Exclusively high-intent keywords with aggressive negative term filtering.</p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="font-mono text-xs font-black text-rose-600 block mb-1">02. Direct Conversions</span>
              <p className="text-xs text-slate-600 font-semibold">Pre-qualification forms and call tracking directly connected to your phone.</p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="font-mono text-xs font-black text-rose-600 block mb-1">03. 100% Asset Ownership</span>
              <p className="text-xs text-slate-600 font-semibold">You own the Google Ads account, the conversions data, and the tracking pixels.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}
