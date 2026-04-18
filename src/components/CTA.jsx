import { useEffect, useRef } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const boxRef = useRef(null)

  useEffect(() => {
    const el = boxRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.cta}>
      <div className={styles.ctaBox} ref={boxRef}>
        <h2 className={styles.ctaTitle}>
          Pronto para transformar seu acompanhamento terapêutico?
        </h2>
        <p className={styles.ctaSubtitle}>
          Junte-se a profissionais que já utilizam o Noûs para oferecer
          um cuidado mais completo aos seus pacientes.
        </p>
        <div className={styles.ctaActions}>
          <a href="#" className={`${styles.btn} ${styles.btnOutlineDark}`}>
            Sou Psicólogo
          </a>
          <a href="#" className={`${styles.btn} ${styles.btnOutlineDark}`}>
            Sou Paciente
          </a>
        </div>
      </div>
    </section>
  )
}
