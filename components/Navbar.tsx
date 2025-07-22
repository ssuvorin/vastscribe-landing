'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme } from './ThemeProvider'
import { 
  HiOutlineSun, 
  HiOutlineMoon, 
  HiOutlineMenu, 
  HiOutlineX,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
  HiOutlineCloudUpload,
  HiOutlineGlobe
} from 'react-icons/hi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Update scroll state
    setIsScrolled(currentScrollY > 50)

    // Handle navbar visibility with better logic
    if (Math.abs(currentScrollY - lastScrollY) < 10) return // Ignore small movements
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false) // Hide when scrolling down
    } else {
      setIsVisible(true) // Show when scrolling up
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [handleScroll])

  const navItems = useMemo(() => [
    { name: t('features'), href: '#features', icon: HiOutlineDocumentText },
    { name: t('pricing'), href: '/pricing', icon: HiOutlineCurrencyDollar },
    { name: t('upload'), href: '/upload', icon: HiOutlineCloudUpload }
  ], [t])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const switchLocale = useCallback((newLocale: 'en' | 'ru') => {
    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
    
    // Get current path without locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    
    // Navigate to new locale with proper URL structure
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    
    // Use window.location for immediate navigation
    window.location.href = newPath
    setIsLanguageMenuOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'glassmorphism shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-500 to-accent rounded-xl shadow-elevGlow group-hover:scale-105 transition-transform duration-200">
              <HiOutlineMicrophone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-500 to-accent bg-clip-text text-transparent font-heading">
              VASTscribe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href.startsWith('#') ? item.href : `/${locale}${item.href}`}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 animated-underline"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group flex items-center space-x-1"
                aria-label="Change language"
              >
                <HiOutlineGlobe className="w-5 h-5 text-gray-300 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white uppercase">
                  {locale}
                </span>
              </button>
              
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 glassmorphism rounded-lg shadow-lg border border-white/10 py-1 z-50"
                  >
                    <button
                      onClick={() => switchLocale('en')}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 flex items-center space-x-2 ${
                        locale === 'en' 
                          ? 'text-brand-400 bg-brand-500/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>🇺🇸</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => switchLocale('ru')}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 flex items-center space-x-2 ${
                        locale === 'ru' 
                          ? 'text-brand-400 bg-brand-500/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>🇷🇺</span>
                      <span>Русский</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? (
                  <HiOutlineSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <HiOutlineMoon className="w-5 h-5 text-blue-400" />
                )}
              </motion.div>
            </button>

            {/* CTA Button */}
            <Link
              href={`/${locale}/dashboard`}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-brand-500 to-accent text-white rounded-lg font-medium hover:-translate-y-1 hover:scale-105 hover:shadow-elevGlow transition-all duration-200"
            >
              {t('getStarted')}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glassmorphism border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href.startsWith('#') ? item.href : `/${locale}${item.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-medium text-gray-300">Language</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => switchLocale('en')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                      locale === 'en' 
                        ? 'bg-brand-500 text-white' 
                        : 'bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => switchLocale('ru')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                      locale === 'ru' 
                        ? 'bg-brand-500 text-white' 
                        : 'bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    RU
                  </button>
                </div>
              </div>
              
              <Link
                href={`/${locale}/dashboard`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 mt-4 bg-gradient-to-r from-brand-500 to-accent text-white text-center rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                {t('getStarted')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close language menu */}
      {isLanguageMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageMenuOpen(false)}
        />
      )}
    </motion.nav>
  )
}

export default Navbar 