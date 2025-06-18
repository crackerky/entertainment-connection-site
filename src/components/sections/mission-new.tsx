'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal, hoverScale, bounceIn } from '@/lib/animations'
import { useRef } from 'react'

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const keywords = [
    { text: '生産する', emoji: '🏗️', description: '偶然ではなく仕組みとして "つながり" を生み出す' },
    { text: '活発化させる', emoji: '🚀', description: 'オンライン × オフラインの両側面からコミュニティを循環させる' },
    { text: 'エンタメ起点', emoji: '✨', description: '楽しさ・ワクワク感をビジネスのエンジンに' }
  ]

  return (
    <section ref={containerRef} className="py-20 bg-gradient-vibrant gradient-animate relative overflow-hidden">
      {/* Abstract animated background with reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-96 h-96 bg-primary blob-shape"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-secondary organic-shape"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{ 
              color: 'rgb(220, 38, 50)',
              textShadow: '0 0 30px rgba(220, 38, 50, 0.5), 0 0 60px rgba(220, 38, 50, 0.3), 0 0 90px rgba(220, 38, 50, 0.1)'
            }}
            {...scrollReveal}
          >
            理念（Mission）
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto glass p-8 rounded-3xl"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            variants={bounceIn}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              「つながりをプロデュースし、エンタメで日本を動かす」
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              私たちは、人と人の&ldquo;交差点&rdquo;をデザインし、そこから生まれる熱量を経済活力へと転換します。
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={fadeInUp}
        >
          {keywords.map((keyword, index) => (
            <motion.div
              key={index}
              className="glass-dark rounded-3xl p-8 hover-lift transform-3d"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
              variants={scrollReveal}
              {...hoverScale}
              whileHover={{
                ...hoverScale.whileHover,
                rotateY: 5,
                rotateX: -5,
              }}
            >
              <motion.div 
                className="text-6xl mb-4 text-center"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {keyword.emoji}
              </motion.div>
              
              <h4 className="text-2xl font-bold text-accent mb-3 text-center">
                {keyword.text}
              </h4>
              
              <p className="text-white/80 text-center">
                {keyword.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          style={{ opacity }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-primary via-secondary to-accent text-white px-8 py-4 rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-lg font-semibold">
              エンタメの力で、新しい価値を創造する
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Pattern overlay with reduced opacity */}
      <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none" />
    </section>
  )
}