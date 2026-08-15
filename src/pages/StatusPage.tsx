import { Activity, CheckCircle2, Server } from 'lucide-react';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 font-sans selection:bg-[#3b1df2] selection:text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
          <Activity className="w-10 h-10 text-emerald-400 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">System Status</h1>
        <p className="text-xl text-emerald-400 font-semibold flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
          All Mesh Services Are Fully Operational
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          { name: "Mesh Music Core & Streaming", status: "Operational", uptime: "99.99%" },
          { name: "MeshTV Video Delivery Nodes", status: "Operational", uptime: "100%" },
          { name: "Mesh AI Neural Engine", status: "Operational", uptime: "99.95%" },
          { name: "Mesh Social App", status: "Operational", uptime: "99.99%" },
          { name: "Developer API & Webhooks", status: "Operational", uptime: "99.98%" },
        ].map((system, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Server className="w-6 h-6 text-zinc-400" />
              <div>
                <h3 className="text-white font-bold text-lg">{system.name}</h3>
                <p className="text-xs text-zinc-500 font-mono">Uptime: {system.uptime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              {system.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}