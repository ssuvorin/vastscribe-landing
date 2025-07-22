'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { HiOutlineCloudUpload, HiOutlineSparkles } from 'react-icons/hi'
import Footer from '@/components/Footer'

export default function UploadPage() {
  const t = useTranslations('upload')
  const locale = useLocale()

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glassmorphism rounded-2xl border border-white/10 p-12 text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-brand-500 to-accent rounded-2xl flex items-center justify-center shadow-elevGlow">
            <HiOutlineCloudUpload className="w-12 h-12 text-white" />
          </div>

          <h2 className={`text-2xl font-bold text-white mb-4 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
            {t('comingSoon')}
          </h2>

          <div className="space-y-4 mb-8">
            <p className={`text-lg text-gray-300 ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
              {t('dragDrop')}
            </p>
            <p className="text-gray-400">{t('orClick')}</p>
          </div>

          <div className="space-y-2 text-sm text-gray-400 mb-8">
            <p>{t('supportedFormats')}</p>
            <p>{t('maxSize')}</p>
          </div>

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