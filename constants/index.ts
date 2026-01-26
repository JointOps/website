import type { ApproachStep, NavLink, ProofMetric, Service, SocialLinks } from '@/types'

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'About', href: '#why-jointops' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIAL_LINKS: SocialLinks = {
  twitter: 'https://twitter.com/jointopsdev',
  github: 'https://github.com/jointops',
  linkedin: 'https://linkedin.com/company/jointops',
} as const

export const CONTACT_EMAIL = 'hello@jointops.dev' as const

export const PROOF_METRICS: readonly ProofMetric[] = [
  { value: '4.8', label: 'Fiverr Rating' },
  { value: '30+', label: 'Countries Served' },
  { value: 'Zero', label: 'Security Incidents' },
] as const

export const SERVICES: readonly Service[] = [
  {
    id: 'web-apps',
    title: 'Web & Mobile Applications',
    tagline: 'Apps that users love, built to scale',
    description: [
      "Web and mobile apps that load fast, work flawlessly, and don't make your users think. React, Next.js, React Native, Flutter — the modern stack, executed properly.",
      "We build systems designed to scale. Your dashboard, your platform, your SaaS, your mobile app — built with performance in mind from day one.",
    ],
    features: [
      'React/Next.js web apps',
      'React Native & Flutter mobile',
      'Progressive Web Apps (PWA)',
      'Real-time features',
      'Cross-platform development',
      'Performance optimization',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Infrastructure',
    tagline: 'The plumbing that keeps everything running',
    description: [
      "The part users never see but always feel. Backends that respond in milliseconds. Infrastructure that stays up when everything's on fire. APIs that your frontend team actually enjoys working with.",
      'We build systems that your future CTO will thank you for. Documented, scalable, boring in all the right ways.',
    ],
    features: [
      'Node.js & Python backends',
      'GraphQL & REST APIs',
      'Cloud infrastructure (AWS, GCP)',
      'Database architecture',
      'CI/CD pipelines',
      'Monitoring & alerting',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Smart Contracts',
    tagline: 'Production-grade smart contracts that handle real assets',
    description: [
      "We've deployed production smart contracts to mainnet — the kind that handle real money from real users. Token launches, staking mechanisms, DeFi protocols — built bulletproof from day one.",
      'We built Honeycomb Protocol, infrastructure that 15+ game studios have integrated with. Zero exploits. Zero security incidents in our code.',
    ],
    features: [
      'Solana smart contracts',
      'Token launches & DeFi',
      'NFT platforms',
      'Staking systems',
      'Wallet integration',
      'Security-first architecture',
    ],
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools & SDKs',
    tagline: 'Tools developers actually want to use',
    description: [
      "We build tools for other developers. Multi-language SDKs, API clients that actually work, documentation that doesn't make people cry.",
      "If your product's users are developers, we speak their language. We've shipped SDKs in TypeScript, Python, Rust, C#, and C++. Same API, every platform.",
    ],
    features: [
      'Multi-language SDKs',
      'API client generation',
      'CLI tools',
      'Documentation systems',
      'Developer experience design',
      'Open source contributions',
    ],
  },
  {
    id: 'design',
    title: 'Design, Interface & Editing',
    tagline: 'Make it look as good as it works',
    description: [
      'Interfaces where users know what to do without being told. Design that gets out of the way and lets the product shine. Video content that explains your product better than a wall of text.',
      "We're not a design agency with developers. We're engineers who understand that how something looks and feels is part of how it works.",
    ],
    features: [
      'UI/UX Design',
      'Design systems',
      'Prototyping & wireframes',
      'Video editing & motion',
      'Brand identity',
      'Product demos & explainers',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Growth',
    tagline: 'Get your product in front of the right people',
    description: [
      "Building something great is only half the battle. We help you launch it, grow it, and get it in front of the people who need it. SEO, content strategy, social media, paid ads — marketing that actually converts.",
      "We've helped launch products and grow audiences. We know what works because we've done it for our own projects and our clients.",
    ],
    features: [
      'SEO & content strategy',
      'Social media management',
      'Paid advertising (Google, Meta)',
      'Email marketing & automation',
      'Launch campaigns',
      'Analytics & conversion optimization',
    ],
  },
]

export const APPROACH_STEPS: readonly ApproachStep[] = [
  {
    title: 'Understand',
    description: "We ask the questions your last team didn't.",
  },
  {
    title: 'Architect',
    description: 'Solutions designed before the first line of code.',
  },
  {
    title: 'Build',
    description: 'Rapid iteration, zero shortcuts.',
  },
  {
    title: 'Ship',
    description: 'Production-ready means production-ready.',
  },
  {
    title: 'Evolve',
    description: "We don't disappear after launch.",
  },
] as const
