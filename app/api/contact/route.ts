import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { generateContactEmailHtml, generateContactEmailText } from '@/lib/email-templates'
import { contactSchema } from '@/lib/validations'

// Simple server-side text sanitization (strips HTML tags)
function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim()
}

// Initialize email service
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    // 1. Validate Content-Type header
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, error: 'Content-Type must be application/json' },
        { status: 415 }
      )
    }

    // 2. Parse and validate JSON body with error handling
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    // 3. Validate against schema
    const validated = contactSchema.parse(body)

    // 4. Sanitize inputs to prevent XSS
    const sanitized = {
      name: sanitizeText(validated.name),
      email: sanitizeText(validated.email),
      message: sanitizeText(validated.message),
    }

    // 5. Send email
    if (!resend) {
      // In development/staging without email configured
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 [DEV] Contact form submission (email not sent):', {
          from: sanitized.email,
          name: sanitized.name,
          messageLength: sanitized.message.length,
        })
        return NextResponse.json({ success: true })
      }

      // In production, this is an error
      console.error('❌ Resend API key not configured')
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      )
    }

    try {
      await resend.emails.send({
        from: 'JointOps <hello@jointops.dev>',
        to: process.env.CONTACT_EMAIL || 'hello@jointops.dev',
        replyTo: sanitized.email,
        subject: `💬 New Contact from ${sanitized.name}`,
        text: generateContactEmailText(sanitized),
        html: generateContactEmailHtml(sanitized),
      })

      // Success - only log success indicator, not sensitive data
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ [DEV] Contact email sent successfully')
      }

      return NextResponse.json({ success: true })
    } catch (emailError) {
      console.error('❌ Failed to send email:', emailError)
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    // Validation errors from Zod
    if (error && typeof error === 'object' && 'issues' in error) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: (error as { issues: unknown }).issues,
        },
        { status: 400 }
      )
    }

    // Unexpected errors
    console.error('❌ Unexpected error in contact API:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
