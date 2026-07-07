import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, UploadCloud, FileText, Target, Presentation, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FileUploadDropzone } from "@/components/FileUploadDropzone";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white overflow-hidden relative selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navbar */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-lg">
            C
          </div>
          <span className="font-bold text-xl tracking-tight">CareerAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#workflow" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Log in
          </Link>
          <Link href="/signup">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-24 pb-20 text-center max-w-4xl">
          <Badge variant="outline" className="mb-8 border-purple-500/30 bg-purple-500/10 text-purple-300 py-1.5 px-4 rounded-full">
            ✨ CareerPulse AI v2.4 Now Live
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Land Your Dream Job with AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Precision</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Optimize your career journey with industry-leading ATS analysis, professional resume auditing, and real-time recruiter feedback powered by advanced CareerPulse AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full px-8 h-12 w-full sm:w-auto text-base">
                Start Free Review
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 w-full sm:w-auto border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-base">
                View Sample Report <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Preview Card */}
        <section className="container mx-auto px-6 pb-32">
          <div className="max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-2xl">
            <div className="bg-[#12121A] rounded-xl p-8 border border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 ml-4">CAREERPULSE ANALYTICS — V2.4</span>
                </div>
                
                <h3 className="text-xl font-medium text-zinc-100">Comprehensive ATS Analysis</h3>
                <p className="text-sm text-zinc-400 max-w-sm">
                  Our engine parses your documents against 500+ recruiter keywords and industry standards to ensure you pass the initial screening every single time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    Keyword Density Match: 98%
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    Formatting Compliance: Perfect
                  </div>
                </div>
              </div>
              
              <div className="w-40 h-40 rounded-full border-8 border-zinc-800 flex items-center justify-center relative">
                {/* Simulated circular progress ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8" className="text-zinc-800" />
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="289" strokeDashoffset="31.79" className="text-purple-500" strokeLinecap="round" />
                </svg>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">89</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">ATS Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-20 border-t border-zinc-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Smarter Career Tools</h2>
            <p className="text-zinc-400">Built for professionals who demand excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-[#12121A] border-zinc-800/50 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">ATS Optimization</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Instantly check your resume against modern Applicant Tracking Systems to ensure visibility to human recruiters.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#12121A] border-zinc-800/50 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Resume Review</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Deep-dive structural analysis using AI models trained on successful placements at top tech and finance firms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#12121A] border-zinc-800/50 hover:border-teal-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400">
                  <Presentation className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Portfolio Review</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Get visual and content-based feedback on your personal projects and design portfolios from our AI curator.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="container mx-auto px-6 py-32 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The Blueprint to <br/><span className="text-purple-400">Success</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-md">
                Our streamlined workflow takes you from "Application Sent" to "Offer Accepted" in half the time of traditional job searching.
              </p>
              
              <div className="mt-8">
                <FileUploadDropzone />
              </div>
            </div>
            
            <div className="flex-1 space-y-12">
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10">1</div>
                  <div className="w-px h-full bg-zinc-800 absolute top-8 bottom-0 -z-10" style={{ left: "15.5px" }}></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold mb-2">Upload Profile</h3>
                  <p className="text-sm text-zinc-400 mb-6">Securely upload your resume, cover letter, or portfolio. We support PDF, DOCX, and live URLs.</p>
                  <div className="h-40 rounded-lg bg-zinc-900 border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                     {/* Placeholder for mock UI */}
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-50"></div>
                     <span className="text-xs font-mono text-zinc-600">UI Preview</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10">2</div>
                  <div className="w-px h-full bg-zinc-800 absolute top-8 bottom-0 -z-10" style={{ left: "15.5px" }}></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold mb-2">AI Diagnosis</h3>
                  <p className="text-sm text-zinc-400 mb-6">Our neural networks scan for missing skills, keyword gaps, and formatting errors that trigger ATS rejections.</p>
                  <div className="h-40 rounded-lg bg-zinc-900 border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                     {/* Placeholder for mock UI */}
                     <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-50"></div>
                     <span className="text-xs font-mono text-zinc-600">Neural Network Vis</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold z-10">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recruiter Insight</h3>
                  <p className="text-sm text-zinc-400 mb-6">Get a final report with specific actionable changes designed to impress human recruiters and hiring managers.</p>
                  <div className="h-40 rounded-lg bg-zinc-900 border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                     {/* Placeholder for mock UI */}
                     <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-50"></div>
                     <span className="text-xs font-mono text-zinc-600">Analytics Dashboard</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-zinc-800/50 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <div>
          <span className="font-bold text-white mb-1 block">CareerAI</span>
          <p>© 2024 CareerAI. Wasee</p>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-zinc-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-zinc-300">Terms of Service</Link>
          <Link href="#" className="hover:text-zinc-300">Contact Support</Link>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-colors">in</div>
          <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-colors">x</div>
        </div>
      </footer>
    </div>
  );
}
