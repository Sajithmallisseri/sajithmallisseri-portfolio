import React from 'react';
import { ArrowUp, Mail, Globe, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Bio column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs bg-teal-500" />
              <span className="text-lg font-bold text-white tracking-tight">Sajith Mallisseri</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Web developer and freelancer building dependable web applications, custom GST invoice billing systems, and practical software solutions.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:sajithmallisseri@gmail.com"
                aria-label="Send email to Sajith Mallisseri"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sajithmallisseri"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sajithmallisseri"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://sajithmallisseri.com"
                aria-label="Official Website"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-400 hover:bg-slate-700/80 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400 transition-colors">
                  Skills and Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Freelance Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Works column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Key Projects
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors flex items-center justify-between">
                  <span>GST Invoice Software</span>
                  <span className="text-[10px] text-teal-400">Billing Tool</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors flex items-center justify-between">
                  <span>Kerala Explorer AI</span>
                  <span className="text-[10px] text-amber-400">Work in Progress</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors flex items-center justify-between">
                  <span>Misty Mountain Zen</span>
                  <span className="text-[10px] text-slate-400">Retreat Web</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors flex items-center justify-between">
                  <span>Advocate and Association</span>
                  <span className="text-[10px] text-teal-400">Legal Web</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors flex items-center justify-between">
                  <span>TradingView Chart Analysis</span>
                  <span className="text-[10px] text-teal-400">PineScript</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {currentYear} <span className="text-slate-300 font-medium">Sajith Mallisseri</span>. All rights reserved. Built for sajithmallisseri.com.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
