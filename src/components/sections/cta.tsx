'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-600 via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="text-lg mb-4 opacity-90">安心・かんたん・はじめやすい、Entertainment Connect で</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              エンタメ事業を
              <br />
              はじめましょう
            </h2>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            イベント企画からファン管理まで、すべてをワンストップで。
            <br className="hidden md:block" />
            今すぐ始めて、あなたのエンタメ事業を成長させましょう。
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-50 px-10 py-6 text-lg rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              まずは無料でアカウント作成
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-2 border-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl font-semibold"
            >
              資料ダウンロード
            </Button>
          </motion.div>

          {/* Features highlight */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">即日スタート</h3>
              <p className="text-sm opacity-80">アカウント作成後、すぐにサービスをご利用いただけます</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">業界最安水準</h3>
              <p className="text-sm opacity-80">競合他社と比較して圧倒的な低価格を実現</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">成功保証</h3>
              <p className="text-sm opacity-80">専門チームが成功まで徹底サポート</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}