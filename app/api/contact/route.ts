import { NextResponse } from 'next/server'

import { contactSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    console.log('Contact form submission:', validated)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form validation error:', error)
    return NextResponse.json({ success: false, error: 'Invalid form data' }, { status: 400 })
  }
}
