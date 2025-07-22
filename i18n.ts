import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'ru'] as const;

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    console.error('Invalid locale:', locale, 'falling back to en');
    // Use default locale if invalid
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
}); 