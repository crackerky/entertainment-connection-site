'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal, float, pulse } from '@/lib/animations'
import { sectionTransitions } from '@/lib/enhanced-animations'
import { useRef } from 'react'

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const visionPoints = [
    {
      icon: '💰',
      title: 'エンタメ産業を"内需 × 外貨"の二本柱に',
      description: '国内市場の活性化と海外展開を同時推進',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: '🌏',
      title: '日本の文化・サービスを世界基準のIPへ',
      description: 'グローバル市場で勝負できるコンテンツ育成',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: '🚀',
      title: '新しい働き方・雇用を創出',
      description: '若い才能が挑戦できる土壌をつくる',
      gradient: 'from-accent to-primary'
    }
  ]

  return (
    <motion.section 
      ref={containerRef} 
      className="py-20 bg-gradient-to-br from-white via-secondary/10 to-accent/10 relative overflow-hidden"
      {...sectionTransitions.blurTransition}>
      {/* Abstract animated shapes with reduced opacity */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pattern-grid opacity-10"
        />
        <motion.div 
          className="absolute top-20 -left-20 w-96 h-96 bg-secondary/20 morph blur-3xl"
          style={{ scale, rotate }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/20 blob-shape blur-3xl float-1"
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 organic-shape blur-2xl float-2"
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
            作りたい世界（Vision）
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-primary"
              whileInView={{ 
                scale: [0.9, 1.05, 1],
                transition: { duration: 0.5 }
              }}
            >
              「エンタメの力で、日本を再び&ldquo;世界一躍動する経済大国&rdquo;へ」
            </motion.h3>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={scrollReveal}
              custom={index}
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${point.gradient} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}
                {...pulse}
              />
              
              <motion.div
                className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border-2 border-transparent hover:border-primary/20 transition-all hover-lift shadow-xl"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: -5
                }}
              >
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  {...float}
                >
                  {point.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold mb-4 text-center text-primary">
                  {point.title}
                </h4>
                
                <p className="text-gray-700 text-center">
                  {point.description}
                </p>

                <motion.div 
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${point.gradient} rounded-full`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Vision illustration */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <motion.div 
            className="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-3xl gradient-animate"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white rounded-3xl p-12 text-center">
              <motion.div 
                className="text-8xl mb-6 inline-block"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              >
                🌐
              </motion.div>
              <h4 className="text-2xl font-bold mb-4 text-gradient-vibrant">
                日本のエンタメを世界へ
              </h4>
              <p className="text-gray-700 text-lg">
                テクノロジーとクリエイティビティの融合で、
                新しいエンターテインメントの形を創造します
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Abstract floating elements with reduced opacity */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 blob-shape blur-3xl animate-blob" />
    </motion.section>
  )
}