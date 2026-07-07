import { Message } from "./InterviewChat";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

interface InterviewFeedbackProps {
  history: Message[];
  onRestart: () => void;
}

export function InterviewFeedback({ history, onRestart }: InterviewFeedbackProps) {
  // In a real app, this would be computed by sending the history to an LLM
  // For the MVP, we just show a static mock assessment.
  const score = Math.floor(Math.random() * 20) + 75; // Random score between 75-95

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Interview Complete</h2>
        <p className="text-zinc-400">Here is your AI performance breakdown.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#12121A] border-zinc-800">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl font-bold mb-4">
              {score}
            </div>
            <h3 className="text-white font-medium mb-1">Overall Score</h3>
            <p className="text-xs text-zinc-500">Based on clarity and relevance</p>
          </CardContent>
        </Card>

        <Card className="bg-[#12121A] border-zinc-800 md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Key Strengths
            </h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Maintained a professional and confident tone.</li>
              <li>• Answered the initial behavioral question using the STAR method.</li>
              <li>• Clear articulation of past technical challenges.</li>
            </ul>

            <h3 className="text-white font-medium mb-4 mt-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Areas for Improvement
            </h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Could provide more specific metrics for your achievements.</li>
              <li>• Avoid filler words when transitioning between thoughts.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={onRestart} className="bg-purple-600 hover:bg-purple-500 text-white rounded-lg px-8">
          Start Another Interview
        </Button>
      </div>
    </div>
  );
}
