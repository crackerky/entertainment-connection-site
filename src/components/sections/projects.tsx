'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function ClientShowcase() {
  const clientLogos = [
    { name: 'Sony Music', logo: '🎵' },
    { name: 'Avex', logo: '🎤' },
    { name: 'Johnny & Associates', logo: '⭐' },
    { name: 'AKB48', logo: '🌸' },
    { name: 'Hololive', logo: '🌟' },
    { name: 'NijiSanji', logo: '🌈' },
    { name: 'CyberAgent', logo: '💎' },
    { name: 'Bandai Namco', logo: '🎮' },
    { name: 'Animate', logo: '📚' },
    { name: 'Toho', logo: '🎬' },
    { name: 'Studio Ghibli', logo: '🍃' },
    { name: 'Pokemon Company', logo: '⚡' },
  ]

  return (
    <section id="clients" className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ご利用実績
          </h2>
          <p className="text-xl text-gray-600">
            Entertainment Connect が選ばれています。
          </p>
        </motion.div>

        {/* Client logos marquee */}
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center group hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-violet-50 transition-colors">
                  <span className="text-2xl">{client.logo}</span>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-violet-600 transition-colors">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-violet-600 mb-2">500+</h3>
            <p className="text-gray-600">成功イベント数</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-600 mb-2">50M+</h3>
            <p className="text-gray-600">総参加者数</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-600 mb-2">98%</h3>
            <p className="text-gray-600">顧客満足度</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-600 mb-2">150+</h3>
            <p className="text-gray-600">クライアント企業</p>
          </div>
        </motion.div>

        {/* Featured success stories */}
        <motion.div variants={fadeInUp} className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">成功事例</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🎪</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                「実際にファン数が3倍に増えたことはもちろん、リアルイベント参加者のオンライン参加が促された結果、総売上は5倍に増加しました。」
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">某大手音楽プロダクション</p>
                <p className="text-sm text-gray-600">担当者様</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">📱</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                「1社でアプリ開発〜ファン管理、CRM機能まで完結できる。これからの時代に合わせた機能追加への期待感がありました。」
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">某アニメ制作会社</p>
                <p className="text-sm text-gray-600">プロデューサー様</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="w-full h-48 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🎭</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                「ファンクラブリニューアル前後でイベント参加率は約3倍に。特にロイヤルファンのリピート率が大きく向上しました。」
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">某劇団</p>
                <p className="text-sm text-gray-600">運営責任者様</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}