import styles from './page.module.css'

export default function TermsConditions() {
  return (
    <div className={styles.terms}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: November 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.section}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using GYMADAY, you accept and agree to be bound by the 
                terms and provisions of this agreement. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </div>

            <div className={styles.section}>
              <h2>2. Service Description</h2>
              <p>
                GYMADAY provides a platform for booking gym sessions and managing fitness 
                activities. We connect users with partner gyms to facilitate convenient 
                bookings and payments.
              </p>
            </div>

            <div className={styles.section}>
              <h2>3. User Accounts</h2>
              <p>To use our services, you must:</p>
              <ul>
                <li>Be at least 18 years of age</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>4. Booking and Payments</h2>
              <p>When you book a gym session:</p>
              <ul>
                <li>Payment is processed immediately upon booking</li>
                <li>Bookings are subject to gym availability</li>
                <li>QR codes for entry are generated after successful payment</li>
                <li>Cancellation policies vary by gym partner</li>
                <li>Refunds are processed according to gym policies</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>5. Wallet and Transactions</h2>
              <p>Your GYMADAY wallet:</p>
              <ul>
                <li>Can be funded through approved payment methods</li>
                <li>Is used for gym bookings and payments</li>
                <li>Maintains a transaction history for your records</li>
                <li>Balance does not earn interest</li>
                <li>Can be withdrawn subject to verification</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>6. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the service for any illegal purposes</li>
                <li>Share your QR codes with unauthorized persons</li>
                <li>Attempt to manipulate or defraud the system</li>
                <li>Harass or abuse gym staff or other users</li>
                <li>Interfere with the proper functioning of the platform</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>7. Gym Partner Responsibilities</h2>
              <p>While we facilitate bookings, partner gyms are responsible for:</p>
              <ul>
                <li>Providing the agreed-upon facilities and services</li>
                <li>Maintaining safe and clean environments</li>
                <li>Honoring valid bookings and QR codes</li>
                <li>Complying with local health and safety regulations</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>8. Liability and Disclaimers</h2>
              <p>GYMADAY is a booking platform. We are not responsible for:</p>
              <ul>
                <li>Injuries or accidents at gym facilities</li>
                <li>Quality of gym equipment or services</li>
                <li>Disputes between users and gym partners</li>
                <li>Loss or theft of personal belongings at gyms</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>9. Cancellations and Refunds</h2>
              <p>
                Cancellation policies are determined by individual gym partners. Refunds, 
                if applicable, are processed to your GYMADAY wallet within 5-7 business days.
              </p>
            </div>

            <div className={styles.section}>
              <h2>10. Intellectual Property</h2>
              <p>
                All content, features, and functionality of GYMADAY are owned by us and 
                protected by intellectual property laws. You may not copy, modify, or 
                distribute our content without permission.
              </p>
            </div>

            <div className={styles.section}>
              <h2>11. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account if you violate 
                these terms. You may also delete your account at any time through the 
                Privacy & Security settings.
              </p>
            </div>

            <div className={styles.section}>
              <h2>12. Changes to Terms</h2>
              <p>
                We may modify these terms at any time. Continued use of our services after 
                changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className={styles.section}>
              <h2>13. Contact Information</h2>
              <p>
                For questions about these Terms & Conditions, please contact us through the 
                Help & Support section in your profile or via the GYMADAY app.
              </p>
            </div>

            <div className={styles.agreement}>
              <p>
                <strong>
                  By using GYMADAY, you acknowledge that you have read, understood, and 
                  agree to be bound by these Terms & Conditions.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

