'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600">
            プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <Input placeholder="山田 太郎" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  会社名
                </label>
                <Input placeholder="株式会社ABC" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <Input type="email" placeholder="email@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <Input type="tel" placeholder="03-1234-5678" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">選択してください</option>
                <option value="project">プロジェクトのご相談</option>
                <option value="estimate">お見積もり</option>
                <option value="partnership">パートナーシップ</option>
                <option value="other">その他</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="お問い合わせ内容をご記入ください"
                rows={6}
                required
              />
            </div>
            
            <div className="text-center">
              <Button size="lg" className="px-8">
                送信する
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}