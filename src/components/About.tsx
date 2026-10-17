import React, { useState } from 'react';
import { CheckCircle2, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'principles' | 'tools'>('bio');

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-[#091424] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400">
            <span>About Me</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Biography and Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white [text-wrap:balance]">
            Building software that solves tangible problems with clarity and durability.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a web developer and freelancer with a focus on delivering clean, maintainable web applications and custom business utilities.
          </p>
        </div>

        {/* Tab Selector Controls (Interactive segmented control) */}
        <div className="mt-10 flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg max-w-md">
          <button
            type="button"
            onClick={() => setActiveTab('bio')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'bio'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Professional Bio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('principles')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'principles'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Core Philosophy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tools')}
            className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'tools'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Technical Focus
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            {activeTab === 'bio' && (
              <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                <p>
                  My work as a developer centers around creating software solutions that people actually enjoy using and businesses rely on every single day. Rather than chasing fleeting trends or over-engineering simple problems, I prioritize clean architectural patterns, robust error handling, and intuitive user experiences.
                </p>
                <p>
                  Throughout my development journey, I have honed practical capabilities across the entire web stack—from architecting fast, accessible client interfaces in <strong className="text-slate-900 dark:text-white font-semibold">React.js and JavaScript</strong> to designing structured data workflows with <strong className="text-slate-900 dark:text-white font-semibold">Python, Django, and REST APIs</strong>.
                </p>
                <p>
                  A notable area of my hands-on experience is commercial tooling—specifically developing custom <strong className="text-slate-900 dark:text-white font-semibold">GST Invoice and billing software</strong> (including commercial deployments like Goa Pharmaceuticals, Calicut). <span className="text-teal-600 dark:text-teal-400 font-medium">This software is made with React.js API, Django, Python and Database is SQLite, hosted on PythonAnywhere [cloud web hosting service]</span>, handling end-to-end commercial billing workflows from batch tracking and intra/inter-state tax calculations to sales returns and audit ledgers. I also work with enterprise accounting systems including <strong className="text-slate-900 dark:text-white font-semibold">Tally ERP and Oracle ERP</strong> data structures.
                </p>
                <p>
                  In the financial and market domain, I develop algorithmic trading systems in <strong className="text-slate-900 dark:text-white font-semibold">TradingView’s Pine Script programming language</strong>. I engineer multi-factor indicators combining technical price action rules with fundamental financial ratios, plotting automated Buy/Sell signals and on-chart HUD score tables for informed stock analysis.
                </p>
              </div>
            )}

            {activeTab === 'principles' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Pragmatic Over Complexity</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Code should be readable and maintainable by anyone who comes after. Simple, well-structured modules beat convoluted abstractions every time.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Business Data Integrity</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Financial and transaction records must be bulletproof. Invoicing, tax calculations, and database mutations are validated strictly at every step.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                    <Terminal className="w-4 h-4" />
                    <span>Responsive and Accessible UI</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Interfaces must render flawlessly on phones, tablets, and wide desktop displays alike, with clear semantic markup and keyboard navigation.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                    <Cpu className="w-4 h-4" />
                    <span>Fast Performance and Low Bloat</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Keeping asset bundles compact, minimizing unnecessary dependencies, and optimizing database lookups ensure smooth user interactions.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Every technical decision is guided by the specific demands of the project:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Frontend Applications: React.js and Modern JavaScript</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Component-driven state architecture, responsive styling with modern Tailwind CSS, and resilient API consumption.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Backend and Services: Python, Django and REST APIs</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Secure authentication routines, role access control, reliable ORM queries, and standardized JSON endpoints.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Enterprise and Databases: SQLite, MongoDB, Oracle and Tally</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Relational schemas for local ledger tools, document storage for flexible entities, and integration bridges for established commercial ERP systems.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Link to Projects */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#projects"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Explore the projects implementing these principles</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio Summary Box */}
          <div className="lg:col-span-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0c1a2e]/80 space-y-6">
            <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              Quick Profile
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-baseline py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Name</span>
                <span className="font-semibold text-[#159E91] dark:text-[#159E91]">Sajith M.</span>
              </div>
              <div className="flex justify-between items-baseline py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Role</span>
                <span className="font-semibold text-slate-900 dark:text-white">Web Developer and Freelancer</span>
              </div>
              <div className="flex justify-between items-baseline py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Domain</span>
                <span className="font-semibold text-[#159E91]">sajithmallisseri.com</span>
              </div>
              <div className="flex justify-between items-baseline py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Primary Email</span>
                <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[170px]" title="sajithmallisseri@gmail.com">
                  sajithmallisseri@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-baseline py-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">Availability</span>
                <span className="font-semibold text-[#159E91]">Open for Freelance Work</span>
              </div>
              <div className="flex justify-between items-baseline py-2">
                <span className="text-slate-500 dark:text-slate-400">Focus</span>
                <span className="font-semibold text-slate-900 dark:text-white text-right">Web Apps and Business Tools</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors"
              >
                Discuss a Project with Sajith
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
