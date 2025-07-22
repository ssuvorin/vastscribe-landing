'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { 
  HiOutlineLightningBolt, 
  HiOutlineGlobeAlt, 
  HiOutlineShieldCheck,
  HiOutlinePuzzle,
  HiOutlineSparkles,
  HiOutlineClock
} from 'react-icons/hi'

const FeaturesGrid = () => {
  const t = useTranslations('features')
  const locale = useLocale()

  const features = [
    {
      icon: HiOutlineLightningBolt,
      title: t('transcription.title'),
      description: t('transcription.description'),
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: HiOutlineSparkles,
      title: t('aiContent.title'),
      description: t('aiContent.description'),
      color: 'from-brand-400 to-accent',
    },
    {
      icon: HiOutlinePuzzle,
      title: t('multiFormat.title'),
      description: t('multiFormat.description'),
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: HiOutlineClock,
      title: t('realTime.title'),
      description: t('realTime.description'),
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: HiOutlineGlobeAlt,
      title: t('collaboration.title'),
      description: t('collaboration.description'),
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: HiOutlineShieldCheck,
      title: t('security.title'),
      description: t('security.description'),
      color: 'from-green-400 to-emerald-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="features" className="py-24 relative snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
            {t('title')}
          </h2>
          <p className={`max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="h-full p-8 glassmorphism rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Icon with ripple effect */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 animate-ping transition-opacity duration-300`} />
                  <feature.icon className={`relative w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-semibold text-white mb-3 group-hover:text-brand-300 transition-colors duration-300 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-300 leading-relaxed ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                  {feature.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-brand-500 to-accent text-white font-semibold rounded-xl shadow-elevGlow hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            {locale === 'ru' ? 'Изучить все возможности' : 'Explore All Features'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesGrid 