import React, { useState } from 'react';
import { Globe, Building2, ReceiptText, Wrench, Check, ArrowRight, Calculator } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Scope Estimator State
  const [projectType, setProjectType] = useState('Website Development');
  const [pagesCount, setPagesCount] = useState('1–5 Pages');
  const [hasCustomBackend, setHasCustomBackend] = useState(false);
  const [needsGST, setNeedsGST] = useState(false);
  const [showEstimator, setShowEstimator] = useState(false);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'service-web-dev':
        return <Globe className="w-5 h-5 text-teal-500" />;
      case 'service-business-web':
        return <Building2 className="w-5 h-5 text-teal-500" />;
      case 'service-gst-apps':
        return <ReceiptText className="w-5 h-5 text-teal-500" />;
      case 'service-maintenance':
        return <Wrench className="w-5 h-5 text-teal-500" />;
      default:
        return <Globe className="w-5 h-5 text-teal-500" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 dark:bg-[#070F1B] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#159E91]">
              <span>Freelance Offerings</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Services and Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white [text-wrap:balance]">
              Comprehensive web development and custom software solutions.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Partnering with businesses and independent entrepreneurs to deliver reliable software with direct developer communication.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowEstimator(!showEstimator)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-teal-500 transition-colors shrink-0"
          >
            <Calculator className="w-4 h-4 text-teal-500" />
            <span>{showEstimator ? 'Hide Scope Estimator' : 'Interactive Scope Estimator'}</span>
          </button>
        </div>

        {/* Interactive Scope Estimator Box (Collapsible) */}
        {showEstimator && (
          <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-[#0c192d] border border-teal-500/40 shadow-sm space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Project Scope and Timeline Estimator
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select your project parameters to get an indicative timeline and tailored contact summary.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowEstimator(false)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Primary Service Need
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                >
                  <option value="Website Development">Website Development (SPA/App)</option>
                  <option value="Business Websites">Business / Corporate Website</option>
                  <option value="GST Invoice Applications">GST Invoice Application</option>
                  <option value="Website Maintenance">Website Maintenance and Retainer</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Scale / Page Volume
                </label>
                <select
                  value={pagesCount}
                  onChange={(e) => setPagesCount(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                >
                  <option value="1–3 Pages">1–3 Core Pages (Landing / Showcase)</option>
                  <option value="4–8 Pages">4–8 Pages (Standard Business Site)</option>
                  <option value="Complex Multi-Module">Complex Multi-Module / Custom Portal</option>
                </select>
              </div>

              <div className="flex flex-col justify-end space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasCustomBackend}
                    onChange={(e) => setHasCustomBackend(e.target.checked)}
                    className="h-4 w-4 rounded-xs border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Requires Python / Django Backend</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsGST}
                    onChange={(e) => setNeedsGST(e.target.checked)}
                    className="h-4 w-4 rounded-xs border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Includes GST Tax Invoicing / PDF</span>
                </label>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Estimated Timeline</span>
                  <p className="text-sm font-bold text-teal-600 dark:text-teal-400 mt-0.5">
                    {hasCustomBackend || needsGST ? '3 to 6 weeks' : pagesCount === '1–3 Pages' ? '1 to 2 weeks' : '2 to 4 weeks'}
                  </p>
                </div>
                <a
                  href={`#contact`}
                  className="mt-2 text-center py-1.5 px-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md text-[11px] transition-colors"
                >
                  Discuss This Scope
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 bg-white dark:bg-[#0c1a2e] flex flex-col justify-between ${
                selectedService === service.id
                  ? 'border-teal-500 ring-1 ring-teal-500/30 shadow-md'
                  : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                {/* Service Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {service.estimatedTimeline}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-2 space-y-2">
                  <h4 className="text-[11px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Ideal for: </span>
                  {service.idealFor}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline shrink-0"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
