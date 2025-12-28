import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CodePlayground from './components/CodePlayground';
import { ThemeProvider } from './context/ThemeContext';
import Section from './components/Section';

import { Helmet } from 'react-helmet-async';

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
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />

          <Section id="playground">
            <CodePlayground />
          </Section>

          <Experience />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
