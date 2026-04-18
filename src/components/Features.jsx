import FeatureCard from './FeatureCard'
import decoDireita from '../assets/logo-deco-direita.jpeg'
import styles from './Features.module.css'

const FEATURES = [
  {
    title: 'Diário de Humor',
    desc: 'Pacientes registram seu humor diariamente com notas, atividades e níveis de ansiedade.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Roda de Emoções',
    desc: 'Questionário que gera automaticamente a roda de emoções de Plutchik para visualização emocional.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Relatórios Automáticos',
    desc: 'Relatórios detalhados gerados com base nas respostas diárias dos pacientes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Gestão de Pacientes',
    desc: 'Painel completo para o psicólogo gerenciar todos os seus pacientes em um só lugar.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Privacidade e Segurança',
    desc: 'Dados protegidos com criptografia e acesso restrito somente ao profissional responsável.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className={styles.features} id="recursos">
      <div className={styles.featuresInner}>
        <h2 className={styles.sectionTitle}>Tudo que você precisa em um só lugar</h2>
        <p className={styles.sectionSubtitle}>
          Recursos pensados para facilitar o acompanhamento terapêutico e
          fortalecer a relação entre psicólogo e paciente.
        </p>

        <div className={styles.featuresGrid}>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              delay={index * 70}
            />
          ))}
        </div>
      </div>

      <div className={styles.featuresDecoRight} aria-hidden="true">
        <img src={decoDireita} alt="" className={styles.decoImg} />
      </div>
    </section>
  )
}
