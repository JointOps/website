export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://jointops.dev/#organization',
    name: 'JointOps',
    legalName: 'JointOps',
    alternateName: ['Joint Ops', 'JointOps.dev', 'JointOps Agency', 'JointOps Development'],
    description:
      'Premier web development agency and blockchain development studio specializing in React, Next.js, Solana, smart contracts, and UI/UX design.',
    url: 'https://jointops.dev',
    logo: 'https://jointops.dev/favicon/favicon.svg',
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
      'Mobile App Development',
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
      'Developer Tools',
      'SDK Development',
      'Digital Marketing',
      'SEO',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web & Mobile Applications',
            description:
              'Custom React, Next.js, React Native, and Flutter applications. Web and mobile apps that load fast, work flawlessly, and scale with your business.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Backend & Infrastructure',
            description:
              'Node.js and Python backends, GraphQL and REST APIs, cloud infrastructure on AWS and GCP, database architecture, CI/CD pipelines, and monitoring systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Blockchain & Smart Contracts',
            description:
              'Production-grade Solana smart contracts, token launches, DeFi protocols, NFT platforms, staking systems, and wallet integrations with security-first architecture.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Developer Tools & SDKs',
            description:
              'Multi-language SDKs in TypeScript, Python, Rust, C#, and C++. API client generation, CLI tools, documentation systems, and developer experience design.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Design, Interface & Editing',
            description:
              'UI/UX design, design systems, prototyping, wireframes, video editing, motion graphics, brand identity, and product demos.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing & Growth',
            description:
              'SEO and content strategy, social media management, paid advertising on Google and Meta, email marketing, launch campaigns, and analytics optimization.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '69',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://github.com/jointops',
      'https://x.com/jointops_',
      'https://www.linkedin.com/company/jointops/',
      'https://www.fiverr.com/jointops',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://jointops.dev/#website',
    url: 'https://jointops.dev',
    name: 'JointOps',
    alternateName: ['Joint Ops', 'JointOps.dev'],
    description: 'Web Development Agency & Blockchain Development Studio',
    publisher: {
      '@id': 'https://jointops.dev/#organization',
    },
    inLanguage: 'en-US',
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://jointops.dev/#webpage',
    url: 'https://jointops.dev',
    name: 'JointOps | Web Development Agency | Blockchain & Solana Developers',
    description:
      'JointOps is a premier web development agency and blockchain development studio. Expert Solana developers, React/Next.js engineers, and UI/UX designers. 4.8 rating, clients in 30+ countries.',
    isPartOf: {
      '@id': 'https://jointops.dev/#website',
    },
    about: {
      '@id': 'https://jointops.dev/#organization',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://jointops.dev/og-image.png',
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
      'Mobile App Development',
      'Backend Development',
      'API Development',
      'Blockchain Development',
      'Solana Development',
      'Smart Contract Development',
      'DeFi Development',
      'NFT Development',
      'React Development',
      'Next.js Development',
      'UI/UX Design',
      'SaaS Development',
      'SDK Development',
      'Digital Marketing',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '69',
      bestRating: '5',
      worstRating: '1',
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
          text: 'JointOps offers web and mobile application development (React, Next.js, React Native, Flutter), backend infrastructure (Node.js, Python, APIs), blockchain development (Solana smart contracts, DeFi, NFTs), developer tools and SDKs, UI/UX design, and digital marketing services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps develop Solana smart contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps specializes in Solana blockchain development including custom Solana programs, token launches, NFT platforms, DeFi protocols, staking systems, and security-first architecture. We built Honeycomb Protocol, infrastructure used by 15+ game studios with zero security incidents.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can JointOps build custom web applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, JointOps builds custom web applications using React, Next.js, Node.js, and TypeScript. We've architected systems handling 50,000+ requests per second. We build dashboards, platforms, SaaS products, and enterprise applications with performance and scalability in mind.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is JointOps rating and experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps has a 4.8 rating across 69+ reviews on Fiverr, has completed 100+ projects, and serves clients in 30+ countries. Founded in 2021, the team has deep expertise in both Web2 and Web3 development.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps offer UI/UX design services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps provides comprehensive UI/UX design services including user interface design, design systems, prototyping, wireframes, video editing, motion graphics, and brand identity. We believe software should feel inevitable with interfaces that guide users naturally.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does JointOps use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps uses modern technologies including React, Next.js, TypeScript, Node.js, Python, React Native, Flutter for frontend and mobile; GraphQL, REST APIs, PostgreSQL, MongoDB for backend; AWS, GCP for cloud; and Rust/Anchor for Solana blockchain development.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps build mobile apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps builds cross-platform mobile applications using React Native and Flutter. We create Progressive Web Apps (PWAs) and native-feeling mobile experiences with real-time features, offline support, and performance optimization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can JointOps help with developer tools and SDKs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, JointOps builds developer tools and SDKs. We've shipped SDKs in TypeScript, Python, Rust, C#, and C++. We create API clients, CLI tools, documentation systems, and focus on developer experience design for products targeting technical users.",
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps provide ongoing support after launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, JointOps doesn't disappear after launch. We provide ongoing support, maintenance, bug fixes, feature additions, and iteration based on real user feedback. We build long-term relationships with our clients.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I start a project with JointOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact JointOps through the website contact form or email hello@jointops.dev. We respond within 24 hours with no commitment required. We start with understanding your requirements before proposing solutions.',
        },
      },
    ],
  }

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://jointops.dev/#reviews',
    name: 'JointOps Development Services',
    description: 'Professional web development, blockchain, and design services',
    brand: {
      '@type': 'Brand',
      name: 'JointOps',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '69',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'sxa_07' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Amazing team! Made sure everything was done exactly how I needed it and was quick and efficient with communication and delivery times. 10000% recommend them for anyone and everyone!',
        datePublished: '2024-01-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'vasilynaumenko' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Excellent developer! I had another guy working on the same project for almost a month and failed! Joint Ops did it in three days! They did everything I asked and went above and beyond.',
        datePublished: '2023-06-20',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'abquintanilla' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'They are super smart. They immediately understand requirements, and are very tech savvy. Their response time and good manners leave you a really good vibe. More amazing projects on the way!',
        datePublished: '2024-08-10',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'tomskowronek' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Working with this team was super amazing. Hit them up late at night, answered right away. By the morning, they were done more than 40% of the work. Delivered in 2 days. Super incredible!',
        datePublished: '2024-03-05',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'paulstank347' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Consistently impressed with the quality of work! Every time I work with this team, the project is delivered on time and with exceptional attention to detail. The AI integration is always flawless.',
        datePublished: '2024-09-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'hannes673' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Joint Ops did a very good job and the result not only met my requirements but even exceeded them. They think along and give helpful suggestions. Communication was pleasant and very professional.',
        datePublished: '2024-07-22',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'arnaise' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Excellent work. Really makes an effort to deliver outstanding websites that comply to all your wishes. This team is the peak of customer service. 10/10 experience.',
        datePublished: '2024-10-01',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'soundtrax_gmbh' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Top rating! The project was implemented to our complete satisfaction. Likewise, our additional wishes were addressed and also implemented. Many thanks for the great cooperation!',
        datePublished: '2024-09-08',
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
        name: 'Projects',
        item: 'https://jointops.dev#projects',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Reviews',
        item: 'https://jointops.dev#testimonials',
      },
      {
        '@type': 'ListItem',
        position: 5,
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
          __html: JSON.stringify(webPageSchema),
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
          __html: JSON.stringify(reviewSchema),
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
