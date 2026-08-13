import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft, FileText, ShieldCheck, Lock, Users } from 'lucide-react';

export default function Policies() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-[#1800ad] selection:text-white">
      
      {/* Minimal Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hexagon fill="#1800ad" className="text-[#1800ad] w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Services</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-[#888] flex items-center gap-2 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Docs Layout */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Sticky Sidebar */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-32 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Legal Hub</h4>
            <a href="#terms" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Terms of Service</a>
            <a href="#privacy-uk" className="text-sm font-medium text-[#888] hover:text-white transition-colors">UK & EU Privacy Policy</a>
            <a href="#privacy-us" className="text-sm font-medium text-[#888] hover:text-white transition-colors">US Privacy Policy</a>
            <a href="#dmca" className="text-sm font-medium text-[#888] hover:text-white transition-colors">DMCA & Copyright</a>
            <a href="#community" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Community Guidelines</a>
            
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xs font-bold text-white uppercase mb-2">Need Legal Help?</h4>
              <p className="text-xs text-[#888] mb-3">Questions regarding terms, privacy, or data requests?</p>
              <a href="mailto:Legal@meshservicesuk.com" className="text-xs text-[#3b1df2] font-bold hover:underline block mb-1">
                UK/EU: Legal@meshservicesuk.com
              </a>
              <a href="mailto:meshuslegal@meshservicesuk.info" className="text-xs text-[#3b1df2] font-bold hover:underline block">
                US: meshuslegal@meshservicesuk.info
              </a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Platform Policies & Legal Documentation</h1>
          <p className="text-[#888] mb-12">Updated September 2026</p>

          {/* Section: Terms of Service */}
          <section id="terms" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-[#3b1df2]" />
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
            </div>
            
            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Welcome to Mesh</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Welcome to Mesh Services ("Mesh", "we", "us", or "our"). These Terms of Service govern your access to and use of the Mesh ecosystem, including community servers, peer-to-peer voice calls, direct messaging, Mesh Music, and Mesh TV. By creating an account or using Mesh, you agree to these Terms.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Strict Age Requirements (18+)</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh is strictly intended for users 18 years of age and older. Age-verification systems are utilized during onboarding to restrict access to anyone under 18. If you are under 18, you are not permitted to register an account or access the platform.
            </p>
            
            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Mesh Creator Terms (Music & TV)</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              If you upload audio ("Mesh Music") or video ("Mesh TV") content to our infrastructure:
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">Ownership:</strong> You retain full ownership of your intellectual property. By uploading, you grant Mesh a non-exclusive license to host, stream, and display your media across our platform.</li>
              <li><strong className="text-white">Royalties & Payouts:</strong> Eligible creators receive payouts generated by playback history and subscription pools processed via Stripe Billing. Payout and financial records are maintained for 7 years for compliance.</li>
              <li><strong className="text-white">Warranties:</strong> You guarantee that you possess all legal rights, licenses, and clearances for uploaded media. Unauthorized uploads or copyrighted infringements are strictly prohibited.</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">4. Acceptable Use</h3>
            <p className="text-[#888] leading-relaxed mb-4">You agree not to use Mesh to:</p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li>Violate applicable regional, national, or international laws.</li>
              <li>Attempt to reverse-engineer, exploit, or disrupt Mesh infrastructure or Supabase databases.</li>
              <li>Harass, stalk, dox, or transmit malicious code.</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">5. Governing Law</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              For users in the UK and EEA, these terms are governed by the laws of England and Wales. For users in the United States, these terms are governed by the laws of the State of California without regard to conflict of law principles.
            </p>
          </section>

          {/* Section: UK & EU Privacy Policy */}
          <section id="privacy-uk" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <ShieldCheck className="w-5 h-5 text-[#3b1df2]" />
              <h2 className="text-2xl font-bold text-white">UK & EU Privacy Policy</h2>
            </div>
            <p className="text-xs text-[#888] uppercase tracking-wider mb-6">Effective Date: 4/09/2026 | Operator: Mesh Services UK and EU (Dylan Scully)</p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Who We Are</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh Services UK and EU is operated by Dylan Scully trading as "Mesh" in the United Kingdom. Contact for privacy inquiries: <a href="mailto:Legal@meshservicesuk.com" className="text-[#3b1df2] underline">Legal@meshservicesuk.com</a>.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Information Collection & Lawful Basis</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-xs border border-white/10 rounded-lg">
                <thead className="bg-white/5 text-white uppercase font-bold border-b border-white/10">
                  <tr>
                    <th className="p-3">Data Category</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#888]">
                  <tr>
                    <td className="p-3 font-semibold text-white">Account Info (Email, Username, Hashed Password)</td>
                    <td className="p-3">Account setup & security</td>
                    <td className="p-3">Contract</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Server Messages & DMs</td>
                    <td className="p-3">Operate community channels & messaging</td>
                    <td className="p-3">Contract</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Voice Call Signaling Data</td>
                    <td className="p-3">Connect peer-to-peer WebRTC calls</td>
                    <td className="p-3">Contract</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Call Audio</td>
                    <td className="p-3">Not collected (Direct WebRTC peer-to-peer)</td>
                    <td className="p-3">N/A</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Music/Video Play History</td>
                    <td className="p-3">Calculate creator royalties & recommendations</td>
                    <td className="p-3">Contract / Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Telemetry & Diagnostics</td>
                    <td className="p-3">App performance & bug diagnosis</td>
                    <td className="p-3">Legitimate Interest / Consent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Retention Schedule</h3>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">Account Data:</strong> Retained while active, plus 7 days post-deletion.</li>
              <li><strong className="text-white">Text Messages & DMs:</strong> Retained until deleted by user/admin or 7 days after account deletion.</li>
              <li><strong className="text-white">Call Signaling Logs:</strong> Retained for 7 days.</li>
              <li><strong className="text-white">Uploaded Media (Music/TV):</strong> Retained while active, plus 14 days following removal.</li>
              <li><strong className="text-white">Financial & Royalty Records:</strong> Retained for 7 years for regulatory compliance.</li>
              <li><strong className="text-white">App Telemetry:</strong> Retained for 30 days unless non-consent is toggled.</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">4. Data Hosting & International Transfers</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Primary European database infrastructure is hosted by Supabase in the <code className="text-white font-mono bg-white/10 px-1 py-0.5 rounded">eu-west-1</code> region (Ireland). Data transfers from the UK to the EEA are conducted under UK government adequacy determinations.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">5. UK GDPR Rights</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Under UK GDPR, you hold rights to Access, Rectify, Erase, Restrict, and Object to your data processing. You may manage these rights directly within Account Settings or by lodging requests to <a href="mailto:Legal@meshservicesuk.com" className="text-[#3b1df2] underline">Legal@meshservicesuk.com</a>. You have the right to lodge complaints with the Information Commissioner's Office (ICO).
            </p>
          </section>

          {/* Section: US Privacy Policy */}
          <section id="privacy-us" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Lock className="w-5 h-5 text-[#3b1df2]" />
              <h2 className="text-2xl font-bold text-white">US Privacy Policy</h2>
            </div>
            <p className="text-xs text-[#888] uppercase tracking-wider mb-6">Effective Date: 10/08/2026 | Operator: Mesh Services US (Dylan Scully)</p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Who We Are & Infrastructure Location</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh Services US is operated by Dylan Scully. For US-based accounts, data is hosted on infrastructure managed by Supabase in the <code className="text-white font-mono bg-white/10 px-1 py-0.5 rounded">us-west-1</code> region (Northern California). Privacy Contact: <a href="mailto:meshuslegal@meshservicesuk.info" className="text-[#3b1df2] underline">meshuslegal@meshservicesuk.info</a>.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Strict Data Care Mode</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh offers a "Strict Data Care" mode within Account Settings. When activated:
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li>Non-essential application state logs are routinely purged.</li>
              <li>Session telemetry is completely anonymized.</li>
              <li>Discover recommendations rely on on-device processing rather than cloud profiling.</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. US State Rights (CCPA / CPRA)</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Under state privacy laws such as CCPA/CPRA, residents have the right to request access to, deletion of, and correction of personal information, as well as the right to opt out of data sales/sharing. Mesh does not sell personal data to third-party advertisers. Users can exercise CCPA data rights using automated export/delete tools in Account Settings or by emailing <a href="mailto:meshuslegal@meshservicesuk.info" className="text-[#3b1df2] underline">meshuslegal@meshservicesuk.info</a>.
            </p>
          </section>

          {/* Section: DMCA & Copyright Policy */}
          <section id="dmca" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-[#3b1df2]" />
              <h2 className="text-2xl font-bold text-white">DMCA & Copyright Policy</h2>
            </div>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Compliance</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh respects intellectual property rights and complies with the US Digital Millennium Copyright Act (DMCA), UK Copyright, Designs and Patents Act 1988, and EU Copyright regulations.
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Submitting Takedown Notices</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              To lodge a notice of claimed infringement, send a written communication including: identification of the copyrighted work, exact URLs/locations of infringing material, full contact information, and sworn good-faith statements to:
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-1 mb-4">
              <li>UK/EU Agent Email: <a href="mailto:Legal@meshservicesuk.com" className="text-[#3b1df2] underline">Legal@meshservicesuk.com</a></li>
              <li>US Agent Email: <a href="mailto:meshuslegal@meshservicesuk.info" className="text-[#3b1df2] underline">meshuslegal@meshservicesuk.info</a></li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Repeat Infringer Policy</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh enforces a strict three-strike policy. Accounts that repeatedly infringe copyright will have creator access terminated and media permanently removed from Mesh Music and Mesh TV.
            </p>
          </section>

          {/* Section: Community Guidelines */}
          <section id="community" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Users className="w-5 h-5 text-[#3b1df2]" />
              <h2 className="text-2xl font-bold text-white">Community Guidelines</h2>
            </div>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Zero Tolerance Rules</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              The following behaviors result in an immediate, permanent network ban:
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">Hate Speech & Discrimination:</strong> Slurs, targeted attacks, or bigotry based on protected characteristics.</li>
              <li><strong className="text-white">Illegal Content & CSAM:</strong> Transmission of illegal material or child exploitation content (reported directly to law enforcement).</li>
              <li><strong className="text-white">Doxxing & Harassment:</strong> Releasing private personal data or conducting targeted harassment in text channels, DMs, or voice calls.</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Messaging & Moderation</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Server admins possess moderation rights over text channels within their respective servers. Users may enable "Quarantine DMs" in account settings to filter links from non-friends. Violations can be reported directly via in-app reporting tools.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}