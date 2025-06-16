'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entertainment Connect のサービス一覧
          </h2>
          <p className="text-xl text-gray-600">
            エンタメ運営を、ワンストップで。
          </p>
        </motion.div>

        {/* 運営コストやキャッシュフロー改善に */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">運営コストやファン獲得に</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🎫</span>
              </div>
              <h4 className="text-xl font-bold mb-2">チケット販売</h4>
              <p className="text-gray-600 mb-4">
                イベントチケットの販売手数料を業界最安水準で
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">📱</span>
              </div>
              <h4 className="text-xl font-bold mb-2">ファン管理システム</h4>
              <p className="text-gray-600 mb-4">
                わかりやすい操作性で、イベント予約やグッズ販売との連携もスムーズに
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl mb-4 flex items-center justify-center relative">
                <span className="text-white text-4xl">💳</span>
                <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  NEW
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">ファン決済</h4>
              <p className="text-gray-600 mb-4">
                ファンクラブ会費やグッズ代金をクレジットカードで決済。支払い期日を実質延長できます
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* 販売チャネルやサービスの拡充に */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">販売チャネルやサービスの拡充に</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🛍️</span>
              </div>
              <h4 className="text-xl font-bold mb-2">オンラインショップ</h4>
              <p className="text-gray-600 mb-4">
                すぐに始められる豊富な機能と、シンプルな決済手数料
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">📅</span>
              </div>
              <h4 className="text-xl font-bold mb-2">イベント予約</h4>
              <p className="text-gray-600 mb-4">
                予約の受付・管理をよりスムーズに。事前決済や回数券管理・LINE連携など、機能も充実
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">📺</span>
              </div>
              <h4 className="text-xl font-bold mb-2">ライブ配信</h4>
              <p className="text-gray-600 mb-4">
                配信の受付口を無料で広げ、視聴者の取りこぼしを少なく
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* ファンとの関係性強化 */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ファンとの関係性を強化し、リピート率の向上</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">📱</span>
              </div>
              <h4 className="text-xl font-bold mb-2">ファンアプリ開発</h4>
              <p className="text-gray-600 mb-4">
                独自のノーコードスマホアプリで、イベントとオンラインをつなぎ、ファンとのコミュニケーションを円滑化
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">⭐</span>
              </div>
              <h4 className="text-xl font-bold mb-2">ファンロイヤリティ</h4>
              <p className="text-gray-600 mb-4">
                独自のポイント制度やファンランクを通じて、ファンの定着度・再参加率の向上を実現
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">📊</span>
              </div>
              <h4 className="text-xl font-bold mb-2">データ分析</h4>
              <p className="text-gray-600 mb-4">
                ファンとの接点統合分析をリーズナブルに実現
              </p>
              <Button variant="link" className="p-0 text-violet-600 group-hover:text-violet-700">
                詳しく見る →
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}