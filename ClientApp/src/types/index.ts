// All shared TypeScript types live here
// Components import from this file — never define types inline

// Matches the ProjectDto shape from the .NET API
export interface Project {
    id: number
    title: string
    description: string
    liveUrl: string | null
    gitHubUrl: string | null
    techStack: string | null
    displayOrder: number
}

// Contact form shape
export interface ContactForm {
    name: string
    email: string
    message: string
}

// Form submission state
export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'