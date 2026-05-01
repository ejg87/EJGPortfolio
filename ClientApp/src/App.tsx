import { Routes, Route } from 'react-router-dom'

// We'll build these components in Phase 4
// For now we placeholder them so the app compiles

const Hero = () => <section id="hero"><h1>Hero</h1></section>
const About = () => <section id="about"><h1>About</h1></section>
const Skills = () => <section id="skills"><h1>Skills</h1></section>
const Projects = () => <section id="projects"><h1>Projects</h1></section>
const Contact = () => <section id="contact"><h1>Contact</h1></section>

// App is a single page — all sections live on one scrollable page
// React Router handles the root route
// Each section is a component we'll build out in Phase 4
function App() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default App