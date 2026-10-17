export type SkillCategory = 'All' | 'Frontend' | 'Backend and API' | 'Backend & API' | 'Database' | 'Enterprise and ERP' | 'Enterprise & ERP';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: 'Core' | 'Advanced' | 'Proficient';
  experienceYears?: string;
  description: string;
  tags?: string[];
}

export type ProjectStatus = 'Active' | 'Work in Progress' | 'Live Preview' | 'Client Deployed';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: ProjectStatus;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isWorkInProgress?: boolean;
  architectureHighlights?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  deliverables: string[];
  idealFor: string;
  estimatedTimeline: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
