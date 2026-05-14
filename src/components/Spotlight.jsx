import { useEffect } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

const Spotlight = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) => `radial-gradient(800px circle at ${latestX}px ${latestY}px, rgba(245, 119, 88, 0.08), transparent 80%)`
  )

  return (
    <motion.div
      style={{ background }}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

export default Spotlight
