import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

import { generateSubscribeEmailHtml, generateSubscribeEmailText } from '@/lib/email-templates'

const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
})

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, error: 'Content-Type must be application/json' },
        { status: 415 }
      )
    }

    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON' },
        { status: 400 }
      )
    }

    const validated = subscribeSchema.parse(body)

    if (!resend) {
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 [DEV] New subscriber:', validated.email)
        return NextResponse.json({ success: true })
      }
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: 'JointOps <hello@jointops.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@jointops.dev',
      subject: '🎉 New Subscriber on JointOps',
      text: generateSubscribeEmailText({ email: validated.email }),
      html: generateSubscribeEmailHtml({ email: validated.email }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error && typeof error === 'object' && 'issues' in error) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    console.error('Subscribe error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
