"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InterviewChat, Message } from "@/components/InterviewChat";
import { InterviewFeedback } from "@/components/InterviewFeedback";

type InterviewState = "setup" | "chat" | "feedback";

export default function InterviewerPage() {
  const [currentState, setCurrentState] = useState<InterviewState>("setup");
  const [role, setRole] = useState("");
  const [type, setType] = useState("Behavioral");
  const [history, setHistory] = useState<Message[]>([]);

  const startInterview = () => {
    if (!role.trim()) {
      alert("Please enter a target role first.");
      return;
    }
    setCurrentState("chat");
  };

  const endInterview = (finalHistory: Message[]) => {
    setHistory(finalHistory);
    setCurrentState("feedback");
  };

  if (currentState === "chat") {
    return (
      <div className="space-y-6 pb-12 max-w-4xl mx-auto">
        <InterviewChat 
          config={{ role, type }} 
          onEndInterview={endInterview} 
        />
      </div>
    );
  }

  if (currentState === "feedback") {
    return (
      <div className="pb-12">
        <InterviewFeedback 
          history={history} 
          onRestart={() => setCurrentState("setup")} 
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">AI Interviewer</h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Practice mock interviews tailored to your resume and target role.
          </p>
        </div>
      </div>

      <Card className="bg-[#12121A] border-zinc-800/50 max-w-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Configure Session</h3>
              <p className="text-zinc-400 text-sm">Set up your mock interview parameters.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Target Role / Job Title</label>
              <input 
                type="text" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Senior Frontend Engineer" 
                className="w-full bg-zinc-900 border border-zinc-700 hover:border-zinc-600 focus:border-purple-500 rounded-lg py-2.5 px-4 text-white text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Interview Type</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 hover:border-zinc-600 focus:border-purple-500 rounded-lg py-2.5 px-4 text-white text-sm outline-none transition-colors appearance-none"
              >
                <option value="Behavioral">Behavioral (STAR Method)</option>
                <option value="Technical">Technical / System Design</option>
                <option value="Hybrid">Hybrid (Both)</option>
              </select>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <Button onClick={startInterview} className="w-full bg-purple-600 hover:bg-purple-500 text-white rounded-lg py-6 text-lg">
                <Video className="w-5 h-5 mr-2" />
                Start Interview
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
