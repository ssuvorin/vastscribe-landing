'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiPlay, HiSparkles, HiArrowRight } from 'react-icons/hi'
import { useTranslations, useLocale } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations('hero')
  const locale = useLocale()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
      },
    },
  }

  const waveformPaths = [
    'M0,50 Q25,10 50,50 T100,50',
    'M0,50 Q25,90 50,50 T100,50',
    'M0,50 Q25,30 50,50 T100,50',
    'M0,50 Q25,70 50,50 T100,50',
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-section">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-brand-500/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-accent/30 rotate-45 animate-bounce-slow" />
        <div className="absolute top-1/3 right-1/6 w-16 h-16 bg-gradient-to-br from-brand-500/20 to-accent/20 rounded-lg rotate-12 animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-sm">
              <HiSparkles className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium text-brand-200">
                AI-Powered Transcription
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
              <span className="block bg-gradient-to-r from-brand-400 via-accent to-brand-600 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            {/* Animated SVG Waveform */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <svg width="120" height="60" viewBox="0 0 100 100" className="text-accent/40">
                <motion.path
                  d={waveformPaths[0]}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    d: waveformPaths,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-brand-500 to-accent text-white font-semibold rounded-xl shadow-elevGlow hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>{t('cta')}</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group px-8 py-4 border border-brand-500/50 text-brand-300 hover:text-white hover:bg-brand-500/10 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center space-x-2">
              <HiPlay className="w-5 h-5" />
              <span>{t('watchDemo')}</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '99.9%', label: locale === 'ru' ? 'Точность' : 'Accuracy Rate' },
              { value: '10x', label: locale === 'ru' ? 'Быстрее ручной работы' : 'Faster Than Manual' },
              { value: '50+', label: locale === 'ru' ? 'Поддерживаемых языков' : 'Languages Supported' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-heading">
                  {stat.value}
                </div>
                <div className={`text-sm text-gray-400 ${locale === 'ru' ? 'hyphens-manual' : ''}`}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brand-500/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-brand-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 