'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Sparkles, Users, Palette, Trophy } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'イベントプロデュース',
      description: '大規模イベントから小規模なワークショップまで、完全プロデュース',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'コミュニティ構築',
      description: 'ファンやユーザー同士がつながるプラットフォームの設計・運営',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'クリエイティブ制作',
      description: '映像、音楽、デザインなど、ハイクオリティなコンテンツ制作',
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'ブランド戦略',
      description: 'エンターテインメントを通じた効果的なブランディング',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            私たちのサービス
          </h2>
          <p className="text-xl text-gray-600">
            エンターテインメントを通じて、あらゆるつながりを創出します
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-purple-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}