import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>GYMADAY</h3>
            <p className={styles.tagline}>Why Commit? Just Gym it.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/#contact">Contact</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <a href="mailto:gymaday.app@gmail.com">gymaday.app@gmail.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2025 GYMADAY. All rights reserved.</p>
          <p>Made in India</p>
        </div>
      </div>
    </footer>
  )
}

