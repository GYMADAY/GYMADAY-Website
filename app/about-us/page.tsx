import styles from './page.module.css'

export default function AboutUs() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>About Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Who We Are</h2>
              <p>
                GYMADAY is a revolutionary fitness platform that connects gym enthusiasts 
                with premium fitness facilities across India. We believe that fitness should 
                be flexible, accessible, and tailored to your lifestyle.
              </p>
              <p>
                Founded in 2025, we started with a simple idea: make gym access as easy as 
                booking a ride. Today, we partner with hundreds of gyms to give you the 
                freedom to work out anywhere, anytime.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Our Mission</h2>
              <div className={styles.missionGrid}>
                <div className={styles.missionItem}>
                  <h3>Accessibility</h3>
                  <p>
                    Making fitness accessible to everyone by breaking down barriers and 
                    providing flexible gym access options.
                  </p>
                </div>
                <div className={styles.missionItem}>
                  <h3>Health & Wellness</h3>
                  <p>
                    Promoting a healthier lifestyle by making it easier to maintain 
                    consistent fitness routines.
                  </p>
                </div>
                <div className={styles.missionItem}>
                  <h3>Community</h3>
                  <p>
                    Building a vibrant community of fitness enthusiasts who support and 
                    inspire each other.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>What We Offer</h2>
              <ul className={styles.offerList}>
                <li>Pay-per-visit access to premium gyms</li>
                <li>No long-term commitments or contracts</li>
                <li>Flexible booking system with QR code entry</li>
                <li>Secure wallet system for quick payments</li>
                <li>Wide network of partner gyms</li>
                <li>Real-time booking and instant confirmation</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Our Vision</h2>
              <p>
                We envision a future where fitness is not limited by location, time, or 
                commitment. GYMADAY aims to be India's largest fitness network, empowering 
                millions to take control of their health journey.
              </p>
              <p>
                Through continuous innovation and strategic partnerships, we're building an 
                ecosystem where every workout counts, every gym is accessible, and every 
                fitness goal is achievable.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Get In Touch</h2>
              <p>Have questions or suggestions? We'd love to hear from you!</p>
              <a href="mailto:gymaday.app@gmail.com" className={styles.emailLink}>
                gymaday.app@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

