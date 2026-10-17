import React from 'react';
import { ArrowDown, Code2, Layers, Briefcase, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(13,148,136,0.12),transparent_70%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#159E91]">
              <span>Web Developer</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Freelance Software Specialist</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Kerala, India</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-slate-400 dark:text-slate-400">Hi, I'm </span>
              <span className="text-[#159E91] dark:text-[#159E91]">Sajith M.</span>{' '}
              <span className="text-[#737373] dark:text-[#a3a3a3] font-semibold">
                I build dependable web applications and business software.
              </span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Specializing in modern React interfaces, Python and Django backend APIs, SQLite relational databases, and TradingView Pine Script technical and fundamental trading systems.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 rounded-lg transition-all whitespace-nowrap"
              >
                Contact Me
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Core Tech Indicators (Zero-pill discipline) */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Code2 className="w-4 h-4 text-[#159E91]" />
                <span>React.js and JavaScript</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Layers className="w-4 h-4 text-[#159E91]" />
                <span>Python and Django APIs</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <FileText className="w-4 h-4 text-[#159E91]" />
                <span>GST Billing Engines</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Briefcase className="w-4 h-4 text-[#159E91]" />
                <span>Oracle and Tally ERPs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-xl group">
              <img
                src="/src/assets/images/hero_sajith_workspace_1791904983374.jpg"
                alt="Sajith Mallisseri developer workstation with clean code and interface setup"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/60 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-200">Sajith Mallisseri</p>
                  <p className="text-[11px] text-[#159E91]">Available for freelance contracts and web projects</p>
                </div>
                <a
                  href="#contact"
                  className="px-3 py-1.5 text-xs font-medium bg-[#159E91] hover:bg-[#12867b] text-white rounded-md transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Highlight Strip below Hero Split */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159E91]">Core Expertise</span>
            <h2 className="text-base font-bold text-black dark:text-white">Full-Stack Web Development</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Responsive client portals, modern React frontends, and RESTful service architectures.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159E91]">Business Focus</span>
            <h2 className="text-base font-bold text-black dark:text-white">GST Invoicing and Billing</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Made with React.js API, Django, Python and SQLite. Hosted on PythonAnywhere [cloud web hosting service].
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159E91]">FinTech and Algorithmic</span>
            <h2 className="text-base font-bold text-black dark:text-white">TradingView Pine Script</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Technical and fundamental indicators, automated buy/sell signals, and dynamic on-chart tables.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159E91]">Service Model</span>
            <h2 className="text-base font-bold text-black dark:text-white">Direct Freelance Partnership</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Clear communication, clean maintainable code, and reliable long-term support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
