'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { 
  HiOutlineDocumentText, 
  HiOutlineClock, 
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineChartBar
} from 'react-icons/hi'
import Footer from '@/components/Footer'

export default function DashboardPage() {
  const t = useTranslations('dashboard')
  const locale = useLocale()

  const stats = [
    {
      icon: HiOutlineDocumentText,
      title: t('stats.totalFiles'),
      value: '127',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: HiOutlineClock,
      title: t('stats.hoursTranscribed'),
      value: '48.5h',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: HiOutlineCheckCircle,
      title: t('stats.accuracy'),
      value: '99.2%',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: HiOutlineChartBar,
      title: t('stats.timesSaved'),
      value: '156h',
      color: 'from-yellow-400 to-orange-500',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-brand-300 to-accent bg-clip-text text-transparent mb-6 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
            {t('title')}
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glassmorphism rounded-2xl border border-white/10 p-8 text-center hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-20`} />
                <stat.icon className={`relative w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              </div>
              
              <div className={`text-3xl font-bold text-white mb-2 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
                {stat.value}
              </div>
              <div className={`text-gray-300 ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                {stat.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glassmorphism rounded-2xl border border-white/10 p-12 text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-brand-500 to-accent rounded-2xl flex items-center justify-center shadow-elevGlow">
            <HiOutlineChartBar className="w-12 h-12 text-white" />
          </div>

          <h2 className={`text-2xl font-bold text-white mb-4 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
            {t('comingSoon')}
          </h2>

          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-500 to-accent text-white font-semibold rounded-xl shadow-elevGlow hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            <HiOutlineSparkles className="w-5 h-5 mr-2" />
            {locale === 'ru' ? 'Присоединиться к списку ожидания' : 'Join Waitlist'}
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 