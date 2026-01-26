export interface Differentiator {
  id: string
  title: string
  description: string
}

export const differentiators: Differentiator[] = [
  {
    id: 'experience',
    title: "We've Done This Before",
    description: `100+ projects. Clients across 30+ countries. 5.0 rating.

This isn't our first app. Or our tenth. We've seen what goes wrong and we know how to avoid it. Your project benefits from everything we've learned building the ones before it.`,
  },
  {
    id: 'communication',
    title: 'We Talk Like Humans',
    description: `No jargon dumps. No disappearing for weeks. No "per my last email."

You'll actually know what's happening with your project. We explain things in plain English, respond within hours (not days), and flag problems before they become disasters.`,
  },
  {
    id: 'delivery',
    title: 'We Finish What We Start',
    description: `The graveyard of half-built apps is full of projects that "just needed a few more weeks." Not ours.

When we commit to a timeline, we hit it. When something breaks, we fix it. When we say we'll do something, we do it. Radical concept, we know.`,
  },
  {
    id: 'pricing',
    title: 'Fair Pricing, No Surprises',
    description: `No "that'll be extra." No scope creep invoices. No nickel-and-diming.

We agree on a price, we stick to it. If something changes, we talk about it first. You'll never get a bill you didn't expect.`,
  },
]
