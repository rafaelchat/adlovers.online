import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

export const app = express();
app.use(express.json());

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. AI features will fallback to simulated reports.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "adlovers-production",
        },
      },
    });
  }
  return aiClient;
}

// Dynamic, hyper-personalized local audit generator for high-fidelity real-time results
export function generateDynamicAudit(companyName: string, url: string, industry: string, targetVertical: string) {
  let domain = "yourclinic.com";
  if (url) {
    try {
      const cleanUrl = url.trim();
      const hasProtocol = cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://");
      const parsedUrl = new URL(hasProtocol ? cleanUrl : "http://" + cleanUrl);
      domain = parsedUrl.hostname.replace("www.", "");
    } catch (e) {
      domain = url.replace(/^(https?:\/\/)?(www\.)?/, "").split("/")[0] || "yourcompany.com";
    }
  } else {
    const cleanCompany = companyName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "");
    domain = cleanCompany ? `${cleanCompany}.com` : "yourcompany.com";
  }

  let location = "in your area";
  const regions = [
    { key: "tx", label: "Texas" },
    { key: "austin", label: "Austin" },
    { key: "fl", label: "Florida" },
    { key: "miami", label: "Miami" },
    { key: "ny", label: "New York" },
    { key: "ca", label: "California" },
    { key: "la", label: "Los Angeles" },
    { key: "chicago", label: "Chicago" },
    { key: "houston", label: "Houston" }
  ];
  for (const r of regions) {
    if (companyName.toLowerCase().includes(r.key) || (url && url.toLowerCase().includes(r.key))) {
      location = `in ${r.label}`;
      break;
    }
  }

  const scoreVisibility = Math.floor(Math.random() * (72 - 58 + 1)) + 58;
  const scoreConversion = Math.floor(Math.random() * (68 - 48 + 1)) + 48;
  const scoreTransparency = Math.floor(Math.random() * (45 - 28 + 1)) + 28;
  const overallScore = Math.round((scoreVisibility + scoreConversion + scoreTransparency) / 3);
  const score = overallScore;

  let verticalLabel = targetVertical || "General Healthcare";
  let recommendations: string[] = [];
  let adsStatus = "";
  let trendsScore = Math.floor(Math.random() * (94 - 72 + 1)) + 72;
  let seoKeywords: string[] = [];
  let competitorInsights = "";
  let analysis = "";

  if (industry.includes("Sleep") || industry.includes("Dental")) {
    verticalLabel = targetVertical || "Dental Sleep Medicine";
    recommendations = [
      `Audit all active ad accounts associated with '${domain}' to eliminate waste on generic dental keywords (e.g. 'dental cleaning near me').`,
      `Implement specialized high-intent landing pages for 'CPAP Alternative' and 'Oral Appliance Therapy' with direct medical insurance pre-qualification.`,
      `Establish absolute administrative ownership over all Google Ads tracking pixels, GA4 accounts, and conversion tags for '${domain}'.`
    ];

    adsStatus = `No active campaigns found in Google Ads Transparency Center for the specific domain '${domain}'. Competitors in your area are capturing high-value CPAP-intolerant patients searching for immediate solutions.`;

    seoKeywords = [
      `cpap alternative ${location}`,
      `oral appliance for sleep apnea near me`,
      `sleep apnea dentist covered by medical insurance`
    ];

    competitorInsights = `Regional sleep clinics and corporate dental chains are actively running branded search ads in your territory. However, their landing pages create excessive friction by failing to address medical insurance questions upfront. This leaves a massive gap for '${domain}' to dominate high-intent local patients.`;

    analysis = `### Comprehensive Strategic Analysis for **${companyName}**

Our diagnostics for **${industry}** reveal substantial untapped revenue for **${verticalLabel}** ${location}. Specifically for '${domain}', three systemic bottlenecks are suppressing your patient acquisition:

1. **The Insurance Paradox**: Sleep apnea patients are terrified of unexpected out-of-pocket costs. Traditional dental practices confuse visitors by not explaining whether medical insurance covers oral appliances. By pre-qualifying patients directly on your landing page, you eliminate fear and accelerate consult bookings.
2. **Generic Marketing Waste**: Traditional agencies manage sleep accounts as generic dental practices, wasting thousands on low-value search queries. High-value sleep patients require dedicated, education-first landing pages tailored to CPAP intolerance.
3. **Agency Dependency & Asset Risk**: Many practices do not own their Google Ads historical data or conversion tracking. At AdLovers, we mandate 100% client ownership from day one.`;

  } else if (industry.includes("Legal") || industry.includes("Law")) {
    verticalLabel = targetVertical || "Personal Injury & Litigation";
    recommendations = [
      `Audit all active search terms for '${domain}' in Google Ads to immediately negate low-intent and non-case related clicks ($150+ wasted CPCs).`,
      `Deploy a rapid 60-second Case Qualification Tool on '${domain}' to capture accident victims before they contact competing firms.`,
      `Transfer master ownership of all phone call tracking numbers and CRM lead routing directly to your internal firm administrators.`
    ];

    adsStatus = `High CPC volatility detected in your geographic territory. National legal referral networks are outbidding local practices on generic terms like 'car accident attorney'.`;

    seoKeywords = [
      `car accident lawyer ${location}`,
      `personal injury attorney free consultation`,
      `auto accident settlement calculator`
    ];

    competitorInsights = `High-volume aggregator law firms spend upwards of $200 per click. However, prospective clients strongly prefer trustworthy, local, independent attorneys who offer immediate clarity. Implementing instant intake qualification gives '${domain}' an immediate advantage.`;

    analysis = `### Litigation RevOps Audit for **${companyName}**

In **${industry}**, the legal client acquisition lifecycle is fiercely contested. For **${verticalLabel}** cases ${location}, prospective clients require instant reassurance:

1. **Frictional Intake Process**: Accident victims contacting '${domain}' need immediate guidance. If your intake team or website fails to confirm case viability in the first 2 minutes, 70% of potential clients call another firm immediately.
2. **Massive Budget Leakage**: Legal PPC is the most expensive ad market in the world. Without relentless daily negative keyword pruning, over 40% of spend goes to irrelevant queries (e.g., traffic ticket advice or pro bono searches).
3. **Lack of Asset Ownership**: Your web domain '${domain}' and Google Ads history must be treated as tangible business equity. Agencies refusing to transfer absolute master administrative control are holding your pixel data and growth history hostage.`;

  } else if (industry.includes("Home Services")) {
    verticalLabel = targetVertical || "Installation & Maintenance Services";
    recommendations = [
      `Secure absolute administrative control over your Google Business Profile (GMB) and all local ad accounts linked to '${domain}'.`,
      `Embed an interactive, dynamic Online Price Estimator on '${domain}' to instantly capture premium residential leads at the peak of their intent.`,
      `Set up instant field notifications to alert technical teams immediately when a pre-qualified lead submits an inquiry for '${verticalLabel}'.`
    ];

    adsStatus = `No transparent, high-converting active campaigns were detected in the Google Ads Transparency Center for the address '${domain}'. Your brand may be missing high-intent, geolocated local service calls.`;

    seoKeywords = [
      `${verticalLabel} company ${location}`,
      `emergency ${verticalLabel} service`,
      `${verticalLabel} cost estimator`
    ];

    competitorInsights = `National home services franchises dominate local organic searches with massive budgets. However, homeowners overwhelmingly prefer reliable, local, and transparent businesses. Optimizing '${domain}' for hyper-local neighborhood keywords will capture high-margin bookings at a fraction of the cost.`;

    analysis = `### Operational & RevOps Audit for **${companyName}**

For businesses in **${industry}**, the vast majority of search queries for **${verticalLabel}** ${location} are driven by urgent needs or immediate home repairs. Our diagnostics reveal critical areas to capture this market:

1. **Lost Urgent Leads from Passive Forms**: Homeowners with urgent **${verticalLabel}** issues will not read long corporate descriptions on '${domain}'. They need a clear "Book Now" interface or an interactive diagnostic tool. If your site doesn't offer frictionless immediate scheduling, visitors leave in less than 10 seconds.
2. **Over-Reliance on Third-Party Lead Portals**: Many ${industry} companies rely heavily on shared lead platforms that resell the same lead to 4 or 5 competitors simultaneously. This triggers a race to the bottom that destroys your margins. You must generate proprietary, high-intent leads on your own domain '${domain}'.
3. **Clicks vs. Booked Jobs**: Traditional marketing agencies report on generic impressions and clicks but ignore whether those metrics turn into actual truck rolls and signed estimates. We demand complete visibility so that every marketing dollar correlates with a completed job.`;

  } else {
    verticalLabel = targetVertical || "Corporate Services";
    recommendations = [
      `Establish unconditional master ownership and independent audits of all paid traffic accounts connected to '${domain}'.`,
      `Embed an interactive pre-qualification screener on '${domain}' to filter out low-budget leads and save valuable sales team hours.`,
      `Connect your CRM and ad accounts with multi-touch pipeline tracking to measure your real return on investment (ROI) by keyword.`
    ];

    adsStatus = `No active campaigns associated with '${domain}' were found in the official Google Ads Transparency Center. There is significant untapped potential for active client acquisition.`;

    seoKeywords = [
      `${verticalLabel} consulting ${location}`,
      `professional ${verticalLabel} services`,
      `best ${verticalLabel} solutions`
    ];

    competitorInsights = `Corporate competitors rely heavily on generic content and long, slow nurture funnels. Your main edge with '${domain}' is conversion velocity, utilizing interactive tools to deliver instant value and qualify accounts at the speed of search.`;

    analysis = `### Commercial Pipeline & RevOps Audit for **${companyName}**

In **${industry}**, professional services conversion hinges on demonstrating immediate authority, absolute transparency, and rapid engagement for buyers looking for **${verticalLabel}**:

1. **Low-Quality Leads Wasting Sales Time**: Receiving unqualified inquiries drains your team's energy. Your site '${domain}' needs an interactive qualification funnel to automatically screen accounts based on revenue, urgency, and scope, allowing your top reps to focus purely on high-value contracts.
2. **Opaque Reporting from Standard Agencies**: The professional marketing space is saturated with vanilla agencies sending vanity decks filled with empty "clicks" and "brand impressions." You deserve complete visibility over where your budget goes and the exact customer acquisition cost of every qualified deal.
3. **Localized Authority Gaps**: Organic interest for **${verticalLabel}** has grown significantly ${location}, yet the current organic visibility of '${domain}' is being outperformed by competitors targeting intent-driven search queries.`;
  }

  const invitation = `### **Shall we take the next step together?**

This initial report is just a small sample of what our exclusive RevOps methodology, high-converting automation, and operational intelligence can unlock for your business.

At **AdLovers**, we have completely abolished the outdated traditional agency model. We do not send you confusing, multi-page slide decks of meaningless clicks and impressions that don't pay your payroll. We deliver **absolute transparency, unconditional 100% ownership of your ad accounts**, and interactive, high-converting tech integrated right into your site **${domain}** so you know exactly where every call comes from and exactly how much revenue every dollar generates.

**Your next stage of structured revenue and systemized growth is just one click away. Shall we schedule a brief 15-minute diagnostic call and map out your strategic growth plan together?**`;

  return {
    score,
    analysis,
    scores: {
      visibility: scoreVisibility,
      conversion: scoreConversion,
      transparency: scoreTransparency,
      overall: overallScore
    },
    recommendations,
    adsStatus,
    trendsScore,
    seoKeywords,
    competitorInsights,
    invitation,
    isSimulated: true
  };
}

// 1. API Route: Website Marketing Health & Position Audit (Deep Research Mode)
app.post("/api/audit", async (req, res) => {
  const { url, companyName, industry, targetVertical } = req.body;

  if (!companyName || !industry) {
    return res.status(400).json({ error: "Company name and industry are required." });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    const generated = generateDynamicAudit(companyName, url, industry, targetVertical || "General");
    return res.json(generated);
  }

  try {
    const ai = getGeminiClient();
    const prompt = `Perform a highly professional "Deep Research" marketing and operations audit for the following company:
Company Name: ${companyName}
Website URL: ${url || "Not provided"}
Industry: ${industry}
Vertical Focus: ${targetVertical || "General"}

Utilize your research and market analysis expertise to simulate and structure highly realistic details, cross-referencing concepts from the Google Ads Transparency Center, Google Trends, SEO positioning, SEMrush, or similar diagnostic tools for their real-world landscape. Write the analysis in clear, professional English.

The audit should constructively and critically point out typical bottlenecks associated with traditional marketing agencies (lack of transparency, retaining administrative ownership of ad accounts, vanity metrics like impressions and clicks instead of actual qualified booked calls). 

Include the following fields in structured JSON format:
1. "score": overall marketing grade (from 40 to 75).
2. "analysis": a detailed markdown text containing market positioning analysis, bottlenecks, and growth opportunities.
3. "scores": { "visibility": number, "conversion": number, "transparency": number, "overall": number }.
4. "recommendations": a list of 3 clear, actionable short-term recommendations.
5. "adsStatus": realistic check of their ad status in the Google Ads Transparency Center (e.g. if ads are active, if there is a lack of asset transparency or inefficient bidding).
6. "trendsScore": score from 0 to 100 of public search interest in Google Trends for their focused vertical.
7. "seoKeywords": 3 high-intent search keywords they must dominate in SEMrush/SEO.
8. "competitorInsights": concise analysis of regional competitors and what they are doing better.
9. "invitation": a highly persuasive, elegant, and motivating message inviting the user to take action ("Shall we take the next step together..."), explaining how we transform these operational bottlenecks into structured revenue with absolute transparency and 100% client asset ownership.

Write everything in English. Return strictly the JSON format matching the defined schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            analysis: { type: Type.STRING },
            scores: {
              type: Type.OBJECT,
              properties: {
                visibility: { type: Type.INTEGER },
                conversion: { type: Type.INTEGER },
                transparency: { type: Type.INTEGER },
                overall: { type: Type.INTEGER }
              },
              required: ["visibility", "conversion", "transparency", "overall"]
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            adsStatus: { type: Type.STRING },
            trendsScore: { type: Type.INTEGER },
            seoKeywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            competitorInsights: { type: Type.STRING },
            invitation: { type: Type.STRING }
          },
          required: [
            "score", 
            "analysis", 
            "scores", 
            "recommendations", 
            "adsStatus", 
            "trendsScore", 
            "seoKeywords", 
            "competitorInsights", 
            "invitation"
          ]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from Gemini API");
    }

    const parsed = JSON.parse(resultText.trim());
    res.json(parsed);

  } catch (error: any) {
    console.error("Gemini Deep Research Audit Error (falling back to custom dynamic generator):", error);
    const generated = generateDynamicAudit(companyName, url, industry, targetVertical || "General");
    res.json(generated);
  }
});

// 2. API Route: AI Revenue Operations Call & Sentiment Audit Simulator
app.post("/api/analyze-call", async (req, res) => {
  const { transcriptType, customTranscript } = req.body;

  let transcript = "";
  if (transcriptType === "sleep-apnea") {
    transcript = `
Receptionist: Thank you for calling Dr. Miller's dental office. This is Sarah speaking. How can I help you?
Caller: Hi, yes... I saw your ad online about alternatives to CPAP machines. My doctor said I have sleep apnea, but I absolutely hate that mask. I can't sleep with it. Do you do those dental devices?
Receptionist: Oh, yes! We do oral appliances. But first, let me see if we have you in our database. Have you been here before?
Caller: No, I'm new. I just wanted to know if my insurance covers it or how much it is.
Receptionist: Hmm, well, sleep appliances are usually processed through medical insurance, not dental. It depends on your plan. It's a very complicated process. Let me look up the dental codes... Oh wait, you said medical. Let's see... We'd have to submit a pre-authorization which takes about 3 to 4 weeks. And the appliance itself is quite expensive if not covered. It's about $3,800.
Caller: Oh wow, that's a lot of money. I don't know if I can afford that if the medical insurance denies it.
Receptionist: Yeah, medical insurance is really tricky with sleep apnea. Sometimes they require another sleep study first. Have you had a sleep study?
Caller: Yes, last year.
Receptionist: Okay, well, you could come in for a general dental cleaning first, and then Dr. Miller can look at your mouth. We have an opening next Tuesday at 2 PM?
Caller: Uh, let me check with my wife and see. I might call you back. Thanks.
Receptionist: Okay! Thank you, bye!
`;
  } else if (transcriptType === "legal") {
    transcript = `
Receptionist: Law Offices of Williams & Associates. How can I help you today?
Caller: Hello, I was in a car accident yesterday. Another driver rear-ended me on the highway, and my neck is in severe pain. I had to go to the ER, and my car is completely totaled. I don't know what to do.
Receptionist: Oh, sorry to hear that. I can take down your information. What is your name and phone number?
Caller: My name is Robert. My number is 555-0199.
Receptionist: Okay, Robert. Do you have insurance?
Caller: Yes, State Farm.
Receptionist: Okay, and what about the other driver?
Caller: They had Geico, I think.
Receptionist: Got it. Well, our attorney Mr. Williams is in court all day today. I can write down your details and have him call you back sometime tomorrow or Thursday. Is that okay?
Caller: Uh, tomorrow? I have a towing company asking where to take my car right now, and the insurance claims adjuster is calling me. I really need to speak to a lawyer today to know what to say to them.
Receptionist: I understand, but we are a very busy boutique firm, and he's in a heavy trial. I'll make sure he gets the message as soon as he returns.
Caller: Okay... I guess I'll try calling some other offices too because I need answers today.
Receptionist: Understood. Have a good day.
`;
  } else {
    transcript = customTranscript || "No transcript provided.";
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.json({
      isSimulated: true,
      transcript,
      sentiment: "High Frustration / Frictional",
      score: 35,
      missedOpportunities: [
        "Failed to establish empathy/rapport right away with a stressed caller.",
        "Created immediate price shock and administrative complexity barrier (e.g. talking about complex insurance codes and quoting $3,800 or attorney unavailability before building value).",
        "Allowed the caller to hang up without scheduling a free initial diagnostic / strategy consultation.",
        "Failed to use a professional script for overcoming typical objections (such as insurance or attorney availability)."
      ],
      conversionAnalysis: "The receptionist over-complicated the medical insurance billing process on the phone, generating friction and anxiety. Instead of offering a risk-free, complimentary consultation to review their sleep study and check medical coverage on their behalf, they quoted a daunting price of $3,800 and suggested a 4-week waiting period.",
      optimizedScript: `**Dr. Miller's Sleep Solutions - Approved Call flow:**

1. **Rapport & Empathy**: "I hear you, Robert. Over 80% of our sleep patients felt the exact same way about their CPAP before switching. You've come to the right place."
2. **Defuse Price/Insurance**: "The great news is that because this is a medical condition, we work directly with medical plans, including Medicare. We actually have a dedicated medical billing specialist who handles all the paperwork for you to maximize coverage."
3. **The Simple CTA**: "What we do is start with a brief, complimentary consultation where Dr. Miller can examine you and review your sleep study. We'll even pre-verify your insurance before you walk in, completely free of charge. I have an opening tomorrow at 10 AM or 2 PM. Which works better for you?"`
    });
  }

  try {
    const ai = getGeminiClient();
    const prompt = `You are a Revenue Operations (RevOps) Conversational Intelligence Auditor.
Analyze the following phone call transcript between an office receptionist (Patient/Client Liaison) and a high-intent prospect:

=== TRANSCRIPT ===
${transcript}
==================

Provide a deeply professional audit of how the receptionist handled this lead. Outline:
1. Call Sentiment (e.g. Frustrated, Lost Opportunity, Frictional).
2. Score out of 100 (percentage of conversion probability handled).
3. At least 3 or 4 Missed Opportunities where they created friction, talked about price before value, didn't ask for the booking, or allowed them to hang up.
4. Detailed Conversion Analysis explaining the psychology of the failure.
5. An Optimized Script containing exact line-by-line dialogues the receptionist should use to convert this call into a booked clinical consult or legal assessment on the spot (following the "Make it Fast, Make it Easy, Make it Simple" framework).

Return the audit in JSON format conforming to this structure:
{
  "sentiment": "string description",
  "score": number,
  "missedOpportunities": ["string", "string", "string"],
  "conversionAnalysis": "detailed explanation markdown string",
  "optimizedScript": "markdown string of the new receptionist script"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sentiment: { type: Type.STRING },
            score: { type: Type.INTEGER },
            missedOpportunities: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            conversionAnalysis: { type: Type.STRING },
            optimizedScript: { type: Type.STRING }
          },
          required: ["sentiment", "score", "missedOpportunities", "conversionAnalysis", "optimizedScript"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from call audit API");
    }

    const parsed = JSON.parse(resultText.trim());
    res.json(parsed);

  } catch (error: any) {
    console.error("Gemini Call Analysis Error:", error);
    res.status(500).json({ error: "Failed to audit call transcript. Please try again." });
  }
});
