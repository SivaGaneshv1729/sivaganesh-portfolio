const Footer = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6 tracking-tighter">SIVA GANESH<span className="text-orange-500">.</span></h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Focus</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Design-led front-end work, product storytelling, and AI-assisted developer experiences.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} SIVA GANESH VEMULA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-600">
            <a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
