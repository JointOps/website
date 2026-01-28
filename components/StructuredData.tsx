export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://jointops.dev/#organization',
    name: 'JointOps',
    legalName: 'JointOps',
    description:
      'Premier web development agency and blockchain development studio specializing in React, Next.js, Solana, smart contracts, and UI/UX design.',
    url: 'https://jointops.dev',
    logo: 'https://jointops.dev/logo.png',
    image: 'https://jointops.dev/og-image.png',
    email: 'hello@jointops.dev',
    foundingDate: '2021',
    slogan: 'A crew that operates together',
    areaServed: 'Worldwide',
    serviceArea: {
      '@type': 'GeoShape',
      name: 'Worldwide',
    },
    knowsAbout: [
      'Web Application Development',
      'React Development',
      'Next.js Development',
      'Node.js Development',
      'TypeScript Development',
      'Full Stack Development',
      'Solana Blockchain Development',
      'Smart Contract Development',
      'DeFi Protocol Development',
      'NFT Platform Development',
      'Web3 Development',
      'Token Development',
      'Blockchain Game Development',
      'UI/UX Design',
      'SaaS Development',
      'API Development',
      'Backend Infrastructure',
      'Cloud Architecture',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development',
            description: 'Custom React and Next.js web applications with modern architecture',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Blockchain Development',
            description: 'Solana smart contracts, DeFi protocols, NFT platforms, and token launches',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description: 'User interface and experience design for web and mobile applications',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '69',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: ['https://github.com/jointops', 'https://x.com/jointops_', 'https://www.linkedin.com/company/jointops/'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://jointops.dev/#website',
    url: 'https://jointops.dev',
    name: 'JointOps',
    description: 'Web Development Agency & Blockchain Development Studio',
    publisher: {
      '@id': 'https://jointops.dev/#organization',
    },
    inLanguage: 'en-US',
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://jointops.dev/#service',
    name: 'JointOps',
    image: 'https://jointops.dev/og-image.png',
    url: 'https://jointops.dev',
    description:
      'Expert web development agency offering React, Next.js, Node.js development, Solana blockchain development, smart contract audits, and UI/UX design services.',
    priceRange: '$$',
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Blockchain Development',
      'Solana Development',
      'Smart Contract Development',
      'React Development',
      'Next.js Development',
      'UI/UX Design',
      'SaaS Development',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '69',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does JointOps offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps offers web application development (React, Next.js, Node.js), blockchain development (Solana smart contracts, DeFi protocols, NFT platforms), Web3 gaming infrastructure, backend development, developer tools & SDKs, and UI/UX design services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps develop Solana smart contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps specializes in Solana blockchain development including custom Solana programs, token launches, NFT platforms, DeFi protocols, staking systems, and security-first architecture. We have delivered 100+ blockchain projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can JointOps build custom web applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, JointOps builds custom web applications using React, Next.js, Node.js, and TypeScript. We've architected systems handling 50,000+ requests per second. We build dashboards, platforms, SaaS products, and enterprise applications.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is JointOps rating and experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps has a 5.0 rating across 69+ reviews, has completed 100+ projects, and serves clients in 30+ countries. Founded in 2021, the team has deep expertise in both Web2 and Web3 development.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps offer UI/UX design services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps provides comprehensive UI/UX design services including user interface design, design systems, prototyping, and user research. We believe software should feel inevitable with interfaces that guide users naturally.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jointops.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://jointops.dev#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://jointops.dev#contact',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
