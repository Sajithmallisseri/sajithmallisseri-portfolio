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

// Asset Image Imports
import advocateAssociationImage from './assets/images/advocate_association_portal_1791946116948.jpg';
import heroWorkspaceImage from './assets/images/hero_sajith_workspace_1791904983374.jpg';
import pharmaGstInvoiceImage from './assets/images/pharma_gst_invoice_1791945139723.jpg';
import projectGstInvoiceImage from './assets/images/project_gst_invoice_1791904984262.jpg';
import keralaExplorerImage from './assets/images/project_kerala_explorer_1791904984601.jpg';
import mistyMountainImage from './assets/images/project_misty_mountain_1791904984176.jpg';

export const portfolioImages = {
  hero: heroWorkspaceImage,
  advocateAssociation: advocateAssociationImage,
  pharmaGstInvoice: pharmaGstInvoiceImage,
  projectGstInvoice: projectGstInvoiceImage,
  keralaExplorer: keralaExplorerImage,
  mistyMountain: mistyMountainImage,
};

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
          <Hero heroImage={heroWorkspaceImage} />
          <About />
          <Skills />
          <Projects
            projectImages={{
              'proj-gst-invoice': pharmaGstInvoiceImage,
              'proj-kerala-explorer': keralaExplorerImage,
              'proj-misty-mountain': mistyMountainImage,
              'proj-advocate-association': advocateAssociationImage,
              'proj-tradingview-chart': projectGstInvoiceImage,
            }}
          />
          <Services />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
