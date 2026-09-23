export interface AuditResult {
  score: number;
  analysis: string;
  scores: {
    visibility: number;
    conversion: number;
    transparency: number;
    overall: number;
  };
  recommendations: string[];
  isSimulated?: boolean;
  adsStatus?: string;
  trendsScore?: number;
  seoKeywords?: string[];
  competitorInsights?: string;
  invitation?: string;
}

export interface CallAuditResult {
  sentiment: string;
  score: number;
  missedOpportunities: string[];
  conversionAnalysis: string;
  optimizedScript: string;
  isSimulated?: boolean;
}

export interface Playbook {
  id: string;
  name: string;
  price: string;
  period: string;
  target: string;
  description: string;
  features: string[];
  isDecoy?: boolean;
  tag?: string;
}

export interface VerticalInfo {
  id: string;
  title: string;
  subtitle: string;
  heroText: string;
  quote: string;
  quoteAuthor: string;
  painPoints: string[];
  solutions: string[];
  caseStudy: {
    client: string;
    metrics: string;
    result: string;
  };
}
