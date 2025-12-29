import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CodePlayground from './components/CodePlayground';
import { ThemeProvider } from './context/ThemeContext';
import Section from './components/Section';

import CircularGallery from './components/CircularGallery';
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

          <Section id="gallery" className="py-20 h-[800px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Project Showcase</h2>
            <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
                items={[
                  { image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop', text: 'Full Stack' },
                  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', text: 'Cyber Security' },
                  { image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop', text: 'Coding' },
                  { image: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1000&auto=format&fit=crop', text: 'Architecture' },
                  { image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop', text: 'DevOps' },
                  { image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop', text: 'Web Design' }
                ]}
              />
            </div>
          </Section>

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
