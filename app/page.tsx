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

      {/* Download App Section */}
      <section className={`section ${styles.downloadSection}`}>
        <div className="container">
          <div className={styles.downloadGrid}>
            <div className={styles.mobileImageContainer}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneScreen}>
                  <Image 
                    src="/mobile_screen.jpg" 
                    alt="GYMADAY Mobile App" 
                    width={400} 
                    height={800}
                    className={styles.mobileImage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.downloadContent}>
              <h2 className={styles.downloadTitle}>Download Our App</h2>
              <p className={styles.downloadDescription}>
                Get the full GYMADAY experience on your mobile device. Book gyms, 
                manage your sessions, and stay fit on the go!
              </p>
              <div className={styles.downloadButtonsContainer}>
                <a 
                  href="https://apps.apple.com/app/gymaday" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  <svg className={styles.appStoreIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className={styles.downloadButtonText}>
                    <span className={styles.downloadButtonLabel}>Download on the</span>
                    <span className={styles.downloadButtonStore}>App Store</span>
                  </div>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.gymaday" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  <svg className={styles.playStoreIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className={styles.downloadButtonText}>
                    <span className={styles.downloadButtonLabel}>Get it on</span>
                    <span className={styles.downloadButtonStore}>Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

