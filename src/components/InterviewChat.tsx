"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface InterviewChatProps {
  config: { role: string; type: string };
  onEndInterview: (history: Message[]) => void;
}

export function InterviewChat({ config, onEndInterview }: InterviewChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize the interview
  useEffect(() => {
    const startInterview = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/interview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ history: [], config }),
        });
        const data = await response.json();
        if (data.message) {
          setMessages([{ role: "assistant", content: data.message }]);
        }
      } catch (error) {
        console.error("Failed to start interview:", error);
      } finally {
        setIsLoading(false);
      }
    };
    startInterview();
  }, [config]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const newHistory: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: newHistory, config }),
      });
      const data = await response.json();
      
      if (data.message) {
        setMessages([...newHistory, { role: "assistant", content: data.message }]);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-[#12121A] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900/50">
        <div>
          <h3 className="text-white font-semibold flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-400" />
            AI Interviewer
          </h3>
          <p className="text-xs text-zinc-400">
            {config.type} Interview • {config.role}
          </p>
        </div>
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={() => onEndInterview(messages)}
          className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-0"
        >
          <StopCircle className="w-4 h-4 mr-2" />
          End Session
        </Button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === "assistant" ? "bg-purple-500/20 text-purple-400" : "bg-cyan-500/20 text-cyan-400"
            }`}>
              {msg.role === "assistant" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            <div className={`p-3 rounded-2xl ${
              msg.role === "user" ? "bg-purple-600 text-white rounded-tr-none" : "bg-zinc-800 text-zinc-200 rounded-tl-none"
            }`}>
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="p-3 rounded-2xl bg-zinc-800 text-zinc-400 rounded-tl-none flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="p-4 border-t border-zinc-800 bg-zinc-900/50">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response here..."
            disabled={isLoading}
            className="w-full bg-zinc-950 border border-zinc-700 hover:border-zinc-600 focus:border-purple-500 rounded-lg py-3 pl-4 pr-12 text-white text-sm outline-none transition-colors disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
