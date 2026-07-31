'use client';

import { Briefcase, GraduationCap, FolderOpen, Code, Mail, User, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function AboutSection() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <User className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">About Me</h2>
          <p className="text-muted-foreground text-sm">
            Software engineer crafting modern web experiences
          </p>
        </div>
      </div>

      <div className="bg-card/70 border-border rounded-2xl border p-6 shadow-sm">
        <p className="text-muted-foreground leading-relaxed">
          I’m a passionate Software Engineer who enjoys building scalable, user-friendly web
          applications and turning ideas into practical solutions. My journey in software
          development started with HTML, CSS, and JavaScript, where I discovered how much I enjoyed
          bringing interfaces and ideas to life.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Then expanded my skills beyond frontend development by exploring backend technologies,
          cloud services, and application deployment. This journey has helped me understand how
          different parts of an application work together, from creating intuitive user experiences
          to building APIs and deploying reliable applications.
        </p>
      </div>
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
      company: 'EFT Global LLC',
      period: '2021 - 2022',
      description:
        'Started my professional journey building MVPs for startups, with initial experience in WordPress site maintenance during my internship',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Experience</h2>
          <p className="text-muted-foreground text-sm">Professional growth and delivery</p>
        </div>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-card/70 border-border rounded-2xl border p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-foreground font-semibold">{exp.title}</h3>
                <p className="text-primary text-sm font-medium">{exp.company}</p>
              </div>
              <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {exp.period}
              </span>
            </div>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{exp.description}</p>
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

  const certificates = [
    {
      name: 'Azure Fundamentals',
      institution: 'Microsoft',
      issuedDate: '2021',
    },
    {
      name: 'Technical Programming Competition - Participant',
      institution: 'Codegoda',
      issuedDate: '2022',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Education</h2>
          <p className="text-muted-foreground text-sm">Academic foundation and milestones</p>
        </div>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-card/70 border-border rounded-2xl border p-5 shadow-sm">
            <h3 className="text-foreground font-semibold">{edu.degree}</h3>
            <p className="text-primary mt-1 text-sm font-medium">{edu.institution}</p>
            <p className="text-muted-foreground mt-2 text-xs font-medium tracking-wide uppercase">
              {edu.period}
            </p>
          </div>
        ))}
      </div>

      <hr />
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Certifications</h2>
          <p className="text-muted-foreground text-sm">Credential for professional expertise</p>
        </div>
      </div>

      <div className="space-y-4">
        {certificates.map((edu, index) => (
          <div key={index} className="bg-card/70 border-border rounded-2xl border p-5 shadow-sm">
            <h3 className="text-foreground font-semibold">{edu.name}</h3>
            <p className="text-primary mt-1 text-sm font-medium">{edu.institution}</p>
            <p className="text-muted-foreground mt-2 text-xs font-medium tracking-wide uppercase">
              {edu.issuedDate}
            </p>
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
      tech: 'Next Js, Redis, Neon',
      description: 'A simple blogging application with modern AI features integration.',
      link: 'https://modern-summary-app.vercel.app/',
    },
    {
      name: 'Diagram Tool',
      tech: 'React, CloudFlare Worker, Open AI',
      description: 'An AI chat agent for understanding tech concepts through diagrams.',
      link: 'https://ai-design-tool.prakashakrakr.workers.dev/',
    },
    {
      name: 'CMS Website',
      tech: 'Contentful, CMS, Next Js, GraphQL',
      description:
        'A marketing-focused website built with Contentful CMS and GraphQL, enabling dynamic content management and fast, flexible content delivery.',
      link: 'https://headless-nextjs.akrhub.co',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <FolderOpen className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Projects</h2>
          <p className="text-muted-foreground text-sm">Selected work and product experiments</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            onClick={(event) => event.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="bg-card/70 border-border hover:border-primary/40 group rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-foreground font-semibold">{project.name}</h3>
              <span className="text-primary text-xs font-medium">Live</span>
            </div>
            <p className="text-primary mt-2 text-xs font-medium tracking-wide uppercase">
              {project.tech}
            </p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {project.description}
            </p>
            <p className="text-primary group-hover:text-primary/80 mt-4 text-sm font-semibold transition-colors">
              Open project →
            </p>
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
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <Code className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Skills</h2>
          <p className="text-muted-foreground text-sm">Core tools and technologies</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((cat, index) => (
          <div key={index} className="bg-card/70 border-border rounded-2xl border p-5 shadow-sm">
            <h3 className="text-foreground mb-3 font-semibold">{cat.category}</h3>
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
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-foreground text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground text-sm">Let’s build something meaningful</p>
        </div>
      </div>

      <div className="bg-card/70 border-border rounded-2xl border p-6 shadow-sm">
        <p className="text-muted-foreground leading-relaxed">
          I am always open to discussing new projects, creative ideas, or opportunities to be part
          of your visions. Feel free to reach out to me!
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="text-foreground mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-xl border px-4 py-2.5 focus:ring-1 focus:outline-none"
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
              className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-xl border px-4 py-2.5 focus:ring-1 focus:outline-none"
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
              className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-xl border px-4 py-2.5 focus:ring-1 focus:outline-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-2.5 font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
