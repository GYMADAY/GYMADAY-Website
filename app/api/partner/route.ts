import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const PARTNER_RECIPIENT = 'gymaday.app@gmail.com'
const FROM_EMAIL = process.env.PARTNER_FROM_EMAIL || 'GYMADAY Partner <onboarding@resend.dev>'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.PARTNER_RESEND_API_KEY || process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Add PARTNER_RESEND_API_KEY or RESEND_API_KEY.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const {
      name,
      phone,
      email,
      gymName,
      gymAddress,
      city,
      subject,
      body: message,
    } = body

    if (!name || !phone || !email || !gymName || !gymAddress || !city || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const html = `
      <h2>New partnership / business form submission</h2>
      <p><strong>User Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Gym Name:</strong> ${escapeHtml(gymName)}</p>
      <p><strong>Gym Address:</strong> ${escapeHtml(gymAddress)}</p>
      <p><strong>City:</strong> ${escapeHtml(city)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <h3>Message</h3>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `

    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [PARTNER_RECIPIENT],
      replyTo: email,
      subject: `[GYMADAY Partner] ${subject}`,
      html,
    })

    if (error) {
      console.error('Resend partner error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Partner API error:', err)
    return NextResponse.json(
      { error: 'Failed to send. Please try again.' },
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
