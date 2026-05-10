import { motion } from 'framer-motion'

const journeyData = [
  {
    year: "2024 - PRESENT",
    title: "Full-Stack Development & AI Integration",
    description: "Deep-diving into modern frameworks (React, FastAPI) and exploring the intersection of AI and user experience. Building production-ready systems like Payment Gateways and SaaS platforms.",
    side: "right"
  },
  {
    year: "2023 - 2024",
    title: "Software Engineering Fundamentals",
    description: "Mastered core computer science principles, data structures, and algorithms. Built a solid foundation in Python, Java, and SQL while developing internal tools for peer groups.",
    side: "left"
  },
  {
    year: "2021 - 2023",
    title: "The Creative Genesis",
    description: "Started my journey in digital creation, focusing on photography and design. This phase honed my eye for detail and visual storytelling, which now translates into pixel-perfect frontend development.",
    side: "right"
  }
]

const Journey = () => {
  return (
    <section id="journey" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,119,88,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-4 uppercase">My Evolution</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">The Journey</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From visual storytelling to architectural code. A timeline of growth, learning, and constant evolution.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-800 to-transparent hidden md:block" />
          
          <div className="space-y-20 relative">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${item.side === 'left' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className={`p-8 bg-slate-900/40 border border-white/5 rounded-3xl backdrop-blur-sm hover:border-orange-500/30 transition-all ${item.side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-4 py-1 bg-orange-600/10 border border-orange-500/20 rounded-full text-orange-500 text-xs font-bold mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Node */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900">
                  <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(245,119,88,0.5)]" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
