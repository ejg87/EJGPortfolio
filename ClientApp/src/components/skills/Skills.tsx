import { SKILLS } from '../../constants/skills'
import styles from './Skills.module.scss'

// Level badge color is driven by the level value
const LEVEL_LABEL: Record<string, string> = {
    strong: 'Strong',
    proficient: 'Proficient',
    familiar: 'Familiar',
}

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.inner}>

                {/* Section Header */}
                <div className={styles.header}>
                    <p className={styles.eyebrow}>What I Work With</p>
                    <h2 className={styles.title}>Skills</h2>
                </div>

                {/* Skill Categories */}
                <div className={styles.grid}>
                    {SKILLS.map(group => (
                        <div key={group.category} className={styles.card}>

                            <h3 className={styles.category}>{group.category}</h3>

                            <ul className={styles.skillList}>
                                {group.skills.map(skill => (
                                    <li key={skill.name} className={styles.skillItem}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={`${styles.badge} ${styles[skill.level]}`}>
                                            {LEVEL_LABEL[skill.level]}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}