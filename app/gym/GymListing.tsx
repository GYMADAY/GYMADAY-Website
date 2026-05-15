'use client'

import { useState } from 'react'
import styles from './page.module.css'

const appStoreUrl = 'https://apps.apple.com/in/app/gymaday/id6768573496'
const playStoreUrl = 'https://play.google.com/store/apps/details?id=app.gymaday.gymaday'

export type GymCardData = {
  id: string
  name: string
  address: string | null
  imageUrl: string | null
  location: string
  openingTime: string | null
  closingTime: string | null
}

type GymListingProps = {
  gyms: GymCardData[]
}

export default function GymListing({ gyms }: GymListingProps) {
  const [selectedGym, setSelectedGym] = useState<GymCardData | null>(null)

  return (
    <>
      <div className={styles.gymGrid}>
        {gyms.map((gym) => (
          <button
            type="button"
            className={styles.gymCard}
            key={gym.id}
            onClick={() => setSelectedGym(gym)}
            aria-label={`Open app download options for ${gym.name}`}
          >
            <div
              className={`${styles.gymImage} ${!gym.imageUrl ? styles.gymImageFallback : ''}`}
              style={gym.imageUrl ? { backgroundImage: `url("${gym.imageUrl}")` } : undefined}
              aria-hidden="true"
            >
              {!gym.imageUrl && <span>GYMADAY</span>}
            </div>
            <div className={styles.gymContent}>
              <div>
                <h2>{gym.name}</h2>
                {gym.location && <p className={styles.location}>{gym.location}</p>}
              </div>

              {gym.address && <p className={styles.address}>{gym.address}</p>}

              {(gym.openingTime || gym.closingTime) && (
                <div className={styles.timeRow}>
                  <span>Hours</span>
                  <strong>
                    {gym.openingTime || 'Open'} - {gym.closingTime || 'Close'}
                  </strong>
                </div>
              )}

              <span className={styles.cardAction}>Book in app</span>
            </div>
          </button>
        ))}
      </div>

      {selectedGym && (
        <div className={styles.modalOverlay} onClick={() => setSelectedGym(null)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gym-download-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedGym(null)}
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <p className={styles.modalEyebrow}>Continue in the app</p>
            <h2 id="gym-download-title" className={styles.modalTitle}>
              Book {selectedGym.name}
            </h2>
            <p className={styles.modalText}>
              Download <span className={styles.brandName}>GYMADAY</span> to view availability and book this gym instantly.
            </p>

            <div className={styles.downloadButtons}>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadButton}
              >
                <svg className={styles.storeIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span>
                  <small>Download on the</small>
                  App Store
                </span>
              </a>

              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadButton}
              >
                <svg className={styles.storeIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>
                  <small>Get it on</small>
                  Google Play
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
