import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// You can easily edit this list to add or remove services.
// Just change the image paths to the ones in your public folder!
const servicesList = [
  {
    id: 1,
    title: "Mesh Music",
    description: "Mesh Music is our Software we created so that we could give indie artists the tools they need.",
    image: "/images/Mesh-Music.png",
    link: "/services/music"
  },
  {
    id: 2,
    title: "MeshTV",
    description: "MeshTV is our streaming platform for indie creators. We provide the infrastructure for independent creators without tracking your data.",
    image: "/images/MeshTv.png",
    link: "/services/tv"
  },
  {
    id: 3,
    title: "Mesh AI",
    description: "Mesh AI is our artificial intelligence platform designed to empower creators with intelligent tools for content generation and analysis.",
    image: "/images/MeshAI.png",
    link: "/mesh-ai"
  },
  {
    id: 4,
    title: "Mesh Social App",
    description: "Secure, low-latency nodes operating globally. We provide the infrastructure for independent creators without tracking your data.",
    image: "/images/meshsocialapp.png",
    link: "/services/mesh-social-app"
  },
];

export default function OurServices() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col pt-32 pb-10 font-sans selection:bg-[#1800ad] selection:text-white">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 w-full text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-[#1800ad]">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore the diverse range of services we offer to empower creators and innovators. From music and video streaming to cutting-edge AI tools, Mesh Services is dedicated to providing the infrastructure and support you need to succeed in the digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex-1 max-w-7xl mx-auto px-6 w-full relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {servicesList.map((service) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#1800ad]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(24,0,173,0.3)]"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full bg-zinc-900 overflow-hidden border-b border-white/10">
                {/* Fallback gradient if image fails or isn't added yet */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
                
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  /* onError has been removed from here so you can spot broken file paths */
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                
                {/* "Learn More" Link styling */}
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-300 opacity-70 group-hover:opacity-100 group-hover:text-[#3b1df2] transition-all mt-auto">
                  Explore {service.title.split(' ')[0]} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full relative z-10 border-t border-white/5 mt-auto pt-10 pb-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-600 font-medium text-sm text-center md:text-left w-full">
            © {new Date().getFullYear()} Mesh Services UK. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Run with purpose by Dylan Scully.
            <span className="hidden md:inline"> | </span>
            if you have any questions, please reach out to <a href="mailto:it@meshservicesuk.com" className="text-[#8c52ff] hover:underline transition-colors">it@meshservicesuk.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
}