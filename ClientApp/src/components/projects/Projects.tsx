import { useState, useEffect } from 'react'
import type { Project } from '../../types'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.scss'

export default function Projects() {
    // State for the fetched projects
    const [projects, setProjects] = useState<Project[]>([])

    // Loading and error states — always handle these in real apps
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Vite proxy forwards /api/* to .NET during development
                // In production .NET serves everything so no proxy needed
                const res = await fetch('/api/projects')

                if (!res.ok) {
                    throw new Error(`Failed to fetch projects: ${res.status}`)
                }

                const data: Project[] = await res.json()
                setProjects(data)
            } catch (err) {
                setError('Failed to load projects. Please try again later.')
                console.error(err)
            } finally {
                // Always runs — loading stops whether success or error
                setLoading(false)
            }
        }

        fetchProjects()
    }, []) // Empty array = run once on mount

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.inner}>

                {/* Section Header */}
                <div className={styles.header}>
                    <p className={styles.eyebrow}>What I've Built</p>
                    <h2 className={styles.title}>Projects</h2>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className={styles.state}>
                        <p>Loading projects...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className={styles.state}>
                        <p className={styles.error}>{error}</p>
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && (
                    <div className={styles.grid}>
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && projects.length === 0 && (
                    <div className={styles.state}>
                        <p>No projects found.</p>
                    </div>
                )}

            </div>
        </section>
    )
}