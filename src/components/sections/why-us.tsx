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
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'データドリブンな運用とスピード感',
      description: 'CPA最適化、A/Bテスト、即日PDCA',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'コミュニティ設計のノウハウ',
      description: '求人→採用→ファン化まで一貫して支援',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'エンタメ独自ネットワーク',
      description: 'ポーカールーム／カジノ業界の店舗・インフルエンサー連携',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Target,
      title: '10×思考',
      description: '既存手法の延長でなく "10倍の成果" を狙うプロダクト設計',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-50 via-transparent to-blue-50 opacity-50" />
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient"
            {...scrollReveal}
          >
            なぜ私たちなのか（Why Us）
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
                className={`relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all transform-3d`}
                {...cardHover3D}
                whileHover={{
                  ...cardHover3D.whileHover,
                  scale: 1.05,
                }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-5 rounded-3xl`} />
                
                {/* Icon container */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${strength.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ rotate: 360 }}
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

                {/* Hover effect sparkles */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
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
            <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-1 rounded-full">
              <div className="bg-white rounded-full px-8 py-4">
                <p className="text-lg font-semibold text-gradient">
                  実績と情熱で、あなたのビジネスを加速させます
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}