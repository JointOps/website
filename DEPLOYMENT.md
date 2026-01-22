# 🚀 Production Deployment Checklist

## Pre-Deployment Requirements

### ✅ Required Services

Before deploying, you MUST have these services configured:

1. **Resend Account** (Email Service)
   - Sign up: https://resend.com
   - Verify your domain (or use onboarding@resend.dev for testing)
   - Generate API key
   - Cost: $0/month (free tier: 100 emails/day)

2. **Upstash Redis** (Rate Limiting)
   - Sign up: https://upstash.com
   - Create Redis database
   - Copy REST URL and token
   - Cost: $0/month (free tier: 10K commands/day)

3. **Sentry Account** (Error Tracking)
   - Sign up: https://sentry.io
   - Create Next.js project
   - Copy DSN
   - Cost: $0/month (free tier: 5K errors/month)

### ⚙️ Environment Variables

Set these in your deployment platform (Vercel/Netlify/etc.):

```bash
# Email (REQUIRED)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=hello@vyndra.io

# Rate Limiting (REQUIRED)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxx

# Error Tracking (REQUIRED for production)
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=xxxxxxxxxxxxx

# Site Config
NEXT_PUBLIC_SITE_URL=https://vyndra.io
NODE_ENV=production

# Suppress Sentry warnings
SENTRY_SUPPRESS_GLOBAL_ERROR_HANDLER_FILE_WARNING=1
```

## Deployment Steps

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   - Go to Vercel Dashboard
   - Project Settings → Environment Variables
   - Add all variables from above
   - Redeploy: `vercel --prod`

### Alternative: Deploy via Git

1. **Connect Repository**
   - Import project in Vercel
   - Connect GitHub/GitLab repo

2. **Configure Build**
   - Build Command: `yarn build`
   - Output Directory: `.next`
   - Install Command: `yarn install`

3. **Add Environment Variables**
   - In Vercel dashboard
   - Add all required variables

4. **Deploy**
   - Push to main branch
   - Auto-deploys on every push

## Post-Deployment Verification

### ✅ Functional Tests

1. **Homepage Loads**
   - Visit https://vyndra.io
   - Check all sections load
   - Test mobile responsiveness

2. **Contact Form**
   - Fill out form with test data
   - Submit
   - Check email arrives (check spam folder)
   - Verify HTML formatting looks good

3. **Rate Limiting**
   - Submit form 3 times quickly
   - 4th attempt should show rate limit error
   - Wait 1 hour, try again

4. **Error Tracking**
   - Check Sentry dashboard
   - Verify no unexpected errors

### ✅ Security Tests

1. **Security Headers**
   ```bash
   curl -I https://vyndra.io
   ```

   Should see:
   - `strict-transport-security`
   - `content-security-policy`
   - `x-frame-options: DENY`
   - `x-content-type-options: nosniff`

2. **SSL Certificate**
   - Visit https://vyndra.io
   - Check padlock icon
   - Certificate should be valid

3. **HTTPS Redirect**
   - Visit http://vyndra.io
   - Should redirect to https://

### ✅ Performance Tests

1. **PageSpeed Insights**
   - Visit: https://pagespeed.web.dev
   - Enter: https://vyndra.io
   - Target Scores:
     - Performance: > 90
     - Accessibility: 100
     - Best Practices: 100
     - SEO: 100

2. **Core Web Vitals**
   - LCP: < 2.5s ✅
   - FID: < 100ms ✅
   - CLS: < 0.1 ✅

### ✅ SEO Verification

1. **Google Search Console**
   - Add property: https://vyndra.io
   - Submit sitemap: https://vyndra.io/sitemap.xml
   - Verify ownership

2. **Sitemap**
   - Visit: https://vyndra.io/sitemap.xml
   - Should list all pages

3. **Robots.txt**
   - Visit: https://vyndra.io/robots.txt
   - Should allow crawling

4. **Structured Data**
   - Visit: https://search.google.com/test/rich-results
   - Enter: https://vyndra.io
   - Should show Organization schema

## Monitoring & Maintenance

### Daily

- [ ] Check Sentry for errors
- [ ] Monitor email delivery rate (Resend dashboard)

### Weekly

- [ ] Review contact form submissions
- [ ] Check rate limiting logs (Upstash)
- [ ] Monitor performance (Vercel Analytics)

### Monthly

- [ ] Update dependencies
- [ ] Review security headers
- [ ] Run PageSpeed audit
- [ ] Check SSL certificate expiry

## Troubleshooting

### Issue: Emails Not Sending

**Symptoms**: Form submits but no email arrives

**Solutions**:
1. Check Resend API key is correct
2. Verify domain in Resend dashboard
3. Check Sentry for email errors
4. Look for emails in spam folder
5. Test with `onboarding@resend.dev` domain

### Issue: Rate Limiting Not Working

**Symptoms**: Can submit form unlimited times

**Solutions**:
1. Verify Upstash Redis credentials
2. Check Redis database is active
3. Ensure environment variables are set in Vercel
4. Check console for rate limit errors

### Issue: CSP Violations

**Symptoms**: Console shows CSP errors

**Solutions**:
1. Open `next.config.js`
2. Add violated domain to CSP:
   ```javascript
   "connect-src 'self' https://your-domain.com"
   ```
3. Redeploy

### Issue: Build Fails

**Symptoms**: Vercel deployment fails

**Solutions**:
1. Check build logs in Vercel
2. Run `yarn build` locally
3. Fix TypeScript errors
4. Clear cache: `rm -rf .next`
5. Redeploy

## Rollback Procedure

If deployment fails:

1. **Revert to Previous Deployment**
   ```bash
   vercel rollback
   ```

2. **Via Vercel Dashboard**
   - Go to Deployments
   - Find last working deployment
   - Click "..." → Promote to Production

## Support Contacts

- **Vercel Support**: support@vercel.com
- **Resend Support**: support@resend.com
- **Upstash Support**: support@upstash.com
- **Sentry Support**: support@sentry.io

## Cost Estimates

| Service | Free Tier | Paid Tier | Monthly Cost |
|---------|-----------|-----------|--------------|
| Vercel | 100GB bandwidth | Pro: Unlimited | $20/month |
| Resend | 100 emails/day | 10K emails/month | $20/month |
| Upstash | 10K commands/day | Pay-as-you-go | ~$0-10 |
| Sentry | 5K errors/month | 50K errors/month | $26/month |

**Total**: $0/month (free tiers) or $66/month (paid tiers)

---

## ✅ Ready to Deploy?

Before running `vercel --prod`, ensure:

- [ ] All environment variables configured
- [ ] Resend domain verified
- [ ] Upstash Redis database created
- [ ] Sentry project set up
- [ ] Local build passes: `yarn build`
- [ ] All tests pass
- [ ] README documentation complete

**When ready, run**:
```bash
vercel --prod
```

🎉 **Congratulations! Your site is live.**

---

Need help? Check [README.md](./README.md) or email hello@vyndra.io
