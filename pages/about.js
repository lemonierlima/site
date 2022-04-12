import styles from '../styles/About.module.css'

import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>App construído em Next.js </p>
    </div>
  )
}