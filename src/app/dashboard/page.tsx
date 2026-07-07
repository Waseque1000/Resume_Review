"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { UploadCloud, MoreVertical, ArrowRight, TrendingUp, Target, FileText } from "lucide-react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FileUploadDropzone } from "@/components/FileUploadDropzone";

const chartData = [
  { name: "JAN", score: 65 },
  { name: "FEB", score: 68 },
  { name: "MAR", score: 75 },
  { name: "APR", score: 82 },
  { name: "MAY", score: 85 },
  { name: "JUN", score: 88 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Hello, Alex</h1>
          <p className="text-zinc-400 text-sm max-w-md">
            Welcome back to your career command center. You've analyzed 12 profiles this month. Your next breakthrough is just one upload away.
          </p>
        </div>
        
        <div className="w-full md:w-64 h-32">
          <FileUploadDropzone className="w-full h-full" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#12121A] border-zinc-800/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className="text-[10px] font-semibold text-zinc-500 tracking-wider">MONTHLY QUOTA</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold">240</span>
              <span className="text-sm text-zinc-500">/ 500 Credits</span>
            </div>
            <Progress value={48} className="h-1.5 bg-zinc-800" indicatorClassName="bg-teal-400" />
          </CardContent>
        </Card>

        <Card className="bg-[#12121A] border-zinc-800/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-zinc-500 tracking-wider">ACTIVE REVIEWS</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold">12</span>
              <span className="text-sm text-yellow-500 font-medium">+2 this week</span>
            </div>
            <div className="flex gap-1 h-1.5 w-full">
              <div className="flex-1 bg-yellow-500/20 rounded-l-full"></div>
              <div className="flex-1 bg-yellow-500/20"></div>
              <div className="flex-1 bg-yellow-500/50"></div>
              <div className="flex-1 bg-zinc-800 rounded-r-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#12121A] border-zinc-800/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-zinc-500 tracking-wider">ATS AVERAGE</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold">84%</span>
              <span className="text-sm text-zinc-400">Top 5%</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <TrendingUp className="w-3 h-3 text-purple-400" />
              <span>Up 4.2% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-[#12121A] border-zinc-800/50">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div>
              <CardTitle className="text-lg font-medium">ATS Score Progress</CardTitle>
              <p className="text-xs text-zinc-500 mt-1">Tracking your resume optimization across 6 months</p>
            </div>
            <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
              <button className="px-3 py-1 text-xs font-medium bg-zinc-800 rounded shadow-sm text-white">6 MONTHS</button>
              <button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-white transition-colors">1 YEAR</button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#71717a' }} dy={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#e4e4e7' }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#12121A] border-zinc-800/50 flex flex-col justify-between">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Latest Analysis</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center pb-6">
            <div className="relative w-40 h-40 flex items-center justify-center my-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" className="text-zinc-800" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="276" strokeDashoffset="33.12" className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">88<span className="text-lg">%</span></span>
                <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mt-1">Score</span>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <h4 className="font-semibold text-lg mb-1">Senior Product Designer</h4>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-[200px] mx-auto">
                Optimized for Google, Meta, and Netflix standards.
              </p>
            </div>
            
            <Button variant="link" className="text-purple-400 hover:text-purple-300 mt-4 text-xs font-semibold p-0 h-auto">
              View Breakdown <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reviews Table */}
      <Card className="bg-[#12121A] border-zinc-800/50 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-zinc-800/50">
          <h3 className="text-lg font-medium">Recent Reviews</h3>
          <Button variant="ghost" className="text-xs font-semibold text-zinc-400 hover:text-white h-auto p-0 hover:bg-transparent">
            View All <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider bg-zinc-900/30">
              <tr>
                <th className="px-6 py-4 font-semibold">ROLE / ENTITY</th>
                <th className="px-6 py-4 font-semibold">TYPE</th>
                <th className="px-6 py-4 font-semibold">ATS SCORE</th>
                <th className="px-6 py-4 font-semibold">STATUS</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              <tr className="hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-zinc-200">Senior Product Designer</div>
                  <div className="text-xs text-zinc-500 mt-1">Updated 2h ago</div>
                </td>
                <td className="px-6 py-4 text-zinc-400">Resume Analysis</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 w-[88%]"></div>
                    </div>
                    <span className="font-medium">88</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[10px] uppercase tracking-wider py-0.5">Optimized</Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
              
              <tr className="hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-zinc-200">Portfolio Website</div>
                  <div className="text-xs text-zinc-500 mt-1">Updated yesterday</div>
                </td>
                <td className="px-6 py-4 text-zinc-400">Live Audit</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[72%]"></div>
                    </div>
                    <span className="font-medium">72</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-[10px] uppercase tracking-wider py-0.5">Needs Work</Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>

              <tr className="hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-zinc-200">UX Architect Role</div>
                  <div className="text-xs text-zinc-500 mt-1">Updated 3 days ago</div>
                </td>
                <td className="px-6 py-4 text-zinc-400">Job Matcher</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-400 w-[94%]"></div>
                    </div>
                    <span className="font-medium">94</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/20 text-[10px] uppercase tracking-wider py-0.5">Perfect Match</Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      
      {/* Footer Bottom Bar */}
      <div className="flex items-center justify-between mt-8 border-t border-zinc-800/50 pt-6 px-2">
        <span className="text-xs text-zinc-500 font-medium">CareerAI</span>
        <span className="text-xs text-zinc-500">© 2024 CareerAI. Wasee</span>
        <Button className="bg-purple-200 hover:bg-purple-300 text-purple-900 rounded-full px-6 shadow-[0_0_15px_rgba(216,180,254,0.3)]">
          + New Analysis
        </Button>
      </div>
    </div>
  );
}
