'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            一緒に素晴らしい体験を
            <br />
            創りませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            あなたのアイデアを形にし、人々の心に残る瞬間を生み出しましょう。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              無料相談を予約する
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              資料をダウンロード
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}