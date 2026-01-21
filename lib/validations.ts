import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'We need your name'),
  email: z.string().email("That doesn't look like an email"),
  message: z.string().min(10, 'Tell us something about your project'),
})

export type ContactFormData = z.infer<typeof contactSchema>
