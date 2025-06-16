'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function PricingPlans() {
  const plans = [
    {
      name: 'フリープラン',
      subtitle: '新規開業におすすめ',
      price: '¥0',
      period: '月額',
      description: '固定費を抑えたスモールスタートに最適。',
      features: [
        'イベント企画サポート',
        'チケット販売手数料 2.48%~',
        'ベーシックファン管理',
        '基本サポート'
      ],
      highlight: false,
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      buttonColor: 'bg-violet-600 hover:bg-violet-700',
      illustration: '🎪'
    },
    {
      name: 'スタンダードプラン',
      subtitle: '中・小規模イベントにおすすめ',
      price: '¥9,800',
      period: '月額',
      description: '売上やサービスの拡大を、低コストで実現。',
      features: [
        'フルイベントプロデュース',
        'チケット販売手数料 1.98%~',
        'プレミアムファン管理',
        'ライブ配信機能',
        'データ分析ダッシュボード',
        '優先サポート'
      ],
      highlight: true,
      bgColor: 'bg-violet-600',
      textColor: 'text-white',
      buttonColor: 'bg-white text-violet-600 hover:bg-gray-50',
      illustration: '🎭'
    },
    {
      name: 'カスタム',
      subtitle: '大型イベント・多拠点向け',
      price: 'お問い合わせ',
      period: '',
      description: 'Entertainment Connect サービスの複数利用による「セット割」や、他社システムとの連携プランなど、事業に応じた特別なプランをご提案します。',
      features: [
        'カスタマイズイベント企画',
        '専用決済システム',
        '高度なファン分析機能',
        'マルチプラットフォーム配信',
        '専属アカウントマネージャー',
        '24/7 専用サポート'
      ],
      highlight: false,
      bgColor: 'bg-gradient-to-br from-gray-900 to-gray-700',
      textColor: 'text-white',
      buttonColor: 'bg-white text-gray-900 hover:bg-gray-100',
      illustration: '🎨'
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
            Entertainment Connect のセットプラン
          </h2>
          <p className="text-xl text-gray-600">
            複数サービス利用が、お得です。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`
                ${plan.bgColor} 
                ${plan.textColor}
                rounded-3xl p-8 shadow-xl 
                ${plan.highlight ? 'ring-4 ring-violet-300 scale-105' : ''}
                hover:shadow-2xl transition-all duration-300
              `}
            >
              {plan.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                    人気No.1
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{plan.illustration}</div>
                <div className="text-sm opacity-75 mb-2">{plan.subtitle}</div>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg opacity-75">（税込）</span>}
                </div>
                {plan.period && <div className="text-sm opacity-75">{plan.period}</div>}
              </div>

              <p className={`text-sm mb-6 text-center ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.buttonColor} text-lg py-6 rounded-xl font-semibold`}
                size="lg"
              >
                詳しく見る
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <p className="text-gray-600 text-sm max-w-4xl mx-auto">
            フリープラン・スタンダードプランのご利用には条件があります。各プランに含まれるサービスなど詳しくは各プランページまたは料金一覧ページをご確認ください。
          </p>
          <Button variant="link" className="mt-4 text-violet-600 text-lg">
            料金一覧で詳しく見る →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}