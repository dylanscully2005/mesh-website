import { Link } from 'react-router-dom';
import { Hexagon, ArrowLeft, FileText } from 'lucide-react';

export default function Policies() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-mesh-brand selection:text-white">
      
      {/* Minimal Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hexagon fill="#1800ad" className="text-mesh-brand w-6 h-6" />
            <span className="text-base font-bold tracking-tight text-white">Mesh Services UK</span>
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
            <a href="#privacy" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#dmca" className="text-sm font-medium text-[#888] hover:text-white transition-colors">DMCA & Copyright</a>
            <a href="#community" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Community Guidelines</a>
            
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xs font-bold text-white uppercase mb-2">Need Help?</h4>
              <p className="text-xs text-[#888] mb-3">Our legal team operates Mon-Fri, 9am - 5pm.</p>
              <a href="mailto:legal@meshservicesuk.com" className="text-xs text-mesh-brand font-bold hover:underline">Contact Support</a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Platform Policies</h1>
          <p className="text-[#888] mb-12">Effective Date: September 4, 2026</p>

          {/* Section: Terms of Service */}
          <section id="terms" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-mesh-brand" />
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
            </div>
            <p className="text-xs text-[#888] uppercase tracking-wider mb-6">Ref: "Terms of Service.pdf"[cite: 4]</p>
            
            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Welcome to Mesh</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Welcome to the Mesh Network ("Mesh", "we", "us", or "our").[cite: 4] These Terms of Service govern your use of the Mesh application, the Mesh Audio Hub, and all related services.[cite: 4] By creating an account or using Mesh, you agree to these Terms.[cite: 4]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Your Account</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              You must be at least 13 years old (or the minimum legal age in your country) to use Mesh.[cite: 4] You are responsible for keeping your account password secure.[cite: 4] If you believe your account has been compromised, you must notify us immediately at msao262026@outlook.com.[cite: 4]
            </p>
            
            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. The Mesh Audio Hub & Creator Terms</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh empowers independent artists.[cite: 4] If you upload audio content ("Creator Content") to the Mesh Audio Hub via our Artist Upload Portal, you agree to the following:[cite: 4]
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">Ownership & Rights:</strong> You retain 100% ownership of your music.[cite: 4] By uploading, you grant Mesh a non-exclusive, global, royalty-free license to host, stream, and display your content and artwork on our platform.[cite: 4]</li>
              <li><strong className="text-white">Revenue Share:</strong> Mesh operates on a creator-first model.[cite: 4] Eligible creators will receive 70% of the net subscription revenue generated by their streams, distributed according to our current payout cycle.[cite: 4]</li>
              <li><strong className="text-white">Warranties:</strong> You strictly guarantee that you own or possess all necessary legal rights to upload, stream, and monetize the content.[cite: 4] Unauthorized covers, stolen tracks, or uncleared samples are strictly prohibited.[cite: 4]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">4. Acceptable Use</h3>
            <p className="text-[#888] leading-relaxed mb-4">You agree not to use Mesh to:[cite: 4]</p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li>Violate any applicable laws or regulations.[cite: 4]</li>
              <li>Upload viruses, malware, or malicious code.[cite: 4]</li>
              <li>Attempt to reverse-engineer, scrape, or hack the Mesh platform.[cite: 4]</li>
              <li>Harass, spam, or harm other users (see our Community Guidelines).[cite: 4]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">5. Termination</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time, without notice, for conduct that violates these Terms or harms the Mesh community.[cite: 4]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">6. Governing Law</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, United Kingdom, without regard to its conflict of law provisions.[cite: 4]
            </p>
          </section>

          {/* Section: Privacy Policy */}
          <section id="privacy" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-mesh-brand" />
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            </div>
            <p className="text-xs text-[#888] uppercase tracking-wider mb-6">Ref: "Privacy Policy.pdf"[cite: 1]</p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Our Privacy Philosophy</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              At Mesh, we believe your data is yours.[cite: 1] We only collect what is strictly necessary to run the platform, pay our creators, and keep the network secure.[cite: 1]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Information We Collect</h3>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">Account Data:</strong> Your email address, username, and password (hashed and securely stored via Supabase).[cite: 1]</li>
              <li><strong className="text-white">Usage Data:</strong> Play history on the Audio Hub (so we can calculate creator royalties and curate your stations) and basic app telemetry.[cite: 1]</li>
              <li><strong className="text-white">Creator Data:</strong> If you monetize content, we may collect payment routing information via secure third-party processors.[cite: 1]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Strict Data Care</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh features a unique "Strict Data Care" mode in your Account Settings.[cite: 1] When toggled ON:[cite: 1]
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li>Non-essential application state logs are routinely purged.[cite: 1]</li>
              <li>Your session telemetry is completely anonymized.[cite: 1]</li>
              <li>Your Discover Station recommendations will rely solely on on-device processing rather than cloud profiling.[cite: 1]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">4. How We Share Your Data</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              We do not sell your personal data to third-party advertisers.[cite: 1] We only share data with trusted service providers (like our secure database host, Supabase, and our payment processors) strictly to operate the Mesh network.[cite: 1]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">5. Your Rights (GDPR & UK GDPR)</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal data at any time.[cite: 1] You can delete your account directly within the Mesh App settings, which will instantly remove your profile and purge your user data from our active databases.[cite: 1]
            </p>
          </section>

          {/* Section: DMCA & Copyright Policy */}
          <section id="dmca" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-mesh-brand" />
              <h2 className="text-2xl font-bold text-white">DMCA & Copyright Policy</h2>
            </div>
            <p className="text-xs text-[#888] uppercase tracking-wider mb-6">Ref: "DMCA & Copyright Policy.pdf"[cite: 2]</p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Respecting Intellectual Property</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh was built for creators.[cite: 2] We deeply respect intellectual property rights and expect our users to do the same.[cite: 2] We strictly comply with the US Digital Millennium Copyright Act (DMCA), the UK Copyright, Designs and Patents Act 1988, and the EU Copyright Directive.[cite: 2]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Submitting a Takedown Notice</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              If you believe that your copyrighted work has been uploaded to the Mesh network without authorization, please send a written Notice of Copyright Infringement to our Copyright Agent at msao262026@outlook.com containing the following:[cite: 2]
            </p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li>A physical or electronic signature of the copyright owner or authorized agent.[cite: 2]</li>
              <li>Identification of the copyrighted work claimed to have been infringed.[cite: 2]</li>
              <li>The exact URL(s) on the Mesh network where the infringing material is located.[cite: 2]</li>
              <li>Your contact information (Name, Address, Email, Phone Number).[cite: 2]</li>
              <li>A statement that you have a good faith belief that the use is unauthorized.[cite: 2]</li>
              <li>A statement, under penalty of perjury, that the information is accurate.[cite: 2]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Counter-Notices</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              If your content was removed due to a copyright strike and you believe this was a mistake or you hold the rights, you may submit a Counter-Notice to the same email address outlining your legal right to the material.[cite: 2]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">4. Repeat Infringer Policy</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh operates a strict "Three-Strike" policy.[cite: 2] Users who repeatedly upload unauthorized, copyrighted material will have their Creator accounts permanently terminated and their IP addresses banned from the upload portal.[cite: 2]
            </p>
          </section>

          {/* Section: Community Guidelines */}
          <section id="community" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-mesh-brand" />
              <h2 className="text-2xl font-bold text-white">Community Guidelines</h2>
            </div>
            <p className="text-xs text-[#888] uppercase tracking-wider mb-6">Ref: "Community Guidelines.pdf"[cite: 3]</p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">1. The Mesh Vibe</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              Mesh is a home for developers, indie creators, gamers, and tech enthusiasts.[cite: 3] We want this to be a place where you can drop into a coding session, listen to incredible indie music, and chat with friends in peace.[cite: 3] Protect the vibe.[cite: 3]
            </p>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Zero Tolerance Policies</h3>
            <p className="text-[#888] leading-relaxed mb-4">Any user found engaging in the following will be immediately and permanently banned from the network:[cite: 3]</p>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">Hate Speech & Discrimination:</strong> No slurs, bigotry, or targeted attacks based on race, gender, sexual orientation, religion, or disability.[cite: 3]</li>
              <li><strong className="text-white">CSAM & Illegal Content:</strong> Sharing extreme violence, illegal material, or child sexual abuse material will result in an instant ban and a report to law enforcement.[cite: 3]</li>
              <li><strong className="text-white">Doxxing & Harassment:</strong> Do not share other people's private information, and do not use our messaging systems to harass, stalk, or threaten anyone.[cite: 3]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Spam and Security</h3>
            <ul className="list-disc list-outside ml-5 text-[#888] space-y-2 mb-4">
              <li><strong className="text-white">No Phishing:</strong> Do not send malicious links in DMs or chats.[cite: 3] (Note: You can enable "Quarantine DMs" in your privacy settings to auto-filter links from non-friends).[cite: 3]</li>
              <li><strong className="text-white">No Spam:</strong> Do not mass-message users to promote your tracks, products, or crypto projects.[cite: 3] Let your music and code speak for itself.[cite: 3]</li>
            </ul>

            <h3 className="text-lg font-bold text-white mt-6 mb-2">4. Reporting</h3>
            <p className="text-[#888] leading-relaxed mb-4">
              If you see something that breaks these rules, use the "Report" button located on user profiles and chat messages.[cite: 3] Our moderation team reviews reports daily.[cite: 3]
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}