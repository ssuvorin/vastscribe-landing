'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineArrowRight, HiOutlineX } from 'react-icons/hi'
import { useTranslations, useLocale } from 'next-intl'

const CTASection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = useTranslations('cta')
  const locale = useLocale()

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with actual waitlist API
    console.log('Waitlist signup:', email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsWaitlistOpen(false)
      setIsSubmitted(false)
      setEmail('')
    }, 2000)
  }

  return (
    <>
      <section className="py-24 relative snap-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
                {t('title')}
              </h2>
              <p className={`text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                {t('subtitle')}
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => setIsWaitlistOpen(true)}
              className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-semibold text-white bg-gradient-to-r from-brand-500 to-accent rounded-2xl shadow-2xl hover:shadow-elevGlow transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500 via-accent to-brand-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              
              <HiOutlineSparkles className="w-6 h-6 mr-3" />
              <span>{t('joinWaitlist')}</span>
              <HiOutlineArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            {/* Social Proof */}
            <div className="pt-12">
              <p className={`text-sm text-gray-400 mb-6 ${locale === 'ru' ? 'hyphens-manual' : ''}`}>
                {locale === 'ru' ? 'Нам доверяют создатели контента в' : 'Trusted by creators at'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                {['Spotify', 'YouTube', 'Netflix', 'Adobe', 'Airbnb'].map((company) => (
                  <div key={company} className="text-2xl font-bold text-gray-400">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-md p-8 glassmorphism rounded-2xl border border-white/20"
          >
            {/* Close button */}
            <button
              onClick={() => setIsWaitlistOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <HiOutlineX className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-500 to-accent rounded-2xl flex items-center justify-center">
                    <HiOutlineSparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-2 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
                    {t('joinWaitlist')}
                  </h3>
                  <p className={`text-gray-300 ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                    {locale === 'ru' ? 'Будьте первыми, кто испытает VASTscribe при запуске.' : 'Be the first to experience VASTscribe when we launch.'}
                  </p>
                </div>

                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('email')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-brand-500 to-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-300"
                  >
                    {t('subscribe')}
                  </button>
                </form>

                <p className={`text-xs text-gray-400 text-center mt-4 ${locale === 'ru' ? 'hyphens-manual' : ''}`}>
                  {locale === 'ru' ? 'Мы никогда не будем спамить. Отписаться можно в любое время.' : "We'll never spam you. Unsubscribe at any time."}
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <HiOutlineSparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold text-white mb-2 font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
                  {locale === 'ru' ? 'Вы в списке!' : "You're In!"}
                </h3>
                <p className={`text-gray-300 ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
                  {t('success')}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  )
}

export default CTASection