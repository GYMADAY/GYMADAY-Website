'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    phnumber: '',
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          address: form.address,
          phnumber: form.phnumber,
          subject: form.subject,
          message: form.body,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(
          res.status === 503
            ? 'Contact form is temporarily unavailable. Please try again later or email us directly.'
            : (data.error || 'Something went wrong.')
        )
        return
      }

      setStatus('success')
      setForm({ email: '', name: '', address: '', phnumber: '', subject: '', body: '' })
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>Send us a message and we&apos;ll get back to you.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="name">Name *</label>
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
                <label className={styles.label} htmlFor="phnumber">Phone number</label>
                <input
                  id="phnumber"
                  name="phnumber"
                  type="tel"
                  value={form.phnumber}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+91 98765 43210"
                  disabled={status === 'sending'}
                />
              </div>
              <div className={styles.row}>
                <label className={styles.label} htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="City, State"
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
                  placeholder="What is this about?"
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
                <p className={styles.success}>Message sent. We&apos;ll reply to your email soon.</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>{errorMessage}</p>
              )}

              <button
                type="submit"
                className={`btn ${styles.submitBtn}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
