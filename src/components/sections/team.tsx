'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Team() {
  const teamMembers = [
    {
      name: "代表取締役",
      role: "Chief Executive Officer",
      description: "15年以上のエンターテインメント業界経験。革新的なビジョンでチームを牽引。"
    },
    {
      name: "クリエイティブディレクター",
      role: "Creative Director",
      description: "数々の受賞歴を持つクリエイター。独創的なアイデアで新しい体験を生み出す。"
    },
    {
      name: "テクニカルディレクター",
      role: "Technical Director",
      description: "最新技術を駆使して、想像を現実に変える技術のスペシャリスト。"
    },
    {
      name: "プロジェクトマネージャー",
      role: "Project Manager",
      description: "緻密な計画と柔軟な対応で、あらゆるプロジェクトを成功に導く。"
    }
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
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            私たちのチーム
          </h2>
          <p className="text-xl text-gray-600">
            情熱とプロフェッショナリズムを兼ね備えた、
            <br className="hidden md:block" />
            エンターテインメントのエキスパート集団
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-purple-600 mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}