import styles from './page.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.policy}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: November 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.section}>
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you create an account, 
                book gym sessions, or use our services. This includes:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Payment information</li>
                <li>Gym booking history</li>
                <li>Wallet transaction records</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process your gym bookings and payments</li>
                <li>Send you booking confirmations and reminders</li>
                <li>Respond to your comments and questions</li>
                <li>Detect, prevent, and address fraud and security issues</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul>
                <li>With gym partners to facilitate your bookings</li>
                <li>With payment processors to handle transactions</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>4. Data Security</h2>
              <p>
                We take reasonable measures to protect your information from unauthorized 
                access, alteration, disclosure, or destruction. We use encryption for 
                sensitive data and regularly review our security practices.
              </p>
            </div>

            <div className={styles.section}>
              <h2>5. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of promotional communications</li>
                <li>Download a copy of your data</li>
                <li>Control your privacy settings</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>6. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as 
                needed to provide you services. You may request deletion of your account 
                at any time through the Privacy & Security settings.
              </p>
            </div>

            <div className={styles.section}>
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not intended for users under the age of 18. We do not 
                knowingly collect personal information from children under 18.
              </p>
            </div>

            <div className={styles.section}>
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you 
                of any changes by posting the new policy on this page and updating the 
                "Last Updated" date.
              </p>
            </div>

            <div className={styles.section}>
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us 
                through the Help & Support section in your profile or via the GYMADAY app.
              </p>
            </div>

            <div className={styles.agreement}>
              <p>
                <strong>By using GYMADAY, you agree to this Privacy Policy.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

