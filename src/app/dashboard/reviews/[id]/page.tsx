"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, DownloadCloud, BrainCircuit, Activity, TrendingUp, FileText, Target } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReviewDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [extractedText, setExtractedText] = useState("");
  const [resumeName, setResumeName] = useState("");

  useEffect(() => {
    if (id === "new") {
      setExtractedText(localStorage.getItem("uploadedResumeText") || "");
      setResumeName(localStorage.getItem("uploadedResumeName") || "Resume");
    }
  }, [id]);
  
  if (id === "new" && extractedText) {
    return (
      <div className="space-y-8 pb-12 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Original Resume Data</h1>
          <p className="text-zinc-400 text-center max-w-2xl">
            Successfully extracted text from <span className="text-white font-medium">{resumeName}</span>. 
            AI Analysis is pending backend integration (Phase 3).
          </p>
        </div>

        <Card className="bg-[#12121A] border-zinc-800/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-purple-400" />
              Raw Extracted Text
            </h3>
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm whitespace-pre-wrap max-h-[600px] overflow-y-auto leading-relaxed">
              {extractedText}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      {/* Top ATS Score Section */}
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" className="text-zinc-800" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="276" strokeDashoffset="33.12" className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold">88<span className="text-2xl">%</span></span>
            <span className="text-[10px] md:text-xs text-zinc-400 font-semibold uppercase tracking-widest mt-1">ATS Match Score</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Senior Product Designer Analysis</h1>
        <p className="text-zinc-400 text-sm md:text-base text-center max-w-2xl">
          Your profile is highly competitive for Tier-1 tech firms. We've identified 3 critical optimizations to reach the 95th percentile.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Strengths & Weaknesses */}
        <div className="space-y-6">
          <Card className="bg-[#12121A] border-zinc-800/50">
            <CardContent className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Key Strengths
              </h3>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-cyan-400/70" /></div>
                  <div>
                    <h4 className="font-semibold text-zinc-200 text-sm mb-1">Technical Architecture Alignment</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Strong evidence of systems thinking and design-to-dev handoff processes.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-cyan-400/70" /></div>
                  <div>
                    <h4 className="font-semibold text-zinc-200 text-sm mb-1">Quantifiable Impact</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Data-driven bullet points showcase clear ROI on past design initiatives.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#12121A] border-zinc-800/50">
            <CardContent className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                Areas to Improve
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-orange-500/20 bg-orange-500/5">
                  <h4 className="font-semibold text-zinc-200 text-sm mb-1">Keywords Density: Low</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Missing terms: "Stakeholder Management", "Heuristic Evaluation", "A/B Testing".
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
                  <h4 className="font-semibold text-zinc-200 text-sm mb-1">Case Study Structure</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The 'Outcome' section of your third project is too brief. Expand on user feedback.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Portfolio Audit */}
        <div className="space-y-6">
          <Card className="bg-[#12121A] border-zinc-800/50 h-full flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white">Portfolio Audit</h3>
                <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                  Live Preview
                </span>
              </div>
              
              <div className="w-full h-40 md:h-48 rounded-lg bg-zinc-900 border border-zinc-800 mb-6 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black pointer-events-none" />
                <div className="text-zinc-600 font-mono text-sm group-hover:scale-105 transition-transform duration-500 z-10">
                  alex-designer.dev
                </div>
                <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 transition-colors rounded-lg pointer-events-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <div className="text-[10px] font-bold text-purple-400 tracking-wider mb-2">UI VIBE CHECK</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    High-fidelity execution. Color palette is on-trend with developer-luxe aesthetics. <span className="text-white font-semibold">9.5/10</span>
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <div className="text-[10px] font-bold text-cyan-400 tracking-wider mb-2">ACCESSIBILITY</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Contrast ratio on secondary buttons is slightly below WCAG 2.1 AA standards. Recommend adjustment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Career Coach Advice */}
      <Card className="bg-[#12121A] border-zinc-800/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-zinc-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">AI Career Coach<br/>Advice</h3>
              </div>
              <p className="text-sm text-zinc-400 italic leading-relaxed">
                "You are at a pivot point. Your skills are sharp, but your storytelling needs that final 10% refinement to land Lead roles."
              </p>
            </div>
            
            <div className="p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-zinc-800/50 relative">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-bold text-cyan-400 tracking-wider">IMMEDIATE ACTION</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Update resume keywords within the next 24 hours.</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Focus on integrating 'Cross-functional Collaboration' and 'Design Systems Governance' into your latest role.
              </p>
            </div>
            
            <div className="p-8 md:w-1/3 relative">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-bold text-purple-400 tracking-wider">LONG-TERM GROWTH</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Develop a public-facing design case study video.</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Narrating your process builds more trust for Lead-level hiring managers than static PDFs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Bottom Bar */}
      <div className="flex items-center justify-between mt-12 border-t border-zinc-800/50 pt-6">
        <div className="flex gap-4 text-xs text-zinc-500">
          <span>CareerAI</span>
          <span>© 2024 CareerAI. Wasee</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xs text-zinc-500">Privacy Policy</span>
          <Button className="bg-purple-200 hover:bg-purple-300 text-purple-900 rounded-lg px-6 h-10 shadow-[0_0_15px_rgba(216,180,254,0.2)] font-semibold">
            <DownloadCloud className="w-4 h-4 mr-2" /> Download Full PDF Report
          </Button>
        </div>
      </div>
    </div>
  );
}
