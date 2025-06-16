'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations'
import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    'プロフェッショナルなチームによる完全サポート',
    '最新テクノロジーを活用した革新的なソリューション',
    '柔軟なカスタマイズとスケーラビリティ',
    'データドリブンな成果測定と最適化',
  ]

  return (
    <section className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              なぜ私たちが
              <br />
              <span className="text-purple-600">選ばれるのか</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              10年以上の経験と実績、そして常に新しいことに挑戦する姿勢。
              私たちはエンターテインメントの可能性を広げ続けます。
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-yellow-400 rounded-lg shadow-lg" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}