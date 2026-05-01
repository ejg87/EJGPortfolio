import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

const About = () => <section id="about" style={{ height: '100vh', paddingLeft: '2rem', paddingTop: '4rem' }}><h1>About</h1></section>
const Skills = () => <section id="skills" style={{ height: '100vh', paddingLeft: '2rem', paddingTop: '4rem' }}><h1>Skills</h1></section>
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