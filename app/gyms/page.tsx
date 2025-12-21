import styles from './page.module.css'

export default function Gyms() {
  // Static gym data for design purposes
  const gyms = [
    {
      id: 1,
      name: 'FitZone Premium',
      location: 'Mumbai, Maharashtra',
      facilities: ['Cardio Equipment', 'Weight Training', 'Yoga Studio', 'Locker Room'],
      rating: '4.8',
    },
    {
      id: 2,
      name: 'PowerHouse Gym',
      location: 'Delhi, NCR',
      facilities: ['Full Gym', 'Swimming Pool', 'Spa', 'Café'],
      rating: '4.9',
    },
    {
      id: 3,
      name: 'Elite Fitness Center',
      location: 'Bangalore, Karnataka',
      facilities: ['CrossFit Zone', 'Cardio', 'Personal Training', 'Nutrition Counseling'],
      rating: '4.7',
    },
    {
      id: 4,
      name: 'FlexFit Studio',
      location: 'Pune, Maharashtra',
      facilities: ['Group Classes', 'Pilates', 'Dance Studio', 'Steam Room'],
      rating: '4.6',
    },
    {
      id: 5,
      name: 'Iron Paradise',
      location: 'Hyderabad, Telangana',
      facilities: ['Heavy Lifting', 'Cardio Zone', 'Sauna', 'Protein Bar'],
      rating: '4.8',
    },
    {
      id: 6,
      name: 'Zenith Wellness',
      location: 'Chennai, Tamil Nadu',
      facilities: ['Yoga', 'Meditation', 'Gym Equipment', 'Wellness Center'],
      rating: '4.7',
    },
  ]

  return (
    <div className={styles.gyms}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Our Partner Gyms</h1>
          <p className={styles.subtitle}>
            Discover premium fitness facilities across India. 
            Browse our network of partner gyms and find the perfect workout space for you.
          </p>
          <p className={styles.note}>
            <strong>Note:</strong> Booking functionality will be available in Phase 2.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.gymsGrid}>
            {gyms.map((gym) => (
              <div key={gym.id} className={styles.gymCard}>
                <div className={styles.gymHeader}>
                  <h2 className={styles.gymName}>{gym.name}</h2>
                  <div className={styles.rating}>
                    <span>Rating: {gym.rating}</span>
                  </div>
                </div>
                <p className={styles.gymLocation}>{gym.location}</p>
                <div className={styles.facilities}>
                  <h3>Facilities:</h3>
                  <ul>
                    {gym.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.gymFooter}>
                  <button className={styles.comingSoonBtn} disabled>
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

