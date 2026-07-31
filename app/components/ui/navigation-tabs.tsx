'use client';

import { clsx } from 'clsx';

export type TabType = 'about' | 'experience' | 'education' | 'projects' | 'skills' | 'contact';

interface NavigationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  theme: 'dark' | 'light';
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function NavigationTabs({ activeTab, onTabChange, theme }: NavigationTabsProps) {
  return (
    <nav className="border-border flex flex-wrap justify-center gap-1 border-b pb-2 lg:justify-start lg:gap-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={clsx(
            'relative px-3 py-2 text-sm font-medium transition-colors lg:px-4 lg:text-base',
            activeTab === tab.id
              ? theme === 'dark'
                ? 'font-semibold text-white'
                : 'text-foreground font-semibold'
              : theme === 'dark'
                ? 'text-muted-foreground hover:text-white'
                : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span
              className={clsx(
                'absolute right-0 bottom-0 left-0 h-0.5',
                theme === 'dark' ? 'bg-white' : 'bg-primary',
              )}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
