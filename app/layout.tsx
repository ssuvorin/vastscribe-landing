import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VASTscribe - AI-Powered Audio Transcription',
  description: 'Transform your audio content into powerful written material with cutting-edge AI technology. Fast, accurate, and secure.',
  keywords: ['transcription', 'AI', 'audio', 'speech-to-text', 'content creation'],
  authors: [{ name: 'VASTscribe Team' }],
  creator: 'VASTscribe',
  publisher: 'VASTscribe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vastscribe.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    title: 'VASTscribe - AI-Powered Audio Transcription',
    description: 'Transform your audio content into powerful written material with cutting-edge AI technology.',
    url: 'https://vastscribe.com',
    siteName: 'VASTscribe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VASTscribe - AI-Powered Audio Transcription',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VASTscribe - AI-Powered Audio Transcription',
    description: 'Transform your audio content into powerful written material with cutting-edge AI technology.',
    images: ['/og-image.jpg'],
    creator: '@vastscribe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
} 