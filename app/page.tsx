import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>GYMADAY</h1>
            <p className={styles.heroTagline}>Why Commit? Just Gym it.</p>
            <p className={styles.heroDescription}>
              A revolutionary fitness platform that connects gym enthusiasts with premium 
              fitness facilities across India. No commitments, no contracts-just flexible 
              gym access whenever you need it.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/gyms" className="btn">Explore Gyms</Link>
              <Link href="/about-us" className={`${styles.btnSecondary} btn`}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section className={`section ${styles.concept}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Find Gyms</h3>
              <p>Browse our network of premium partner gyms across India</p>
            </div>
            <div className={styles.feature}>
              <h3>Book Instantly</h3>
              <p>Reserve your gym session with just a few taps</p>
            </div>
            <div className={styles.feature}>
              <h3>Pay Per Visit</h3>
              <p>No subscriptions or long-term commitments required</p>
            </div>
            <div className={styles.feature}>
              <h3>Work Out</h3>
              <p>Access premium facilities with flexible timing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`section ${styles.benefits}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose GYMADAY?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Flexibility</h3>
              <p>Work out at different gyms without being tied to one location</p>
            </div>
            <div className={styles.benefit}>
              <h3>No Commitments</h3>
              <p>Pay only for what you use—no monthly fees or contracts</p>
            </div>
            <div className={styles.benefit}>
              <h3>Premium Facilities</h3>
              <p>Access top-quality gyms with modern equipment</p>
            </div>
            <div className={styles.benefit}>
              <h3>Convenience</h3>
              <p>Book and access gyms on your schedule, not theirs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <p>Have questions or suggestions? We'd love to hear from you!</p>
            <a href="mailto:gymaday.app@gmail.com" className={styles.emailLink}>
              gymaday.app@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

