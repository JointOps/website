export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VYNDRA',
    alternateName: 'Vyndra',
    url: 'https://vyndra.io',
    logo: 'https://vyndra.io/logo.png',
    description:
      'Digital Engineering Studio building blockchain protocols, web applications, and digital infrastructure for companies that refuse to compromise on quality.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/vyndra',
      'https://github.com/vyndra',
      'https://linkedin.com/company/vyndra',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@vyndra.io',
      contactType: 'Customer Service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VYNDRA',
    url: 'https://vyndra.io',
    description:
      "We build blockchain protocols, web applications, and digital infrastructure that others can't.",
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://vyndra.io/#services',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VYNDRA',
    image: 'https://vyndra.io/logo.png',
    '@id': 'https://vyndra.io',
    url: 'https://vyndra.io',
    telephone: '',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://twitter.com/vyndra',
      'https://github.com/vyndra',
      'https://linkedin.com/company/vyndra',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
