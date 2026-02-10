import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Without a verified domain, Resend only allows sending to the account owner's email.
// Set CONTACT_RECIPIENT_EMAIL to your Resend account email for now; after verifying a domain at resend.com/domains,
// set CONTACT_FROM_EMAIL to an email on that domain (e.g. noreply@yourdomain.com) and you can use any recipient.
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'hymaday.app@gmail.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'GYMADAY Contact <onboarding@resend.dev>'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please add RESEND_API_KEY to your environment.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { email, name, address, phnumber, subject, message } = body

    if (!email || !name || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: email, name, subject, and body are required.' },
        { status: 400 }
      )
    }

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Address:</strong> ${escapeHtml(address || '—')}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phnumber || '—')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <h3>Message</h3>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `

    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `[GYMADAY Contact] ${subject}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return String(text).replace(/[&<>"']/g, (c) => map[c] ?? c)
}
