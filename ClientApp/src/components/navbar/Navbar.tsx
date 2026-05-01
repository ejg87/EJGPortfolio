import { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>

                {/* Logo / Name */ }
               <a href="#hero"
                className={styles.logo}
                onClick={() => handleNavClick('#hero')} >
                EJG<span className={styles.dot}>.</span>dev
            </a>

            <ul className={styles.links}>
                {NAV_LINKS.map(link => (
                    <li key={link.href}>
                        <button
                            className={styles.link}
                            onClick={() => handleNavClick(link.href)}
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
        </div>

      {
        menuOpen && (
            <ul className={styles.mobileMenu}>
                {NAV_LINKS.map(link => (
                    <li key={link.href}>
                        <button
                            className={styles.mobileLink}
                            onClick={() => handleNavClick(link.href)}
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
    </nav >
  )
}