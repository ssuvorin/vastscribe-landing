import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {locales} from '@/i18n';
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar';
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-head',
})

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-darkBg text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            defaultTheme="dark"
            storageKey="vastscribe-ui-theme"
          >
            <div className={`relative min-h-screen flex flex-col font-sans antialiased ${locale === 'ru' ? '[&_p]:hyphens-manual [&_p]:leading-[1.52] [&_p]:-tracking-[0.1px]' : ''}`}>
              {/* Cursor tracking gradient */}
              <div 
                id="cursor-gradient" 
                className="cursor-gradient pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{ opacity: 0 }}
              />
              
              <Navbar />
              
              <main className="relative z-10 flex-grow">
                {children}
              </main>
              
              {/* Background Effects */}
              <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-brand-900/20 to-darkBg" />
                <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000" />
              </div>
              
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    // Cursor following gradient effect
                    document.addEventListener('mousemove', (e) => {
                      const cursor = document.getElementById('cursor-gradient');
                      if (cursor) {
                        cursor.style.setProperty('--x', e.clientX + 'px');
                        cursor.style.setProperty('--y', e.clientY + 'px');
                        cursor.style.opacity = '1';
                      }
                    });
                    
                    document.addEventListener('mouseleave', () => {
                      const cursor = document.getElementById('cursor-gradient');
                      if (cursor) {
                        cursor.style.opacity = '0';
                      }
                    });
                  `,
                }}
              />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 