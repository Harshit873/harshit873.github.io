// FIX: Import `ReactElement` to use in place of `JSX.Element`, which is not available by default in `.ts` files.
import type { ReactElement } from 'react';

export interface Skill {
  name: string;
  // FIX: The generic ReactElement type for skill.icon doesn't include className. 
  // A more specific type is used to inform TypeScript that this prop is valid for cloning.
  icon: ReactElement<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}