'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: 'アカウントの作成は本当に無料ですか？',
      answer: 'はい、アカウント作成は無料です。作成完了後、ユーザーごとに作成される管理画面から、利用する Entertainment Connect のサービスとプランをご選択ください。\n\nただし、ファンアプリ開発 と ファンロイヤリティ は別途申し込みが必要となりますので、ご興味をお持ちの場合はお問い合わせください。'
    },
    {
      question: 'Entertainment Connect のサービスは、他社の製品・サービスと連携できますか？',
      answer: 'はい可能です。\n\nサービスごとに連携可能なサービスは異なりますが、他社の配信システムや、LINE ミニアプリ、Shopifyやスマレジといった他社のシステムと連携できます。'
    },
    {
      question: 'Entertainment Connect のサポート体制はどのようになっていますか？',
      answer: 'メールや電話などを通じ、しっかりとしたサポート体制を整えております。\n\nご相談やお困りの際は、スムーズに適切なご案内をさせていただくため、ヘルプセンターから対象のサービスを選択のうえ、ご連絡いただけますと幸いです。'
    },
    {
      question: 'サービスが多すぎて、どういう使い方や効果を期待すればよいかわからない。',
      answer: '業種や事業規模、今後実現したいことなどをお伝えいただければ、弊社担当者より適切な活用方法をご提案させていただきます。\n\nまずはお問い合わせフォームから気軽にお問い合わせください。'
    },
    {
      question: 'イベントの規模に制限はありますか？',
      answer: '小規模なライブハウスイベントから大型フェスティバルまで、あらゆる規模のイベントに対応しています。カスタムプランでは数万人規模のイベントにも対応可能です。'
    },
    {
      question: 'ファン管理システムではどのようなデータが取得できますか？',
      answer: 'ファンの参加履歴、購買行動、エンゲージメント率、属性情報などを統合的に管理・分析できます。GDPR及び個人情報保護法に準拠した安全な管理を行っています。'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600">
            Entertainment Connect についてのよくあるご質問
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openItems.includes(index) ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-6"
                  >
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support section */}
        <motion.div variants={fadeInUp} className="mt-20 text-center">
          <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-6xl mb-6">🎧</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              すぐに解決、高い満足度
            </h3>
            <h4 className="text-xl md:text-2xl font-semibold text-violet-600 mb-8">
              いつでも元気に、サポートします！
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-4">📧</div>
                <h5 className="font-semibold mb-2">フォームから相談</h5>
                <p className="text-gray-600 text-sm mb-4">お気軽にご相談ください。24時間いつでも受付中です。</p>
                <button className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                  フォームから相談する →
                </button>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-4">❓</div>
                <h5 className="font-semibold mb-2">ヘルプセンター</h5>
                <p className="text-gray-600 text-sm mb-4">よくある質問やサービスの使い方などをご確認いただけます。</p>
                <button className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                  ヘルプセンターへ →
                </button>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-4">📋</div>
                <h5 className="font-semibold mb-2">資料ダウンロード</h5>
                <p className="text-gray-600 text-sm mb-4">サービス概要、料金やご利用までの流れなどをまとめた資料です。</p>
                <button className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                  ダウンロードする →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}