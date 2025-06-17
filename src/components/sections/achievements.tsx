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

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'DealerStudio',
      stats: [
        { label: 'リリース半年で応募数', value: 150, suffix: '名突破' },
        { label: 'Instagram広告CPA', before: '¥5,500', after: '¥4,000台', improvement: '27%改善' }
      ],
      icon: '🎯',
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 2,
      title: '埋め卓くん',
      stats: [
        { label: '対象店舗', value: '過去最高月商', isText: true },
        { label: 'LINE × Instagram', value: '来店率UP', isText: true }
      ],
      icon: '📈',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'その他実績',
      stats: [
        { label: 'LINE運用代行：平均開封率', value: 48, suffix: '%' },
        { label: 'CTR', value: 12, suffix: '%' },
        { label: 'イベント参加者満足度', value: 4.8, suffix: '/5' }
      ],
      icon: '⭐',
      color: 'from-green-500 to-emerald-600'
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
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
            実績（Achievements）
          </motion.h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="relative"
              variants={scrollReveal}
              custom={index}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-xl p-8 h-full hover:shadow-2xl transition-all"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl opacity-10`} />
                
                <motion.div 
                  className="text-6xl mb-6 text-center relative z-10"
                  {...pulse}
                >
                  {achievement.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-center mb-6 relative z-10">
                  {achievement.title}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {achievement.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="text-center"
                      variants={bounceIn}
                      custom={statIndex * 0.1}
                    >
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      {stat.isText ? (
                        <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                      ) : stat.before ? (
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg line-through text-gray-400">{stat.before}</span>
                          <span className="text-2xl font-bold text-gradient">→ {stat.after}</span>
                          <span className="text-sm text-green-600 font-semibold">({stat.improvement})</span>
                        </div>
                      ) : (
                        <p className="text-3xl font-bold text-gradient">
                          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
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
          <h3 className="text-3xl font-bold text-center mb-12">
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
                  className="w-24 h-24 mx-auto bg-gradient-to-br from-violet-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-4xl">{photo.emoji}</span>
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">{photo.type}</h4>
                <p className="text-sm text-gray-600">{photo.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}