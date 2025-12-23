'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/Logo.png"
            alt="GYMADAY Logo"
            width={50}
            height={50}
            priority
          />
          <span className={styles.logoText}>GYMADAY</span>
        </Link>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

