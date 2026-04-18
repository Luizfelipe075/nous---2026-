import { useEffect, useRef } from 'react'
import styles from './FeatureCard.module.css'

export default function FeatureCard({ icon, title, desc, delay = 0 }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // pequeno delay p/ stagger
          setTimeout(() => {
            el.classList.add(styles.visible)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.cardIcon}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  )
}
