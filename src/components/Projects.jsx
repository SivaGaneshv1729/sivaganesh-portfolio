import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Payment Gateway",
    description: "Engineered a robust payment gateway integration containerized via Docker for high reliability. Resolved build configurations and implemented testing for high system reliability.",
    tags: ["React", "FastAPI", "Docker"],
    github: "https://github.com/SivaGaneshv1729/production-payment-gateway-async",
    demo: "https://sivaganeshv.pages.dev/",
    image: "images/project1_clear.png"
  },
  {
    title: "Multi-Tenant SaaS Platform",
    description: "Architected a scalable MERN stack platform featuring secure role-based isolation. Designed RESTful APIs and optimized schemas for secure, role-based data isolation.",
    tags: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com/SivaGaneshv1729/multi-tenant-saas-platform",
    demo: "https://sivaganeshv.pages.dev/",
    image: "images/project2_clear.png"
  },
  {
    title: "ClassmateAI",
    description: "Built ClassmateAI, adopted by 50+ peers for task and note management. Architected a Full-Stack Application featuring an AI chatbot powered by the Google Gemini API.",
    tags: ["Gemini API", "FastAPI", "React"],
    github: "https://github.com/SivaGaneshv1729/ClassmateAI",
    demo: "https://sivaganeshv.pages.dev/",
    image: "images/project3_clear.png"
  }
]

const Projects = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // We want to translate from 0 to -(total items - 1) * 100%
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`])

  return (
    <section ref={containerRef} id="projects" className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text (Fade in/out) */}
          <div className="relative h-[450px] flex items-center">
            {projects.map((project, index) => {
              const start = index / projects.length
              const end = (index + 1) / projects.length
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [20, 0, 0, -20])

              return (
                <motion.div
                  key={project.title}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="text-orange-500 font-bold tracking-widest text-sm mb-4 uppercase">Project 0{index + 1}</p>
                  <h3 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-widest">
                      <Github size={18} /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-bold text-sm uppercase tracking-widest">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Visual Track */}
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/5 bg-slate-900/10 backdrop-blur-sm">
            {/* Scroll Indicator Line */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-slate-900/50 rounded-full z-10 overflow-hidden">
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className="w-full h-full bg-gradient-to-b from-orange-500 to-rose-500"
               />
            </div>

            {/* Visual Track */}
            <motion.div 
              style={{ y: translateY }}
              className="w-full h-full flex flex-col"
            >
              {projects.map((project) => (
                <div key={project.title} className="w-full h-full flex-shrink-0 flex items-center justify-center p-8 md:p-12">
                   <div className="relative w-full aspect-[899/647] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
