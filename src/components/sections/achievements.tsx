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
        { label: 'Instagram広告CPA', before: '¥5,500', after: '¥4,000台', improvement: '27%改善' }
      ],
      icon: '🎯',
      gradient: 'from-primary to-secondary'
    },
    {
      id: 2,
      title: '埋め卓くん',
      stats: [
        { label: '対象店舗', value: '過去最高月商', isText: true },
        { label: 'LINE × Instagram', value: '来店率UP', isText: true }
      ],
      icon: '📈',
      gradient: 'from-secondary to-accent'
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
    <section className="py-20 bg-gradient-modern relative overflow-hidden">
      {/* Abstract animated background with reduced opacity */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 blob-shape blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 pattern-grid opacity-5" />
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
                className="group relative"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated gradient background with reduced opacity */}
                <motion.div 
                  className={`absolute -inset-1 bg-gradient-to-br ${achievement.gradient} rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 h-full border border-gray-100 group-hover:border-primary/20 transition-all">
                  <motion.div 
                    className="text-6xl mb-6 text-center relative z-10"
                    animate={{
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {achievement.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-center mb-6 relative z-10 text-gray-900">
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
                        {'isText' in stat && stat.isText ? (
                          <p className="text-2xl font-bold text-gradient-vibrant">{stat.value}</p>
                        ) : 'before' in stat && stat.before ? (
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-lg line-through text-gray-400">{stat.before}</span>
                            <span className="text-2xl font-bold text-gradient-vibrant">→ {stat.after}</span>
                            <span className="text-sm text-secondary font-semibold">({stat.improvement})</span>
                          </div>
                        ) : (
                          <p className="text-3xl font-bold text-gradient-vibrant">
                            <AnimatedNumber value={stat.value as number} suffix={stat.suffix} />
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect shimmer */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="shimmer" />
                  </div>
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