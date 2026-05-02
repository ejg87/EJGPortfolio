import styles from './About.module.scss'

const FACTS = [
    { label: 'Location', value: 'Pennsylvania, USA' },
    { label: 'Experience', value: '5+ Years Development' },
    { label: 'Focus', value: 'Full Stack .NET & React' },
    { label: 'Database', value: 'PostgreSQL & SQL Server' },
    { label: 'Homelab', value: 'Proxmox / Debian / Linux' },
    { label: 'Currently', value: 'Open to Opportunities' },
]

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>

                {/* Section Header */}
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Get To Know Me</p>
                    <h2 className={styles.title}>About Me</h2>
                </div>

                <div className={styles.content}>

                    {/* Bio */}
                    <div className={styles.bio}>
                        <p>
                            I'm a full stack developer and IT specialist based in Pennsylvania
                            with over five years of experience building web applications,
                            managing infrastructure, and solving real problems with code.
                        </p>
                        <p>
                            My backend work centers on C# and ASP.NET Core — building clean
                            REST APIs, working with Entity Framework Core, and connecting to
                            PostgreSQL and SQL Server databases. On the frontend I work with
                            React, TypeScript, and SASS to build responsive, performant UIs.
                        </p>
                        <p>
                            Outside of professional work I run a Proxmox homelab where I
                            self-host applications, experiment with Linux administration, and
                            build projects like RetroSpace — a full stack MySpace-inspired
                            social platform — to sharpen my skills across the entire stack.
                        </p>
                        <p>
                            I'm currently open to full stack and platform engineering
                            opportunities where I can contribute immediately and keep growing.
                        </p>
                    </div>

                    {/* Quick Facts */}
                    <div className={styles.facts}>
                        {FACTS.map(fact => (
                            <div key={fact.label} className={styles.fact}>
                                <span className={styles.factLabel}>{fact.label}</span>
                                <span className={styles.factValue}>{fact.value}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}