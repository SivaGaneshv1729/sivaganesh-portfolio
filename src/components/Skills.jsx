import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: "Frontend & Design",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Canva", icon: "devicon-canva-original colored" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-orange-500 font-bold tracking-[0.4em] text-[10px] mb-4 uppercase">TECH STACK</p>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">Tools of the Trade</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Building robust applications with a curated set of modern technologies and industry best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.8 }}
              className="p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] backdrop-blur-xl hover:border-orange-500/20 transition-all group"
            >
              <h3 className="text-white font-black text-xl mb-8 tracking-tight flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                {group.title}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-4 py-3 bg-slate-950/50 border border-white/5 rounded-xl text-slate-300 font-bold hover:bg-slate-900 transition-all cursor-default group/item"
                  >
                    <i className={`${skill.icon} text-xl transition-transform group-hover/item:scale-110`} />
                    <span className="text-sm tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
