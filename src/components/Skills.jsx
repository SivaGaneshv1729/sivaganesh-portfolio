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
    <section id="skills" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-orange-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase">My Skillset</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter">The Magic Behind</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            A focused stack built around fast interfaces, scalable systems, and thoughtful product design.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="px-8 py-5 bg-slate-900/40 border border-white/5 rounded-2xl text-slate-200 font-bold hover:border-orange-500/30 hover:bg-slate-900 transition-all cursor-default group flex items-center gap-4 shadow-xl"
            >
              <i className={`${skill.icon} text-2xl transition-transform group-hover:scale-110`} />
              <span className="tracking-tight">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
