import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    { name: "Python", color: "text-blue-400" },
    { name: "Java", color: "text-red-400" },
    { name: "SQL", color: "text-blue-300" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "Bootstrap", color: "text-purple-400" },
    { name: "Express.js", color: "text-gray-300" },
    { name: "FastAPI", color: "text-emerald-400" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "Git", color: "text-orange-500" },
    { name: "GitHub", color: "text-white" },
    { name: "Docker", color: "text-blue-500" },
    { name: "Figma", color: "text-rose-400" },
    { name: "Canva", color: "text-cyan-400" }
  ]

  return (
    <section id="skills" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-4 uppercase">My Skillset</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">The Magic Behind</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A focused stack built around fast interfaces, scalable systems, and thoughtful product design.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="px-8 py-4 bg-slate-900/50 border border-slate-800/50 rounded-2xl text-slate-200 font-semibold hover:border-orange-500/50 hover:bg-slate-900 transition-all cursor-default group shadow-sm"
            >
              <span className={`inline-block mr-2 transition-transform group-hover:scale-110 ${skill.color}`}>●</span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
