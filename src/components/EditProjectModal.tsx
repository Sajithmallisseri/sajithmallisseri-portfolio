import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Project, ProjectStatus } from '../types/portfolio';

interface EditProjectModalProps {
  project: Project;
  onClose: () => void;
  onSave: (updated: Project) => void;
}

export const EditProjectModal: React.FC<EditProjectModalProps> = ({ project, onClose, onSave }) => {
  const [title, setTitle] = useState(project.title);
  const [tagline, setTagline] = useState(project.tagline);
  const [category, setCategory] = useState(project.category);
  const [status, setStatus] = useState<ProjectStatus>(project.status);
  const [isWip, setIsWip] = useState(Boolean(project.isWorkInProgress));
  const [description, setDescription] = useState(project.description);
  const [liveUrl, setLiveUrl] = useState(project.liveUrl || '');
  const [githubUrl, setGithubUrl] = useState(project.githubUrl || '');
  const [techStackStr, setTechStackStr] = useState(project.techStack.join(', '));
  const [featuresStr, setFeaturesStr] = useState(project.keyFeatures.join('\n'));
  const [architecture, setArchitecture] = useState(project.architectureHighlights || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProject: Project = {
      ...project,
      title: title.trim(),
      tagline: tagline.trim(),
      category: category.trim(),
      status,
      isWorkInProgress: isWip,
      description: description.trim(),
      liveUrl: liveUrl.trim(),
      githubUrl: githubUrl.trim(),
      techStack: techStackStr
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      keyFeatures: featuresStr
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      architectureHighlights: architecture.trim(),
    };

    onSave(updatedProject);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0c192d] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Edit Project: {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customize title, description, links, and status. Saved locally.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Project Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Short Tagline
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Project Status
              </label>
              <select
                value={status}
                onChange={(e) => {
                  const val = e.target.value as ProjectStatus;
                  setStatus(val);
                  setIsWip(val === 'Work in Progress');
                }}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
              >
                <option value="Active">Active</option>
                <option value="Work in Progress">Work in Progress</option>
                <option value="Live Preview">Live Preview</option>
                <option value="Client Deployed">Client Deployed</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="wipCheck"
                checked={isWip}
                onChange={(e) => {
                  setIsWip(e.target.checked);
                  if (e.target.checked) setStatus('Work in Progress');
                }}
                className="h-4 w-4 rounded-xs border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="wipCheck" className="text-slate-700 dark:text-slate-300 font-medium">
                Mark as Work in Progress
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs leading-relaxed"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                Live URL / Website Link
              </label>
              <input
                type="url"
                placeholder="https://..."
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                GitHub Repository Link
              </label>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Tech Stack (Comma-separated)
            </label>
            <input
              type="text"
              value={techStackStr}
              onChange={(e) => setTechStackStr(e.target.value)}
              placeholder="e.g. React.js, Python, Django, SQLite"
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Key Features (One feature per line)
            </label>
            <textarea
              rows={3}
              value={featuresStr}
              onChange={(e) => setFeaturesStr(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
              Architecture & Implementation Highlights
            </label>
            <textarea
              rows={2}
              value={architecture}
              onChange={(e) => setArchitecture(e.target.value)}
              placeholder="Technical architecture, database design or state structure..."
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
