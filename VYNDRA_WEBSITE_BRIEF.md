# VYNDRA — Website Development Brief

> **Your Role**: You are the Lead Developer, Creative Director, and Copywriter for Vyndra. You have complete creative ownership of this project. Build something you'd be proud to put in your portfolio. Something that makes other developers ask "how did they do that?"

---

## Reference & Inspiration

Before you start, understand the tier we're playing in. These sites represent the quality bar:

**Design & Experience Inspiration:**
- [Linear](https://linear.app) — Smooth animations, dark theme done right, developer-focused
- [Vercel](https://vercel.com) — Clean, fast, premium tech company feel
- [Stripe](https://stripe.com) — Clarity, gradients, attention to detail
- [Raycast](https://raycast.com) — Dark, polished, purposeful animations
- [Framer](https://framer.com) — Bold typography, creative layouts
- [Basement Studio](https://basement.studio) — Agency site with personality

**What these sites have in common:**
- Nothing feels templated
- Animations serve purpose, not decoration
- Typography is distinctive
- Dark themes feel intentional, not inverted
- Every scroll reveals something worth seeing

**We are NOT:**
- A Wix/Squarespace template
- A generic "digital agency" with stock photos
- A site that looks like every other dev shop
- Cluttered, busy, or trying too hard

---

## The Soul of Vyndra

Vyndra is not an agency. Vyndra is what happens when elite engineers decide to stop working for other people's visions and start building for those who dream bigger than their current team can execute.

We are a collective of builders who've shipped protocol-level blockchain infrastructure, won hackathons against global competition, and deployed smart contracts that handle real money with zero security incidents. We don't pitch. We prove.

**Our clients are**:
- Founders who need a technical co-founder without giving up equity
- Companies entering Web3 who can't afford to learn through expensive mistakes  
- Teams who've been burned by agencies that overpromise and underdeliver
- Anyone who's tired of "it depends" and wants "here's how we'll do it"

**What makes us different**:
We've built the infrastructure that other agencies use. We've shipped code to mainnet that processes real transactions. We've won hackathons not by building demos, but by building products. When you hire Vyndra, you're not getting developers. You're getting architects who happen to code.

---

## Design Direction

### The Feeling

When someone lands on this site, they should feel like they've discovered something exclusive. Not pretentious-exclusive. Competence-exclusive. The kind of confidence that doesn't need to shout.

Think:
- The quiet confidence of a surgeon who's done 10,000 operations
- The calm of someone who's already solved your problem before
- The elegance of complexity made simple

### Visual Philosophy

**Choose ONE bold direction and commit fully:**

You have creative freedom here. Pick an aesthetic that feels right for a premium technical agency. Some directions to consider (or create your own):

- **Dark Minimal**: Deep blacks, surgical precision, typography that cuts
- **Refined Luxury**: Subtle gradients, generous space, every pixel intentional  
- **Architectural**: Grid-based, structural, blueprints-meet-digital
- **Abstract Technical**: Geometric forms, data visualization aesthetics, code as art
- **Editorial Premium**: Magazine-quality layouts, dramatic typography, story-driven

Whatever you choose, execute it with conviction. Half-measures create forgettable websites.

### Typography

Choose fonts that command respect. Headlines should stop scrolling. Body text should feel effortless to read.

Suggestions (or find better):
- Display: Clash Display, Cabinet Grotesk, Satoshi, PP Neue Montreal, Instrument Serif
- Body: Söhne, Untitled Sans, Switzer, General Sans

**Avoid**: Inter, Roboto, Open Sans, anything that feels like a default.

### Color

Build a palette that feels inevitable. Not chosen, discovered.

Constraints:
- Primary background should be dark (true blacks or deep navy/charcoal)
- Text must be highly readable (off-whites, not pure white if it's too harsh)
- ONE accent color used sparingly — it should feel like a reward when it appears
- Gradients should be subtle and sophisticated, not candy-colored

### Animation Philosophy

Animation should feel like the interface is alive, not decorated. Every motion needs purpose.

**Must-haves**:
- Page load sequence that reveals content with intention (staggered, orchestrated)
- Scroll-triggered animations that make scrolling feel rewarding
- Hover states that respond with subtle intelligence
- Smooth transitions between states (nothing should "pop" into existence)
- Text reveals that make reading feel like unwrapping

**Approach**:
- Use Framer Motion for React
- Ease curves should feel organic (cubic-bezier, not linear)
- Duration should feel natural — fast enough to not wait, slow enough to notice
- Consider: blur transitions, scale shifts, opacity fades, Y-axis movements, clip-path reveals

**Never**:
- Animation for animation's sake
- Bouncy/playful easings (we're not a startup selling to Gen Z)
- Anything that delays the user from getting information
- Parallax that causes motion sickness

---

## Website Structure

This is a focused, single-page experience with optional contact route. Not a corporate site with 47 pages. A statement.

### Navigation

**Header/Nav Approach:**
- Fixed/sticky header that appears on scroll (hidden at top, reveals when scrolling up)
- Minimal: Logo on left, 3-4 nav links + CTA button on right
- Nav links: "Services", "About", "Contact" (smooth scroll to sections)
- CTA: "Start a Project" or "Let's Talk"
- Mobile: Hamburger menu with full-screen overlay, animated open/close
- Header should have subtle backdrop blur when scrolled
- Logo: "VYNDRA" wordmark (create as SVG component, distinctive typography)

**Scroll Behavior:**
- Smooth scroll for anchor links (`scroll-behavior: smooth` + JS for offset)
- Active section indicator in nav (highlight current section as user scrolls)
- Consider scroll progress indicator (subtle line at top of page)

### Section 1: Hero

**Purpose**: Stop the scroll. Create intrigue. Establish premium positioning.

**Requirements**:
- Headline that captures everything in under 8 words
- Subtext that clarifies without over-explaining (1-2 sentences max)
- Visual element that creates atmosphere (animated gradient, subtle particles, geometric forms — your call)
- Single CTA that feels like an invitation, not a demand

**Content Direction** (rewrite to be sharper):

The headline should convey: "We build what ambitious companies need but can't find elsewhere."

Possible angles:
- Focus on craft: "Precision Engineering for Digital Products"
- Focus on ambition: "For Those Who Build to Last"  
- Focus on difference: "Not Your Average Dev Shop"
- Focus on outcome: "From Concept to Mainnet"

The subtext should hint at our range (blockchain, web, infrastructure) without being a list.

### Section 2: Proof Bar (Optional)

A subtle strip of credibility. Numbers that matter.

- "10+ Mainnet Deployments"
- "Zero Security Incidents"  
- "Hackathon Winners"
- "50K+ Requests/Second"

Animate these in with counting effect or simple fade. Keep it understated.

### Section 3: What We Build

**Purpose**: Communicate our services without being a boring feature list.

**Approach**: This should NOT look like every other agency's services grid. Make it an experience. Consider:
- Full-width sections for each service
- Horizontal scroll for service exploration
- Interactive cards that reveal depth on hover
- Progressive disclosure — headline first, details on engagement

**Our Services with Human Descriptions**:

---

**Blockchain & Smart Contracts**

*The copy should convey*: We don't dabble in crypto. We've deployed production smart contracts to mainnet — the kind that handle real money from real users. When your token launch needs to be bulletproof, when your staking mechanism can't have exploits, when "move fast and break things" isn't an option because the things are people's assets — that's when you call us.

Our Solana programs have processed millions in transactions. Zero exploits. Zero "we'll fix it in the next version." We write code that works the first time because in blockchain, there's often no second chance.

*Includes*: Token launches, NFT platforms, DeFi protocols, Staking systems, Custom Solana programs, Security-first architecture

---

**Web3 Gaming**

*The copy should convey*: We've built the infrastructure that blockchain games run on. Not wrappers around existing tools — actual protocol-level systems that 15+ game studios have integrated.

Wallet connection, NFT mechanics, in-game economies backed by real tokens, inventory systems that live on-chain — we've shipped all of it. In production. With real players. We build the bridge between "fun game" and "game with an economy that actually works."

*Includes*: Game-blockchain integration, In-game economies, NFT systems, Wallet integration, Unity/Godot/Unreal SDKs, Real-time chain synchronization

---

**Web Applications**

*The copy should convey*: Not every project needs blockchain. Sometimes you need a web app that's fast, reliable, and doesn't make your users think. We've been building these longer than we've been in Web3.

React, Next.js, Node — the modern stack, executed properly. We've architected systems that handle 50,000 requests per second without flinching. Your dashboard, your platform, your SaaS — built to scale before you need to scale.

*Includes*: React/Next.js applications, Node.js backends, GraphQL & REST APIs, Real-time features, Database architecture, Authentication systems

---

**Backend & Infrastructure**

*The copy should convey*: The part users never see but always feel. Backends that respond in milliseconds. Infrastructure that stays up when everything's on fire. The plumbing that lets your frontend team ship features instead of fighting timeouts.

We build systems that your future CTO will thank you for. Documented, scalable, boring in all the right ways.

*Includes*: Microservices architecture, Cloud infrastructure (AWS, GCP), CI/CD pipelines, Database optimization, Monitoring & alerting, The stuff that lets you sleep at night

---

**Developer Tools & SDKs**

*The copy should convey*: Our developers build tools for other developers. Multi-language SDKs, API clients that actually work, documentation that doesn't make people cry.

If your product's users are developers, we speak their language. Literally — we've shipped SDKs in TypeScript, Rust, C#, and C++. Same API, every platform.

*Includes*: Multi-language SDKs, API client generation, CLI tools, Documentation systems, Developer experience design

---

**Design & Interface**

*The copy should convey*: We believe software should feel inevitable. Interfaces where users know what to do without being told. Design that gets out of the way and lets the product shine.

We're not a design agency with developers. We're engineers who understand that how something feels is as important as how it works.

*Includes*: UI/UX Design, Design systems, Prototyping, User research, The pixels that make people stay

---

### Section 4: Our Approach (Keep Brief)

**Purpose**: Show we have a process without boring them with methodology.

Something like a simple visual flow:
**Understand** → **Architect** → **Build** → **Ship** → **Evolve**

With one line each:
- Understand: "We ask the questions your last team didn't."
- Architect: "Solutions designed before the first line of code."
- Build: "Rapid iteration, zero shortcuts."
- Ship: "Production-ready means production-ready."
- Evolve: "We don't disappear after launch."

### Section 5: Why Vyndra

**Purpose**: Differentiate from every other agency.

**The content should convey these truths (rewrite for impact)**:

We're not generalists pretending to know blockchain. Our team includes Solana hackathon winners, engineers who've built protocol-level infrastructure, developers whose code runs on mainnet handling real transactions.

We've been the agency that other agencies call when they're stuck. The team founders bring in when their first dev shop failed. The people who say "yes, that's possible" when everyone else says "that's too complex."

We charge more than offshore teams and less than enterprise consultancies. We're more reliable than freelancers and more nimble than agencies with 200 people. We're the team you wish you'd hired first.

### Section 6: Call to Action

**Purpose**: Convert interest into conversation.

Big, confident CTA section before footer.

Headline options (make it better):
- "Let's Build Something Worth Building"
- "Ready When You Are"
- "Your Move"
- "Start the Conversation"

Button: Clear action, premium feel

### Section 7: Contact

**This is the only functionality needed.**

Create a contact form that feels as premium as the rest of the site:
- Name (required)
- Email (required, validated)
- Message (required, textarea)
- Submit button with loading state and success animation

**UX Requirements**:
- Inline validation (not after submit)
- Error states that help, not scold
- Success state that feels rewarding (animation, message change, something satisfying)
- The form should feel like the beginning of a relationship, not a support ticket

**Micro-Copy (use these exact texts or improve them):**

| Element | Text |
|---------|------|
| Name placeholder | "Your name" |
| Email placeholder | "you@company.com" |
| Message placeholder | "Tell us about your project..." |
| Submit button (idle) | "Send Message" |
| Submit button (loading) | "Sending..." |
| Success headline | "Message received." |
| Success subtext | "We'll get back to you within 24 hours." |
| Error (name empty) | "We need your name" |
| Error (email invalid) | "That doesn't look like an email" |
| Error (message empty) | "Tell us something about your project" |
| Error (submission failed) | "Something went wrong. Try again or email us directly." |

Include email directly: **hello@vyndra.io**

For now, form submission can use a Next.js API route that console.logs the data — we'll integrate email service later. Structure it so adding Resend/SendGrid/etc is trivial.

### Footer

Minimal. Confident.

- Vyndra wordmark/logo
- Social links: Twitter/X, GitHub, LinkedIn (placeholder hrefs for now)
- Copyright
- Optional: Small tagline ("Built by Vyndra" or "Karachi → Everywhere")

### 404 Page

Even error pages should feel designed. Create a custom not-found page:

- Same dark theme as main site
- Vyndra logo
- Headline: "This page doesn't exist." (not "404 Error" or "Page Not Found")
- Subtext: "But we can build whatever you're looking for."
- CTA button: "Back to Home"
- Maybe a subtle animation — something that feels intentional, not broken
- Same footer as main page (or simplified version)

---

## SEO & Meta

### Required Meta Tags

```typescript
// app/layout.tsx must include:
export const metadata: Metadata = {
  title: 'Vyndra — Digital Engineering Studio',
  description: 'We build blockchain protocols, web applications, and digital infrastructure for ambitious companies. Solana specialists. Zero security incidents. Hackathon winners.',
  keywords: ['blockchain development', 'solana', 'web3', 'smart contracts', 'web development', 'digital agency'],
  authors: [{ name: 'Vyndra' }],
  openGraph: {
    title: 'Vyndra — Digital Engineering Studio',
    description: 'We build what others can\'t. Blockchain. Web. Infrastructure.',
    url: 'https://vyndra.io',
    siteName: 'Vyndra',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyndra — Digital Engineering Studio',
    description: 'We build what others can\'t.',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### Additional Requirements
- Proper heading hierarchy (one H1 per page, H2s for sections, etc.)
- All images have alt text (even decorative ones should have `alt=""`)
- Canonical URL set
- Create a simple `robots.txt` in public folder
- Create a basic `sitemap.xml` (can be static for now)

---

## Accessibility — Non-Negotiable

This site must be WCAG 2.1 AA compliant. Not as an afterthought.

### Requirements

**Keyboard Navigation:**
- All interactive elements reachable via Tab
- Visible focus indicators (not the ugly browser default — design them)
- Skip-to-content link (hidden until focused)
- Form can be submitted with Enter key
- Modal/menu can be closed with Escape

**Screen Readers:**
- Semantic HTML throughout (section, nav, main, article, aside)
- ARIA labels where semantic HTML isn't enough
- Form inputs have associated labels (not just placeholders)
- Error messages announced to screen readers
- Loading states announced

**Visual:**
- Color contrast ratio: 4.5:1 minimum for text
- Don't rely on color alone to convey information
- Respect `prefers-reduced-motion`:
  ```typescript
  const prefersReducedMotion = usePrefersReducedMotion()
  // Disable or simplify animations accordingly
  ```
- Text resizable to 200% without breaking layout

**Focus States:**
Don't remove outlines. Design better ones:
```css
:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

---

## Anti-Patterns — DO NOT DO THIS

**Design Anti-Patterns:**
- Stock photos of people in suits shaking hands
- Generic "hero with laptop" imagery
- Carousels or auto-playing sliders
- Parallax that causes motion sickness
- Text over busy images without proper contrast
- Hamburger menu on desktop
- "Loading..." text (use skeleton or subtle animation)
- Scroll hijacking (let users scroll naturally)
- Sound or video that auto-plays
- Popups, modals on entry, or newsletter prompts
- "Click here" or "Learn more" as link text

**Code Anti-Patterns:**
- `// TODO: fix this later`
- `// @ts-ignore` or `// eslint-disable`
- `any` type anywhere
- `!important` in CSS
- Inline styles
- `useEffect` with missing dependencies
- State that should be derived but is duplicated
- Fetching in components instead of proper data layer
- Console.logs left in production code (except the intentional form log)
- Commented-out code
- Copy-pasted code that should be abstracted
- God components (500+ lines)
- Props with more than 7 properties (split the component)

**Content Anti-Patterns:**
- "Welcome to our website"
- "We are passionate about..."
- "Our team of experts..."
- "Synergy", "leverage", "utilize", "solutions"
- Exclamation points!
- Starting every sentence with "We"
- More than 3 sentences in a paragraph (for web)
- Walls of text without visual breaks

---

## Loading & Error States

### Initial Page Load
- Page should feel instant — no loading spinner for initial render
- Above-fold content prioritized (consider static generation)
- Fonts loaded with `display: swap` to prevent invisible text
- Optional: subtle page transition animation on route changes

### Section Loading (if implementing lazy loading)
- Skeleton screens that match the layout, not generic pulsing boxes
- Stagger skeleton animations for visual interest
- Content should fade in, not pop

### Form States
| State | Behavior |
|-------|----------|
| Idle | Default appearance |
| Focused | Field highlight, label animation |
| Validating | Subtle indicator (optional) |
| Valid | Success state (green check or similar) |
| Invalid | Error message appears below, field highlighted red |
| Submitting | Button shows loading state, form disabled |
| Success | Form replaced with success message, confetti optional but fun |
| Error | Error message displayed, form re-enabled for retry |

### Error Boundary
Create an error boundary component that catches React errors gracefully:
- Don't show the error stack to users
- Show a friendly message: "Something went wrong. Please refresh the page."
- Include a "Try again" button that reloads the section or page

---

## Config Files — Include These

### .gitignore
```
# dependencies
node_modules
.pnpm-store

# next.js
.next
out
build

# env
.env
.env.local
.env.*.local

# logs
npm-debug.log*

# misc
.DS_Store
*.pem
.vercel
```

### .prettierrc
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

### next.config.js (with security headers)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Environment Variables Structure
Create `.env.example` to document required env vars:
```
# Email service (for future integration)
# RESEND_API_KEY=

# Analytics (for future integration)  
# NEXT_PUBLIC_GA_ID=

# Site URL
NEXT_PUBLIC_SITE_URL=https://vyndra.io
```

---

## Technical Specification

### Stack

```
- Next.js 14+ (App Router)
- TypeScript (strict mode enabled)
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod (for contact form)
- clsx + tailwind-merge (for conditional classes)
```

### Project Structure

This structure is mandatory. Follow it exactly. Every file in its place.

```
vyndra/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page (all sections)
│   ├── not-found.tsx           # Custom 404 page
│   ├── globals.css             # Global styles, CSS variables
│   ├── favicon.ico             # Favicon
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Robots.txt generation
│   ├── opengraph-image.tsx     # Dynamic OG image (optional but impressive)
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form endpoint
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── MobileMenu.tsx      # Mobile navigation overlay
│   │   └── index.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProofBar.tsx
│   │   ├── Services.tsx
│   │   ├── Approach.tsx
│   │   ├── WhyVyndra.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── FadeIn.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── SkipToContent.tsx   # Accessibility: skip link
│   │   ├── ErrorBoundary.tsx   # Error handling
│   │   └── index.ts
│   └── icons/
│       ├── Logo.tsx
│       ├── Twitter.tsx
│       ├── GitHub.tsx
│       ├── LinkedIn.tsx
│       ├── Menu.tsx            # Hamburger icon
│       ├── Close.tsx           # Close icon
│       ├── ArrowRight.tsx
│       └── index.ts
├── lib/
│   ├── utils.ts                # cn() and other utilities
│   ├── fonts.ts                # Font configuration
│   ├── animations.ts           # Framer Motion variants
│   └── validations.ts          # Zod schemas
├── types/
│   └── index.ts                # All TypeScript interfaces/types
├── hooks/
│   ├── useInView.ts
│   ├── useMousePosition.ts
│   ├── usePrefersReducedMotion.ts
│   ├── useScrollDirection.ts   # For header show/hide
│   ├── useActiveSection.ts     # For nav highlighting
│   └── index.ts
├── constants/
│   └── index.ts                # All constants (nav links, services data, etc.)
├── public/
│   ├── fonts/                  # Self-hosted fonts (if any)
│   └── og-image.png            # Fallback OG image (1200x630)
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── .env.example
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md                   # Basic project documentation
```

---

## Code Standards — Non-Negotiable

You are a Lead Developer. The code you write will be reviewed by senior engineers. It must be flawless.

### The Golden Rules

1. **No comments. Period.**
   - Code should be self-documenting
   - Variable names, function names, and structure should explain intent
   - If you need a comment to explain what code does, rewrite the code
   - The only exception: complex regex patterns or mathematical formulas

2. **No `any` type. Ever.**
   - Every variable, parameter, and return type must be explicitly typed
   - Create interfaces and types for all data structures
   - Use generics where appropriate

3. **No magic numbers or strings**
   - All constants go in `/constants/index.ts`
   - Colors, breakpoints, animation durations — all extracted

4. **No inline styles**
   - Everything through Tailwind
   - Complex conditional classes use `clsx` + `tailwind-merge`

5. **No prop drilling beyond 2 levels**
   - Use composition patterns
   - Create context if needed (but probably not needed for this scope)

### File Standards

**Every file must:**
- Have a single, clear responsibility
- Export only what's necessary
- Use named exports (except page components)
- Be under 200 lines (split if larger)
- Have imports organized: React → external libs → internal absolute → internal relative

**Import order (enforced):**
```typescript
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

import { Button } from '@/components/ui'
import type { ContactFormData } from '@/types'
```

### Component Standards

**Functional components only. Arrow functions.**

```typescript
interface HeroProps {
  title: string
  subtitle: string
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section>
      {/* content */}
    </section>
  )
}
```

**Props interface naming:** `[ComponentName]Props`

**Destructure props in parameters, not in body.**

**Use semantic HTML:**
- `<section>` for page sections
- `<nav>` for navigation
- `<article>` for self-contained content
- `<header>` and `<footer>` appropriately
- Proper heading hierarchy (h1 → h2 → h3)

### TypeScript Standards

**Create types for everything:**

```typescript
// types/index.ts

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface AnimationVariants {
  hidden: TargetAndTransition
  visible: TargetAndTransition
}
```

**Use `interface` for objects, `type` for unions/primitives:**

```typescript
interface User {
  name: string
  email: string
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type Status = 'idle' | 'loading' | 'success' | 'error'
```

### Tailwind Standards

**Use the `cn()` utility for conditional classes:**

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
```

**Usage:**
```typescript
<button className={cn(
  'px-6 py-3 rounded-lg font-medium transition-all duration-300',
  variant === 'primary' && 'bg-white text-black hover:bg-white/90',
  variant === 'secondary' && 'bg-transparent border border-white/20 hover:border-white/40',
  disabled && 'opacity-50 cursor-not-allowed'
)}>
```

**Organize classes logically:**
1. Layout (display, position, width, height)
2. Spacing (margin, padding)
3. Typography (font, text)
4. Colors (bg, text, border colors)
5. Effects (shadow, opacity, blur)
6. Transitions/Animations
7. States (hover, focus, active)

### Animation Standards

**Create reusable animation variants:**

```typescript
// lib/animations.ts
import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}
```

**Use custom easing curves, not defaults:**
```typescript
const customEase = [0.25, 0.4, 0.25, 1]
const smoothEase = [0.43, 0.13, 0.23, 0.96]
```

### Form Standards

**Use React Hook Form with Zod:**

```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export type ContactFormData = z.infer<typeof contactSchema>
```

### API Route Standards

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)
    
    // For now, log the data
    console.log('Contact form submission:', validated)
    
    // TODO: Integrate email service (Resend, SendGrid, etc.)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid form data' },
      { status: 400 }
    )
  }
}
```

### Performance Standards

- Lighthouse score: 90+ across ALL metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Animations: Locked 60fps (use `transform` and `opacity` only for animated properties)
- Images: All through `next/image` with proper sizing
- Fonts: Preloaded, `display: swap`, subset if possible
- Below-fold: Lazy loaded with Intersection Observer

### Responsive Standards

Mobile-first. Always.

```typescript
// This is correct
className="text-base md:text-lg lg:text-xl"

// This is wrong
className="text-xl lg:text-lg md:text-base"
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Touch targets:** Minimum 44x44px on mobile

**Respect user preferences:**
```typescript
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="motion-safe:animate-fade-in motion-reduce:animate-none"
>
```

### What "Production-Ready" Means

Before considering the code complete, verify:

- [ ] TypeScript compiles with zero errors and zero warnings
- [ ] No ESLint warnings
- [ ] All imports resolve correctly
- [ ] All links work (even if placeholder hrefs)
- [ ] Form validates correctly on all inputs
- [ ] Form submits and shows success state
- [ ] All animations play smoothly on scroll
- [ ] Mobile layout is intentional, not broken desktop
- [ ] Accessibility: proper focus states, aria labels where needed
- [ ] Console is clean (no warnings, no errors)
- [ ] `npm run build` succeeds without errors

---

## Deliverable Format

Provide the complete codebase. Every file. In full.

**Structure your response as:**

1. First, briefly describe your design decisions (2-3 sentences max)
2. Then, provide every file with its complete path and complete code
3. Include `package.json` with all dependencies
4. Include `tailwind.config.ts` with custom configuration
5. Include `tsconfig.json` properly configured

**File format:**
```
// path/to/file.tsx
[complete code here, no truncation, no "// ... rest of component"]
```

**Do not:**
- Truncate any file
- Use "..." or "rest of the code" placeholders
- Skip "obvious" files
- Provide partial implementations

Every file must be complete and ready to copy-paste into a project that runs on first `npm install && npm run dev`.

---

## Content Principles

### Voice

Write like a confident founder, not a marketing team. 

**We sound like**:
- Someone who's shipped products, not someone who's read about shipping products
- Direct but not aggressive
- Confident but not arrogant (the difference: confidence is earned, arrogance is performed)
- Technical when it helps, accessible always

**We never sound like**:
- Corporate ("leverage synergies to deliver value")
- Desperate ("We'll do anything! Pick us!")
- Vague ("We build solutions for your problems")
- Generic ("Your trusted technology partner")

### Persuasion Philosophy

Don't sell. Demonstrate.

Instead of: "We're the best blockchain developers"
Write: "Our smart contracts have processed $X in transactions with zero exploits"

Instead of: "We have a great team"  
Write: "Our engineers have won X hackathons and built infrastructure used by Y studios"

Instead of: "We deliver on time"
Write: "We've never missed a mainnet deployment date"

Every claim should make the reader think "I want to verify this" not "I've heard this before."

### Content Length

This is a landing page, not a novel. Visitors are scanning.

- Headlines: 3-8 words
- Subheadlines: 1-2 sentences  
- Service descriptions: 2-3 short paragraphs max
- Section intros: 1-2 sentences

White space is content. Let the design breathe.

---

## Creative Freedom

You have full authority over:

- **Exact visual theme**: Dark minimal, geometric, editorial — whatever serves the brand
- **Animation choreography**: How elements enter, interact, respond
- **Layout decisions**: Section arrangements, spacing, visual hierarchy  
- **Color choices**: Within the dark-primary constraint, find what works
- **Typography pairing**: Find fonts that feel right
- **Micro-copy**: Button text, placeholders, small UI text
- **Background treatments**: Gradients, patterns, effects
- **Interactive details**: Hover states, focus states, cursor effects
- **Section ordering**: If a different flow works better, do it
- **Content refinement**: Make the copy sharper, more human, more persuasive

**Your only constraints**:
- Dark theme (not negotiable — it's part of the brand)
- Single-page with contact functionality  
- Must feel premium, not playful
- Must communicate: blockchain expertise, full-stack capability, proven track record
- Contact form must work
- Mobile must feel intentional

---

## Definition of Done

This project is complete when:

### Design & Experience
1. **A visitor knows within 5 seconds**: We build serious software, we're especially strong in blockchain, we're not cheap but we're worth it

2. **The design stops scrolling**: Someone should pause and look at this site. Screenshot it. Send it to a friend who appreciates good design.

3. **The animations feel alive**: Not decorated — alive. Like the interface responds to presence.

4. **The copy convinces**: A founder reading this should feel "these are the people" not "these are people"

5. **The form works**: Validation, submission, feedback — all polished

6. **It's fast**: No loading spinners. No janky animations. Smooth.

### Code Quality
7. **Zero TypeScript errors**: `tsc --noEmit` passes silently

8. **Zero console warnings**: Browser console is clean on all pages

9. **Build succeeds**: `npm run build` completes with no errors or warnings

10. **Code is self-documenting**: A senior developer can understand any component in under 60 seconds without comments

11. **Folder structure is perfect**: Every file is exactly where it should be, named exactly what it should be named

12. **No shortcuts**: No `any` types, no `// @ts-ignore`, no `eslint-disable`, no "we'll fix this later"

13. **Copy-paste ready**: Someone can clone this, run `npm install && npm run dev`, and it works. First try.

---

## Pre-Delivery Checklist

Before considering this project complete, verify each item:

### Files Delivered
- [ ] All files listed in Project Structure exist and are complete
- [ ] No file is truncated or contains "..." or placeholder code
- [ ] package.json includes all required dependencies
- [ ] All config files (.gitignore, .prettierrc, .eslintrc.json, next.config.js) included

### Functionality
- [ ] Page loads without errors
- [ ] All navigation links smooth-scroll to correct sections
- [ ] Mobile menu opens and closes properly
- [ ] Contact form validates all fields
- [ ] Contact form shows loading state on submit
- [ ] Contact form shows success message after submission
- [ ] Form submission hits the API endpoint
- [ ] 404 page displays correctly for unknown routes

### Visual
- [ ] Animations play smoothly on scroll
- [ ] Hover states work on all interactive elements
- [ ] Mobile layout is intentional and usable
- [ ] No layout shifts on page load
- [ ] Fonts load without flash of unstyled text

### Code Quality
- [ ] TypeScript strict mode enabled
- [ ] Zero `any` types in codebase
- [ ] Zero comments (except .env.example)
- [ ] All imports resolve correctly
- [ ] Consistent code style throughout

### Accessibility
- [ ] Skip-to-content link present
- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible and styled
- [ ] Form inputs have proper labels
- [ ] Color contrast meets WCAG AA

---

## Final Note

Don't hold back. 

This is a chance to build something that demonstrates what's possible when a Lead Developer has creative freedom and a clear brief. Vyndra's website should be proof of what we claim to do.

You are not writing code. You are crafting a digital experience AND demonstrating engineering excellence. Every file, every function, every line should reflect the standards of someone who takes pride in their craft.

The code is as much a deliverable as the design. A junior developer should be able to read this codebase and learn what professional code looks like. A senior developer should review it and find nothing to critique.

Make it beautiful. Make it fast. Make it unforgettable. Make the code worthy of the product.

Build something legendary.

---

*Brief prepared for Claude Opus — Lead Developer, Vyndra*
