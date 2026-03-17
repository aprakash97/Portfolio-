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
    <div className="bg-background min-h-screen p-4 lg:p-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[400px_1fr] lg:gap-8">
        {/* Left Section - Profile Card */}
        <aside className="h-fit lg:sticky lg:top-8">
          <ProfileCard {...profileData} />
        </aside>

        {/* Right Section - Content */}
        <main className="flex flex-col">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="bg-accent/20 mt-6 flex-1 rounded-lg p-6 lg:p-8">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}
