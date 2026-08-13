import { useState, useEffect } from 'react';
import { 
  Hexagon, Terminal, Activity, ShieldAlert, Rss, Plus, CheckCircle2, 
  MonitorPlay, Music, DollarSign, Globe, LogOut, 
  Bot, Calculator, Server, Settings, Link as LinkIcon, Database, HardDrive
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // DB 1: Internal Admin DB
import { createClient } from '@supabase/supabase-js'; // To dynamically connect to DB 2

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [logFilter] = useState('ALL');
  const navigate = useNavigate();

  // --- LIVE DATA STATES ---
  const [issues, setIssues] = useState<any[]>([]);
  const [logs] = useState<any[]>([]);
  const [systemStats] = useState({ activeServers: 0, proSubs: 0, storageUsedGB: 0, creatorEscrow: 0 });

  // --- CONFIG / DUAL-DATABASE CONNECTION STATES ---
  const [internalDbStatus, setInternalDbStatus] = useState('Connecting...');
  
  // Social App (DB 2) config saved in browser
  const [socialDbUrl, setSocialDbUrl] = useState(localStorage.getItem('mesh_social_url') || '');
  const [socialDbKey, setSocialDbKey] = useState(localStorage.getItem('mesh_social_key') || '');
  const [socialDbStatus, setSocialDbStatus] = useState('Awaiting Config...');
  
  const [botApiEndpoint, setBotApiEndpoint] = useState(localStorage.getItem('mesh_bot_endpoint') || 'http://localhost:3000');

  // --- UI STATES (Triage) ---
  const [showNewIssueForm, setShowNewIssueForm] = useState(false);
  const [newIssue, setNewIssue] = useState({ title: '', system: 'Discord Bot', severity: 'Medium' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calcSubs, setCalcSubs] = useState<number>(0);

  // --- UI STATES (Network Updates) ---
  const [updateTitle, setUpdateTitle] = useState('');
  const [updatePayload, setUpdatePayload] = useState('');
  const [isPushingUpdate, setIsPushingUpdate] = useState(false);

  // --- INITIALIZATION & SECURITY GATE ---
  useEffect(() => {
    const initializeDashboard = async () => {
      // 1. Check Auth against DB 1 (Internal)
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin-login');
        return;
      }
      
      // 2. Test Internal DB Connection
      const { error: pingError } = await supabase.from('internal_issues').select('id').limit(1);
      setInternalDbStatus(pingError ? 'Connection Error' : 'Connected (Secure)');

      // 3. Test Social App DB Connection (If Configured)
      testSocialDbConnection();

      // 4. Fetch Internal Issues
      fetchIssues();
    };
    
    initializeDashboard();
  }, [navigate, socialDbUrl, socialDbKey]);

  // --- DUAL DATABASE LOGIC ---
  const testSocialDbConnection = async () => {
    if (!socialDbUrl || !socialDbKey) {
      setSocialDbStatus('Awaiting Config...');
      return;
    }
    try {
      setSocialDbStatus('Connecting...');
      const socialClient = createClient(socialDbUrl, socialDbKey);
      // Ping the auth schema to see if it responds without crashing
      const { error } = await socialClient.auth.getSession();
      setSocialDbStatus(error ? 'Invalid Keys / Error' : 'Connected (Production)');
    } catch (err) {
      setSocialDbStatus('Connection Failed');
    }
  };

  const fetchIssues = async () => {
    // Fetches from DB 1 (Internal)
    const { data } = await supabase
      .from('internal_issues')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setIssues(data);
  };

  const handleCreateIssue = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const issueRef = `MESH-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    const { error } = await supabase.from('internal_issues').insert([{
      issue_ref: issueRef, title: newIssue.title, system: newIssue.system, status: 'Open', severity: newIssue.severity, reported_by: 'Admin'
    }]);

    if (!error) {
      setShowNewIssueForm(false);
      setNewIssue({ title: '', system: 'Discord Bot', severity: 'Medium' });
      fetchIssues();
    }
    setIsSubmitting(false);
  };

  // --- PUSH UPDATE TO DB 2 ---
  const handlePushUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!socialDbUrl || !socialDbKey) {
      alert("Please configure Database 2 in the Network Config tab first!");
      return;
    }
    
    setIsPushingUpdate(true);
    try {
      // Dynamically connect to the Social App Database
      const socialClient = createClient(socialDbUrl, socialDbKey);
      
      // Insert into the public updates table
      const { error } = await socialClient.from('network_updates').insert([{
        title: updateTitle,
        payload: updatePayload,
        is_live: true
      }]);

      if (error) throw error;
      
      alert("Update successfully pushed to the live Social Network!");
      setUpdateTitle('');
      setUpdatePayload('');
    } catch (err: any) {
      alert(`Failed to push update: ${err.message}`);
    }
    setIsPushingUpdate(false);
  };

  const saveConfig = () => {
    localStorage.setItem('mesh_bot_endpoint', botApiEndpoint);
    localStorage.setItem('mesh_social_url', socialDbUrl);
    localStorage.setItem('mesh_social_key', socialDbKey);
    alert('System Configuration Saved. Reconnecting to Social App DB...');
    testSocialDbConnection();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin-login');
  };

  // --- CALCULATOR MATH ---
  const calcGross = calcSubs * 9.99;
  const calcStripeFees = calcSubs * 0.49;
  const calcNet = calcGross - calcStripeFees;
  const calcCreatorPool = calcNet * 0.70;
  const calcMeshProfit = calcNet * 0.30;

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-mesh-brand selection:text-white flex">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0a0a] flex flex-col hidden md:flex z-20 relative">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Hexagon fill="#1800ad" className="text-mesh-brand w-6 h-6" />
            <span className="text-sm font-bold tracking-tight text-white">Mesh Operations</span>
          </div>

          <div className="text-xs font-bold text-[#555] uppercase tracking-wider mb-3 px-2">Core Systems</div>
          <div className="space-y-1 mb-8">
            <NavButton icon={Activity} label="Ecosystem Overview" tab="overview" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavButton icon={Terminal} label="Live Telemetry" tab="logs" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavButton icon={ShieldAlert} label="Engineering Triage" tab="issues" activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="text-xs font-bold text-[#555] uppercase tracking-wider mb-3 px-2">Management</div>
          <div className="space-y-1 mb-8">
            <NavButton icon={DollarSign} label="Financial Engine" tab="finance" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavButton icon={Bot} label="Bot Portal" tab="bot" activeTab={activeTab} setActiveTab={setActiveTab} />
            <NavButton icon={Rss} label="Push Updates" tab="updates" activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="text-xs font-bold text-[#555] uppercase tracking-wider mb-3 px-2">Infrastructure</div>
          <div className="space-y-1">
            <NavButton icon={Settings} label="Network Config" tab="config" activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>

        {/* User Profile & Logout */}
        <div className="mt-auto p-6 border-t border-white/5 bg-black/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold border border-white/20">A</div>
              <div>
                <div className="text-xs text-white font-bold">Admin</div>
                <div className="text-[10px] text-mesh-brand uppercase tracking-wider font-bold">Mesh Ops</div>
              </div>
            </div>
            <button onClick={handleLogout} className="text-[#888] hover:text-[#EF4444] transition-colors p-2" title="Secure Logout">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
        <div className="p-10 max-w-7xl mx-auto backdrop-blur-sm bg-[#050505]/95 min-h-full">
          
          {/* TAB 1: Ecosystem Overview */}
          {activeTab === 'overview' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-white mb-2">System Status Overview</h2>
              <p className="text-[#888] text-sm mb-8">Real-time metrics streaming from the Social DB and the Discord Bot API.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <MetricCard title="Active Bot Servers" value={systemStats.activeServers.toLocaleString()} trend="Awaiting live feed..." icon={Hexagon} color="text-[#5865F2]" />
                <MetricCard title="MeshTV Pro Subs" value={systemStats.proSubs.toLocaleString()} trend="Awaiting live feed..." icon={MonitorPlay} color="text-white" />
                <MetricCard title="Music Uploads (.WAV)" value={`${systemStats.storageUsedGB} GB`} trend="Awaiting live feed..." icon={Music} color="text-[#61DAFB]" />
                <MetricCard title="Creator Escrow" value={`£${systemStats.creatorEscrow.toLocaleString(undefined, {minimumFractionDigits: 2})}`} trend="Awaiting live feed..." icon={DollarSign} color="text-[#10B981]" />
              </div>
            </div>
          )}

          {/* TAB 2: System Logs */}
          {activeTab === 'logs' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Live Telemetry</h2>
                  <p className="text-[#888] text-sm">Waiting for connection to Bot API & Social App Edge Functions...</p>
                </div>
              </div>
              
              <div className="bg-black border border-white/10 rounded-xl p-4 font-mono text-xs leading-loose h-[600px] overflow-y-auto shadow-2xl flex flex-col">
                {logs.length === 0 ? (
                  <div className="m-auto text-center text-[#555]">
                    <Terminal className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No telemetry received.</p>
                    <p className="text-[10px] mt-1">Configure your API endpoints in the Network Config tab.</p>
                  </div>
                ) : (
                  logs.map((log, idx) => (
                    <LogEntry key={idx} system={log.system} color={log.color} time={log.time} msg={log.msg} filter={logFilter} />
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 3: Issue Triage (DB 1 - Internal) */}
          {activeTab === 'issues' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Engineering Triage</h2>
                  <p className="text-[#888] text-sm">Tickets are securely stored in <span className="text-mesh-brand font-bold">DB 1 (Admin Ops)</span> isolated from user data.</p>
                </div>
                <button 
                  onClick={() => setShowNewIssueForm(!showNewIssueForm)}
                  className="px-4 py-2 bg-[#EF4444] text-white font-bold text-sm rounded-md hover:bg-[#DC2626] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                >
                  {showNewIssueForm ? 'Cancel' : <><Plus className="w-4 h-4" /> New Ticket</>}
                </button>
              </div>

              {showNewIssueForm && (
                <form onSubmit={handleCreateIssue} className="mb-8 bg-[#111] border border-[#EF4444]/30 p-6 rounded-xl animate-in slide-in-from-top-2">
                  <h3 className="text-white font-bold mb-4">Create New Engineering Ticket</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs text-[#888] mb-1">Issue Title</label>
                      <input required value={newIssue.title} onChange={e => setNewIssue({...newIssue, title: e.target.value})} type="text" className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[#EF4444] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs text-[#888] mb-1">Affected System</label>
                      <select value={newIssue.system} onChange={e => setNewIssue({...newIssue, system: e.target.value})} className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none">
                        <option>Discord Bot</option>
                        <option>Mesh Social App</option>
                        <option>Mesh TV (CDN)</option>
                        <option>Financial Engine</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-[#EF4444] text-white text-sm font-bold rounded hover:bg-[#DC2626] disabled:opacity-50">
                    {isSubmitting ? 'Pushing to DB 1...' : 'Push to Operations DB'}
                  </button>
                </form>
              )}

              <div className="space-y-3">
                {issues.length === 0 ? (
                  <div className="text-[#888] text-sm p-8 text-center bg-[#0A0A0A] rounded-xl border border-white/10 flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981] mb-2 opacity-50" />
                    <p>Inbox Zero. No open issues.</p>
                  </div>
                ) : (
                  issues.map(issue => (
                    <IssueCard key={issue.id} id={issue.issue_ref} title={issue.title} system={issue.system} status={issue.status} severity={issue.severity || 'Medium'} reportedBy={issue.reported_by} />
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: Finances */}
          {activeTab === 'finance' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-white mb-2">The 70% Financial Engine</h2>
              <p className="text-[#888] text-sm mb-8">Live UCPM (User-Centric Payout Model) Calculator. Input subscriber count to project real-time payouts.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                
                <div className="p-6 bg-[#0A0A0A] border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <Calculator className="w-5 h-5 text-mesh-brand" />
                    <h3 className="text-white font-bold">Revenue Simulator</h3>
                  </div>
                  
                  <label className="block text-xs font-bold text-[#888] uppercase tracking-wider mb-2">Total Active Subscribers (at £9.99/mo)</label>
                  <input 
                    type="number" 
                    value={calcSubs || ''}
                    onChange={(e) => setCalcSubs(Number(e.target.value))}
                    placeholder="Enter sub count..."
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mesh-brand mb-6 text-xl font-bold" 
                  />

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888]">Gross Monthly Revenue</span>
                      <span className="text-white font-bold">£{calcGross.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888]">Stripe Processing Fees</span>
                      <span className="text-[#EF4444] font-bold">- £{calcStripeFees.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-white/5">
                      <span className="text-white font-bold">Net Distributable Revenue</span>
                      <span className="text-white font-bold">£{calcNet.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-[#10B981]/10 to-[#0A0A0A] border border-[#10B981]/30 rounded-2xl flex flex-col justify-center">
                    <div className="text-[#10B981] text-xs font-bold uppercase tracking-wider mb-2">Creator Pool Escrow (70%)</div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">£{calcCreatorPool.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                    <div className="text-sm text-[#888]">Clears directly to creators via Stripe Connect on Net-30.</div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-mesh-brand/10 to-[#0A0A0A] border border-mesh-brand/30 rounded-2xl flex flex-col justify-center">
                    <div className="text-mesh-brand text-xs font-bold uppercase tracking-wider mb-2">Mesh Corp Profit (30%)</div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">£{calcMeshProfit.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                    <div className="text-sm text-[#888]">Used for CDN servers, development, and team.</div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: Bot Portal */}
          {activeTab === 'bot' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Discord Bot Management</h2>
                  <p className="text-[#888] text-sm">Accessing Express server at: <code className="bg-white/10 px-1 rounded">{botApiEndpoint}</code></p>
                </div>
              </div>
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden min-h-[500px] relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10 p-6 text-center">
                  <Server className="w-12 h-12 text-[#5865F2] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Awaiting Bot Server Connection</h3>
                  <p className="text-[#888] max-w-md text-sm mb-4">Ensure your Discord bot's Express.js server is running and configured.</p>
                </div>
                <iframe src={botApiEndpoint} className="w-full h-full border-0 absolute inset-0 opacity-50" title="Bot Portal"></iframe>
              </div>
            </div>
          )}

          {/* TAB 6: System Config (DUAL DATABASES) */}
          {activeTab === 'config' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
              <h2 className="text-2xl font-bold text-white mb-2">Network Infrastructure</h2>
              <p className="text-[#888] text-sm mb-8">Manage connections between your isolated internal tools and the public Mesh Social App.</p>
              
              <div className="space-y-6">
                
                {/* DB 1: Internal Triage (Env Vars) */}
                <div className="p-6 bg-gradient-to-r from-[#0A0A0A] to-transparent border-l-4 border-[#1800ad] border-y border-r border-y-white/5 border-r-white/5 rounded-r-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <HardDrive className="w-6 h-6 text-mesh-brand" />
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">Database 1: Admin Operations</h3>
                      <p className="text-xs text-[#888]">Handles Staff Logins & Internal Triage Tickets</p>
                    </div>
                  </div>
                  <div className="bg-black border border-white/10 rounded-lg p-4 flex items-center justify-between">
                    <div className="text-xs text-[#888]">Managed locally via <code className="bg-white/10 px-1 rounded text-white">.env</code> variables.</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${internalDbStatus.includes('Error') ? 'bg-[#EF4444]/10 text-[#EF4444]' : 'bg-mesh-brand/10 text-mesh-brand'}`}>
                      {internalDbStatus.includes('Error') ? <ShieldAlert className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                      {internalDbStatus}
                    </div>
                  </div>
                </div>

                {/* DB 2: Social App (Dynamic Config) */}
                <div className="p-6 bg-gradient-to-r from-[#0A0A0A] to-transparent border-l-4 border-[#10B981] border-y border-r border-y-white/5 border-r-white/5 rounded-r-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-[#10B981]" />
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">Database 2: Mesh Social App</h3>
                      <p className="text-xs text-[#888]">Public users, creators, and platform updates.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-[#888] mb-2">Supabase URL</label>
                      <input type="url" value={socialDbUrl} onChange={(e) => setSocialDbUrl(e.target.value)} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]" placeholder="https://xyz.supabase.co" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#888] mb-2">Anon / Service Key</label>
                      <input type="password" value={socialDbKey} onChange={(e) => setSocialDbKey(e.target.value)} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]" placeholder="ey..." />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                     <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${socialDbStatus.includes('Connected') ? 'bg-[#10B981]/10 text-[#10B981]' : socialDbStatus.includes('Error') || socialDbStatus.includes('Failed') ? 'bg-[#EF4444]/10 text-[#EF4444]' : 'bg-white/10 text-[#888]'}`}>
                      {socialDbStatus.includes('Connected') ? <CheckCircle2 className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
                      {socialDbStatus}
                    </div>
                  </div>
                </div>

                {/* Bot API Link */}
                <div className="p-6 bg-[#0A0A0A] border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <LinkIcon className="w-6 h-6 text-[#5865F2]" />
                    <h3 className="text-lg font-bold text-white">Discord Bot Express API</h3>
                  </div>
                  <div className="flex gap-4">
                    <input type="url" value={botApiEndpoint} onChange={(e) => setBotApiEndpoint(e.target.value)} className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5865F2]" placeholder="https://your-bot-url.com" />
                    <button onClick={saveConfig} className="px-6 py-3 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
                      Save All Settings
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 7: Push Updates */}
          {activeTab === 'updates' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Push Network Update</h2>
              <p className="text-[#888] text-sm mb-8">Deploy announcements directly to <span className="text-[#10B981] font-bold">DB 2 (Mesh Social App)</span>.</p>
              
              <form onSubmit={handlePushUpdate} className="space-y-6 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10 shadow-xl">
                <div>
                  <label className="block text-xs font-bold text-[#888] uppercase tracking-wider mb-2">Update Title</label>
                  <input required value={updateTitle} onChange={e => setUpdateTitle(e.target.value)} type="text" placeholder="e.g., Mesh Music API is Live" className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#888] uppercase tracking-wider mb-2">Public Payload</label>
                  <textarea required value={updatePayload} onChange={e => setUpdatePayload(e.target.value)} rows={5} placeholder="Type the update details here..." className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10B981] resize-none"></textarea>
                </div>
                <button type="submit" disabled={isPushingUpdate} className="px-6 py-3 bg-[#10B981] text-white text-sm font-bold rounded-lg hover:bg-[#059669] transition-colors w-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50">
                  <Globe className="w-4 h-4" /> {isPushingUpdate ? 'Pushing...' : 'Push to Social App DB'}
                </button>
              </form>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

/* --- Helper Components --- */
function NavButton({ icon: Icon, label, tab, activeTab, setActiveTab }: any) {
  const isActive = activeTab === tab;
  return (
    <button 
      onClick={() => setActiveTab(tab)} 
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-mesh-brand text-white shadow-md' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
    >
      <Icon className="w-4 h-4" /> {label}
    </button>
  );
}

function MetricCard({ title, value, trend, icon: Icon, color }: any) {
  return (
    <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden">
      <div className={`absolute top-0 right-0 p-4 opacity-10 ${color}`}><Icon className="w-16 h-16" /></div>
      <div className="relative z-10">
        <div className="text-xs font-bold text-[#888] uppercase tracking-wider mb-1">{title}</div>
        <div className="text-2xl font-black text-white mb-2">{value}</div>
        <div className={`text-xs font-medium ${color}`}>{trend}</div>
      </div>
    </div>
  );
}

function LogEntry({ system, color, time, msg, filter }: any) {
  if (filter !== 'ALL' && filter !== system) return null;
  return (
    <div className="mb-1 flex gap-3 hover:bg-white/5 px-2 py-1 rounded">
      <span className="text-[#555] shrink-0">[{time}]</span>
      <span className={`${color} shrink-0 w-24`}>[{system}]</span>
      <span className="text-[#ccc]">{msg}</span>
    </div>
  );
}

function IssueCard({ id, title, system, status, severity, reportedBy }: any) {
  const isResolved = status === 'Resolved';
  return (
    <div className={`p-4 rounded-xl bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row md:items-center justify-between hover:border-white/20 transition-colors cursor-pointer ${isResolved ? 'opacity-50' : 'opacity-100'}`}>
      <div className="flex items-start gap-4 mb-3 md:mb-0">
        <div className={`px-2 py-1 rounded font-mono text-xs font-bold mt-1 ${isResolved ? 'bg-white/10 text-[#888]' : severity === 'High' || severity === 'Critical' ? 'bg-[#EF4444]/10 text-[#EF4444]' : 'bg-mesh-brand/10 text-mesh-brand'}`}>
          {id}
        </div>
        <div>
          <div className={`text-sm font-bold ${isResolved ? 'text-[#888] line-through' : 'text-white'}`}>{title}</div>
          <div className="text-xs text-[#888] mt-1">System: {system} • Reported by {reportedBy}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {status === 'Investigating' && <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B]"><Activity className="w-3 h-3" /> Investigating</span>}
        {status === 'Open' && <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#EF4444]/10 text-[#EF4444]"><ShieldAlert className="w-3 h-3" /> Open</span>}
      </div>
    </div>
  );
}