import styles from './page.module.css'
import GymListing, { GymCardData } from './GymListing'

export const dynamic = 'force-dynamic'

type GymRow = {
  name: string | null
  address: string | null
  images: unknown
  city: string | null
  area: string | null
  opening_time: string | null
  closing_time: string | null
}

type GymResult = {
  gyms: GymRow[]
  error?: string
}

const selectColumns = 'name,address,images,city,area,opening_time,closing_time'

async function getGyms(): Promise<GymResult> {
  const supabaseUrl = process.env.SUPABASE_URL
  const anonKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !anonKey) {
    return {
      gyms: [],
      error: 'Supabase is not configured yet.',
    }
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/gyms?select=${selectColumns}&order=name.asc`,
      {
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
        },
        cache: 'no-store',
      }
    )

    if (!response.ok) {
      return {
        gyms: [],
        error: 'Unable to load gyms right now.',
      }
    }

    const gyms = (await response.json()) as GymRow[]
    return { gyms }
  } catch {
    return {
      gyms: [],
      error: 'Unable to connect to the gym list right now.',
    }
  }
}

function normalizeImages(value: unknown): string[] {
  if (!value) return []

  if (Array.isArray(value)) {
    return value.flatMap(normalizeImages)
  }

  if (typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).flatMap(normalizeImages)
  }

  if (typeof value !== 'string') return []

  const trimmed = value.trim()
  if (!trimmed) return []

  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      return normalizeImages(JSON.parse(trimmed))
    } catch {
      return []
    }
  }

  return trimmed
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean)
}

function getSafeImageUrl(value: unknown): string | null {
  const image = normalizeImages(value).find((url) => {
    return (
      (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('/')) &&
      !url.includes('"') &&
      !url.includes("'") &&
      !url.includes(')')
    )
  })

  return image || null
}

function formatTime(value: string | null): string | null {
  if (!value) return null

  const match = value.match(/^(\d{1,2}):(\d{2})/)
  if (!match) return value

  const hour = Number(match[1])
  const minute = match[2]
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12

  return `${displayHour}:${minute} ${period}`
}

function getLocation(gym: GymRow): string {
  return [gym.area, gym.city].filter(Boolean).join(', ')
}

export default async function GymPage() {
  const { gyms, error } = await getGyms()
  const gymCards: GymCardData[] = gyms.map((gym, index) => {
    return {
      id: `${gym.name || 'gym'}-${index}`,
      name: gym.name || 'Gym',
      address: gym.address,
      imageUrl: getSafeImageUrl(gym.images),
      location: getLocation(gym),
      openingTime: formatTime(gym.opening_time),
      closingTime: formatTime(gym.closing_time),
    }
  })

  return (
    <div className={styles.gymPage}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Available Gyms</p>
          <h1 className={styles.title}>Find Your Next Workout Spot</h1>
          <p className={styles.description}>
            Explore gyms available through <span className={styles.brandName}>GYMADAY</span> and choose the location that fits your day.
          </p>
        </div>
      </section>

      <section className={`section ${styles.listingSection}`}>
        <div className="container">
          {error ? (
            <div className={styles.stateBox}>
              <h2>Gym list unavailable</h2>
              <p>{error}</p>
            </div>
          ) : gymCards.length === 0 ? (
            <div className={styles.stateBox}>
              <h2>No gyms available yet</h2>
              <p>Check back soon for new locations.</p>
            </div>
          ) : (
            <GymListing gyms={gymCards} />
          )}
        </div>
      </section>
    </div>
  )
}
