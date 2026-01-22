# VYNDRA - Digital Engineering Studio

Production-ready Next.js 15 landing page with enterprise-grade security, email integration, and performance optimization.

## 🚀 Features

### ✅ Implemented & Production-Ready

- **Email Service Integration** - Resend API with beautiful HTML emails
- **Rate Limiting** - Upstash Redis-based API protection (3 requests/hour per IP)
- **Error Tracking** - Sentry integration for production monitoring
- **Input Sanitization** - DOMPurify prevents XSS attacks
- **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- **ARIA Accessibility** - Live regions for screen readers
- **Structured Data** - JSON-LD schema for SEO
- **Responsive Design** - Mobile-first with desktop enhancements
- **Performance Optimized** - GPU acceleration, lazy loading, reduced motion support

### 🎨 UI/UX Features

- Framer Motion animations with `prefers-reduced-motion` support
- Glass morphism design system
- Sticky scroll experiences
- Mobile carousels with swipe gestures
- Particle effects with performance tiers
- Form validation with Zod & React Hook Form

## 📦 Tech Stack

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

## 🛠️ Setup & Installation

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in the required values:

```env
# Required for contact form
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@vyndra.io

# Required for rate limiting
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token_here

# Required for error tracking (production)
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=your_auth_token_here

# Site configuration
NEXT_PUBLIC_SITE_URL=https://vyndra.io
NODE_ENV=production
```

### 3. Get Your API Keys

#### Resend (Email Service)
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use `onboarding@resend.dev` for testing
3. Create an API key
4. Add to `RESEND_API_KEY`

#### Upstash (Rate Limiting)
1. Sign up at [upstash.com](https://upstash.com)
2. Create a Redis database
3. Copy the REST URL and token
4. Add to `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`

#### Sentry (Error Tracking)
1. Sign up at [sentry.io](https://sentry.io)
2. Create a new Next.js project
3. Copy your DSN
4. Add to `NEXT_PUBLIC_SENTRY_DSN`

### 4. Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Production Build

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

### Deploy to Vercel

```bash
vercel --prod
```

Make sure to set all environment variables in Vercel dashboard.

## 🔒 Security Features

### Implemented

✅ **Rate Limiting** - 3 requests per hour per IP on contact form
✅ **Input Sanitization** - DOMPurify strips malicious HTML
✅ **Content-Type Validation** - Rejects non-JSON requests
✅ **Zod Schema Validation** - Type-safe form validation
✅ **Security Headers**:
  - Content-Security-Policy
  - Strict-Transport-Security (HSTS)
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy

### Not Implemented (Optional)

⚠️ **CSRF Protection** - Add if using cookies/sessions
⚠️ **Authentication** - Not needed for landing page
⚠️ **Database** - Contact form sends emails directly

## 📊 Performance

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

## 📱 Accessibility

- **WCAG 2.1 AA Compliant**
- ARIA live regions for form status
- Keyboard navigation support
- Skip to content link
- Focus management
- Screen reader friendly
- `prefers-reduced-motion` support
- 44px+ touch targets

## 🧪 Testing

### Manual Testing Checklist

- [ ] Contact form submission (happy path)
- [ ] Contact form validation errors
- [ ] Rate limiting (try 4+ submissions quickly)
- [ ] Email delivery (check inbox)
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader (VoiceOver/NVDA)
- [ ] Reduced motion preference

### Future: Automated Testing

```bash
# Install test dependencies
yarn add -D @testing-library/react @testing-library/jest-dom jest

# Run tests
yarn test
```

## 📖 API Documentation

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
- `429` - Rate limit exceeded
- `500` - Server error

**Rate Limit**: 3 requests per hour per IP

## 🔧 Development

### Project Structure

```
/app
  /api/contact        # Contact form API endpoint
  layout.tsx          # Root layout with metadata
  page.tsx            # Homepage
  sitemap.ts          # SEO sitemap
  robots.ts           # Robots.txt

/components
  /sections           # Page sections (Hero, Services, Contact, etc.)
  /ui                 # Reusable UI components
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

### Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks (optional)

### Adding New Sections

1. Create component in `/components/sections/`
2. Import in `/app/page.tsx`
3. Add to navigation in `/constants/index.ts`
4. Update sitemap in `/app/sitemap.ts`

## 🐛 Troubleshooting

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
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules yarn.lock
yarn install

# Rebuild
yarn build
```

### CSP Errors in Console

Update CSP in `next.config.js` to allow your domains:

```javascript
"connect-src 'self' https://your-domain.com"
```

## 📄 License

Proprietary - All rights reserved by VYNDRA

## 🤝 Support

For issues or questions:
- Email: hello@vyndra.io
- GitHub Issues: [Create an issue](https://github.com/vyndra/website/issues)

---

**Built with precision by VYNDRA** 🚀
