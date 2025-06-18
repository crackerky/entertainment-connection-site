// src/components/layout/navigation.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

const navItems: NavItem[] = [
  { label: 'ホーム', href: '#hero', sectionId: 'hero' },
  { label: 'ミッション', href: '#mission', sectionId: 'mission' },
  { label: 'ビジョン', href: '#vision', sectionId: 'vision' },
  { label: 'なぜ私たちなのか', href: '#why-us', sectionId: 'why-us' },
  { label: '実績', href: '#achievements', sectionId: 'achievements' },
  { label: 'お問い合わせ', href: '#contact', sectionId: 'contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.sectionId).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Side Menu Button */}
      <motion.div
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group flex flex-col items-center"
          aria-label="メニューを開く"
        >
          <div className="flex flex-col gap-1 mb-8 cursor-pointer">
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8"></span>
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8 group-hover:delay-75"></span>
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8 group-hover:delay-150"></span>
          </div>
          <div className="text-white text-sm tracking-widest" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
            エンタメ
          </div>
        </button>
      </motion.div>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Navigation Panel */}
            <motion.nav
              className="fixed left-0 top-0 h-full w-full md:w-96 bg-gradient-to-b from-gray-900 to-black z-[70] overflow-y-auto"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
                aria-label="メニューを閉じる"
              >
                <X size={32} />
              </button>

              {/* Logo/Title */}
              <div className="p-12 pt-24">
                <h2 className="text-4xl font-bold text-white mb-2">
                  Entertainment
                  <span className="block text-2xl text-gradient-primary mt-2">Connect</span>
                </h2>
                <p className="text-white/60 text-sm mt-4">
                  つながりをプロデュースし、<br />
                  エンタメで日本を動かす
                </p>
              </div>

              {/* Navigation Links */}
              <ul className="px-12 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block text-xl transition-all duration-300 ${
                        activeSection === item.sectionId
                          ? 'text-white font-bold translate-x-2'
                          : 'text-white/70 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      <span className="inline-block mr-4 text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="px-12 py-8 border-t border-white/10">
                <h3 className="text-white/60 text-sm mb-4">CONTACT</h3>
                <p className="text-white/80 text-sm mb-2">
                  info@entertainment-connect.jp
                </p>
                <p className="text-white/80 text-sm">
                  03-XXXX-XXXX
                </p>
              </div>

              {/* Social Links */}
              <div className="px-12 py-8">
                <div className="flex gap-4">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};