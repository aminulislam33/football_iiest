'use client'

import Image from 'next/image'
import styles from './HeroSection.module.css'

const stats = [
  { num: '4+', label: 'Tournaments' },
  { num: '8+',  label: 'Teams' },
  { num: '100+', label: 'Players' },
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* ── Background Image ── */}
      <div className={styles.bgWrap}>
        <Image
          src="https://res.cloudinary.com/dwr8472qb/image/upload/v1774287762/IMG-20250825-WA0138_lrm4eg.jpg"
          alt="The Oval football ground"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={styles.bgImage}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* ── Overlay layers ── */}
      <div className={styles.overlayBottom} />
      <div className={styles.overlayLeft} />
      <div className={styles.overlayTint} />

      {/* ── Top accent stripe ── */}
      <div className={styles.stripe} />

      {/* ── Noise grain texture ── */}
      <div className={styles.grain} />

      {/* ── Main content ── */}
      <div className={styles.content}>

        <div className={styles.tag}>
          <span className={styles.tagLine} />
          <span className={styles.tagText}>College Football · Est. 1856</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineSolid}>Born On</span>
          <span className={styles.headlineOutline}>The Oval</span>
        </h1>

        <p className={styles.sub}>
          Where heritage meets the beautiful game. Training on hallowed
          ground, competing with pride — this is more than football,
          it&apos;s a legacy.
        </p>

        <div className={styles.actions}>
          <a href="/tournaments" className={styles.btnPrimary}>
            Explore Tournaments
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a href="/teams" className={styles.btnGhost}>
            View Teams
          </a>
        </div>
      </div>

      {/* ── Stats panel ── */}
      <div className={styles.statsPanel}>
        {stats.map((s, i) => (
          <div key={s.label} className={styles.statItem}>
            {i > 0 && <div className={styles.statDivider} />}
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}
