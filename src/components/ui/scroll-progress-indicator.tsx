'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-blue-600 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}