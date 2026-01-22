# VYNDRA

**Digital Engineering Studio** - Production-ready Next.js 15 landing page with enterprise-grade security, email integration, and performance optimization.

## Quick Start

```bash
yarn install
cp .env.example .env.local
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15.5.9 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5 (Strict mode)
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15.0
- **Email**: Resend 6.8.0
- **Rate Limiting**: @upstash/ratelimit 2.0.8
- **Error Tracking**: @sentry/nextjs 10.36.0
- **Security**: isomorphic-dompurify 2.35.0
- **Validation**: Zod 3.24.1
- **Forms**: react-hook-form 7.54.2

## Features

### Production-Ready

- **Email Service Integration** - Resend API with beautiful HTML emails
- **Rate Limiting** - Upstash Redis-based API protection (3 requests/hour per IP)
- **Error Tracking** - Sentry integration for production monitoring
- **Input Sanitization** - DOMPurify prevents XSS attacks
- **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- **ARIA Accessibility** - Live regions for screen readers
- **Structured Data** - JSON-LD schema for SEO
- **Responsive Design** - Mobile-first with desktop enhancements
- **Performance Optimized** - GPU acceleration, lazy loading, reduced motion support

### UI/UX

- Framer Motion animations with `prefers-reduced-motion` support
- Dark glass morphism design system
- Sticky scroll experiences
- Mobile carousels with swipe gestures
- Form validation with Zod & React Hook Form
- Ultra-dark aesthetic with subtle opacity design

## Environment Setup

### 1. Copy Environment Template

```bash
cp .env.example .env.local
```

### 2. Configure Services

#### Resend (Email Service)
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use `onboarding@resend.dev` for testing
3. Create an API key
4. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=hello@vyndra.io
   ```

**Cost**: Free (100 emails/day)

#### Upstash (Rate Limiting)
1. Sign up at [upstash.com](https://upstash.com)
2. Create a Redis database
3. Copy the REST URL and token
4. Add to `.env.local`:
   ```env
   UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
   ```

**Cost**: Free (10K commands/day)

#### Sentry (Error Tracking)
1. Sign up at [sentry.io](https://sentry.io)
2. Create a new Next.js project
3. Copy your DSN
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
   SENTRY_ORG=your-org
   SENTRY_PROJECT=your-project
   SENTRY_AUTH_TOKEN=your_auth_token_here
   ```

**Cost**: Free (5K errors/month)

### 3. Site Configuration

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
SENTRY_SUPPRESS_GLOBAL_ERROR_HANDLER_FILE_WARNING=1
```

## Project Structure

```
/app
  /api/contact        # Contact form API endpoint
  layout.tsx          # Root layout with metadata
  page.tsx            # Homepage
  sitemap.ts          # SEO sitemap
  robots.ts           # Robots.txt

/components
  /sections           # Page sections (Hero, Services, Contact, etc.)
  /ui                 # Reusable UI components (BackToTop)
  /icons              # SVG icon components
  /layout             # Header, Footer, Menu
  StructuredData.tsx  # JSON-LD schema

/lib
  animations.ts       # Framer Motion variants
  fonts.ts            # Font configuration
  performance.ts      # Device tier detection
  utils.ts            # Utility functions
  validations.ts      # Zod schemas

/hooks                # Custom React hooks

/constants            # Static data (services, metrics, etc.)

/types                # TypeScript type definitions
```

## Development

### Run Dev Server

```bash
yarn dev
```

### Build for Production

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

### Lint Code

```bash
yarn lint
```

## API Documentation

### POST `/api/contact`

Submit a contact form message.

**Request**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need help building a DeFi protocol..."
}
```

**Response** (200 OK):
```json
{
  "success": true
}
```

**Errors**:
- `400` - Validation error
- `415` - Invalid Content-Type
- `429` - Rate limit exceeded (3 requests/hour)
- `500` - Server error

## Security Features

### Implemented

- **Rate Limiting** - 3 requests per hour per IP on contact form
- **Input Sanitization** - DOMPurify strips malicious HTML
- **Content-Type Validation** - Rejects non-JSON requests
- **Zod Schema Validation** - Type-safe form validation
- **Security Headers**:
  - Content-Security-Policy
  - Strict-Transport-Security (HSTS)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: origin-when-cross-origin
  - Permissions-Policy

### Not Needed

- CSRF Protection (no cookies/sessions)
- Authentication (public landing page)
- Database (emails sent directly)

## Performance

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations

- Server-side rendering (SSR)
- Static generation where possible
- GPU-accelerated animations
- Lazy loading with viewport detection
- Font display swap
- Minimal JavaScript (336 KB First Load JS)

## Accessibility

- **WCAG 2.1 AA Compliant**
- ARIA live regions for form status
- Keyboard navigation support
- Skip to content link
- Focus management
- Screen reader friendly
- `prefers-reduced-motion` support
- 44px+ touch targets

## Design System

### Dark Aesthetic

- Ultra-subtle borders: `white/[0.06]` to `white/[0.12]`
- Frosted glass effects: `backdrop-blur-xl`, `bg-white/[0.02]`
- Minimal text opacity: `white/30`, `white/40`, `white/60`
- Slow transitions: 500ms for premium feel

### Animation Patterns

- Pulsing rings with scale and opacity transforms
- Rotating gradients (360° shimmer effects)
- Bouncing elements with y-axis animation
- Entrance/exit with rotation and scale
- Custom cubic-bezier easing: `[0.16, 1, 0.3, 1]`

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Set environment variables in Vercel Dashboard:
   - Project Settings → Environment Variables
   - Add all variables from `.env.local`

### Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Resend domain verified
- [ ] Upstash Redis database created
- [ ] Sentry project set up
- [ ] Local build passes: `yarn build`
- [ ] Contact form tested
- [ ] Rate limiting tested

### Post-Deployment Verification

1. **Homepage Loads** - Visit https://vyndra.io
2. **Contact Form** - Submit test message, check email
3. **Rate Limiting** - Submit 4 times quickly, 4th should error
4. **Security Headers** - Run `curl -I https://vyndra.io`
5. **SEO** - Visit https://vyndra.io/sitemap.xml
6. **Structured Data** - Test at https://search.google.com/test/rich-results

## Troubleshooting

### Email Not Sending

- Check `RESEND_API_KEY` is set
- Verify domain in Resend dashboard
- Check console for error messages
- Use `onboarding@resend.dev` for testing

### Rate Limiting Not Working

- Check Upstash Redis credentials
- Verify `UPSTASH_REDIS_REST_URL` and token
- In development, rate limiting may be disabled

### Build Errors

```bash
rm -rf .next
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### CSP Errors in Console

Update CSP in [next.config.js](next.config.js):

```javascript
"connect-src 'self' https://your-domain.com"
```

## Testing Checklist

- [ ] Contact form submission (happy path)
- [ ] Contact form validation errors
- [ ] Rate limiting (try 4+ submissions quickly)
- [ ] Email delivery (check inbox and spam)
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader (VoiceOver/NVDA)
- [ ] Reduced motion preference

## Cost Estimates

| Service | Free Tier | Paid Tier | Monthly Cost |
|---------|-----------|-----------|--------------|
| Vercel | 100GB bandwidth | Pro: Unlimited | $20/month |
| Resend | 100 emails/day | 10K emails/month | $20/month |
| Upstash | 10K commands/day | Pay-as-you-go | ~$0-10 |
| Sentry | 5K errors/month | 50K errors/month | $26/month |

**Total**: $0/month (free tiers) or $66/month (paid tiers)

## Monitoring & Maintenance

### Daily
- Check Sentry for errors
- Monitor email delivery (Resend dashboard)

### Weekly
- Review contact form submissions
- Check rate limiting logs (Upstash)
- Monitor performance (Vercel Analytics)

### Monthly
- Update dependencies: `yarn upgrade-interactive`
- Review security headers
- Run PageSpeed audit
- Check SSL certificate expiry

## License

Proprietary - All rights reserved by VYNDRA

## Support

For issues or questions:
- Email: hello@vyndra.io
- Website: https://vyndra.io

---

**Your vision, our expertise** 🚀
