'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheck, HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { useTranslations, useLocale } from 'next-intl'

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const t = useTranslations('pricing')
  const locale = useLocale()

  // Price formatting function
  const formatPrice = (price: number): string => {
    if (locale === 'ru') {
      // Convert USD to RUB (approximate rate)
      const rubPrice = price * 90
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0
      }).format(rubPrice)
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(price)
    }
  }

  const plans = [
    {
      name: t('plans.starter.name'),
      description: t('plans.starter.description'),
      monthlyPrice: 19,
      annualPrice: 15,
      features: t.raw('plans.starter.features') as string[],
      cta: t('plans.starter.cta'),
      popular: false,
    },
    {
      name: t('plans.creator.name'),
      description: t('plans.creator.description'),
      monthlyPrice: 49,
      annualPrice: 39,
      features: t.raw('plans.creator.features') as string[],
      cta: t('plans.creator.cta'),
      popular: true,
    },
    {
      name: t('plans.enterprise.name'),
      description: t('plans.enterprise.description'),
      monthlyPrice: 149,
      annualPrice: 119,
      features: t.raw('plans.enterprise.features') as string[],
      cta: t('plans.enterprise.cta'),
      popular: false,
    },
  ]

  return (
    <div className="space-y-12">
      {/* Billing Toggle */}
      <div className="flex items-center justify-center space-x-6 py-8">
        <span className={`text-lg font-medium transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
          {t('monthly')}
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative inline-flex h-8 w-14 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-gray-900 p-1"
        >
          <motion.span
            animate={{
              x: isAnnual ? 24 : 2,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-brand-500 to-accent shadow-lg"
          />
        </button>
        <span className={`text-lg font-medium transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
          {t('annual')}
        </span>
        {isAnnual && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30 ml-4"
          >
            {t('save')}
          </motion.span>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group min-w-[260px] ${
              plan.popular ? 'md:-mt-4 md:mb-4' : ''
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-brand-500 to-accent rounded-full text-white text-sm font-medium shadow-elevGlow">
                  <HiSparkles className="w-4 h-4 mr-2" />
                  Most Popular
                </div>
              </div>
            )}

            <div
              className={`h-full p-8 glassmorphism rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? 'border-brand-500/50 shadow-elevGlow bg-gradient-to-b from-brand-500/5 to-accent/5'
                  : 'border-white/10 hover:border-brand-500/30'
              }`}
            >
              {/* Animated border for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500 via-accent to-brand-500 opacity-20 animate-pulse" />
              )}

              <div className="relative">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">{plan.name}</h3>
                  <p className={`text-gray-300 text-sm ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white font-heading">
                          {formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                        </span>
                        <span className="text-gray-400 ml-2">
                          /{locale === 'ru' ? t('perFile') : t('monthly').toLowerCase()}
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-green-400 mt-1">
                          Save {formatPrice((plan.monthlyPrice - plan.annualPrice) * 12)}/year
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <HiCheck className="w-5 h-5 text-green-400" />
                      </div>
                      <span className={`text-gray-300 text-sm ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-500 to-accent text-white hover:-translate-y-1 hover:scale-105 shadow-elevGlow'
                      : 'border border-brand-500/50 text-brand-300 hover:text-white hover:bg-brand-500/10'
                  }`}
                >
                  {plan.popular && <HiLightningBolt className="inline w-5 h-5 mr-2" />}
                  {plan.cta}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold text-white mb-4 font-heading">{t('faq.title')}</h3>
        <p className={`text-gray-300 mb-8 ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
          {t('faq.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 border border-brand-500/50 text-brand-300 hover:text-white hover:bg-brand-500/10 rounded-xl transition-all duration-300">
            {t('faq.viewFaq')}
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-brand-500 to-accent text-white rounded-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            {t('faq.contactSupport')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingTable 