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
  phone: '+971 58 926 3784',
  email: 'prakashakrakr@gmail.com',
  location: 'Dubai Silicon Oasis, Nadd Hessa, UAE',
  imageUrl: '/portfolio-image.jpg',
  github: 'https://github.com/aprakash97',
  linkedin: 'https://www.linkedin.com/in/prakash-anandakumar-8120931b9/',
  instagram: 'https://www.instagram.com/prakash_anandakumar/',
};

export function Portfolio() {
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
    <div className="min-h-screen w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
        {/* Left Section - Profile Card */}
        <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:min-h-0 lg:self-start lg:overflow-y-auto">
          <ProfileCard {...profileData} />
        </aside>

        {/* Right Section - Content */}
        <main className="flex w-full flex-col">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="bg-card/85 border-border mt-5 w-full flex-1 rounded-3xl border p-5 shadow-xl shadow-black/[0.04] backdrop-blur-sm sm:p-7 lg:mt-6 lg:p-9">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
