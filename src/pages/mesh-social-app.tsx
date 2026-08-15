import { Globe, MapPin, Server, ShieldCheck } from 'lucide-react';

export default function StandardNetwork() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 font-sans selection:bg-[#1800ad] selection:text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
          <Server className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Mesh Social App</h1>
        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
          The backbone of everything we do. Mesh Social App is a decentralized network that powers our music, video, and AI services. With servers located across the globe, we ensure low-latency connections and high availability for all users.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col justify-center">
          <Globe className="w-10 h-10 text-[#3b1df2] mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Global Reach, Local Speed</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">Our infrastructure is designed to route traffic intelligently based on user location, minimizing buffering and maximizing uptime.</p>
          <ul className="space-y-3 text-zinc-300 font-medium">
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#3b1df2]" /> United Kingdom (HQ)</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#3b1df2]" /> European Union</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#3b1df2]" /> North America (US HQ)</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#3b1df2]" /> Middle East & Oceania</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#1800ad] to-[#0a0040] border border-[#1800ad] p-10 rounded-3xl flex flex-col justify-center shadow-2xl">
          <ShieldCheck className="w-10 h-10 text-white mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Uncompromising Privacy</h3>
          <p className="text-white/80 leading-relaxed mb-6">
            We don't want your data. No third-party ads. No selling your watch history to data brokers. We're fully GDPR and DMCA compliant, meaning your digital footprint actually belongs to you.
          </p>
          <div className="p-4 bg-black/20 rounded-xl border border-white/10 text-white/90 font-mono text-sm">
            Status: Fully Operational<br/>
          </div>
        </div>
      </div>
    </div>
  );
}