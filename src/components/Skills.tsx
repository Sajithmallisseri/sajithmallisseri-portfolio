import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, RotateCcw, Check, X, Sparkles } from 'lucide-react';
import { Skill, SkillCategory } from '../types/portfolio';
import { INITIAL_SKILLS } from '../data/portfolioData';

const STORAGE_KEY = 'sajith_portfolio_skills_v3';

export const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return INITIAL_SKILLS;
  });

  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Skill form state
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillCategory>('Frontend');
  const [newSkillLevel, setNewSkillLevel] = useState<'Core' | 'Advanced' | 'Proficient'>('Advanced');
  const [newSkillExp, setNewSkillExp] = useState('2+ yrs');
  const [newSkillDesc, setNewSkillDesc] = useState('');

  // Persist skills
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
    } catch {
      // ignore
    }
  }, [skills]);

  const categories: SkillCategory[] = [
    'All',
    'Frontend',
    'Backend and API',
    'Database',
    'Enterprise and ERP',
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tags && skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleResetToDefault = () => {
    if (window.confirm('Reset all skills to Sajith’s default skill set?')) {
      setSkills(INITIAL_SKILLS);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSkill) return;
    setSkills((prev) =>
      prev.map((s) => (s.id === editingSkill.id ? editingSkill : s))
    );
    setEditingSkill(null);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const newSkill: Skill = {
      id: `skill-${Date.now()}`,
      name: newSkillName.trim(),
      category: newSkillCategory,
      level: newSkillLevel,
      experienceYears: newSkillExp.trim(),
      description: newSkillDesc.trim() || 'Custom skill added to portfolio profile.',
      tags: [newSkillCategory],
    };

    setSkills((prev) => [...prev, newSkill]);
    setNewSkillName('');
    setNewSkillDesc('');
    setShowAddModal(false);
  };

  const handleDeleteSkill = (id: string) => {
    if (window.confirm('Remove this skill from your portfolio?')) {
      setSkills((prev) => prev.filter((s) => s.id !== id));
      if (editingSkill?.id === id) setEditingSkill(null);
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-[#070F1B] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#159E91]">
              <span>Skills and Stack</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Interactive and Editable Skill Cards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white [text-wrap:balance]">
              Technical expertise built through practical implementation.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              From responsive React frontends and Django backends to GST invoice billing engines and TradingView Pine Script algorithms.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                isEditing
                  ? 'bg-teal-500 text-slate-950 border-teal-500 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-teal-500'
              }`}
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Done Editing' : 'Edit Skill Cards'}</span>
            </button>

            {isEditing && (
              <>
                <button
                  type="button"
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-teal-600 text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Skill</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetToDefault}
                  title="Reset to default skills"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Filter bar & Search */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Category Tabs (Segmented control) */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills or keywords..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Edit notice banner */}
        {isEditing && (
          <div className="mt-4 p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 flex items-center justify-between text-xs text-teal-800 dark:text-teal-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>
                Edit Mode Active: Click any card to edit title, description, or level. Changes persist in your browser!
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="font-semibold underline hover:text-teal-950 dark:hover:text-white ml-2"
            >
              Done
            </button>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => {
                if (isEditing) setEditingSkill(skill);
              }}
              className={`relative group p-5 rounded-xl border transition-all duration-200 bg-white dark:bg-[#0c192d] ${
                isEditing
                  ? 'cursor-pointer border-teal-400 hover:border-teal-500 hover:shadow-md ring-1 ring-teal-400/30'
                  : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {skill.name}
                </h3>
                {isEditing ? (
                  <span className="p-1 text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 rounded-xs">
                    <Edit2 className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {skill.experienceYears || '3+ yrs'}
                  </span>
                )}
              </div>

              {/* Zero-Pill Metadata Line */}
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{skill.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-teal-600 dark:text-teal-400">{skill.level} Proficiency</span>
              </div>

              {/* Skill Description */}
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {skill.description}
              </p>

              {/* Tags / Subtopics - Zero-pill discipline: unboxed subtle text with bullet separators */}
              {skill.tags && skill.tags.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {skill.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < skill.tags!.length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            No skills match your search criteria. Try a different query or reset filters.
          </div>
        )}
      </div>

      {/* Edit Single Skill Modal */}
      {editingSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white dark:bg-[#0c192d] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Edit Skill: {editingSkill.name}
              </h3>
              <button
                type="button"
                onClick={() => setEditingSkill(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={editingSkill.name}
                  onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={editingSkill.category}
                    onChange={(e) => setEditingSkill({ ...editingSkill, category: e.target.value as SkillCategory })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend & API">Backend & API</option>
                    <option value="Database">Database</option>
                    <option value="Enterprise & ERP">Enterprise & ERP</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Proficiency Level
                  </label>
                  <select
                    value={editingSkill.level}
                    onChange={(e) =>
                      setEditingSkill({
                        ...editingSkill,
                        level: e.target.value as 'Core' | 'Advanced' | 'Proficient',
                      })
                    }
                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                  >
                    <option value="Core">Core</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Proficient">Proficient</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Experience / Longevity (e.g., 3+ yrs, Hands-on)
                </label>
                <input
                  type="text"
                  value={editingSkill.experienceYears || ''}
                  onChange={(e) => setEditingSkill({ ...editingSkill, experienceYears: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Description & Project Context
                </label>
                <textarea
                  rows={3}
                  value={editingSkill.description}
                  onChange={(e) => setEditingSkill({ ...editingSkill, description: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => handleDeleteSkill(editingSkill.id)}
                  className="px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  Delete Skill
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingSkill(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Skill Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white dark:bg-[#0c192d] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Add New Skill Card
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSkill} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Skill Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next.js, FastAPI, PostgreSQL..."
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newSkillCategory}
                    onChange={(e) => setNewSkillCategory(e.target.value as SkillCategory)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend & API">Backend & API</option>
                    <option value="Database">Database</option>
                    <option value="Enterprise & ERP">Enterprise & ERP</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Proficiency Level
                  </label>
                  <select
                    value={newSkillLevel}
                    onChange={(e) =>
                      setNewSkillLevel(e.target.value as 'Core' | 'Advanced' | 'Proficient')
                    }
                    className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                  >
                    <option value="Core">Core</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Proficient">Proficient</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Experience / Longevity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2+ yrs"
                  value={newSkillExp}
                  onChange={(e) => setNewSkillExp(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Summarize practical application and projects..."
                  value={newSkillDesc}
                  onChange={(e) => setNewSkillDesc(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Skill Card</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
