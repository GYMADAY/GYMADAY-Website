import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.animatedIcons}>
          <div className={styles.icon1}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M480 32H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM160 32H32C14.33 32 0 46.33 0 64v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM480 320H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM160 320H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.icon2}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="200" fill="currentColor"/>
              <circle cx="256" cy="256" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="20"/>
            </svg>
          </div>
          <div className={styles.icon3}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M480 32H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM160 32H32C14.33 32 0 46.33 0 64v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM480 320H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM160 320H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.icon4}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="200" fill="currentColor"/>
              <circle cx="256" cy="256" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="20"/>
            </svg>
          </div>
          <div className={styles.icon5}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M480 32H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM160 32H32C14.33 32 0 46.33 0 64v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM480 320H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM160 320H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.icon6}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="200" fill="currentColor"/>
              <circle cx="256" cy="256" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="20"/>
            </svg>
          </div>
          <div className={styles.icon7}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M480 32H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM160 32H32C14.33 32 0 46.33 0 64v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM480 320H352c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM160 320H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.icon8}>
            <svg className={styles.gymIcon} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="200" fill="currentColor"/>
              <circle cx="256" cy="256" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="20"/>
            </svg>
          </div>
        </div>
        <div className="container">
          <div className={styles.heroGrid}>
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
            <div className={styles.heroImage}>
              <Image 
                src="/thumbnail.png" 
                alt="Fitness workout" 
                width={600} 
                height={600}
                className={styles.heroImg}
                priority
              />
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
              <p>Pay only for what you use - no monthly fees or contracts</p>
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

    </div>
  )
}

