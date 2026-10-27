import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Edit2, RotateCcw, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { EditProjectModal } from './EditProjectModal';

const PROJECTS_STORAGE_KEY = 'sajith_portfolio_projects_v12';

export interface ProjectsProps {
  projectImages?: Record<string, string>;
}

export const Projects: React.FC<ProjectsProps> = ({ projectImages }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        return parsed.map((p) => {
          const defaultProject = INITIAL_PROJECTS.find((init) => init.id === p.id);
          if (defaultProject && (p.image?.startsWith('/src/assets/images') || !p.image)) {
            return { ...p, image: defaultProject.image };
          }
          return p;
        });
      }
    } catch {
      // fallback
    }
    return INITIAL_PROJECTS;
  });

  const getProjectImage = (project: Project): string => {
    if (projectImages && projectImages[project.id]) {
      return projectImages[project.id];
    }
    return project.image;
  };

  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProjectForView, setActiveProjectForView] = useState<Project | null>(null);
  const [activeProjectForEdit, setActiveProjectForEdit] = useState<Project | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  const categories = ['All', 'FinTech and TradingView', 'Business and Commercial Billing', 'Legal and Web', 'Travel and AI', 'Hospitality and Web'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const handleSaveProject = (updated: Project) => {
    setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setActiveProjectForEdit(null);
    if (activeProjectForView?.id === updated.id) {
      setActiveProjectForView(updated);
    }
  };

  const handleResetProjects = () => {
    if (window.confirm('Reset all project cards to Sajith’s default configurations?')) {
      setProjects(INITIAL_PROJECTS);
      localStorage.removeItem(PROJECTS_STORAGE_KEY);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-[#091424] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Toolbar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#159E91]">
              <span>Featured Works</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Software Applications and Web Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white [text-wrap:balance]">
              Practical software built for real-world impact.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Explore specialized billing systems, intelligent discovery tools, and responsive digital web experiences. Click any project for architecture insights.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleResetProjects}
              title="Reset project descriptions & links to defaults"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Live billing demo banner */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-teal-200 dark:border-teal-900/60 bg-teal-50 dark:bg-teal-950/40">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-base font-bold tracking-tight text-black dark:text-white">
              Try my billing, GST and stock software
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A live demo with sample data: make a GST invoice, receive stock with batch and expiry, and see sales, GST and expiry reports. Works on any phone or computer, with no login needed.
            </p>
          </div>
          <a
            href="https://sajith-billing-demo.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 shrink-0 px-4 py-2.5 rounded-lg bg-[#159E91] hover:bg-teal-700 text-white text-sm font-semibold transition-colors"
          >
            <span>Open the live demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Tabs (Interactive segmented control) */}
        <div className="mt-8 flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Bento / Masonry aesthetic */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0c1a2e]/60 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
                <img
                  src={getProjectImage(project)}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Status Indicator (Zero-pill discipline: unboxed clean text) */}
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium border border-slate-700/60 flex items-center gap-1.5">
                  {project.isWorkInProgress ? (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-300">Work in Progress</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-teal-300">{project.status}</span>
                    </>
                  )}
                </div>

                {/* Edit Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectForEdit(project);
                  }}
                  title="Edit project details & links"
                  className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-900/85 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700/60 transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                {/* Category kicker on image bottom */}
                <div className="absolute bottom-3 left-4 text-xs font-medium text-slate-300">
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {project.id === 'proj-gst-invoice' && (
                    <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-[11px] font-medium text-teal-800 dark:text-teal-300">
                      ⚡ This software is made with React.js API, Django, Python and Database is SQLite · Hosting: PythonAnywhere [cloud web hosting service].
                    </div>
                  )}

                  {project.id === 'proj-advocate-association' && (
                    <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-[11px] font-medium text-teal-800 dark:text-teal-300">
                      ⚖️ Prepared last week for professional legal and bar association practice management.
                    </div>
                  )}

                  {project.id === 'proj-tradingview-chart' && (
                    <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-[11px] font-medium text-teal-800 dark:text-teal-300">
                      📈 Technical and Fundamental TradingView Chart in PineScript with stock market analysis tables.
                    </div>
                  )}
                </div>

                {/* Tech Stack List (Zero-pill text separators) */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-slate-700 dark:text-slate-300">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveProjectForView(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View Repository"
                          className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demo"
                          className="p-1.5 text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectForView && (
        <ProjectModal
          project={{
            ...activeProjectForView,
            image: getProjectImage(activeProjectForView),
          }}
          onClose={() => setActiveProjectForView(null)}
          onEdit={(proj) => {
            setActiveProjectForView(null);
            setActiveProjectForEdit(proj);
          }}
        />
      )}

      {/* Edit Project Details Modal */}
      {activeProjectForEdit && (
        <EditProjectModal
          project={activeProjectForEdit}
          onClose={() => setActiveProjectForEdit(null)}
          onSave={handleSaveProject}
        />
      )}
    </section>
  );
};
