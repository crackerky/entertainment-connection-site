'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
      <motion.div
        className="container mx-auto px-4 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          エンタメでつながる
          <br />
          新しい体験
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          エンターテインメントの力で、人と人をつなぎ、
          <br />
          新しい価値と感動を創造します
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            プロジェクトを始める
          </Button>
          <Button size="lg" variant="outline">
            サービスを見る
          </Button>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-purple-600">100+</h3>
              <p className="text-gray-600">プロジェクト</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600">50+</h3>
              <p className="text-gray-600">クライアント</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600">5M+</h3>
              <p className="text-gray-600">参加者</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}