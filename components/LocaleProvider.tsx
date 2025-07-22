'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, detectLocale, detectCurrency, getTranslations, formatPrice, Translations } from '@/lib/i18n'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  currency: string
  setCurrency: (currency: string) => void
  t: Translations
  formatPrice: (price: number) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [currency, setCurrency] = useState<string>('USD')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Auto-detect locale and currency on client side
    const detectedLocale = detectLocale()
    const detectedCurrency = detectCurrency()
    
    // Check for saved preferences
    const savedLocale = localStorage.getItem('vastscribe-locale') as Locale
    const savedCurrency = localStorage.getItem('vastscribe-currency')
    
    setLocale(savedLocale || detectedLocale)
    setCurrency(savedCurrency || detectedCurrency)
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('vastscribe-locale', locale)
      localStorage.setItem('vastscribe-currency', currency)
    }
  }, [locale, currency, isInitialized])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    // Auto-update currency based on locale
    if (newLocale === 'ru') {
      setCurrency('RUB')
    } else {
      setCurrency('USD')
    }
  }

  const handleFormatPrice = (price: number) => {
    return formatPrice(price, currency)
  }

  const t = getTranslations(locale)

  const value: LocaleContextType = {
    locale,
    setLocale: handleSetLocale,
    currency,
    setCurrency,
    t,
    formatPrice: handleFormatPrice
  }

  // Don't render until initialized to prevent hydration mismatch
  if (!isInitialized) {
    return <div className="min-h-screen bg-darkBg" />
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
} 