import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, Database } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PharmaSoftwarePreview } from './PharmaSoftwarePreview';
import { TradingViewChartPreview } from './TradingViewChartPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEdit: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onEdit }) => {
  if (!project) return null;

  const isPharmaGst = project.id === 'proj-gst-invoice';
  const isTradingView = project.id === 'proj-tradingview-chart';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0c192d] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Top Header & Close button */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Category Overlay */}
          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-teal-400">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-medium">
                {project.isWorkInProgress ? (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-300">Work in Progress</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">{project.status}</span>
                  </>
                )}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight [text-wrap:balance]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-snug">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-slate-700 dark:text-slate-200">
          {/* Exact Stack Narration Banner */}
          {isPharmaGst && (
            <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-800 text-teal-950 dark:text-teal-200 flex items-start gap-3">
              <Database className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Engineering Stack and Hosting Architecture
                </span>
                <p className="text-sm font-semibold leading-snug">
                  This software is made with React.js API, Django, Python and Database is SQLite · Hosting: PythonAnywhere [cloud web hosting service].
                </p>
                <p className="text-xs text-teal-800 dark:text-teal-300">
                  Built for commercial pharmaceutical distribution at Goa Pharmaceuticals, Calicut, Kerala.
                </p>
              </div>
            </div>
          )}

          {/* Main Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
              Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Interactive Trimmed Interface View for Pharma GST */}
          {isPharmaGst && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                Trimmed Software Interface (Live Preview and Commercial Modules)
              </h4>
              <PharmaSoftwarePreview />
            </div>
          )}

          {/* Interactive TradingView Pine Script Chart & Decision Tables */}
          {isTradingView && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                Interactive Pine Script System and Dual Table HUD
              </h4>
              <TradingViewChartPreview />
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
                <Layers className="w-4 h-4" />
                <span>Architecture and Implementation Highlights</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {project.architectureHighlights}
              </p>
            </div>
          )}

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
              Key Features and Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed text-slate-700 dark:text-slate-300">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack (Zero-pill discipline: unboxed text with separators) */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
              Technologies Used
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-300">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-medium text-slate-900 dark:text-white">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-slate-400">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onEdit(project);
            }}
            className="text-xs font-medium text-teal-600 dark:text-teal-400 hover:underline"
          >
            Edit this project's details
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-slate-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
