import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './Icons'

const projects = [
  {
    title: "Payment Gateway",
    description: "Engineered a robust payment gateway integration containerized via Docker for high reliability. Resolved build configurations and implemented testing for high system reliability.",
    tags: ["React", "FastAPI", "Docker"],
    github: "https://github.com/SivaGaneshv1729/production-payment-gateway-async",
    demo: "https://sivaganeshv.pages.dev/",
    image: "/images/project1_clear.png"
  },
  {
    title: "Multi-Tenant SaaS Platform",
    description: "Architected a scalable MERN stack platform featuring secure role-based isolation. Designed RESTful APIs and optimized schemas for secure, role-based data isolation.",
    tags: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com/SivaGaneshv1729/multi-tenant-saas-platform",
    demo: "https://sivaganeshv.pages.dev/",
    image: "/images/project2_clear.png"
  },
  {
    title: "ClassmateAI",
    description: "Built ClassmateAI, adopted by 50+ peers for task and note management. Architected a Full-Stack Application featuring an AI chatbot powered by the Google Gemini API.",
    tags: ["Gemini API", "FastAPI", "React"],
    github: "https://github.com/SivaGaneshv1729/ClassmateAI",
    demo: "https://sivaganeshv.pages.dev/",
    image: "/images/project3_clear.png"
  }
]

const ProjectText = ({ project, index, total, scrollYProgress }) => {
  const start = index / total
  const end = (index + 1) / total
  
  // Adjusted thresholds for smoother transitions
  // If it's the first project, it should be visible immediately (opacity 1 at start=0)
  const opacityRange = index === 0 
    ? [0, end - 0.1, end] 
    : [start, start + 0.1, end - 0.1, end];
  
  const opacityValues = index === 0 
    ? [1, 1, 0] 
    : [0, 1, 1, 0];

  // If it's the last project, it should stay visible until the end
  const finalOpacityRange = index === total - 1 
    ? [start, start + 0.1, 1] 
    : opacityRange;
  
  const finalOpacityValues = index === total - 1 
    ? [0, 1, 1] 
    : opacityValues;

  const opacity = useTransform(scrollYProgress, finalOpacityRange, finalOpacityValues)
  const scale = useTransform(scrollYProgress, finalOpacityRange, [0.95, 1, 0.95])
  const y = useTransform(scrollYProgress, finalOpacityRange, [20, 0, -20])

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex flex-col justify-center px-4"
    >
      <div className="mb-8 flex items-center gap-4">
        <span className="text-orange-500 font-black text-xl">0{index + 1}</span>
        <div className="h-[1px] w-12 bg-orange-500/50" />
        <span className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Project Showcase</span>
      </div>
      
      <h3 className="text-5xl md:text-7xl font-black mb-8 text-white leading-[0.9] tracking-tighter">
        {project.title.split(' ').map((word, i) => (
          <span key={i} className="block">{word}</span>
        ))}
      </h3>
      
      <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed font-medium">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map(tag => (
          <span key={tag} className="px-4 py-1.5 bg-slate-900 border border-white/5 rounded-full text-[11px] font-black text-slate-500 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-8">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-orange-500 transition-all font-black text-xs uppercase tracking-[0.2em] group">
          <GitHubIcon size={20} /> 
          <span className="border-b-2 border-transparent group-hover:border-orange-500 pb-1">Code</span>
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-orange-500 transition-all font-black text-xs uppercase tracking-[0.2em] group">
          <ExternalLink size={20} /> 
          <span className="border-b-2 border-transparent group-hover:border-orange-500 pb-1">Live</span>
        </a>
      </div>
    </motion.div>
  )
}

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

  // Fixed mapping for image track:
  // We want the track to move ONLY when shifting between projects.
  // BUT the user liked the 1:1 scroll feel from the original.
  // Original logic: trackMaxTranslate = (cards.length - 1) * cardHeight
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`])

  return (
    <section ref={containerRef} id="projects" className="relative h-[400vh] bg-slate-950 z-20">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] flex items-center">
            {projects.map((project, index) => (
              <ProjectText 
                key={project.title} 
                project={project} 
                index={index} 
                total={projects.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>

          <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/20 backdrop-blur-xl shadow-2xl">
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[2px] h-[40%] bg-slate-800 rounded-full z-20 overflow-hidden">
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className="w-full h-full bg-orange-500"
               />
            </div>

            <motion.div 
              style={{ y: translateY }}
              className="w-full h-full flex flex-col"
            >
              {projects.map((project) => (
                <div key={project.title} className="w-full h-full flex-shrink-0 flex items-center justify-center p-12 lg:p-20">
                   <motion.div 
                     whileHover={{ scale: 1.02, rotate: 1 }}
                     className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 group bg-slate-800"
                   >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   </motion.div>
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
