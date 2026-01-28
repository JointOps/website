// Email templates for JointOps
// Designed for maximum email client compatibility

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
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New Message from ${data.name}</title>
  <!--[if mso]>
  <style type="text/css">
    table, td { border-collapse: collapse; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: #000000; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <!-- Wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Main Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; background-color: #0a0a0a; border-radius: 24px; overflow: hidden; border: 1px solid #1a1a1a;">

          <!-- Logo Header -->
          <tr>
            <td style="padding: 32px 40px 24px 40px; text-align: center; border-bottom: 1px solid #1a1a1a;">
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 32px; font-weight: 700; letter-spacing: -1px;">
                    <span style="color: #ffffff;">Joint</span><span style="color: #6366F1;">Ops</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gradient Banner -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="56" valign="top">
                    <div style="width: 48px; height: 48px; background-color: #6366F1; border-radius: 12px; text-align: center; line-height: 48px; font-size: 22px;">💬</div>
                  </td>
                  <td style="padding-left: 16px;" valign="middle">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 22px; font-weight: 700; color: #ffffff;">New Message</p>
                    <p style="margin: 4px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #666666;">${timestamp}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Info Card -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #111111; border-radius: 16px; border: 1px solid #1f1f1f;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 16px; border-bottom: 1px solid #1f1f1f;">
                          <p style="margin: 0 0 4px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 600; color: #666666; text-transform: uppercase; letter-spacing: 1px;">From</p>
                          <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; font-weight: 600; color: #ffffff;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0 0 4px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 600; color: #666666; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                          <a href="mailto:${data.email}" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; color: #6366F1; text-decoration: none; font-weight: 500;">${data.email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 600; color: #666666; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="4" style="background-color: #6366F1; border-radius: 4px;"></td>
                  <td style="padding: 20px 24px; background-color: #111111; border-radius: 0 12px 12px 0;">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; line-height: 1.7; color: #e0e0e0; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 40px 40px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #6366F1; border-radius: 12px;">
                    <a href="mailto:${data.email}?subject=Re: Your message to JointOps" style="display: inline-block; padding: 16px 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none;">Reply to ${data.name.split(' ')[0]} →</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #050505; border-top: 1px solid #1a1a1a;">
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #555555; text-align: center;">
                Received via <a href="https://jointops.dev" style="color: #6366F1; text-decoration: none;">jointops.dev</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim()
}

export function generateContactEmailText(data: ContactEmailData): string {
  return `
════════════════════════════════════════
         JOINTOPS - NEW MESSAGE
════════════════════════════════════════

FROM: ${data.name}
EMAIL: ${data.email}

────────────────────────────────────────
MESSAGE:
────────────────────────────────────────

${data.message}

════════════════════════════════════════
Received via jointops.dev
  `.trim()
}

export function generateSubscribeEmailHtml(data: SubscribeEmailData): string {
  const timestamp = data.timestamp || new Date().toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New Subscriber</title>
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: #000000; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <!-- Wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Main Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; background-color: #0a0a0a; border-radius: 24px; overflow: hidden; border: 1px solid #1a1a1a;">

          <!-- Logo Header -->
          <tr>
            <td style="padding: 32px 40px 24px 40px; text-align: center; border-bottom: 1px solid #1a1a1a;">
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 32px; font-weight: 700; letter-spacing: -1px;">
                    <span style="color: #ffffff;">Joint</span><span style="color: #6366F1;">Ops</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gradient Banner -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #06B6D4 0%, #8B5CF6 50%, #6366F1 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="56" valign="top">
                    <div style="width: 48px; height: 48px; background-color: #06B6D4; border-radius: 12px; text-align: center; line-height: 48px; font-size: 22px;">🎉</div>
                  </td>
                  <td style="padding-left: 16px;" valign="middle">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 22px; font-weight: 700; color: #ffffff;">New Subscriber!</p>
                    <p style="margin: 4px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #666666;">${timestamp}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subscriber Info Card -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #111111; border-radius: 16px; border: 1px solid #1f1f1f;">
                <tr>
                  <td style="padding: 28px 24px; text-align: center;">
                    <p style="margin: 0 0 8px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 600; color: #666666; text-transform: uppercase; letter-spacing: 1px;">New Email Subscriber</p>
                    <a href="mailto:${data.email}" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; color: #06B6D4; text-decoration: none; font-weight: 600;">${data.email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Buttons -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="48%" style="padding-right: 8px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="background-color: #6366F1; border-radius: 12px; text-align: center;">
                          <a href="mailto:${data.email}?subject=Welcome to JointOps!" style="display: block; padding: 14px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 600; color: #ffffff; text-decoration: none;">Send Welcome</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="48%" style="padding-left: 8px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="background-color: #111111; border: 1px solid #2a2a2a; border-radius: 12px; text-align: center;">
                          <a href="mailto:${data.email}" style="display: block; padding: 14px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 600; color: #06B6D4; text-decoration: none;">View Profile</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Stats Bar -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f0f0f; border-radius: 12px;">
                <tr>
                  <td style="padding: 16px 20px; text-align: center; border-right: 1px solid #1a1a1a;" width="50%">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; color: #555555; text-transform: uppercase; letter-spacing: 0.5px;">Source</p>
                    <p style="margin: 4px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #ffffff;">Website</p>
                  </td>
                  <td style="padding: 16px 20px; text-align: center;" width="50%">
                    <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; color: #555555; text-transform: uppercase; letter-spacing: 0.5px;">Type</p>
                    <p style="margin: 4px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #ffffff;">Updates</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #050505; border-top: 1px solid #1a1a1a;">
              <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #555555; text-align: center;">
                Subscribed via <a href="https://jointops.dev" style="color: #06B6D4; text-decoration: none;">jointops.dev</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim()
}

export function generateSubscribeEmailText(data: SubscribeEmailData): string {
  return `
════════════════════════════════════════
      JOINTOPS - NEW SUBSCRIBER 🎉
════════════════════════════════════════

EMAIL: ${data.email}

Someone new wants to stay updated with
JointOps projects and news!

════════════════════════════════════════
Subscribed via jointops.dev
  `.trim()
}
