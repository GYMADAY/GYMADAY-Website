'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './DownloadPopup.module.css'

export default function DownloadPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if popup should be shown
    const checkAndShowPopup = () => {
      const lastShown = localStorage.getItem('downloadPopupLastShown')
      const now = Date.now()
      const twoMinutes = 2 * 60 * 1000 // 2 minutes in milliseconds

      // Show if never shown before or if 2 minutes have passed
      if (!lastShown || (now - parseInt(lastShown)) >= twoMinutes) {
        setIsVisible(true)
        localStorage.setItem('downloadPopupLastShown', now.toString())
      }
    }

    // Check immediately
    checkAndShowPopup()

    // Set up interval to check every 2 minutes
    const interval = setInterval(checkAndShowPopup, 2 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleDownloadClick = (platform: string) => {
    // Track download click
    localStorage.setItem('downloadPopupClicked', Date.now().toString())
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className={styles.popupContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/Logo.png"
              alt="GYMADAY Logo"
              width={80}
              height={80}
              className={styles.logo}
            />
          </div>
          
          <h2 className={styles.popupTitle}>Download GYMADAY App</h2>
          <p className={styles.popupTagline}>Why Commit? Just Gym it.</p>
          <p className={styles.popupMessage}>
            For a better experience and to book gyms instantly, download our mobile app!
          </p>
          
          <div className={styles.downloadButtons}>
            <a 
              href="https://apps.apple.com/app/gymaday" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.downloadButton}
              onClick={() => handleDownloadClick('ios')}
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
              onClick={() => handleDownloadClick('android')}
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
  )
}

