import { Card, CardContent } from "@/components/ui/card";
import { Settings, Shield, CreditCard, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 pb-12 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight">Settings</h1>
        <p className="text-zinc-400 text-sm max-w-md">
          Manage your account preferences, billing, and API integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-[#12121A] border-zinc-800/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-800/50">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white font-medium">Alex Developer</h3>
                <p className="text-sm text-zinc-400">alex@example.com</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-zinc-400" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Security</h4>
                    <p className="text-xs text-zinc-500">Password, 2FA, and sessions</p>
                  </div>
                </div>
                <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">Manage</button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-zinc-400" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Billing</h4>
                    <p className="text-xs text-zinc-500">Pro plan active</p>
                  </div>
                </div>
                <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">Manage</button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-zinc-400" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Notifications</h4>
                    <p className="text-xs text-zinc-500">Email and push preferences</p>
                  </div>
                </div>
                <button className="text-sm text-purple-400 hover:text-purple-300 font-medium">Manage</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
