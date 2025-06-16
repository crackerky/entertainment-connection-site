'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "山田太郎",
      company: "株式会社ABC",
      role: "CEO",
      content: "革新的なアプローチで、私たちのイベントを次のレベルに引き上げてくれました。参加者からの反響も素晴らしく、大成功でした。",
      image: "/testimonials/1.jpg"
    },
    {
      name: "鈴木花子",
      company: "XYZエンターテインメント",
      role: "プロデューサー",
      content: "クリエイティブなアイデアと確実な実行力。毎回期待を超える結果を出してくれる、信頼できるパートナーです。",
      image: "/testimonials/2.jpg"
    },
    {
      name: "佐藤次郎",
      company: "テックカンパニー",
      role: "マーケティング部長",
      content: "単なるイベント制作を超えて、ブランド価値を高める体験を創出してくれました。ROIも期待以上です。",
      image: "/testimonials/3.jpg"
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
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600">
            私たちと共に素晴らしい体験を創り上げた方々からのメッセージ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.company} / {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                「{testimonial.content}」
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}