import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselImages = [
  "/images/sg1.jpg",
  "/images/main logo.png",
  "/images/project2_clear.png",
  "/images/siva_ganesh.png"
]

const About = () => {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden z-10">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-bold tracking-[0.4em] text-[10px] mb-6 uppercase">A BIT MORE ABOUT ME</p>
            <h2 className="text-5xl md:text-7xl font-black mb-10 text-white leading-[0.9] tracking-tighter">
              Crafting digital <br /> experiences with <br /> <span className="text-slate-800">purpose.</span>
            </h2>
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
              <p>
                I believe that code is more than just instructions for a machine; it's a medium for solving real human problems. My transition from photography to software engineering wasn't a departure from creativity, but an evolution of it.
              </p>
              <p>
                As a developer, I am deeply opinionated about user experience. I strive to build interfaces that feel alive and systems that scale elegantly. Every pixel should have a purpose, and every interaction should tell a story.
              </p>
              <p>
                When I'm not writing code, I'm analyzing design trends, mentoring peers, and pushing the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>

          {/* About Carousel Visual - Mimicking the vanilla version's visual stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square max-w-lg mx-auto lg:mr-0 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 rounded-[3rem] rotate-6 -z-10 blur-2xl group-hover:rotate-0 transition-transform duration-700" />
            
            <div className="w-full h-full bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center backdrop-blur-3xl shadow-2xl relative">
               <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIndex}
                    src={carouselImages[imgIndex]}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Siva Ganesh Visual"
                  />
               </AnimatePresence>

               {/* Overlay Content */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 bg-slate-950/40">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-orange-600 rounded-3xl mb-8 flex items-center justify-center rotate-12 shadow-2xl shadow-orange-500/40"
                  >
                     <span className="text-white text-4xl font-black -rotate-12">SG</span>
                  </motion.div>
                  <p className="text-white font-black text-2xl mb-2 tracking-tight">T Siva Ganesh Vemula</p>
                  <p className="text-orange-500 uppercase tracking-[0.4em] text-[10px] font-black">Aspiring Software Engineer</p>
               </div>

               {/* Carousel Dots */}
               <div className="absolute bottom-10 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 transition-all duration-500 rounded-full ${i === imgIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/20'}`} 
                    />
                  ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
