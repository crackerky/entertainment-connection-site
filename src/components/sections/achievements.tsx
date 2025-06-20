'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { fadeInUp, staggerContainer, scrollReveal, bounceIn, pulse } from '@/lib/animations'
import { useState, useEffect } from 'react'

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
      icon: '📉',
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

  const photos = [
    { type: '体験型ショット', emoji: '🎪', description: 'ポーカーテーブルで盛り上がる来店客' },
    { type: 'プロダクト画面', emoji: '💻', description: 'DealerStudio & 埋め卓くんのUI' },
    { type: 'チーム写真', emoji: '👥', description: '多様性あるメンバーの議論' },
    { type: '成果グラフ', emoji: '📊', description: '売上推移や応募数の成長カーブ' },
    { type: 'コミュニティ', emoji: '🤝', description: 'イベントやユーザー交流シーン' }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            エンターテイメント業界に特化した4つのサービスで、実際の成果を上げています
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
                className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 h-full hover:shadow-2xl transition-all"
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

        {/* Photo Ideas Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            載せたい写真アイデア
          </h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={scrollReveal}
                custom={index * 0.1}
              >
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all">
                    <span className="text-4xl">{photo.emoji}</span>
                  </div>
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">{photo.type}</h4>
                <p className="text-sm text-gray-600">{photo.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements with reduced opacity */}
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 bg-secondary/10 organic-shape blur-2xl"
        animate={{
          y: [-30, 30, -30],
          x: [20, -20, 20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  )
}