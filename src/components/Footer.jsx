import { GitHubIcon, LinkedInIcon } from './Icons'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient exactly from vanilla style.css */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_top,rgba(245,119,88,0.1),transparent_70%)] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tighter">Siva Ganesh</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
              Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
            </p>
          </div>
          
          {/* Navigate Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.4em] opacity-50">Navigate</h4>
            <ul className="space-y-4 text-[15px] text-slate-500 font-bold">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Journey</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          {/* Connect Column - Mimicking the vanilla version exactly */}
          <div>
            <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.4em] opacity-50">Connect</h4>
            <ul className="space-y-4 text-[15px] text-slate-500 font-bold">
              <li><a href="mailto:sivaganeshv1729@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li className="pt-4">
                <a href="/legacy-v1/index.html" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
                   View Vanilla Version
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} SIVA GANESH VEMULA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
             <a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-all transform hover:-translate-y-1">
               <GitHubIcon size={20} />
             </a>
             <a href="https://www.linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-all transform hover:-translate-y-1">
               <LinkedInIcon size={20} />
             </a>
             <a href="mailto:sivaganeshv1729@gmail.com" className="text-slate-600 hover:text-white transition-all transform hover:-translate-y-1">
               <Mail size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
