import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
// import CodePlayground from './components/CodePlayground';
import { ThemeProvider } from './context/ThemeContext';
import Section from './components/Section';

import CircularGallery from './components/CircularGallery';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    
    <Section id="gallery" className=" h-[900px]">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">𝒞𝑒𝓇𝓉𝒾𝒻𝒾𝒸𝒶𝓉𝑒𝓈 𝒮𝒽𝑜𝓌𝒸𝒶𝓈𝑒</h2> */}
      <div className="text-center mb-16 relative z-10">
        <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:900, color:'black', margin:'8px 0 12px' }}>
          𝒞𝑒𝓇𝓉𝒾𝒻𝒾𝒸𝒶𝓉𝑒𝓈  <span style={{ color:'#f59e0b' }}>𝒮𝒽𝑜𝓌𝒸𝒶𝓈𝑒</span>
        </h2>
        <div style={{ width:'56px', height:'2px', background:'#f59e0b', borderRadius:'2px', margin:'0 auto' }} />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={3}
          textColor="#131111ff"
          borderRadius={0.05}
          scrollEase={0.02}
          items={[
            { image: 'coursera.png', text: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/OI62XDRWOPA9' },
            { image: 'nptel.png', text: 'NPTEL', link: 'https://drive.google.com/file/d/1iUSpFTmaslFBAGoqsUpWgHXMl4v4EPkR/view' },
            { image: 'freecodecamp.png', text: 'Freecodecamp', link: 'https://drive.google.com/file/d/17Z2e5Zj7NrLfmsnq8j0mhvMylZkgTMtl/view' },
          ]}
        />
      </div>
    </Section>

    <Experience />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Kollu Swamy Prasad | Full Stack Developer Portfolio</title>
        <meta name="description" content="Kollu Swamy Prasad is a Full Stack Developer skilled in React.js, Node.js, and Java. Explore my portfolio featuring projects like Swamy Slabs E-Commerce and Medical Assistance Apps." />
        <link rel="canonical" href="https://kolluswamyprasad.vercel.app/" />
        {/* Note: User should replace the canonical URL with their actual domain when deployed */}
      </Helmet>
      <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] relative transition-colors duration-300">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
