'use client'

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef, useEffect, useState, ReactNode } from 'react'
import Image from 'next/image'

// Enhanced Scroll Reveal with Multiple Triggers
interface AdvancedScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  className?: string
}

export function AdvancedScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = '' 
}: AdvancedScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    up: { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
    rotate: { initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: 0 } }
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={isInView ? variants[direction].animate : variants[direction].initial}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax Section with Multiple Layers
interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: springY }}>
        {children}
      </motion.div>
    </div>
  )
}

// 3D Image Gallery with Scroll
interface Image3DGalleryProps {
  images: string[]
  className?: string
}

export function Image3DGallery({ images, className = '' }: Image3DGalleryProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, -45])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            style={{
              rotateX,
              transformStyle: "preserve-3d"
            }}
            whileHover={{ 
              scale: 1.1, 
              z: 50,
              rotateY: index * 5 
            }}
            className="relative group cursor-pointer"
          >
            <Image 
              src={image} 
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Scroll-triggered Counter Animation
interface AnimatedCounterProps {
  target: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({ 
  target, 
  duration = 2, 
  className = '',
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.8 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = target
    const increment = end / (duration * 60) // 60fps
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  )
}

// Staggered Text Animation
interface StaggeredTextProps {
  text: string
  className?: string
  delay?: number
}

export function StaggeredText({ text, className = '', delay = 0 }: StaggeredTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const letters = text.split('')

  return (
    <motion.div ref={ref} className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            delay: delay + (index * 0.05),
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Morphing Background
export function MorphingBackground() {
  const { scrollYProgress } = useScroll()
  
  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", 
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    ]
  )

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ background }}
    />
  )
}

// Scroll Progress Indicator
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

// Interactive Scroll Sections
interface ScrollSectionProps {
  children: ReactNode
  id: string
  className?: string
}

export function ScrollSection({ children, id, className = '' }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ scale, opacity }}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </motion.section>
  )
}

// Image Swap on Scroll
interface ScrollImageSwapProps {
  images: string[]
  className?: string
}

export function ScrollImageSwap({ images, className = '' }: ScrollImageSwapProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    return imageIndex.onChange(latest => {
      setCurrentIndex(Math.round(latest))
    })
  }, [imageIndex])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            scale: currentIndex === index ? 1 : 1.1
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={`Scroll image ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  )
}