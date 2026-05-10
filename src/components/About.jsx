import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-950/50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-bold tracking-widest text-sm mb-4 uppercase">A Bit More About Me</p>
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-white leading-tight">
              Crafting digital experiences with purpose
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I believe that code is more than just instructions for a machine; it's a medium for solving real human problems. My journey into software engineering is driven by a deep-seated curiosity about how things work and a desire to build tools that empower users.
              </p>
              <p>
                As a developer, I am deeply opinionated about user experience. I strive to build interfaces that feel alive and systems that scale elegantly. Every pixel should have a purpose, and every interaction should tell a story.
              </p>
              <p>
                When I'm not writing code, I'm analyzing design trends, mentoring peers, and pushing the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-3xl rotate-3 -z-10" />
            <div className="w-full h-full bg-slate-900 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-8 backdrop-blur-xl">
               <div className="text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center rotate-12 group hover:rotate-0 transition-transform duration-500">
                     <span className="text-white text-4xl font-black -rotate-12 group-hover:rotate-0 transition-transform duration-500">SG</span>
                  </div>
                  <p className="text-white font-bold text-xl mb-2">T Siva Ganesh Vemula</p>
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Aspiring Software Engineer</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
