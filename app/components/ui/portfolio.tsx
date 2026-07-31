'use client';

import { useState } from 'react';
import { ProfileCard } from './profile-card';
import { NavigationTabs, type TabType } from './navigation-tabs';
import {
  AboutSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from './content-sections';

const profileData = {
  name: 'Prakash Anandakumar',
  title: 'Software Engineer',
  phone: '+94 76 700 4528',
  email: 'prakashakrakr@gmail.com',
  location: 'Colombo, Sri Lanka',
  imageUrl: '/portfolio-image.jpg',
  github: 'https://github.com/aprakash97',
  linkedin: 'https://www.linkedin.com/in/prakash-anandakumar-8120931b9/',
  instagram: 'https://www.instagram.com/prakash_anandakumar/',
};

interface PortfolioProps {
  theme: 'dark' | 'light';
}

export function Portfolio({ theme }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen w-full p-4 lg:p-8">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 lg:grid-cols-[400px_1fr] lg:gap-8">
        {/* Left Section - Profile Card */}
        <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:min-h-0 lg:self-start lg:overflow-y-auto">
          <ProfileCard {...profileData} />
        </aside>

        {/* Right Section - Content */}
        <main className="flex w-full flex-col">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} theme={theme} />
          <div
            className={
              theme === 'dark'
                ? 'mt-6 w-full flex-1 rounded-2xl border border-white/10 bg-zinc-900/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:p-8'
                : 'mt-6 w-full flex-1 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] lg:p-8'
            }
          >
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
