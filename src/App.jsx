import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import RevealOnScroll from './components/RevealOnScroll';
import ViewerSurveyModal from './components/ViewerSurveyModal';
import SurveyStatsModal from './components/SurveyStatsModal';

function App() {
  return (
    <div className="app-container">
      <ViewerSurveyModal />
      <SurveyStatsModal />
      <Navbar />
      <RevealOnScroll width="100%">
        <Hero />
      </RevealOnScroll>
      <RevealOnScroll width="100%">
        <About />
      </RevealOnScroll>
      <RevealOnScroll width="100%">
        <Experience />
      </RevealOnScroll>
      <RevealOnScroll width="100%">
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll width="100%">
        <Skills />
      </RevealOnScroll>
      <RevealOnScroll width="100%">
        <Education />
      </RevealOnScroll>
      <RevealOnScroll width="100%">
        <Contact />
      </RevealOnScroll>

      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid var(--border-subtle)' }}>
        <p>© 2026 Khansa Tsabita Maghfirah</p>
      </footer>
    </div>
  )
}

export default App
