'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal, float, pulse } from '@/lib/animations'
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
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🌏',
      title: '日本の文化・サービスを世界基準のIPへ',
      description: 'グローバル市場で勝負できるコンテンツ育成',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🚀',
      title: '新しい働き方・雇用を創出',
      description: '若い才能が挑戦できる土壌をつくる',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-gray-900 via-violet-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20"
          style={{ scale, rotate }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            {...scrollReveal}
          >
            作りたい世界（Vision）
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight"
              whileInView={{ 
                backgroundImage: 'linear-gradient(to right, #8B5CF6, #3B82F6, #10B981)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                transition: { duration: 1 }
              }}
            >
              「エンタメの力で、日本を再び"世界一躍動する経済大国"へ」
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
                className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}
                {...pulse}
              />
              
              <motion.div
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all hover-lift"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  {...float}
                >
                  {point.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold mb-4 text-center">
                  {point.title}
                </h4>
                
                <p className="text-gray-300 text-center">
                  {point.description}
                </p>
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
            className="bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600 p-1 rounded-3xl gradient-animate"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gray-900 rounded-3xl p-12 text-center">
              <motion.div 
                className="text-8xl mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🌐
              </motion.div>
              <h4 className="text-2xl font-bold mb-4">
                日本のエンタメを世界へ
              </h4>
              <p className="text-gray-300 text-lg">
                テクノロジーとクリエイティビティの融合で、
                新しいエンターテインメントの形を創造します
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}