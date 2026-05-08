import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    "Python", "Java", "SQL", "JavaScript", 
    "React", "FastAPI", "MongoDB", "Express.js",
    "Docker", "Git", "Figma", "Tailwind CSS"
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">My Skillset</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-slate-300 font-medium hover:border-orange-500 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
