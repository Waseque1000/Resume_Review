import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">All Reviews</h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Your entire history of AI resume and portfolio analyses.
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search reviews..." 
            className="w-full bg-[#12121A] border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mock Demo Review */}
        <Link href="/dashboard/reviews/demo-id">
          <Card className="bg-[#12121A] border-zinc-800/50 hover:border-purple-500/50 transition-colors cursor-pointer group h-full">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <span className="font-bold">88</span>
                </div>
                <span className="text-[10px] text-zinc-500 tracking-wider">2 DAYS AGO</span>
              </div>
              <h3 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">Senior Product Designer</h3>
              <p className="text-xs text-zinc-400">ATS Match Score</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
