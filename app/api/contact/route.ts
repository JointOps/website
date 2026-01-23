import DOMPurify from 'isomorphic-dompurify'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { contactSchema } from '@/lib/validations'

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
      name: DOMPurify.sanitize(validated.name, { ALLOWED_TAGS: [] }),
      email: DOMPurify.sanitize(validated.email, { ALLOWED_TAGS: [] }),
      message: DOMPurify.sanitize(validated.message, { ALLOWED_TAGS: [] }),
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
        from: 'onboarding@resend.dev', // Using Resend test domain (change after verifying vyndra.io)
        to: process.env.CONTACT_EMAIL || 'hello@vyndra.io',
        replyTo: sanitized.email,
        subject: `New Contact from ${sanitized.name}`,
        text: `
Name: ${sanitized.name}
Email: ${sanitized.email}

Message:
${sanitized.message}

---
Sent via VYNDRA Contact Form
        `.trim(),
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
  </div>

  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <h2 style="margin: 0 0 10px 0; font-size: 18px; color: #6366F1;">Contact Details</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${sanitized.name}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${sanitized.email}" style="color: #6366F1; text-decoration: none;">${sanitized.email}</a></p>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <h2 style="margin: 0 0 10px 0; font-size: 18px; color: #6366F1;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${sanitized.message.replace(/\n/g, '<br>')}</p>
    </div>
  </div>

  <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;">
    <p style="margin: 0;">Sent via VYNDRA Contact Form</p>
    <p style="margin: 5px 0 0 0;">
      <a href="https://vyndra.io" style="color: #6366F1; text-decoration: none;">vyndra.io</a>
    </p>
  </div>
</body>
</html>
        `.trim(),
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
