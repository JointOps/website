'use client'

import { motion } from 'framer-motion'

// Trust pillar icons
const TrustIcons = {
  TrackRecord: () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  Understanding: () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  AntiAgency: () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Guarantee: () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    </svg>
  ),
}

interface TrustPillar {
  id: string
  icon: keyof typeof TrustIcons
  title: string
  body: string[]
}

const TRUST_PILLARS: TrustPillar[] = [
  {
    id: 'quality-first',
    icon: 'TrackRecord',
    title: 'Security & Quality First',
    body: [
      "We write code like your users' assets depend on it — because they do. Smart contracts get audited. APIs get load tested. Edge cases get handled before they become production incidents.",
      "No 'we'll fix it later.' No 'good enough for v1.' When something goes to mainnet or handles real users, it works. The first time.",
    ],
  },
  {
    id: 'understanding',
    icon: 'Understanding',
    title: 'We Understand The Stakes',
    body: [
      "Building in Web3 isn't just software development. A bug isn't just an error message — it's funds at risk. A delay isn't just inconvenient — it's a missed market window.",
      "That's why we operate like technical co-founders, not just contractors. We flag risks early. We tell you when something won't work. We help you make the right call, not the easy one.",
    ],
  },
  {
    id: 'anti-agency',
    icon: 'AntiAgency',
    title: 'The Anti-Agency',
    body: [
      "No scope creep surprises. No 'that'll be extra.' No vanishing act after launch. Clear contracts, proactive communication, and we stick around until you're successful.",
      "Novel concept in this industry, we know. But we've seen too many teams burned by the alternatives. We decided to do the opposite.",
    ],
  },
  {
    id: 'guarantee',
    icon: 'Guarantee',
    title: 'Built to Last',
    body: [
      "We're not here to milk you for billable hours. We're here to build something that works and keeps working. If we commit to a timeline, we hit it. If something breaks, we fix it.",
      "Your success is our success. We don't consider a project done until you're proud to ship it. Anything less isn't worth building.",
    ],
  },
]

const PillarItem = ({ pillar, index }: { pillar: TrustPillar; index: number }) => {
  const Icon = TrustIcons[pillar.icon]
  const isEven = index % 2 === 0
  const isLast = index === TRUST_PILLARS.length - 1

  return (
    <>
      {/* Mobile Layout: Stacked vertically with left-aligned content */}
      <motion.div
        className="relative flex flex-col items-start gap-6 lg:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        {/* Icon and timeline on left */}
        <div className="relative flex shrink-0 flex-col items-center">
          {/* Icon Node */}
          <motion.div
            className="icon-xl relative z-10 flex shrink-0 items-center justify-center rounded-full border-4 border-accent bg-accent text-black transition-all duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
          >
            <Icon />
            {/* Number badge */}
            <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-black font-display text-xs font-bold text-accent sm:h-7 sm:w-7 md:h-8 md:w-8">
              {String(index + 1).padStart(2, '0')}
            </div>
          </motion.div>

          {/* Connecting Line */}
          {!isLast && (
            <motion.div
              className="relative h-24 w-0.5 shrink-0 sm:h-28"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
              style={{ transformOrigin: 'top' }}
            >
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute inset-0 bg-gradient-to-b from-accent to-cyan-500" />
            </motion.div>
          )}
        </div>

        {/* Content below icon on mobile */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
        >
          <h3 className="text-display-small mb-4 font-display font-bold text-foreground">
            {pillar.title}
          </h3>
          <div className="space-y-3">
            {pillar.body.map((paragraph, i) => (
              <p key={i} className="text-body leading-relaxed text-muted/90">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Desktop Layout: Timeline with alternating sides */}
      <motion.div
        className="relative hidden grid-cols-[1fr_auto_1fr] items-start gap-8 lg:grid lg:gap-16 xl:gap-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        {/* Left Content (for even indices) */}
        {isEven ? (
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          >
            <h3 className="text-display-small mb-4 font-display font-bold text-foreground transition-colors duration-300 hover:text-accent xl:text-4xl">
              {pillar.title}
            </h3>
            <div className="space-y-3">
              {pillar.body.map((paragraph, i) => (
                <p key={i} className="text-body leading-relaxed text-muted/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Center Timeline */}
        <div className="relative flex shrink-0 flex-col items-center">
          {/* Icon Node */}
          <motion.div
            className="icon-xl relative z-10 flex shrink-0 items-center justify-center rounded-full border-4 border-accent bg-accent text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
          >
            <Icon />
            {/* Number badge */}
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-black font-display text-xs font-bold text-accent">
              {String(index + 1).padStart(2, '0')}
            </div>
          </motion.div>

          {/* Connecting Line */}
          {!isLast && (
            <motion.div
              className="relative h-32 w-0.5 shrink-0"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
              style={{ transformOrigin: 'top' }}
            >
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute inset-0 bg-gradient-to-b from-accent to-cyan-500" />
            </motion.div>
          )}
        </div>

        {/* Right Content (for odd indices) */}
        {!isEven ? (
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          >
            <h3 className="text-display-small mb-4 font-display font-bold text-foreground transition-colors duration-300 hover:text-accent xl:text-4xl">
              {pillar.title}
            </h3>
            <div className="space-y-3">
              {pillar.body.map((paragraph, i) => (
                <p key={i} className="text-body leading-relaxed text-muted/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ) : (
          <div />
        )}
      </motion.div>
    </>
  )
}

export const WhyVyndra = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-black via-[#0A0A0F] to-black px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Responsive gradient orbs */}
        <div className="bg-blob-md absolute left-1/4 top-0 rounded-full bg-accent/5 opacity-40 blur-[120px]" />
        <div className="bg-blob-sm absolute bottom-0 right-1/4 rounded-full bg-cyan-500/5 opacity-30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent sm:px-4 sm:text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Why Teams Choose Us
          </motion.div>

          <h2 className="text-display-large mb-6 font-display font-bold text-foreground">
            Built Different.
            <br />
            <span className="bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
              On Purpose.
            </span>
          </h2>

          <p className="text-body-large mx-auto max-w-2xl leading-relaxed text-muted">
            We&apos;re not for everyone. We&apos;re for people who need it done right — the first time, on time, with
            zero excuses.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="space-y-8">
          {TRUST_PILLARS.map((pillar, index) => (
            <PillarItem key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-16 text-center sm:mt-20 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-body-large mx-auto max-w-3xl font-display leading-relaxed text-foreground/80">
            Ready to work with a team that actually <span className="font-semibold text-accent">delivers</span>?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
