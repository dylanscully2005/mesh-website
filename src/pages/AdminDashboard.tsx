import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { 
  Megaphone, 
  AlertCircle, 
  Bug, 
  Plus, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  RefreshCw,
  Trash2,
  Sparkles,
  Lock 
} from 'lucide-react';

interface UpdateItem {
  id: string;
  title: string;
  content: string;
  category: string;
  author_email: string;
  created_at: string;
}

interface UserReport {
  id: string;
  user_email: string;
  category: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved';
  created_at: string;
}

interface ErrorLog {
  id: string;
  error_message: string;
  stack_trace: string;
  severity: 'warning' | 'error' | 'critical';
  created_at: string;
}

export default function AdminDashboard() {
  // Authentication States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  // 🔒 HARDCODED PASSWORD HERE
  const ADMIN_PASSWORD = 'admin123';

  // Dashboard States
  const [activeTab, setActiveTab] = useState<'updates' | 'reports' | 'logs'>('updates');
  const [loading, setLoading] = useState(false);

  // States for Updates
  const [updatesList, setUpdatesList] = useState<UpdateItem[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('Feature');

  // States for Reports and Logs
  const [reportsList, setReportsList] = useState<UserReport[]>([]);
  const [logsList, setLogsList] = useState<ErrorLog[]>([]);

  // Only fetch data if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [activeTab, isAuthenticated]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'updates') {
        const { data } = await supabase.from('updates').select('*').order('created_at', { ascending: false });
        if (data) setUpdatesList(data);
      } else if (activeTab === 'reports') {
        const { data } = await supabase.from('user_reports').select('*').order('created_at', { ascending: false });
        if (data) setReportsList(data);
      } else if (activeTab === 'logs') {
        const { data } = await supabase.from('error_logs').select('*').order('created_at', { ascending: false }).limit(50);
        if (data) setLogsList(data);
      }
    } catch (err) {
      console.log("Supabase fetch error bypassed:", err);
    }
    setLoading(false);
  };

  // --- Handlers ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleCreateUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    // 1. Create a dummy update object instantly
    const newUpdate: UpdateItem = {
      id: Math.random().toString(),
      title: newTitle,
      content: newContent,
      category: newCategory,
      author_email: 'staff@meshservices.com',
      created_at: new Date().toISOString()
    };

    // 2. Force the screen to update by pushing the new update to the top of your list
    setUpdatesList((prevList) => [newUpdate, ...prevList]);

    // 3. Clear the input boxes
    setNewTitle('');
    setNewContent('');
  };

  const handleUpdateReportStatus = async (id: string, status: string) => {
    setReportsList(prev => prev.map(report => 
      report.id === id ? { ...report, status: status as 'open' | 'in_progress' | 'resolved' } : report
    ));
  };

  const handleDeleteUpdate = async (id: string) => {
    setUpdatesList((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Authentication Screen ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-6">
        <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 max-w-sm w-full backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ff4d6d] to-[#b857e6] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">Admin Console</h1>
            <p className="text-zinc-400 text-sm mt-2">Enter the staff password to continue</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setLoginError(false);
                }}
                placeholder="Password"
                className={`w-full bg-zinc-800/60 border ${
                  loginError ? 'border-red-500' : 'border-white/10'
                } rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b857e6] transition-colors`}
                required
              />
              {loginError && (
                <p className="text-red-400 text-xs mt-2 font-medium">Incorrect password. Please try again.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-[#ff4d6d]/20"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Main Dashboard Screen ---
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-6 md:p-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-[#ff4d6d]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#b857e6]">Internal Console</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Staff Management Dashboard</h1>
        </div>
        
        <button 
          onClick={fetchData} 
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-colors w-fit"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh Data
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto flex items-center gap-2 border-b border-white/10 pb-4 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('updates')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'updates' ? 'bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-white'
          }`}
        >
          <Megaphone className="w-4 h-4" /> Website Updates
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'reports' ? 'bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-white'
          }`}
        >
          <AlertCircle className="w-4 h-4" /> User Reports
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'logs' ? 'bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-white'
          }`}
        >
          <Bug className="w-4 h-4" /> Error Logs
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* TAB 1: WEBSITE UPDATES */}
        {activeTab === 'updates' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Create Update Form */}
            <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 h-fit backdrop-blur-md">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#ff4d6d]" /> Publish New Update
              </h2>
              <form onSubmit={handleCreateUpdate} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-400">Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g., Version 2.4 Maintenance Complete"
                    className="w-full bg-zinc-800/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b857e6]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-zinc-800/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b857e6]"
                  >
                    <option value="Feature">New Feature</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Security">Security Notice</option>
                    <option value="General">General News</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400">Content</label>
                  <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    rows={4}
                    placeholder="Describe the release or update details..."
                    className="w-full bg-zinc-800/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b857e6]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ff4d6d] to-[#b857e6] text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Publish Update
                </button>
              </form>
            </div>

            {/* Existing Updates Feed */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold mb-4">Live Updates Feed</h2>
              {updatesList.length === 0 ? (
                <p className="text-zinc-500 text-sm">No website updates posted yet.</p>
              ) : (
                updatesList.map((item) => (
                  <div key={item.id} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-5 flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#b857e6]/20 text-[#b857e6] border border-[#b857e6]/30 font-semibold">
                          {item.category}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{item.content}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteUpdate(item.id)}
                      className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                      title="Delete Update"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 2: USER REPORTS */}
        {activeTab === 'reports' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Incoming User Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reportsList.map((report) => (
                <div key={report.id} className="bg-zinc-900/40 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300">
                        {report.category}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-lg font-bold uppercase ${
                        report.status === 'resolved' ? 'bg-emerald-500/20 text-emerald-400' :
                        report.status === 'in_progress' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-1">From: {report.user_email}</p>
                    <p className="text-sm text-zinc-200 leading-relaxed bg-zinc-950/40 p-3 rounded-xl border border-white/5 mb-4">
                      {report.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 border-t border-white/5 pt-3 mt-2">
                    <button
                      onClick={() => handleUpdateReportStatus(report.id, 'in_progress')}
                      className="flex-1 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-lg border border-amber-500/20 transition-colors flex items-center justify-center gap-1"
                    >
                      <Clock className="w-3.5 h-3.5" /> In Progress
                    </button>
                    <button
                      onClick={() => handleUpdateReportStatus(report.id, 'resolved')}
                      className="flex-1 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-500/20 transition-colors flex items-center justify-center gap-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" /> Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ERROR LOGS */}
        {activeTab === 'logs' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Live Supabase Error Logs</h2>
            <div className="bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-zinc-900/80 text-xs text-zinc-400 uppercase tracking-wider">
                      <th className="p-4">Severity</th>
                      <th className="p-4">Message</th>
                      <th className="p-4">Stack Trace</th>
                      <th className="p-4">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm">
                    {logsList.map((log) => (
                      <tr key={log.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-bold uppercase ${
                            log.severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            log.severity === 'error' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            <ShieldAlert className="w-3 h-3" /> {log.severity}
                          </span>
                        </td>
                        <td className="p-4 font-mono text-xs text-red-300">{log.error_message}</td>
                        <td className="p-4 text-xs text-zinc-400 max-w-xs truncate">{log.stack_trace || 'N/A'}</td>
                        <td className="p-4 text-xs text-zinc-500 whitespace-nowrap">
                          {new Date(log.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}