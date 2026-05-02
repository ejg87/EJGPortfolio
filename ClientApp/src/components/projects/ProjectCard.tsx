import type { Project } from '../../types'
import styles from './ProjectCard.module.scss'

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    const techs = project.techStack?.split(',').map(t => t.trim()) ?? []

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.links}>
                    {project.gitHubUrl && (
                        <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Live
                        </a>
                    )}
                </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            {techs.length > 0 && (
                <div className={styles.stack}>
                    {techs.map(tech => (
                        <span key={tech} className={styles.pill}>{tech}</span>
                    ))}
                </div>
            )}
        </div>
    )
}