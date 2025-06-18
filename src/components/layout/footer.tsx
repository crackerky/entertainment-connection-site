// src/components/layout/footer.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'DealerStudio', desc: '採用管理システム' },
    { name: '埋め卓くん', desc: '集客支援ツール' },
    { name: 'データ分析', desc: 'エンタメ業界特化' },
    { name: 'イベント企画', desc: 'トータルサポート' }
  ];

  const quickLinks = [
    { name: 'ホーム', href: '#hero' },
    { name: 'ミッション', href: '#mission' },
    { name: 'ビジョン', href: '#vision' },
    { name: 'なぜ私たちなのか', href: '#why-us' },
    { name: '実績', href: '#achievements' },
    { name: 'お問い合わせ', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Entertainment<span className="text-gradient-primary"> Connect</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              つながりをプロデュースし、<br />
              エンタメで日本を動かす
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">サービス</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a href="#" className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight size={16} className="mt-0.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <span className="block">{service.name}</span>
                      <span className="text-xs text-gray-500">{service.desc}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">クイックリンク</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">お問い合わせ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />
                <div>
                  <a href="mailto:info@entertainment-connect.jp" className="text-gray-400 hover:text-white transition-colors">
                    info@entertainment-connect.jp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary mt-0.5" />
                <div>
                  <a href="tel:03-0000-0000" className="text-gray-400 hover:text-white transition-colors">
                    03-0000-0000
                  </a>
                  <p className="text-xs text-gray-500 mt-1">平日 9:00-18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5" />
                <div className="text-gray-400 text-sm">
                  〒100-0000<br />
                  東京都千代田区XX-XX-XX<br />
                  XXビル XX階
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-12 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              最新情報をお届けします
            </h3>
            <p className="text-gray-400 mb-6">
              エンタメ業界の最新トレンドやサービスアップデート情報をメールでお届けします
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                登録する
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Entertainment Connect. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};