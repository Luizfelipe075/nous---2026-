import { useEffect, useRef } from 'react'
import decoEsquerda from '../assets/logo-deco-esquerda.jpeg'
import styles from './Hero.module.css'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroDecoLeft} aria-hidden="true">
        <img src={decoEsquerda} alt="" className={styles.decoImg} />
      </div>

      <div className={styles.heroContent} ref={contentRef}>
        <div className={styles.heroBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Ferramenta de apoio ao profissional de psicologia
        </div>

        <h1 className={styles.heroTitle}>
          Cuidado emocional<br />
          inteligente para seus pacientes
        </h1>

        <p className={styles.heroSubtitle}>
          Uma plataforma completa que conecta psicólogos e pacientes, oferecendo
          acompanhamento diário de humor, roda de emoções e relatórios
          automáticos para um tratamento mais eficaz.
        </p>

        <div className={styles.heroActions}>
          <a href="#" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
            Começar Agora
          </a>
          <a href="#recursos" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge}`}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#recursos')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Conhecer a Plataforma
          </a>
        </div>
      </div>
    </section>
  )
}
