'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function PartnerPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    gymName: '',
    gymAddress: '',
    city: '',
    subject: '',
    body: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(
          res.status === 503
            ? 'Form is temporarily unavailable. Please WhatsApp/call us at +91 98986 87477.'
            : (data.error || 'Something went wrong.')
        )
        return
      }

      setStatus('success')
      setForm({
        name: '',
        phone: '',
        email: '',
        gymName: '',
        gymAddress: '',
        city: '',
        subject: '',
        body: '',
      })
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  return (
    <div className={styles.partner}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Grow Your Gym with GYMADAY</h1>
          <p className={styles.subtitle}>Partner with us and connect with more fitness enthusiasts.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <p className={styles.introText}>
              Grow Your Gym with GYMADAY. Partner with us and connect with more fitness enthusiasts.
              Complete the form below or{' '}
              <a href="https://wa.me/919898687477" target="_blank" rel="noopener noreferrer" className={styles.phoneLink}>WhatsApp</a>
              {' '}/{' '}
              <a href="tel:+919898687477" className={styles.phoneLink}>call us at +91 98986 87477</a> to explore
              partnership opportunities.
            </p>
          </div>

          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="name">User Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your name"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+91 98765 43210"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="your@email.com"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="gymName">Gym Name *</label>
                <input
                  id="gymName"
                  name="gymName"
                  type="text"
                  required
                  value={form.gymName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your gym name"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="gymAddress">Gym Address *</label>
                <input
                  id="gymAddress"
                  name="gymAddress"
                  type="text"
                  required
                  value={form.gymAddress}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Full address"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="city">City *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="City"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Subject"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="body">Message *</label>
                <textarea
                  id="body"
                  name="body"
                  required
                  value={form.body}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Your message..."
                  rows={5}
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'success' && (
                <p className={styles.success}>Thank you! We&apos;ll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>{errorMessage}</p>
              )}

              <button
                type="submit"
                className={`btn ${styles.submitBtn}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
