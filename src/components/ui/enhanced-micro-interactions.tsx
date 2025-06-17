'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, ReactNode } from 'react'

// Magnetic Button Component
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 400, damping: 30 })
  const springY = useSpring(y, { stiffness: 400, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

// Progressive Loader with Micro-interactions
export function ProgressiveLoader({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div
        className="bg-gradient-to-r from-violet-600 to-blue-600 h-full rounded-full relative"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-30"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  )
}

// Interactive Card with Advanced Hover
interface InteractiveCardProps {
  children: ReactNode
  className?: string
}

export function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
      onMouseMove={handleMouseMove}
      className={`perspective-1000 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Ripple Effect Button
export function RippleButton({ children, onClick, className = '' }: MagneticButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number, x: number, y: number }>>([])

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    }
    
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 1000)
    
    onClick?.()
  }

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white opacity-30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ width: 0, height: 0 }}
          animate={{ width: 200, height: 200 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  )
}

// Particle System Background
export function ParticleBackground({ particleCount = 50 }: { particleCount?: number }) {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })
  const particles = Array.from({ length: particleCount }, (_, i) => i)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(i => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-20"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Morphing Icon
interface MorphingIconProps {
  icon1: ReactNode
  icon2: ReactNode
  isToggled: boolean
  onClick?: () => void
  className?: string
}

export function MorphingIcon({ icon1, icon2, isToggled, onClick, className = '' }: MorphingIconProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          rotateY: isToggled ? 180 : 0,
          scale: isToggled ? 0.8 : 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ opacity: isToggled ? 0 : 1 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          {icon1}
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isToggled ? 1 : 0 }}
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {icon2}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

// Floating Action Button with Micro Menu
interface FloatingMenuProps {
  mainIcon: ReactNode
  menuItems: Array<{ icon: ReactNode, label: string, onClick: () => void }>
  className?: string
}

export function FloatingMenu({ mainIcon, menuItems, className = '' }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`fixed bottom-6 right-6 ${className}`}>
      {/* Menu Items */}
      <motion.div
        className="absolute bottom-16 right-0 flex flex-col gap-2"
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : 20
        }}
        transition={{ duration: 0.2, staggerChildren: 0.05 }}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow group"
            onClick={item.onClick}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : 20
            }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Main Button */}
      <motion.button
        className="bg-violet-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {mainIcon}
      </motion.button>
    </div>
  )
}