import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Khansa Tsabita Maghfirah</p>
      </footer>
    </div>
  )
}

export default App
