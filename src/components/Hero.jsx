import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background radial gradients matching initial branch */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/3 right-[10%] w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] -z-10"
      />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-orange-500 font-bold tracking-[0.4em] text-[12px] mb-8 uppercase"
          >
            ASPIRING SOFTWARE ENGINEER
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter text-white"
          >
            Digital <br />
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Architect.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-400 mb-16 max-w-3xl leading-relaxed font-medium"
          >
            Building high-performance systems and elegant user experiences. I turn complex problems into scalable digital solutions.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 0.6 }}
             className="flex flex-wrap gap-6"
          >
            <a href="#projects" className="px-12 py-6 bg-white text-slate-950 font-black rounded-2xl transition-all hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 text-sm tracking-widest uppercase">
              View My Work
            </a>
            <a href="https://drive.google.com/file/d/1Z2ZUkhXqSvGRlgMjDKAw019l5DH79g9C/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-12 py-6 border border-white/10 text-white font-black rounded-2xl hover:bg-white hover:text-slate-950 transition-all transform hover:-translate-y-1 text-sm tracking-widest uppercase">
              My Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-800 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-800 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
