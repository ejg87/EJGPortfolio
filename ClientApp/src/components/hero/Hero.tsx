import styles from './Hero.module.scss'

export default function Hero() {
    const handleScroll = (href: string) => {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.inner}>

                {/* Eyebrow label */}
                <p className={styles.eyebrow}>Full Stack Developer</p>

                {/* Name */}
                <h1 className={styles.name}>
                    Edward <span className={styles.accent}>Goralewski</span>
                </h1>

                {/* Tagline */}
                <p className={styles.tagline}>
                    Building modern web applications with .NET, React, and PostgreSQL.
                    Based in Pennsylvania.
                </p>

                {/* CTA Buttons */}
                <div className={styles.cta}>
                    <button
                        className={styles.btnPrimary}
                        onClick={() => handleScroll('#projects')}
                    >
                        View My Work
                    </button>
                    <button
                        className={styles.btnSecondary}
                        onClick={() => handleScroll('#contact')}
                    >
                        Get In Touch
                    </button>
                </div>

                {/* Tech stack pills */}
                <div className={styles.stack}>
                    {['C#', '.NET', 'React', 'TypeScript', 'PostgreSQL', 'SASS'].map(tech => (
                        <span key={tech} className={styles.pill}>{tech}</span>
                    ))}
                </div>

            </div>

            {/* Subtle grid background */}
            <div className={styles.grid} aria-hidden="true" />
        </section>
    )
}