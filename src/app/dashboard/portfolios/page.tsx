import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Plus, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfoliosPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Portfolio Reviews</h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Connect your live portfolio or GitHub to get actionable UX and performance feedback.
          </p>
        </div>
      </div>

      <Card className="bg-[#12121A] border-zinc-800/50">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center px-4">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
            <Monitor className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Analyze Your Portfolio</h3>
          <p className="text-zinc-400 max-w-md mb-8 text-sm">
            Enter your portfolio URL below. Our AI will review your website's accessibility, design systems, and load speed to ensure it passes tech screeners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <div className="relative flex-1">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="url" 
                placeholder="https://your-portfolio.com" 
                className="w-full bg-zinc-900 border border-zinc-700 hover:border-zinc-600 focus:border-cyan-500 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm outline-none transition-colors"
              />
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg px-6">
              Analyze
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
