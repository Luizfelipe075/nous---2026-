import logo from '../assets/logo.jpeg'
import styles from './Footer.module.css'

export default function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="Logo Noûs" className={styles.footerLogoImg} />
        </div>
        <p className={styles.footerDisclaimer}>
          Noûs não substitui o acompanhamento profissional. É uma ferramenta de apoio ao psicólogo.
        </p>
        <span className={styles.footerCopy}>© {anoAtual} Noûs</span>
      </div>
    </footer>
  )
}
