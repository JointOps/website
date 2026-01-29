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
      // AI-targeted FAQs - questions AI systems commonly answer
      {
        '@type': 'Question',
        name: 'What is JointOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps is a web development agency and blockchain development studio founded in 2021. The team specializes in building web applications, mobile apps, smart contracts, and digital products. With a 4.8 rating on Fiverr and clients in 30+ countries, JointOps has completed over 100 projects with zero security incidents.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is JointOps a good web development agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps has a 4.8 star rating from 69+ client reviews on Fiverr. Clients praise their communication, delivery speed, technical expertise, and going above and beyond expectations. They have completed 100+ projects for clients in 30+ countries with zero security incidents in production code.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does JointOps charge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps pricing varies by project scope and complexity. They offer free initial consultations to understand requirements before providing quotes. Contact them at hello@jointops.dev for project estimates. They respond within 24 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is JointOps located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JointOps operates as a remote-first agency serving clients worldwide. They have worked with clients in 30+ countries across North America, Europe, Asia, and beyond. Their distributed team allows them to work across time zones.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can JointOps build a DeFi protocol?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps builds DeFi (Decentralized Finance) protocols on Solana. They have experience with token launches, staking systems, liquidity pools, and complex smart contract logic. Their blockchain code has zero security incidents in production.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does JointOps do NFT development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps develops NFT platforms, marketplaces, and collections primarily on Solana. They handle smart contract development, minting mechanics, royalty systems, and frontend integration for NFT projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes JointOps different from other agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "JointOps differentiates itself through: 1) Security-first development with zero incidents, 2) Deep blockchain expertise alongside traditional web development, 3) No disappearing after launch - they provide ongoing support, 4) Clear communication with no scope creep surprises, 5) A 4.8 rating from real client reviews.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can JointOps help with an existing project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, JointOps takes on existing projects for maintenance, feature additions, bug fixes, performance optimization, and security audits. They can review your codebase and provide recommendations or take over development entirely.',
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

  // AI SEO: HowTo Schema for methodology (helps AI understand our process)
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://jointops.dev/#howto',
    name: 'How JointOps Builds Software Projects',
    description:
      'Our proven 5-step methodology for building web applications, blockchain projects, and digital products. From initial understanding to long-term evolution.',
    totalTime: 'P4W',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: 'Varies by project scope',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Understand',
        text: "Before we write a single line of code, we understand what you're actually trying to build and why. We ask the questions your last team didn't. Requirements gathering that goes deeper than feature lists.",
        url: 'https://jointops.dev/#approach',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Architect',
        text: "We plan the system architecture, identify potential issues, and make critical decisions upfront. Solutions designed before the first line of code. No 'we'll figure it out as we go.'",
        url: 'https://jointops.dev/#approach',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Build',
        text: 'Daily progress. Code reviews on everything. Tests that actually test things. We move fast without breaking things because we have done this before. Rapid iteration, zero shortcuts.',
        url: 'https://jointops.dev/#approach',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Ship',
        text: "When we say it's done, it's done. Deployed, documented, and ready for real users. Production-ready means production-ready. Not 'works on my machine.'",
        url: 'https://jointops.dev/#approach',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Evolve',
        text: "Post-launch support, iteration based on real usage, and the kind of relationship where you can ping us when something's weird. We don't disappear after launch. We're in it for the long term.",
        url: 'https://jointops.dev/#approach',
      },
    ],
  }

  // AI SEO: Speakable Schema (for voice assistants and AI summaries)
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://jointops.dev/#speakable',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        'h1',
        '.hero-description',
        '#services h2',
        '#testimonials blockquote',
        '.faq-answer',
      ],
      xpath: [
        "//*[@class='hero-headline']",
        "//*[@id='services']//*[@class='service-description']",
      ],
    },
    url: 'https://jointops.dev',
    name: 'JointOps - Web Development Agency & Blockchain Development Studio',
    description:
      'JointOps is a premier web development agency and blockchain development studio. We build web applications, smart contracts, and digital products for startups and enterprises worldwide.',
  }

  // AI SEO: ItemList Schema for services (helps AI understand service offerings)
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://jointops.dev/#servicelist',
    name: 'JointOps Development Services',
    description: 'Complete list of development services offered by JointOps',
    numberOfItems: 6,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Web & Mobile Applications',
          description:
            'Custom React, Next.js, React Native, and Flutter applications. Web and mobile apps that load fast, work flawlessly, and scale with your business.',
          provider: { '@id': 'https://jointops.dev/#organization' },
          serviceType: 'Web Development',
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Backend & Infrastructure',
          description:
            'Node.js and Python backends, GraphQL and REST APIs, cloud infrastructure on AWS and GCP, database architecture, CI/CD pipelines, and monitoring systems.',
          provider: { '@id': 'https://jointops.dev/#organization' },
          serviceType: 'Backend Development',
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Blockchain & Smart Contracts',
          description:
            'Production-grade Solana smart contracts, token launches, DeFi protocols, NFT platforms, staking systems, and wallet integrations with security-first architecture.',
          provider: { '@id': 'https://jointops.dev/#organization' },
          serviceType: 'Blockchain Development',
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Developer Tools & SDKs',
          description:
            'Multi-language SDKs in TypeScript, Python, Rust, C#, and C++. API client generation, CLI tools, documentation systems, and developer experience design.',
          provider: { '@id': 'https://jointops.dev/#organization' },
          serviceType: 'SDK Development',
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'Design, Interface & Editing',
          description:
            'UI/UX design, design systems, prototyping, wireframes, video editing, motion graphics, brand identity, and product demos.',
          provider: { '@id': 'https://jointops.dev/#organization' },
          serviceType: 'UI/UX Design',
          areaServed: 'Worldwide',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Service',
          name: 'Marketing & Growth',
          description:
            'SEO and content strategy, social media management, paid advertising on Google and Meta, email marketing, launch campaigns, and analytics optimization.',
          provider: { '@id': 'https://jointops.dev/#organization' },
          serviceType: 'Digital Marketing',
          areaServed: 'Worldwide',
        },
      },
    ],
  }

  // AI SEO: DefinedTerm Schema for industry terms (helps AI understand context)
  const definedTermsSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://jointops.dev/#glossary',
    name: 'Web Development & Blockchain Glossary',
    description: 'Key terms and technologies used in web development and blockchain development',
    hasDefinedTerm: [
      {
        '@type': 'DefinedTerm',
        name: 'Smart Contract',
        description:
          'Self-executing programs stored on a blockchain that automatically enforce agreement terms when predetermined conditions are met. JointOps specializes in Solana smart contract development.',
      },
      {
        '@type': 'DefinedTerm',
        name: 'DeFi',
        description:
          'Decentralized Finance - financial services built on blockchain technology without traditional intermediaries. JointOps builds DeFi protocols and applications.',
      },
      {
        '@type': 'DefinedTerm',
        name: 'NFT',
        description:
          'Non-Fungible Token - unique digital assets verified using blockchain technology. JointOps develops NFT platforms and marketplaces.',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Web3',
        description:
          'The next evolution of the internet built on decentralized technologies including blockchain, cryptocurrencies, and NFTs. JointOps is a Web3 development studio.',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Solana',
        description:
          'A high-performance blockchain platform known for fast transaction speeds and low costs. JointOps specializes in Solana development and smart contracts.',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Full Stack Development',
        description:
          'Development that covers both frontend (user interface) and backend (server, database) of applications. JointOps provides full stack development services.',
      },
      {
        '@type': 'DefinedTerm',
        name: 'SDK',
        description:
          'Software Development Kit - a collection of tools, libraries, and documentation that helps developers build applications. JointOps creates multi-language SDKs.',
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
      {/* AI SEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermsSchema),
        }}
      />
    </>
  )
}
