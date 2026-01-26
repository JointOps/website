export const siteContent = {
  brand: {
    name: 'JointOps',
    tagline: 'A crew that operates together.',
    email: 'hello@jointops.dev',
    domain: 'jointops.dev',
    copyright: '© 2025 JointOps. All rights reserved.',
  },

  hero: {
    headline: 'Ideas In. Products Out.',
    subheadline: {
      default: `We actually ship. Perfect 5.0 rating on Fiverr. Clients in 30+ countries.

Got an idea that needs to exist? Let's build it together.`,
      web2: `Web apps, backends, and infrastructure that just works. 5.0 Fiverr rating. Clients in 30+ countries.

Your SaaS, your platform, your dashboard — let's build it together.`,
      web3: `Smart contracts and blockchain infrastructure built by engineers who've shipped to mainnet. Zero security incidents. Ever.

Your token, your protocol, your on-chain game — let's build it together.`,
      creative: `Design, video, and marketing from a team that actually understands tech. We make your product look as good as it works.

Your brand, your content, your launch — let's build it together.`,
    },
    primaryCTA: "Let's Talk",
    secondaryCTA: 'See Our Work',
    stats: [
      { value: '5.0', label: 'Fiverr Rating' },
      { value: '30+', label: 'Countries' },
      { value: '0', label: 'Security Incidents' },
    ],
  },

  services: {
    headline: 'What We Build',
    subheadline: "From quick fixes to full-scale platforms. We've probably built something like it before.",
  },

  projects: {
    headline: "Things We've Built",
    subheadline: 'A few highlights from our shipped projects.',
  },

  team: {
    headline: 'The Crew',
    subheadline: 'One shared obsession with shipping.',
    intro: `We found each other in the trenches — debugging production issues at 3 AM, reviewing each other's code, and actually delivering while everyone else was still planning.

JointOps is what happens when people who consistently ship decide to stop working apart and start operating together.`,
    extendedNote: 'We work with a trusted crew of designers, video editors, and specialized developers. When your project needs something specific, we have people who have done it before.',
  },

  approach: {
    headline: 'How We Work',
    subheadline: 'No mystery. No vanishing acts. Just a process that actually ships.',
  },

  whyUs: {
    headline: 'Why Teams Choose Us',
    subheadline: "Honest answer? We actually deliver. Here's what that looks like:",
  },

  testimonials: {
    headline: 'What Clients Say',
    subheadline: 'Real reviews from Fiverr. 5.0 rating across all reviews.',
  },

  contact: {
    headline: "Let's Build Something",
    subheadline: "No sales pitch. Just a conversation about what you're building and whether we can help.",
    email: 'hello@jointops.dev',
    responseTime: 'Within 24 hours (usually faster)',
    submitButton: 'Start the Conversation',
    trustBadges: [
      'We respond within 24 hours',
      'No commitment required',
      'Free initial consultation',
    ],
  },

  footer: {
    tagline: 'JointOps — A crew that operates together.',
    copyright: '© 2025 JointOps. All rights reserved.',
  },

  notFound: {
    headline: "This page doesn't exist.",
    subheadline: 'But we can build it for you if you want.',
    cta: 'Go Home',
  },
} as const

export type SiteContent = typeof siteContent
