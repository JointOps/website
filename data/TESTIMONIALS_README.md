# Joint Ops Testimonials

## Overview
- **Total testimonials**: 69
- **Source**: https://www.jointops.dev/api/reviews
- **Average rating**: 5 stars
- **Countries**: 20+ countries (US, GB, DE, PK, etc.)
- **Platform**: Primarily Fiverr reviews

## Processing Applied

All testimonials have been automatically rephrased to reference **Joint Ops** as a team/company instead of individual names:

### Replacements Made:
- "Joint Ops" → "Joint Ops"
- "the seller" → "the team"
- "this guy" → "this team"
- "this developer" → "this team"
- "he/him/his" → "they/them/their"
- "he is" → "they are"
- "he was" → "they were"
- Personal references → Team/company references

### Data Structure

Each testimonial includes:
```typescript
{
  id: number
  review: string              // Full review text (rephrased)
  by: string                 // Reviewer username
  by_image: string | null    // Profile picture URL
  country: string            // Country code (US, GB, etc.)
  ratings: number            // 1-5 stars
  date: string              // Relative date
  highlights: string[]       // Key phrases
  medium: {                 // Platform info
    id: number
    label: string
    icon: string
  }
  video: string | null       // Video review URL
  thumbnail: string | null   // Video thumbnail
  priority: number          // Sort priority
}
```

## Usage

Import in your Next.js components:

```typescript
import testimonials from '@/data/testimonials.json'
import type { Testimonial } from '@/types/testimonials'

// Get top 10 testimonials by priority
const topTestimonials = testimonials
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 10)
```

## Statistics

- 100% are 5-star reviews
- Reviewers from 20+ countries
- Mix of short and detailed reviews
- Some include video testimonials
- All professionally rephrased for company branding
