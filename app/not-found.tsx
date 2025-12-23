import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorMessage}>
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn">Go to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

