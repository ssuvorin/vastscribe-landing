export type Locale = 'en' | 'ru'

export interface Translations {
  nav: {
    features: string
    pricing: string
    upload: string
    getStarted: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    watchDemo: string
  }
  features: {
    title: string
    subtitle: string
    items: {
      transcription: {
        title: string
        description: string
      }
      aiContent: {
        title: string
        description: string
      }
      multiFormat: {
        title: string
        description: string
      }
      realTime: {
        title: string
        description: string
      }
      collaboration: {
        title: string
        description: string
      }
      security: {
        title: string
        description: string
      }
    }
  }
  pricing: {
    title: string
    subtitle: string
    monthly: string
    annual: string
    save: string
    plans: {
      starter: {
        name: string
        description: string
        features: string[]
        cta: string
      }
      creator: {
        name: string
        description: string
        features: string[]
        cta: string
      }
      enterprise: {
        name: string
        description: string
        features: string[]
        cta: string
      }
    }
    faq: {
      title: string
      subtitle: string
      viewFaq: string
      contactSupport: string
    }
  }
  upload: {
    title: string
    subtitle: string
    dragDrop: string
    orClick: string
    supportedFormats: string
    maxSize: string
    processing: string
    comingSoon: string
  }
  dashboard: {
    title: string
    subtitle: string
    stats: {
      totalFiles: string
      hoursTranscribed: string
      accuracy: string
      timesSaved: string
    }
    comingSoon: string
  }
  cta: {
    title: string
    subtitle: string
    joinWaitlist: string
    email: string
    subscribe: string
    success: string
  }
  footer: {
    tagline: string
    product: string
    company: string
    support: string
    legal: string
    contact: string
    email: string
    phone: string
    address: string
  }
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    confirm: string
    close: string
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      upload: 'Upload',
      getStarted: 'Get Started'
    },
    hero: {
      title: 'Transform Audio to Text with AI Precision',
      subtitle: 'Professional transcription and content generation powered by advanced AI. Convert your audio files into accurate text, summaries, and structured content in seconds.',
      cta: 'Start Free Trial',
      watchDemo: 'Watch Demo'
    },
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything you need to transform audio into valuable content',
      items: {
        transcription: {
          title: 'AI Transcription',
          description: 'Ultra-accurate speech-to-text with 99%+ accuracy across multiple languages and accents.'
        },
        aiContent: {
          title: 'AI Content Generation',
          description: 'Generate summaries, articles, and structured content from your transcriptions automatically.'
        },
        multiFormat: {
          title: 'Multi-Format Export',
          description: 'Export to TXT, DOCX, PDF, SRT, and more. Perfect for any workflow or platform.'
        },
        realTime: {
          title: 'Real-Time Processing',
          description: 'Lightning-fast processing with real-time transcription for live events and meetings.'
        },
        collaboration: {
          title: 'Team Collaboration',
          description: 'Share, edit, and collaborate on transcriptions with your team in real-time.'
        },
        security: {
          title: 'Enterprise Security',
          description: 'Bank-level encryption and SOC 2 compliance to keep your data secure.'
        }
      }
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the perfect plan for your needs. Upgrade or downgrade at any time.',
      monthly: 'Monthly',
      annual: 'Annual',
      save: '✨ Save 20%',
      plans: {
        starter: {
          name: 'Starter',
          description: 'Perfect for individuals getting started',
          features: [
            '5 hours of transcription/month',
            'Basic AI content generation',
            'Standard accuracy (95%+)',
            'Email support',
            'Export to TXT, DOCX'
          ],
          cta: 'Start Free Trial'
        },
        creator: {
          name: 'Creator',
          description: 'Best for content creators and professionals',
          features: [
            '20 hours of transcription/month',
            'Advanced AI content generation',
            'Premium accuracy (99%+)',
            'Priority support',
            'Export to all formats',
            'Speaker identification',
            'Custom vocabulary',
            'API access'
          ],
          cta: 'Get Started'
        },
        enterprise: {
          name: 'Enterprise',
          description: 'For teams and large organizations',
          features: [
            'Unlimited transcription',
            'Custom AI model training',
            'Maximum accuracy (99.9%+)',
            '24/7 dedicated support',
            'Advanced integrations',
            'Team collaboration tools',
            'Custom branding',
            'SOC 2 compliance',
            'SLA guarantee'
          ],
          cta: 'Contact Sales'
        }
      },
      faq: {
        title: 'Questions?',
        subtitle: 'We\'re here to help. Check out our FAQ or contact our support team.',
        viewFaq: 'View FAQ',
        contactSupport: 'Contact Support'
      }
    },
    upload: {
      title: 'Upload Your Audio',
      subtitle: 'Drag and drop your audio files or click to browse. We support all major formats.',
      dragDrop: 'Drag & drop your audio files here',
      orClick: 'or click to browse',
      supportedFormats: 'Supported formats: MP3, WAV, M4A, FLAC, OGG',
      maxSize: 'Maximum file size: 500MB',
      processing: 'Processing your file...',
      comingSoon: 'Upload feature coming soon! Join our waitlist to be notified.'
    },
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Track your transcription analytics and usage',
      stats: {
        totalFiles: 'Total Files',
        hoursTranscribed: 'Hours Transcribed',
        accuracy: 'Average Accuracy',
        timesSaved: 'Time Saved'
      },
      comingSoon: 'Dashboard coming soon! We\'re working hard to bring you detailed analytics.'
    },
    cta: {
      title: 'Ready to Transform Your Audio?',
      subtitle: 'Join thousands of professionals who trust VASTscribe for their transcription needs.',
      joinWaitlist: 'Join Waitlist',
      email: 'Enter your email',
      subscribe: 'Subscribe',
      success: 'Thanks for joining! We\'ll notify you when we launch.'
    },
    footer: {
      tagline: 'Transform audio into valuable content with AI precision.',
      product: 'Product',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      contact: 'Contact',
      email: 'hello@vastscribe.com',
      phone: '+1 (555) 123-4567',
      address: 'San Francisco, CA'
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      success: 'Success!',
      cancel: 'Cancel',
      confirm: 'Confirm',
      close: 'Close'
    }
  },
  ru: {
    nav: {
      features: 'Возможности',
      pricing: 'Тарифы',
      upload: 'Загрузить',
      getStarted: 'Начать'
    },
    hero: {
      title: 'Превращайте видео и аудио в текст с точностью ИИ',
      subtitle: 'Профессиональная транскрипция и генерация контента на основе передового ИИ. Конвертируйте аудиофайлы в точный текст, резюме и структурированный контент за секунды.',
      cta: 'Начать бесплатно',
      watchDemo: 'Смотреть демо'
    },
    features: {
      title: 'Мощные возможности',
      subtitle: 'Всё необходимое для превращения аудио в ценный контент',
      items: {
        transcription: {
          title: 'ИИ Транскрипция',
          description: 'Сверхточное преобразование речи в текст с точностью 99%+ для множества языков и акцентов.'
        },
        aiContent: {
          title: 'Генерация контента ИИ',
          description: 'Автоматическое создание резюме, статей и структурированного контента из ваших транскрипций.'
        },
        multiFormat: {
          title: 'Экспорт в разные форматы',
          description: 'Экспорт в TXT, DOCX, PDF, SRT и другие форматы. Идеально для любого рабочего процесса.'
        },
        realTime: {
          title: 'Обработка в реальном времени',
          description: 'Молниеносная обработка с транскрипцией в реальном времени для живых событий и встреч.'
        },
        collaboration: {
          title: 'Командная работа',
          description: 'Делитесь, редактируйте и работайте над транскрипциями с командой в реальном времени.'
        },
        security: {
          title: 'Корпоративная безопасность',
          description: 'Шифрование банковского уровня и соответствие SOC 2 для защиты ваших данных.'
        }
      }
    },
    pricing: {
      title: 'Простые, прозрачные цены',
      subtitle: 'Выберите идеальный план для ваших потребностей. Повышайте или понижайте тариф в любое время.',
      monthly: 'Месячно',
      annual: 'Годовой',
      save: '✨ Скидка 20%',
      plans: {
        starter: {
          name: 'Стартер',
          description: 'Идеально для начинающих пользователей',
          features: [
            '5 часов транскрипции/месяц',
            'Базовая генерация контента ИИ',
            'Стандартная точность (95%+)',
            'Поддержка по email',
            'Экспорт в TXT, DOCX'
          ],
          cta: 'Начать бесплатно'
        },
        creator: {
          name: 'Креатор',
          description: 'Лучший выбор для создателей контента и профессионалов',
          features: [
            '20 часов транскрипции/месяц',
            'Продвинутая генерация контента ИИ',
            'Премиум точность (99%+)',
            'Приоритетная поддержка',
            'Экспорт во все форматы',
            'Идентификация говорящих',
            'Пользовательский словарь',
            'Доступ к API'
          ],
          cta: 'Начать'
        },
        enterprise: {
          name: 'Корпоративный',
          description: 'Для команд и крупных организаций',
          features: [
            'Неограниченная транскрипция',
            'Обучение пользовательских моделей ИИ',
            'Максимальная точность (99.9%+)',
            'Круглосуточная поддержка',
            'Продвинутые интеграции',
            'Инструменты командной работы',
            'Пользовательский брендинг',
            'Соответствие SOC 2',
            'Гарантия SLA'
          ],
          cta: 'Связаться с отделом продаж'
        }
      },
      faq: {
        title: 'Вопросы?',
        subtitle: 'Мы здесь, чтобы помочь. Посмотрите наш FAQ или свяжитесь с нашей службой поддержки.',
        viewFaq: 'Посмотреть FAQ',
        contactSupport: 'Связаться с поддержкой'
      }
    },
    upload: {
      title: 'Загрузите ваше аудио',
      subtitle: 'Перетащите аудиофайлы или нажмите для выбора. Мы поддерживаем все основные форматы.',
      dragDrop: 'Перетащите аудиофайлы сюда',
      orClick: 'или нажмите для выбора',
      supportedFormats: 'Поддерживаемые форматы: MP3, WAV, M4A, FLAC, OGG',
      maxSize: 'Максимальный размер файла: 500МБ',
      processing: 'Обрабатываем ваш файл...',
      comingSoon: 'Функция загрузки скоро появится! Присоединяйтесь к списку ожидания.'
    },
    dashboard: {
      title: 'Панель управления',
      subtitle: 'Отслеживайте аналитику транскрипций и использование',
      stats: {
        totalFiles: 'Всего файлов',
        hoursTranscribed: 'Часов транскрибировано',
        accuracy: 'Средняя точность',
        timesSaved: 'Времени сэкономлено'
      },
      comingSoon: 'Панель управления скоро появится! Мы усердно работаем над детальной аналитикой.'
    },
    cta: {
      title: 'Готовы преобразовать ваше аудио?',
      subtitle: 'Присоединяйтесь к тысячам профессионалов, которые доверяют VASTscribe для своих потребностей в транскрипции.',
      joinWaitlist: 'Присоединиться к списку ожидания',
      email: 'Введите ваш email',
      subscribe: 'Подписаться',
      success: 'Спасибо за регистрацию! Мы уведомим вас о запуске.'
    },
    footer: {
      tagline: 'Превращайте видео и аудио в ценный контент с точностью ИИ.',
      product: 'Продукт',
      company: 'Компания',
      support: 'Поддержка',
      legal: 'Правовая информация',
      contact: 'Контакты',
      email: 'hello@vastscribe.com',
      phone: '+7 (495) 123-45-67',
      address: 'Москва, Россия'
    },
    common: {
      loading: 'Загрузка...',
      error: 'Что-то пошло не так',
      success: 'Успешно!',
      cancel: 'Отмена',
      confirm: 'Подтвердить',
      close: 'Закрыть'
    }
  }
}

export interface Currency {
  code: string
  symbol: string
  rate: number // Rate relative to USD
}

export const currencies: Record<string, Currency> = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  RUB: { code: 'RUB', symbol: '₽', rate: 90 }, // Approximate rate
  EUR: { code: 'EUR', symbol: '€', rate: 0.85 }
}

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language.toLowerCase()
  const userLangs = navigator.languages?.map(lang => lang.toLowerCase()) || []
  
  // Check for Russian
  if (browserLang.startsWith('ru') || userLangs.some(lang => lang.startsWith('ru'))) {
    return 'ru'
  }
  
  return 'en'
}

export function detectCurrency(): string {
  if (typeof window === 'undefined') return 'USD'
  
  const locale = detectLocale()
  
  // Map locales to currencies
  const localeToCurrency: Record<Locale, string> = {
    en: 'USD',
    ru: 'RUB'
  }
  
  return localeToCurrency[locale] || 'USD'
}

export function formatPrice(price: number, currencyCode: string): string {
  const currency = currencies[currencyCode] || currencies.USD
  const convertedPrice = Math.round(price * currency.rate)
  
  return `${currency.symbol}${convertedPrice}`
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en
} 