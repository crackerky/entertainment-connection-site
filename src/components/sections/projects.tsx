'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'SUMMER FESTIVAL 2024',
      category: '音楽フェスティバル',
      image: '/projects/summer-festival.jpg',
      description: '3日間で延べ10万人が参加した大規模音楽フェスティバル',
    },
    {
      title: 'VIRTUAL CONNECT',
      category: 'オンラインイベント',
      image: '/projects/virtual-connect.jpg',
      description: 'バーチャル空間での新しいコミュニケーション体験',
    },
    {
      title: 'BRAND EXPERIENCE',
      category: '企業コラボ',
      image: '/projects/brand-experience.jpg',
      description: 'ブランド価値を高める沒入型体験コンテンツ',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            最近のプロジェクト
          </h2>
          <p className="text-xl text-gray-600">
            私たちが手がけた最新のエンターテインメント体験
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400" />
              <div className="p-6">
                <p className="text-purple-600 text-sm mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}