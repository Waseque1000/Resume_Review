import { LayoutDashboard, FileText, Monitor, MessageSquare, LineChart, LifeBuoy, Settings, Bell, HelpCircle, Crown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0A0A0E] text-white overflow-hidden">
      {/* Sidebar - hidden on mobile */}
      <aside className="hidden md:flex w-64 flex-shrink-0 border-r border-zinc-800/50 flex-col bg-[#0A0A0E] relative z-20">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
          <Link href="/" className="font-bold text-xl tracking-tight">CareerAI</Link>
        </div>
        
        <div className="p-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-medium">Pro Workspace</div>
              <div className="text-[10px] text-zinc-500 tracking-wider">ELITE TIER</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-800/50 text-white font-medium text-sm">
              <LayoutDashboard className="w-4 h-4 text-purple-400" />
              OVERVIEW
            </Link>
            <Link href="/dashboard/resumes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 font-medium text-sm transition-colors">
              <FileText className="w-4 h-4" />
              MY RESUMES
            </Link>
            <Link href="/dashboard/portfolios" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 font-medium text-sm transition-colors">
              <Monitor className="w-4 h-4" />
              PORTFOLIO REVIEWS
            </Link>
            <Link href="/dashboard/interviewer" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 font-medium text-sm transition-colors">
              <MessageSquare className="w-4 h-4" />
              AI INTERVIEWER
            </Link>
            <Link href="/dashboard/analytics" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 font-medium text-sm transition-colors">
              <LineChart className="w-4 h-4" />
              ANALYTICS
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-800/50 space-y-2">
          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg mb-4 h-10">
            Upgrade to Pro
          </Button>
          <Link href="/dashboard/support" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 font-medium text-sm transition-colors">
            <LifeBuoy className="w-4 h-4" />
            SUPPORT
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/30 font-medium text-sm transition-colors">
            <Settings className="w-4 h-4" />
            SETTINGS
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#050508] relative">
        {/* Mobile Header */}
        <div className="md:hidden h-16 flex items-center justify-between px-6 border-b border-zinc-800/50 bg-[#0A0A0E] z-20">
          <Link href="/" className="font-bold text-xl tracking-tight">CareerAI</Link>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Top Header */}
        <header className="hidden md:flex h-16 items-center justify-between px-8 border-b border-zinc-800/50 bg-[#0A0A0E] z-10">
          <nav className="flex items-center gap-8 overflow-x-auto">
            <Link href="/dashboard" className="text-sm font-medium text-white border-b-2 border-purple-500 py-5 whitespace-nowrap">Dashboard</Link>
            <Link href="/dashboard/reviews" className="text-sm font-medium text-zinc-400 hover:text-white py-5 whitespace-nowrap">Reviews</Link>
            <Link href="/dashboard/coach" className="text-sm font-medium text-zinc-400 hover:text-white py-5 whitespace-nowrap">Coach</Link>
            <Link href="/dashboard/settings" className="text-sm font-medium text-zinc-400 hover:text-white py-5 whitespace-nowrap">Settings</Link>
          </nav>
          
          <div className="flex items-center gap-4 shrink-0">
            <button className="text-zinc-400 hover:text-white"><Bell className="w-5 h-5" /></button>
            <button className="text-zinc-400 hover:text-white"><HelpCircle className="w-5 h-5" /></button>
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
