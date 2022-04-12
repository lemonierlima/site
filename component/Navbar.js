import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/photo1649723204.jpeg"
          width="30"
          height="30"
          className={styles.logoNav}
        />
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}