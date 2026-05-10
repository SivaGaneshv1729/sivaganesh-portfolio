import { GitHubIcon, LinkedInIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">SIVA GANESH<span className="text-orange-500">.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
              Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-4 text-[15px] text-slate-500 font-bold">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Journey</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li className="pt-2"><a href="/legacy-v1/index.html" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors text-xs font-black uppercase tracking-widest">View Vanilla Version</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Specialization</h4>
            <p className="text-[15px] text-slate-500 leading-relaxed font-bold">
              Design-led front-end work, distributed systems, and AI-assisted architectures.
            </p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} SIVA GANESH VEMULA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
             <a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1">
               <GitHubIcon size={24} />
             </a>
             <a href="https://www.linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1">
               <LinkedInIcon size={24} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
