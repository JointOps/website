# Joint Ops Testimonials

## Overview
- **Total testimonials**: 69
- **Average rating**: 5 stars
- **Countries**: 20+ countries (US, GB, DE, PK, etc.)
- **Platform**: Primarily Fiverr reviews

## Data Structure

Each testimonial includes:
```typescript
{
  id: number
  review: string              // Full review text
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
