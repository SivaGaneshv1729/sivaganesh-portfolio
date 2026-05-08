import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax Background Element (Requirement 4: Parallax) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] -z-10"
      />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hello<span className="text-orange-500">.</span><br />
            I'm <span className="text-white">T Siva Ganesh</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-lg"
          >
            Aspiring Software Engineer & Designer building elegant, high-performance web experiences.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20">
              View My Work
            </a>
            <a href="https://drive.google.com/file/d/1Z2ZUkhXqSvGRlgMjDKAw019l5DH79g9C/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 hover:border-orange-500 rounded-full font-bold transition-all">
              My Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/10 to-rose-500/10 border border-white/5 p-4 backdrop-blur-3xl">
             <div className="w-full h-full rounded-xl bg-slate-900/50 flex items-center justify-center border border-white/5">
                <span className="text-slate-800 text-8xl font-black">SG</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
