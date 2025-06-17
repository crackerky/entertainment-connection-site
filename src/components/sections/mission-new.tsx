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
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-violet-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient"
            {...scrollReveal}
          >
            理念（Mission）
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={bounceIn}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              「つながりをプロデュースし、エンタメで日本を動かす」
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              私たちは、人と人の"交差点"をデザインし、そこから生まれる熱量を経済活力へと転換します。
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
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift perspective-1000"
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
              
              <h4 className="text-2xl font-bold text-violet-600 mb-3 text-center">
                {keyword.text}
              </h4>
              
              <p className="text-gray-600 text-center">
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
            className="inline-block bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-lg font-semibold">
              エンタメの力で、新しい価値を創造する
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}