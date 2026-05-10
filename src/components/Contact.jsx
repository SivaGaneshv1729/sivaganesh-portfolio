import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './Icons'

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-900/30 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">
            Ready to start a <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">project?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <a href="mailto:sivaganeshv1729@gmail.com" className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 font-black rounded-2xl transition-all hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-widest">
              Say Hello
            </a>
            <a href="https://linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-slate-900 border border-slate-800 text-white font-black rounded-2xl hover:border-orange-500 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-sm uppercase tracking-widest">
              <LinkedInIcon size={20} /> LinkedIn
            </a>
          </div>
          
          <div className="flex justify-center gap-8">
            <a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
              <GitHubIcon size={28} />
            </a>
            <a href="mailto:sivaganeshv1729@gmail.com" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
