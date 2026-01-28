// Email templates for JointOps
// Dark theme, modern design, matching brand aesthetics

const baseStyles = `
  body {
    margin: 0;
    padding: 0;
    background-color: #0a0a0a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #0a0a0a;
  }
`

interface ContactEmailData {
  name: string
  email: string
  message: string
  timestamp?: string
}

interface SubscribeEmailData {
  email: string
  timestamp?: string
}

export function generateContactEmailHtml(data: ContactEmailData): string {
  const timestamp = data.timestamp || new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <title>New Contact Message</title>
  <style>${baseStyles}</style>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #0a0a0a;">

    <!-- Header with Logo -->
    <div style="text-align: center; margin-bottom: 32px;">
      <div style="display: inline-block; font-family: 'Space Grotesk', -apple-system, sans-serif; font-size: 28px; font-weight: 700; letter-spacing: -1px;">
        <span style="color: #ffffff;">Joint</span><span style="background: linear-gradient(90deg, #6366F1, #A855F7, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Ops</span>
      </div>
    </div>

    <!-- Main Card -->
    <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden;">

      <!-- Card Header -->
      <div style="background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.1) 100%); padding: 24px 28px; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <div style="display: flex; align-items: center;">
          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
            <span style="font-size: 24px;">💬</span>
          </div>
          <div>
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">New Contact Message</h1>
            <p style="margin: 4px 0 0 0; color: rgba(255,255,255,0.5); font-size: 13px;">${timestamp}</p>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div style="padding: 28px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; vertical-align: top;">
                <span style="color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">From</span>
              </td>
              <td style="padding: 8px 0; vertical-align: top; text-align: right;">
                <span style="color: #ffffff; font-size: 15px; font-weight: 500;">${data.name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; vertical-align: top;">
                <span style="color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
              </td>
              <td style="padding: 8px 0; vertical-align: top; text-align: right;">
                <a href="mailto:${data.email}" style="color: #6366F1; font-size: 15px; text-decoration: none; font-weight: 500;">${data.email}</a>
              </td>
            </tr>
          </table>
        </div>

        <!-- Message -->
        <div style="margin-bottom: 24px;">
          <p style="color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Message</p>
          <div style="background: rgba(99,102,241,0.05); border-left: 3px solid #6366F1; padding: 16px 20px; border-radius: 0 8px 8px 0;">
            <p style="color: rgba(255,255,255,0.9); font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>

        <!-- Reply Button -->
        <div style="text-align: center;">
          <a href="mailto:${data.email}?subject=Re: Your message to JointOps" style="display: inline-block; background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">
            Reply to ${data.name.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 32px; padding: 20px;">
      <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">
        Received via <a href="https://jointops.dev" style="color: rgba(255,255,255,0.5); text-decoration: none;">jointops.dev</a> contact form
      </p>
    </div>

  </div>
</body>
</html>
  `.trim()
}

export function generateContactEmailText(data: ContactEmailData): string {
  return `
NEW CONTACT MESSAGE
━━━━━━━━━━━━━━━━━━━

From: ${data.name}
Email: ${data.email}

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━
Received via jointops.dev contact form
  `.trim()
}

export function generateSubscribeEmailHtml(data: SubscribeEmailData): string {
  const timestamp = data.timestamp || new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <title>New Subscriber</title>
  <style>${baseStyles}</style>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #0a0a0a;">

    <!-- Header with Logo -->
    <div style="text-align: center; margin-bottom: 32px;">
      <div style="display: inline-block; font-family: 'Space Grotesk', -apple-system, sans-serif; font-size: 28px; font-weight: 700; letter-spacing: -1px;">
        <span style="color: #ffffff;">Joint</span><span style="background: linear-gradient(90deg, #6366F1, #A855F7, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Ops</span>
      </div>
    </div>

    <!-- Main Card -->
    <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden;">

      <!-- Card Header -->
      <div style="background: linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(99,102,241,0.1) 100%); padding: 24px 28px; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <div style="display: flex; align-items: center;">
          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
            <span style="font-size: 24px;">🎉</span>
          </div>
          <div>
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">New Subscriber</h1>
            <p style="margin: 4px 0 0 0; color: rgba(255,255,255,0.5); font-size: 13px;">${timestamp}</p>
          </div>
        </div>
      </div>

      <!-- Subscriber Info -->
      <div style="padding: 28px;">
        <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 0 0 20px 0; line-height: 1.6;">
          Someone new wants to stay updated with JointOps projects and news.
        </p>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; text-align: center;">
          <p style="color: rgba(255,255,255,0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Email Address</p>
          <a href="mailto:${data.email}" style="color: #22D3EE; font-size: 18px; text-decoration: none; font-weight: 600;">${data.email}</a>
        </div>

        <!-- Quick Stats -->
        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06);">
          <p style="color: rgba(255,255,255,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Quick Actions</p>
          <table style="width: 100%;" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 6px 8px 6px 0;">
                <a href="mailto:${data.email}?subject=Welcome to JointOps!" style="display: block; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); color: #6366F1; text-decoration: none; padding: 12px 16px; border-radius: 8px; font-size: 13px; font-weight: 500; text-align: center;">
                  Send Welcome Email
                </a>
              </td>
              <td style="padding: 6px 0 6px 8px;">
                <a href="mailto:${data.email}" style="display: block; background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.2); color: #22D3EE; text-decoration: none; padding: 12px 16px; border-radius: 8px; font-size: 13px; font-weight: 500; text-align: center;">
                  Add to List
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 32px; padding: 20px;">
      <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">
        Subscribed via <a href="https://jointops.dev" style="color: rgba(255,255,255,0.5); text-decoration: none;">jointops.dev</a>
      </p>
    </div>

  </div>
</body>
</html>
  `.trim()
}

export function generateSubscribeEmailText(data: SubscribeEmailData): string {
  return `
NEW SUBSCRIBER 🎉
━━━━━━━━━━━━━━━━━━━

Email: ${data.email}

Someone new wants to stay updated with JointOps!

━━━━━━━━━━━━━━━━━━━
Subscribed via jointops.dev
  `.trim()
}
