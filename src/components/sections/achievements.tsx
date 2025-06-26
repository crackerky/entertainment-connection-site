'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal, bounceIn, pulse } from '@/lib/animations'
import { useState, useEffect } from 'react'

// Force rebuild: 2025-06-26 19:22
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const spring = useSpring(0, { stiffness: 100, damping: 30 })
  
  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  useEffect(() => {
    return spring.onChange((latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [spring])

  return (
    <span>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

type StatItem = 
  | { label: string; value: number; suffix: string; isText?: false; before?: undefined; after?: undefined; improvement?: undefined; }
  | { label: string; value: string; isText: true; suffix?: undefined; before?: undefined; after?: undefined; improvement?: undefined; }
  | { label: string; before: string; after: string; improvement: string; value?: undefined; suffix?: undefined; isText?: false; }

interface Achievement {
  id: number;
  title: string;
  stats: StatItem[];
  icon: string;
  gradient: string;
}

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'DealerStudio',
      stats: [
        { label: 'リリース半年で応募数', value: 150, suffix: '名突破' },
        { label: 'Instagram広告CPA', before: '¥5,500', after: '¥4,000台', improvement: '27%改善' },
        { label: '採用管理システム', value: '効率化実現', isText: true }
      ],
      icon: '🎯',
      gradient: 'from-primary to-secondary'
    },
    {
      id: 2,
      title: '埋め卓くん',
      stats: [
        { label: '対象店舗', value: '過去最高月商', isText: true },
        { label: 'LINE × Instagram', value: '来店率UP', isText: true },
        { label: '集客支援ツール', value: '空席率改善', isText: true }
      ],
      icon: '📈',
      gradient: 'from-secondary to-accent'
    },
    {
      id: 3,
      title: 'データ分析',
      stats: [
        { label: 'LINE運用代行：平均開封率', value: 48, suffix: '%' },
        { label: 'CTR改善率', value: 12, suffix: '%' },
        { label: 'エンタメ業界特化', value: '専門性あり', isText: true }
      ],
      icon: '📊',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      title: '総合実績',
      stats: [
        { label: 'イベント参加者満足度', value: 4.8, suffix: '/5' },
        { label: 'クライアント継続率', value: 95, suffix: '%' },
        { label: 'エンタメ業界専門', value: '実績豊富', isText: true }
      ],
      icon: '⭐',
      gradient: 'from-accent to-primary'
    }
  ]

  const services: Service[] = [
    {
      id: 1,
      title: 'DealerStudio',
      subtitle: '採用管理システム',
      description: 'エンタメ業界に特化した採用管理システム。応募から採用まで一元管理し、採用効率を大幅に改善。',
      features: [
        '応募者情報の一元管理',
        'Instagram広告との連携',
        'リアルタイムレポート機能',
        'モバイル対応で現場でも確認可能'
      ],
      icon: '💼',
      gradient: 'from-violet-600 to-blue-600'
    },
    {
      id: 2,
      title: '埋め卓くん',
      subtitle: '集客支援ツール',
      description: 'ポーカーバーやアミューズメント施設の空席を効率的に埋める集客支援ツール。',
      features: [
        'LINE・Instagram連携',
        'リアルタイム空席管理',
        '自動集客メッセージ配信',
        '来店分析・レポート機能'
      ],
      icon: '🎰',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'データ分析サービス',
      subtitle: 'エンタメ業界特化',
      description: 'エンタメ業界のマーケティングデータを分析し、最適な施策を提案。',
      features: [
        'LINE運用代行・分析',
        'Instagram広告運用',
        'A/Bテスト実施',
        'CPA最適化・改善提案'
      ],
      icon: '📊',
      gradient: 'from-cyan-600 to-teal-600'
    }
  ]

  return (
    <section id="achievements-section" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12 lg:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent"
            {...scrollReveal}
          >
            サービス実績（Service Achievements）
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            variants={fadeInUp}
          >
            私たちは実績で証明します。4つのサービスで具体的な成果を創出しています。
          </motion.p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="relative"
              variants={scrollReveal}
              custom={index}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 h-full hover:shadow-2xl transition-all border border-gray-100"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="text-4xl lg:text-6xl mb-4 lg:mb-6 text-center relative z-10"
                  {...pulse}
                >
                  {achievement.icon}
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-center mb-4 lg:mb-6 relative z-10 text-gray-800">
                  {achievement.title}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {achievement.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="text-center mb-3 lg:mb-4"
                      variants={bounceIn}
                      custom={statIndex * 0.1}
                    >
                      <p className="text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2 font-medium">{stat.label}</p>
                      {'isText' in stat && stat.isText ? (
                        <p className="text-lg lg:text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">{stat.value}</p>
                      ) : 'before' in stat && stat.before ? (
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2">
                          <span className="text-sm lg:text-base line-through text-gray-400">{stat.before}</span>
                          <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">→ {stat.after}</span>
                          <span className="text-xs lg:text-sm text-green-600 font-semibold">({stat.improvement})</span>
                        </div>
                      ) : (
                        <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                          <AnimatedNumber value={stat.value as number} suffix={stat.suffix} />
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          className="max-w-7xl mx-auto mb-20"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            事業紹介
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100"
                variants={scrollReveal}
                custom={index * 0.1}
                whileHover={{ y: -5 }}
              >
                <div className={`text-5xl mb-4 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="max-w-6xl mx-auto bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            なぜ私たちを選ぶのか
          </h3>
          
          <p className="text-xl text-center mb-12 leading-relaxed font-medium">
            エンタメ業界の課題を深く理解し、実績で証明してきた私たちだからこそ、<br />
            あなたのビジネスを次のステージへ導けます
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-4">
                実績を伴う「エンタメ × HR/集客」の専門家
              </h4>
              <div className="space-y-3 text-lg">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>DealerStudio：150名超の応募獲得</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>埋め卓くん：店舗の過去最高売上を更新</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-4">
                データドリブンな運用とスピード感
              </h4>
              <div className="space-y-3 text-lg">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>CPA最適化</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>A/Bテスト</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>即日PDCA</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-violet-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}