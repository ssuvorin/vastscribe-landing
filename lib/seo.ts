import { Metadata } from 'next'

const siteConfig = {
  name: 'VASTscribe',
  description: 'Transform your audio content into engaging written material with AI-powered transcription and content generation.',
  url: 'https://vastscribe.com',
  ogImage: 'https://vastscribe.com/og.jpg',
  creator: '@vastscribe',
}

export const defaultSEO: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI transcription',
    'audio to text',
    'content generation',
    'podcast transcription',
    'meeting transcription',
    'speech to text',
    'VASTscribe'
  ],
  authors: [
    {
      name: 'VASTscribe Team',
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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

export function generatePageSEO(
  title: string,
  description?: string,
  image?: string
): Metadata {
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      title,
      description: description || siteConfig.description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      title,
      description: description || siteConfig.description,
      images: image ? [image] : undefined,
    },
  }
} 