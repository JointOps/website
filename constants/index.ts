import type { ApproachStep, NavLink, ProofMetric, Service, SocialLinks } from '@/types'

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIAL_LINKS: SocialLinks = {
  twitter: 'https://twitter.com/vyndra',
  github: 'https://github.com/vyndra',
  linkedin: 'https://linkedin.com/company/vyndra',
} as const

export const CONTACT_EMAIL = 'hello@vyndra.io' as const

export const PROOF_METRICS: readonly ProofMetric[] = [
  { value: '10+', label: 'Apps Handling Real Money' },
  { value: 'Zero', label: 'Security Breaches Ever' },
  { value: '3+ Years', label: 'Supporting Clients' },
  { value: '69', label: 'Client Testimonials' },
] as const

export const SERVICES: readonly Service[] = [
  {
    id: 'blockchain',
    title: 'Blockchain & Smart Contracts',
    tagline: 'Production-grade smart contracts that handle real assets',
    description: [
      "We don't dabble in crypto. We've deployed production smart contracts to mainnet — the kind that handle real money from real users. When your token launch needs to be bulletproof, when your staking mechanism can't have exploits, when move fast and break things isn't an option because the things are people's assets — that's when you call us.",
      "Our Solana programs have processed millions in transactions. Zero exploits. Zero we'll fix it in the next version. We write code that works the first time because in blockchain, there's often no second chance.",
    ],
    features: [
      'Token launches',
      'NFT platforms',
      'DeFi protocols',
      'Staking systems',
      'Custom Solana programs',
      'Security-first architecture',
    ],
  },
  {
    id: 'web3-gaming',
    title: 'Web3 Gaming',
    tagline: 'Infrastructure that blockchain games actually run on',
    description: [
      "We've built the infrastructure that blockchain games run on. Not wrappers around existing tools — actual protocol-level systems that 15+ game studios have integrated.",
      "Wallet connection, NFT mechanics, in-game economies backed by real tokens, inventory systems that live on-chain — we've shipped all of it. In production. With real players. We build the bridge between fun game and game with an economy that actually works.",
    ],
    features: [
      'Game-blockchain integration',
      'In-game economies',
      'NFT systems',
      'Wallet integration',
      'Unity/Godot/Unreal SDKs',
      'Real-time chain synchronization',
    ],
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    tagline: 'Fast, reliable web apps that users love',
    description: [
      "Not every project needs blockchain. Sometimes you need a web app that's fast, reliable, and doesn't make your users think. We've been building these longer than we've been in Web3.",
      "React, Next.js, Node — the modern stack, executed properly. We've architected systems that handle 50,000 requests per second without flinching. Your dashboard, your platform, your SaaS — built to scale before you need to scale.",
    ],
    features: [
      'React/Next.js applications',
      'Node.js backends',
      'GraphQL & REST APIs',
      'Real-time features',
      'Database architecture',
      'Authentication systems',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Infrastructure',
    tagline: 'The plumbing that keeps everything running',
    description: [
      "The part users never see but always feel. Backends that respond in milliseconds. Infrastructure that stays up when everything's on fire. The plumbing that lets your frontend team ship features instead of fighting timeouts.",
      "We build systems that your future CTO will thank you for. Documented, scalable, boring in all the right ways.",
    ],
    features: [
      'Microservices architecture',
      'Cloud infrastructure (AWS, GCP)',
      'CI/CD pipelines',
      'Database optimization',
      'Monitoring & alerting',
      'The stuff that lets you sleep at night',
    ],
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools & SDKs',
    tagline: 'Tools developers actually want to use',
    description: [
      "Our developers build tools for other developers. Multi-language SDKs, API clients that actually work, documentation that doesn't make people cry.",
      "If your product's users are developers, we speak their language. Literally — we've shipped SDKs in TypeScript, Rust, C#, and C++. Same API, every platform.",
    ],
    features: [
      'Multi-language SDKs',
      'API client generation',
      'CLI tools',
      'Documentation systems',
      'Developer experience design',
    ],
  },
  {
    id: 'design',
    title: 'Design & Interface',
    tagline: 'Software that feels inevitable',
    description: [
      'We believe software should feel inevitable. Interfaces where users know what to do without being told. Design that gets out of the way and lets the product shine.',
      "We're not a design agency with developers. We're engineers who understand that how something feels is as important as how it works.",
    ],
    features: [
      'UI/UX Design',
      'Design systems',
      'Prototyping',
      'User research',
      'The pixels that make people stay',
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
