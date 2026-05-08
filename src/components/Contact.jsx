import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          <a href="mailto:sivaganeshv1729@gmail.com" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-500 hover:text-blue-500 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-white hover:text-white transition-all">
            <Github size={24} />
          </a>
        </div>
        
        <a href="mailto:sivaganeshv1729@gmail.com" className="inline-block px-12 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all">
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact
