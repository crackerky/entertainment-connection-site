'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  )
  
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 20px rgba(0,0,0,0.1)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '理念', href: '#mission' },
    { label: 'サービス', href: '#services' },
    { label: '実績', href: '#achievements' },
    { label: '料金', href: '#pricing' },
    { label: 'お問い合わせ', href: '#contact' }
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: headerBg,
        boxShadow: headerShadow
      }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                animate={{ rotate: isScrolled ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                EC
              </motion.div>
              <span className="font-bold text-xl text-gray-900">Entertainment Connect</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="relative text-gray-700 hover:text-violet-600 transition-colors font-medium group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                無料で始める
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden`}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="block text-gray-700 hover:text-violet-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white"
              >
                無料で始める
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}