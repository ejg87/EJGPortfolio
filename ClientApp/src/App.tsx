import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'

const Projects = () => <section id="projects" style={{ height: '100vh', paddingLeft: '2rem', paddingTop: '4rem' }}><h1>Projects</h1></section>
const Contact = () => <section id="contact" style={{ height: '100vh', paddingLeft: '2rem', paddingTop: '4rem' }}><h1>Contact</h1></section>

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

export default App