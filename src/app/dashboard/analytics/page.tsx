import { Card, CardContent } from "@/components/ui/card";
import { LineChart, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight">Analytics</h1>
        <p className="text-zinc-400 text-sm max-w-md">
          Track your ATS score progression and portfolio metrics over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-[#12121A] border-zinc-800/50">
            <CardContent className="p-6">
              <div className="h-32 bg-zinc-900/50 rounded-lg flex items-center justify-center border border-zinc-800 mb-4">
                <LineChart className="w-8 h-8 text-zinc-700" />
              </div>
              <h3 className="text-white font-medium mb-1">Metric Widget {i}</h3>
              <p className="text-xs text-zinc-500">Awaiting data accumulation</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-[#12121A] border-zinc-800/50 border-dashed mt-8">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Not Enough Data</h3>
          <p className="text-zinc-400 max-w-md text-sm">
            Complete at least 3 resume reviews to unlock detailed progression analytics and cohort comparisons.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
