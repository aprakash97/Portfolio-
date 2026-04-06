'use client';

import { Briefcase, GraduationCap, FolderOpen, Code, Mail, User } from 'lucide-react';
import Link from 'next/link';

export function AboutSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <User className="text-primary h-6 w-6" />
        <h2 className="text-foreground text-2xl font-bold">About Me</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        I am a passionate Software Engineer with expertise in building scalable web applications and
        solving complex problems. With a strong foundation in modern technologies and a keen eye for
        detail, I strive to create efficient and user-friendly solutions.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        My journey in software development started with curiosity about how things work, and it has
        evolved into a fulfilling career where I get to build products that make a difference. I
        believe in continuous learning and staying updated with the latest industry trends.
      </p>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Acentura Ltd',
      period: '2023 - Present',
      description:
        'Leading development of enterprise-level applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Acentura Inc',
      period: '2023 - 2023',
      description:
        'Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
    {
      title: 'Intern Software Developer',
      company: 'StartUp Hub',
      period: '2021 - 2022',
      description:
        'Started my professional journey building MVPs for startups, with initial experience in WordPress site maintenance during my internship',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Briefcase className="text-primary h-6 w-6" />
        <h2 className="text-foreground text-2xl font-bold">Experience</h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-primary/30 border-l-2 pl-4">
            <h3 className="text-foreground font-semibold">{exp.title}</h3>
            <p className="text-primary text-sm font-medium">{exp.company}</p>
            <p className="text-muted-foreground text-xs">{exp.period}</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EducationSection() {
  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      period: '2018 - 2022',
    },
    {
      degree: 'High School',
      institution: 'Wesley College, Colombo',
      period: '2003 - 2016',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <GraduationCap className="text-primary h-6 w-6" />
        <h2 className="text-foreground text-2xl font-bold">Education</h2>
      </div>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-primary/30 border-l-2 pl-4">
            <h3 className="text-foreground font-semibold">{edu.degree}</h3>
            <p className="text-primary text-sm font-medium">{edu.institution}</p>
            <p className="text-muted-foreground text-xs">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      name: 'Blog Platform',
      tech: 'Next, Redis, Neon',
      description: 'A simple blogging application with modern AI features integration.',
      link: 'https://modern-summary-app.vercel.app/',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FolderOpen className="text-primary h-6 w-6" />
        <h2 className="text-foreground text-2xl font-bold">Projects</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            onClick={(event) => event.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="border-border bg-card/50 rounded-lg border p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="text-foreground font-semibold">{project.name}</h3>
            <p className="text-primary text-xs font-medium">{project.tech}</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm font-bold">Click here to view the app!</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'Redis'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'AWS', 'CI/CD', 'Agile/Scrum'],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Code className="text-primary h-6 w-6" />
        <h2 className="text-foreground text-2xl font-bold">Skills</h2>
      </div>
      <div className="space-y-4">
        {skillCategories.map((cat, index) => (
          <div key={index}>
            <h3 className="text-foreground mb-2 font-semibold">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Mail className="text-primary h-6 w-6" />
        <h2 className="text-foreground text-2xl font-bold">Contact</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        I am always open to discussing new projects, creative ideas, or opportunities to be part of
        your visions. Feel free to reach out to me!
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="text-foreground mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-2 focus:ring-1 focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-foreground mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-2 focus:ring-1 focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-foreground mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-2 focus:ring-1 focus:outline-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2 font-medium transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
