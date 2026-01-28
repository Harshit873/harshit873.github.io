
import React from 'react';

type IconProps = {
  className?: string;
};

export const GitHubIcon: React.FC<IconProps> = ({ className="h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className="h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className="h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className="h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className="h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);

export const RocketLaunchIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v.01l-1.13.35a1 1 0 0 1-1.3-1.3l.35-1.13a6 6 0 0 1 7.38-5.84z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.62 14.62 3.88 21.12a1 1 0 0 1-1.27-1.27l6.5-8.74c.23-.31.68-.42 1.05-.28l1.7.67c.37.14.48.59.28 1.05z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 3s-3.5 3.5-7 7l-1-1c-2.5-2.5-7-7-7-7" />
    </svg>
);

export const BugAntIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 12 2.25 2.25m-2.25-2.25 2.25-2.25M12 17.25V8.25m7.5 0a4.5 4.5 0 0 1-4.5 4.5M19.5 8.25a4.5 4.5 0 0 0-4.5-4.5M4.5 8.25a4.5 4.5 0 0 1 4.5 4.5M4.5 8.25a4.5 4.5 0 0 0 4.5-4.5m9 13.5a4.5 4.5 0 0 1-4.5-4.5m4.5 4.5a4.5 4.5 0 0 0-4.5-4.5m-4.5 4.5a4.5 4.5 0 0 1-4.5-4.5m-4.5 4.5a4.5 4.5 0 0 0 4.5-4.5" />
    </svg>
);

export const ClipboardDocumentListIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m-7.5-6H5.25c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h3.375c.621 0 1.125-.504 1.125-1.125V13.5c0-.621-.504-1.125-1.125-1.125H9.75" />
    </svg>
);

export const CogIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5" />
    </svg>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.284.004A3 3 0 0 1 7.5 15.75m-2.923.004a3 3 0 0 0-4.682 2.72 9.094 9.094 0 0 0 3.741.479m-.479-2.72a3 3 0 0 1 6.342 0m-3.17-.003a3 3 0 0 1 3.17 0" />
    </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 3H5.25m13.5 0h1.5M3.75 3v-1.5A2.25 2.25 0 0 1 6 0h12a2.25 2.25 0 0 1 2.25 2.25v1.5m-15 0a2.25 2.25 0 0 0-2.25 2.25v11.25c0 1.242 1.008 2.25 2.25 2.25h15c1.242 0 2.25-1.008 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25m-15 0h15M6.75 9h10.5M6.75 12h10.5m-10.5 3h10.5" />
    </svg>
);

export const CircleStackIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
);

// New Icons specifically for Harshit's domain
export const VRHeadsetIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v8.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16V7.5m18 0l-9 5.25m0 0l-9-5.25M12 12.75v5.25" />
    <circle cx="7.5" cy="11.25" r="1.5" />
    <circle cx="16.5" cy="11.25" r="1.5" />
  </svg>
);

export const GameConsoleIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M8.464 15.536a5 5 0 010-7.072m7.072 0a5 5 0 010 7.072" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.97 0C9.192 0 7.212.43 6.034 1.28c-1.396 1-1.353 2.146-1.353 3.655v1.27h6.81v.933H1.944C.585 7.138 0 8.358 0 10.334c0 1.83.35 3.393 1.353 4.39.81.808 2.053 1.05 3.733 1.05h1.228v-1.745c0-1.77 1.488-3.235 3.3-3.235h6.39c1.615 0 2.91-1.332 2.91-2.91v-4.39c0-1.73-.85-3.487-3.45-3.487h-3.48zm-2.454 2.162a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zM12.03 24c2.778 0 4.758-.43 5.936-1.28 1.396-1 1.353-2.146 1.353-3.655v-1.27H12.51v-.933h9.547c1.358 0 1.943-1.22 1.943-3.196 0-1.83-.35-3.393-1.353-4.39-.81-.808-2.053-1.05-3.733-1.05h-1.228v1.745c0 1.77-1.488 3.235-3.3 3.235H8.003c-1.615 0-2.91 1.332-2.91 2.91v4.39c0 1.73.85 3.487 3.45 3.487h3.487zm2.454-2.162a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
  </svg>
);

export const JiraIcon: React.FC<IconProps> = ({ className="h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.53 2c0-1.056.815-1.923 1.848-2H14c5.523 0 10 4.477 10 10v.622c-.077 1.033-.944 1.848-2 1.848s-1.923-.815-2-1.848V10a6 6 0 0 0-6-6h-.622c-1.033-.077-1.848-.944-1.848-2zM2 11.53c-1.056 0-1.923.815-2 1.848V14c0 5.523 4.477 10 10 10h.622c1.033-.077 1.848-.944 1.848-2s-.815-1.923-1.848-2H10a6 6 0 0 1-6-6v-.622c-.077-1.033-.944-1.848-2-1.848z"/>
  </svg>
);
