'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer, hoverScale, float, scrollReveal } from '@/lib/animations'
import { advancedMicroInteractions, smartButton } from '@/lib/enhanced-animations'
import { Button } from '@/components/ui/button'
import { MagneticButton, InteractiveCard } from '@/components/ui/enhanced-micro-interactions'
import { AdvancedScrollReveal, StaggeredText, AnimatedCounter } from '@/components/ui/advanced-scroll-animations'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-blue-50 pt-20 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-violet-300 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </motion.div>
      
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ opacity }}
      >
        <AdvancedScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <StaggeredText 
              text="つながりをプロデュースし、"
              className="block text-gray-900"
              delay={0}
            />
            <StaggeredText 
              text="エンタメで日本を動かす"
              className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent"
              delay={0.5}
            />
          </h1>
        </AdvancedScrollReveal>
        
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
        >
          人と人の&ldquo;交差点&rdquo;をデザインし、そこから生まれる熱量を経済活力へと転換します
        </motion.p>
        
        <AdvancedScrollReveal direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all">
              無料で始める
            </MagneticButton>
            <MagneticButton className="border-2 border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-4 text-lg rounded-xl bg-white">
              資料ダウンロード
            </MagneticButton>
          </div>
        </AdvancedScrollReveal>

        {/* Hero visual with enhanced animation */}
        <AdvancedScrollReveal direction="scale" delay={1.0}>
          <div className="relative max-w-4xl mx-auto">
            <InteractiveCard className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <motion.div 
                  className="text-6xl mb-4"
                  {...float}
                >
                  🎭
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Entertainment Connect</h3>
                <p className="text-lg opacity-90">エンタメ業界のDXを加速する統合プラットフォーム</p>
              </div>
            </InteractiveCard>
          </div>
        </AdvancedScrollReveal>

        {/* Services preview with micro-interactions */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            主要サービス
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { emoji: '🎯', text: 'DealerStudio', description: '採用管理システム' },
              { emoji: '🃏', text: '埋め卓くん', description: '集客支援ツール' },
              { emoji: '📊', text: 'データ分析', description: '売上・顧客分析' },
              { emoji: '🎪', text: 'イベント企画', description: 'トータルサポート' }
            ].map((service, index) => (
              <AdvancedScrollReveal 
                key={index}
                direction="up" 
                delay={1.2 + index * 0.1}
              >
                <InteractiveCard className="flex flex-col items-center group cursor-pointer">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-violet-100 to-blue-100 rounded-2xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-all"
                    {...advancedMicroInteractions.morphingShape}
                  >
                    <span className="text-2xl">{service.emoji}</span>
                  </motion.div>
                  <span className="text-sm font-semibold text-gray-900">{service.text}</span>
                  <span className="text-xs text-gray-600 mt-1">{service.description}</span>
                </InteractiveCard>
              </AdvancedScrollReveal>
            ))}
          </div>
          
          <motion.p 
            className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            エンタメ産業を&ldquo;内需 × 外貨&rdquo;の二本柱に成長させ、<br />
            日本を再び&ldquo;世界一躍動する経済大国&rdquo;へ
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}