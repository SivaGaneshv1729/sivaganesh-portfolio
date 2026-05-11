import { motion } from 'framer-motion'

const skillCategories = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Canva", icon: "devicon-canva-original colored" }
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-slate-950 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,119,88,0.03),transparent_70%)] pointer-events-none" />
       
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-orange-500 font-bold tracking-[0.4em] text-[10px] mb-4 uppercase">MY SKILLSET</p>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">The Magic Behind</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            A focused stack built around fast interfaces, scalable systems, and thoughtful product design.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="px-6 py-4 bg-slate-900/40 border border-white/5 rounded-2xl text-slate-200 font-bold hover:border-orange-500/30 hover:bg-slate-900 transition-all cursor-default group flex items-center gap-3 shadow-xl"
            >
              <i className={`${skill.icon} text-xl transition-transform group-hover:scale-110`} />
              <span className="text-sm tracking-tight">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
