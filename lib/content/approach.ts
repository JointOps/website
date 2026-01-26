export interface ApproachStep {
  number: number
  title: string
  description: string
}

export const approachSteps: ApproachStep[] = [
  {
    number: 1,
    title: 'We Talk',
    description:
      "Tell us what you're building and why. We'll ask questions your last team didn't think of. No commitment, just a real conversation about whether we're the right fit.",
  },
  {
    number: 2,
    title: 'We Plan',
    description:
      'Before any code gets written, we map out the architecture, identify potential issues, and make sure we\'re all looking at the same finish line. No "we\'ll figure it out as we go."',
  },
  {
    number: 3,
    title: 'We Build',
    description:
      "Daily progress you can actually see. Regular check-ins. Code that gets reviewed before it ships. We move fast, but we don't cut corners — we've just done this enough to know the shortcuts that actually work.",
  },
  {
    number: 4,
    title: 'We Ship',
    description:
      'When we say it\'s done, it\'s done. Deployed, documented, and ready for real users. Not "works on my machine." Not "almost there." Actually done.',
  },
  {
    number: 5,
    title: 'We Stick Around',
    description:
      'Launch isn\'t the end. We\'re here for the bugs you find, the features you realize you need, and the "hey, is this supposed to do that?" messages. We don\'t disappear after the invoice clears.',
  },
]
