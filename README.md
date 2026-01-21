# Vyndra — Digital Engineering Studio

Premium website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Utilities**: clsx + tailwind-merge

## Project Structure

```
vyndra/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── layout/      # Header, navigation
│   ├── sections/    # Page sections
│   ├── ui/          # Reusable UI components
│   └── icons/       # SVG icons
├── lib/             # Utilities and configs
├── hooks/           # Custom React hooks
├── types/           # TypeScript definitions
├── constants/       # App constants
└── public/          # Static assets
```

## Code Standards

- Zero `any` types
- Self-documenting code (no comments)
- Functional components with TypeScript
- Mobile-first responsive design
- WCAG 2.1 AA compliant

## Build & Deploy

```bash
yarn build
yarn start
```

---

Built by Vyndra
