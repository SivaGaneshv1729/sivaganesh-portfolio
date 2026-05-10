import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  "Hello", "Bonjour", "Hola", "Ciao", "Olá", "Hej", "Ahoj", "Namaste", "Vanakkam"
]

const Preloader = () => {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => setIsVisible(false), 1000)
      return
    }

    const timeout = setTimeout(() => {
      setIndex(prev => prev + 1)
    }, index === 0 ? 1000 : 150)

    return () => clearTimeout(timeout)
  }, [index])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            key={words[index]}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-orange-500" />
            <p className="text-white text-5xl md:text-7xl font-bold tracking-tight">
              {words[index]}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
