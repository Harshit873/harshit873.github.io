import React from 'react';
import { SkillCategory, ExperienceItem, Project } from './types.ts';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CircleStackIcon, 
  RocketLaunchIcon, 
  BugAntIcon, 
  ClipboardDocumentListIcon, 
  CogIcon, 
  UserGroupIcon,
  VRHeadsetIcon,
  GameConsoleIcon,
  PythonIcon,
  JiraIcon
} from './components/ui/Icons.tsx';

export const RESUME_URL = '/dist/assets/Harshit_shah_Resume.pdf';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Leadership & Methods',
    skills: [
      { name: 'Scrum Master', icon: <UserGroupIcon /> },
      { name: 'Agile Excellence', icon: <RocketLaunchIcon /> },
      { name: 'Team Lead', icon: <UserGroupIcon /> },
    ],
  },
  {
    title: 'Tech Domains',
    skills: [
      { name: 'AR/VR Testing', icon: <VRHeadsetIcon /> },
      { name: 'Game QA (Mobile/PC)', icon: <GameConsoleIcon /> },
      { name: 'Blockchain/Web3', icon: <CircleStackIcon /> },
      { name: 'E-commerce', icon: <ClipboardDocumentListIcon /> },
    ],
  },
  {
    title: 'Languages & DB',
    skills: [
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'SQL/NoSQL', icon: <CircleStackIcon /> },
      { name: 'MongoDB', icon: <CircleStackIcon /> },
      { name: 'HTML/CSS', icon: <CodeBracketIcon /> },
    ],
  },
  {
    title: 'Testing Arsenal',
    skills: [
      { name: 'Selenium WebDriver', icon: <CogIcon /> },
      { name: 'JIRA & Trello', icon: <JiraIcon /> },
      { name: 'Postman/API', icon: <CpuChipIcon /> },
      { name: 'Bug Lifecycle', icon: <BugAntIcon /> },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Team Lead Quality Analyst & Scrum Master',
    company: 'Yudiz Solutions Limited',
    duration: 'December 2019 - Present',
    description: [
      'Managing and mentoring cross-functional QA teams in high-velocity Agile environments.',
      'Architected end-to-end QA pipelines for blockchain, AR/VR, and complex e-commerce platforms.',
      'Facilitating Scrum ceremonies and optimizing sprint velocity through proactive block removal.',
      'Reduced defect leakage by 40% by implementing shift-left testing methodologies.',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'TeenPatti Malamaal',
    description: 'Spearheaded testing for a high-traffic 2D multiplayer card game. Focused on real-time synchronization, edge-case network handling, and secure virtual currency transactions.',
    tags: ['Unity', 'Multiplayer', 'Android', 'QA Lead'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yudiz.teenpattimalamaal',
    repoUrl: '',
  },
  {
    title: 'Spinnow Ludo',
    description: 'QA strategy for a competitive multiplayer board game. Validated anti-cheat mechanisms and server-side logic for fair play and 99.9% uptime.',
    tags: ['C#', 'QA Strategy', 'Backend Validation'],
    liveUrl: 'https://spinnow.in',
    repoUrl: '',
  },
  {
    title: 'Pickle Ball Stars',
    description: 'Led performance testing for a physics-driven sports simulation game. Ensured consistent 60FPS across mid-range mobile hardware.',
    tags: ['Physics Testing', 'Performance', 'Agile'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.pickleball.stars.game',
    repoUrl: '',
  },
  {
    title: 'BFK Warzone (Web3)',
    description: 'Tested complex NFT integration and smart contract interactions for a play-to-earn ecosystem. Managed security audits and transaction verification.',
    tags: ['Blockchain', 'Web3', 'NFT Security'],
    liveUrl: 'https://bfkwarzone.com/',
    repoUrl: '',
  },
  {
    title: 'VR Retail Experience',
    description: 'Scrum Master for a pioneer mixed-reality shopping app. Coordinated UX testing for hand-tracking and spatial audio immersion.',
    tags: ['Oculus', 'Unity', 'MR/VR', 'Scrum'],
    repoUrl: '',
  },
];