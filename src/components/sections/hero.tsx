'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-blue-50 pt-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-gray-900">あらゆるエンタメの</span>
          <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            売上成長に。
          </span>
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
        >
          イベント企画・ライブ配信から、チケット販売・ファン管理まで。<br />
          Entertainment Connect ですべて解決。
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            まずは無料でアカウント作成
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-4 text-lg rounded-xl"
          >
            資料ダウンロード
          </Button>
        </motion.div>

        {/* Hero visual placeholder */}
        <motion.div
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Entertainment Connect キービジュアル</h3>
              <p className="text-lg opacity-90">イベント・ライブ・ファン管理の統合プラットフォーム</p>
            </div>
          </div>
        </motion.div>

        {/* Welcome section */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Welcome to Entertainment Connect
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-2xl">🎪</span>
              </div>
              <span className="text-sm text-gray-600">イベント企画</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-2xl">🎫</span>
              </div>
              <span className="text-sm text-gray-600">チケット販売</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-sm text-gray-600">ファン管理</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm text-gray-600">データ分析</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto">
            エンタメ業界のDAY1から、ファンコミュニティ拡充まで。<br />
            毎日の運営や集客に効く仕組みを、業界最安水準でリーズナブルに。
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}