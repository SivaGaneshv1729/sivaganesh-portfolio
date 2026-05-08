import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
             I am T Siva Ganesh Vemula, a passionate developer deeply opinionated about user experience. I strive to build interfaces that feel alive and systems that scale elegantly. Every pixel should have a purpose, and every interaction should tell a story.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
             Currently focusing on modern frontend frameworks and AI-powered applications. When I'm not writing code, I'm analyzing design trends and pushing the boundaries of what's possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
