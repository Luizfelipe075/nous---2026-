import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpeg'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleAnchorClick(e, href) {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarLogo}>
          <img src={logo} alt="Logo Noûs" className={styles.navbarLogoImg} />
        </div>
        <nav className={styles.navbarNav}>
          <a
            href="#recursos"
            className={styles.navLink}
            onClick={(e) => handleAnchorClick(e, '#recursos')}
          >
            Recursos
          </a>
          <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
            Entrar
          </a>
        </nav>
      </div>
    </header>
  )
}
