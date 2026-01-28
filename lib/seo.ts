import type { Metadata } from 'next'

const BASE_URL = 'https://jointops.dev'
const SITE_NAME = 'JointOps'
const DEFAULT_DESCRIPTION =
  'JointOps is a premier web development agency and blockchain development studio. Expert Solana developers, React/Next.js engineers, and UI/UX designers. 4.8 rating on Fiverr. Clients in 30+ countries.'

interface SEOProps {
  title: string
  description?: string
  path?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

/**
 * Generate SEO metadata for any page
 * @example
 * export const metadata = generateSEO({
 *   title: 'Web Development Services',
 *   description: 'Custom web applications built with React and Next.js',
 *   path: '/services/web-development',
 *   keywords: ['web development', 'react', 'next.js'],
 * })
 */
export function generateSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  keywords = [],
  image = '/og-image.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${BASE_URL}${path}`
  const fullTitle = path === '' || path === '/' ? title : `${title} | ${SITE_NAME}`

  const defaultKeywords = [
    'web development agency',
    'blockchain development',
    'solana developers',
    'react development',
    'next.js agency',
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...defaultKeywords].join(', '),
    authors: author ? [{ name: author }] : [{ name: 'JointOps Team' }],
    creator: 'JointOps',
    publisher: 'JointOps',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
      creator: '@jointops_',
      site: '@jointops_',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon/favicon.svg`,
    description: DEFAULT_DESCRIPTION,
    email: 'hello@jointops.dev',
    sameAs: [
      'https://github.com/jointops',
      'https://x.com/jointops_',
      'https://www.linkedin.com/company/jointops/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '69',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/**
 * Generate Service structured data for individual service pages
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    name: service.name,
    description: service.description,
    url: service.url,
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

/**
 * Generate Article structured data for blog posts
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image.startsWith('http') ? article.image : `${BASE_URL}${article.image}`,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url.startsWith('http') ? article.url : `${BASE_URL}${article.url}`,
    },
  }
}

/**
 * Generate Review structured data
 */
export function generateReviewSchema(reviews: {
  author: string
  rating: number
  text: string
  date: string
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'JointOps Development Services',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  }
}

// Export constants for reuse
export const SEO_CONSTANTS = {
  BASE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  TWITTER_HANDLE: '@jointops_',
  EMAIL: 'hello@jointops.dev',
  RATING: '4.8',
  REVIEW_COUNT: '69',
} as const
