'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { 
  HiOutlineMicrophone,
  HiOutlineMail,
  HiOutlineLocationMarker
} from 'react-icons/hi'
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const locale = useLocale()

  const footerLinks = {
    [t('product')]: [
      { name: t('features'), href: '#features' },
      { name: t('pricing'), href: `/${locale}/pricing` },
      { name: t('upload'), href: `/${locale}/upload` },
      { name: 'Dashboard', href: `/${locale}/dashboard` },
    ],
    [t('company')]: [
      { name: locale === 'ru' ? 'О нас' : 'About', href: `/${locale}/about` },
      { name: locale === 'ru' ? 'Блог' : 'Blog', href: `/${locale}/blog` },
      { name: locale === 'ru' ? 'Карьера' : 'Careers', href: `/${locale}/careers` },
      { name: t('contact'), href: `/${locale}/contact` },
    ],
    [t('legal')]: [
      { name: locale === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy', href: `/${locale}/legal/privacy` },
      { name: locale === 'ru' ? 'Условия использования' : 'Terms of Service', href: `/${locale}/legal/terms` },
      { name: locale === 'ru' ? 'Политика cookies' : 'Cookie Policy', href: `/${locale}/legal/cookies` },
      { name: 'GDPR', href: `/${locale}/legal/gdpr` },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/vastscribe' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/vastscribe' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/vastscribe' },
    { name: 'Discord', icon: FaDiscord, href: 'https://discord.gg/vastscribe' },
  ]

  // Animated equalizer bars
  const EqualizerBars = () => (
    <div className="flex items-end space-x-1 opacity-30">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-brand-500 to-accent rounded-full"
          animate={{
            height: [8, 24, 12, 32, 16],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )

  return (
    <footer className="relative bg-darkBg/50 border-t border-white/10 backdrop-blur-sm">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-40 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-500 to-accent rounded-xl shadow-elevGlow">
                <HiOutlineMicrophone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-accent bg-clip-text text-transparent font-heading">
                  VASTscribe
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <EqualizerBars />
                  <span className="text-xs text-gray-400">
                    {locale === 'ru' ? 'ИИ-транскрипция' : 'AI-Powered Transcription'}
                  </span>
                </div>
              </div>
            </div>
            
            <p className={`text-gray-300 text-lg leading-relaxed mb-8 max-w-md ${locale === 'ru' ? 'hyphens-manual leading-[1.52] -tracking-[0.1px]' : ''}`}>
              {t('tagline')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <HiOutlineMail className="w-5 h-5 text-brand-400" />
                <span>{t('email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <HiOutlineLocationMarker className="w-5 h-5 text-brand-400" />
                <span>{t('address')}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-brand-400 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className={`text-lg font-semibold text-white mb-6 relative font-heading ${locale === 'ru' ? 'leading-[1.3] -tracking-[0.2px]' : ''}`}>
                {category}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <EqualizerBars />
                </div>
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href.startsWith('#') ? link.href : link.href}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-300 animated-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} VASTscribe. {locale === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className={locale === 'ru' ? 'hyphens-manual' : ''}>
                {locale === 'ru' ? 'Сделано с ❤️ для создателей контента' : 'Made with ❤️ for content creators'}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{locale === 'ru' ? 'Все системы работают' : 'All systems operational'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 