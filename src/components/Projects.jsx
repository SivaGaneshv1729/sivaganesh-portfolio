import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Payment Gateway",
      description: "Engineered a robust payment gateway integration containerized via Docker for high reliability.",
      tags: ["React", "FastAPI", "Docker"],
      github: "https://github.com/SivaGaneshv1729/production-payment-gateway-async",
      demo: "https://sivaganeshv.pages.dev/"
    },
    {
      title: "Multi-Tenant SaaS Platform",
      description: "Architected a scalable MERN stack platform featuring secure role-based isolation.",
      tags: ["MongoDB", "Express", "React", "Node"],
      github: "https://github.com/SivaGaneshv1729/multi-tenant-saas-platform",
      demo: "https://sivaganeshv.pages.dev/"
    },
    {
      title: "ClassmateAI",
      description: "A full-stack application adopted by 50+ peers for task management, powered by Gemini API.",
      tags: ["Gemini API", "FastAPI", "React"],
      github: "https://github.com/SivaGaneshv1729/ClassmateAI",
      demo: "https://sivaganeshv.pages.dev/"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 px-2 py-1 bg-slate-950 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
