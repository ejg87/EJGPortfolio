// Skills data lives here — update this file to add/remove skills
// Component reads from this, never hardcodes skills inline

export interface Skill {
    name: string
    level: 'strong' | 'proficient' | 'familiar'
}

export interface SkillCategory {
    category: string
    skills: Skill[]
}

export const SKILLS: SkillCategory[] = [
    {
        category: 'Backend',
        skills: [
            { name: 'C#', level: 'strong' },
            { name: 'ASP.NET Core', level: 'strong' },
            { name: '.NET 10', level: 'strong' },
            { name: 'Entity Framework', level: 'strong' },
            { name: 'REST APIs', level: 'strong' },
            { name: 'PHP', level: 'proficient' },
            { name: 'Laravel', level: 'proficient' },
            { name: 'Python', level: 'familiar' },
            { name: 'Django', level: 'familiar' },
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React', level: 'strong' },
            { name: 'TypeScript', level: 'strong' },
            { name: 'SASS / CSS', level: 'strong' },
            { name: 'HTML5', level: 'strong' },
            { name: 'Vue 3', level: 'proficient' },
            { name: 'Vite', level: 'proficient' },
            { name: 'Nuxt 3', level: 'familiar' },
        ]
    },
    {
        category: 'Database',
        skills: [
            { name: 'PostgreSQL', level: 'strong' },
            { name: 'SQL Server', level: 'strong' },
            { name: 'T-SQL', level: 'strong' },
            { name: 'EF Core Migrations', level: 'strong' },
        ]
    },
    {
        category: 'DevOps & Tools',
        skills: [
            { name: 'Proxmox', level: 'strong' },
            { name: 'Linux / Debian', level: 'strong' },
            { name: 'Git', level: 'strong' },
            { name: 'Docker', level: 'proficient' },
            { name: 'Nginx', level: 'proficient' },
            { name: 'Visual Studio', level: 'strong' },
            { name: 'Rocky Linux', level: 'proficient' },
        ]
    },
]