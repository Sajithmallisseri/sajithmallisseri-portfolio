import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#070F1B] dark:text-slate-100 transition-colors duration-200">
        {/* Skip to Main Content Accessibility link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-teal-600 text-white rounded-md text-xs font-semibold shadow-lg"
        >
          Skip to main content
        </a>

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
