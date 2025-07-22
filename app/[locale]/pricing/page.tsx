'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import PricingTable from '@/components/PricingTable'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const t = useTranslations('pricing')
  const locale = useLocale()

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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-brand-300 to-accent bg-clip-text text-transparent mb-6 font-heading">
            {t('title')}
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PricingTable />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 