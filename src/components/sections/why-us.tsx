'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal, hoverScale, cardHover3D } from '@/lib/animations'
import { TrendingUp, Zap, Users, Globe, Target, Sparkles } from 'lucide-react'

export default function WhyUs() {
  const strengths = [
    {
      icon: TrendingUp,
      title: '実績を伴う"エンタメ × HR/集客"の専門家',
      description: 'DealerStudio：150名超の応募獲得\n埋め卓くん：店舗の過去最高売上を更新',
      bgShape: 'blob-shape'
    },
    {
      icon: Zap,
      title: 'データドリブンな運用とスピード感',
      description: 'CPA最適化、A/Bテスト、即日PDCA',
      bgShape: 'organic-shape'
    },
    {
      icon: Users,
      title: 'コミュニティ設計のノウハウ',
      description: '求人→採用→ファン化まで一貫して支援',
      bgShape: 'blob-shape'
    },
    {
      icon: Globe,
      title: 'エンタメ独自ネットワーク',
      description: 'ポーカールーム／カジノ業界の店舗・インフルエンサー連携',
      bgShape: 'organic-shape'
    },
    {
      icon: Target,
      title: '10×思考',
      description: '既存手法の延長でなく "10倍の成果" を狙うプロダクト設計',
      bgShape: 'blob-shape'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blob-shape blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 organic-shape blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pattern-dots opacity-5" />
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient-vibrant"
            {...scrollReveal}
          >
            なぜ私たちなのか（Why Us）
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            エンタメ業界の課題を深く理解し、実績で証明してきた私たちだからこそ、
            あなたのビジネスを次のステージへ導けます
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              variants={scrollReveal}
              custom={index}
            >
              <motion.div
                className="relative group"
                {...cardHover3D}
                whileHover={{
                  ...cardHover3D.whileHover,
                  scale: 1.05,
                }}
              >
                {/* Dynamic background shape */}
                <motion.div 
                  className={`absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 ${strength.bgShape} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform-3d border border-gray-100 hover:border-primary/20">
                  {/* Icon container */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-6 relative z-10 neon-primary"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <strength.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {strength.title}
                  </h3>
                  
                  <p className="text-gray-600 whitespace-pre-line relative z-10">
                    {strength.description}
                  </p>

                  {/* Hover effect elements */}
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="w-6 h-6 text-accent" />
                  </motion.div>

                  {/* Bottom gradient line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block"
            {...hoverScale}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-full">
                <div className="bg-white rounded-full px-8 py-4">
                  <p className="text-lg font-semibold text-gradient-vibrant">
                    実績と情熱で、あなたのビジネスを加速させます
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 blob-shape blur-3xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}