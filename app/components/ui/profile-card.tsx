'use client';

import { Github, Linkedin, Instagram, ArrowBigRightDash, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileCardProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  imageUrl: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export function ProfileCard({
  name,
  title,
  phone,
  email,
  location,
  imageUrl,
  github,
  linkedin,
  instagram,
}: ProfileCardProps) {
  const details = [
    { label: 'Name', value: name },
    { label: 'Position', value: title },
    { label: 'Phone', value: phone },
    { label: 'Email', value: email },
    { label: 'Location', value: location },
  ];

  return (
    <div className="bg-card border-border flex h-full min-h-0 flex-col justify-between rounded-3xl border p-6 shadow-xl shadow-black/[0.04] sm:p-7">
      <div>
        <p className="text-primary mb-2 text-xs font-semibold tracking-[0.2em] uppercase">Portfolio</p>
        <h1 className="text-2xl font-bold tracking-tight text-card-foreground lg:text-3xl">
          {name}
        </h1>
        <p className="text-muted-foreground mt-1 text-lg">{title}</p>

        <div className="relative mx-auto my-6 aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-primary/10 ring-4 ring-primary/10 lg:my-8">
          <Image src={imageUrl} alt={name} fill priority sizes="(min-width: 1024px) 220px, 60vw" className="object-cover" />
        </div>
      </div>

      <div className="min-w-0 space-y-2.5">
        {details.map(({ label, value }) => (
          <div key={label} className="grid min-w-0 grid-cols-[1rem_minmax(0,1fr)] items-start gap-x-3 text-sm lg:text-[0.9375rem]">
            <ArrowBigRightDash aria-hidden="true" className="mt-0.5 h-4 w-4 text-primary" />
            <div className="grid min-w-0 grid-cols-[4.5rem_minmax(0,1fr)] gap-x-2">
              <span className="font-medium text-muted-foreground">{label}</span>
              <span className="min-w-0 [overflow-wrap:anywhere]">{value}</span>
            </div>
          </div>
        ))}

        <div className="flex justify-evenly gap-4 pt-4">
          {github && (
            <a
              href={github}
              title={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-card-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              title={linkedin}
              rel="noopener noreferrer"
              className="text-card-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              title={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-card-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          )}
        </div>
        <Link
          className="bg-primary text-primary-foreground hover:bg-primary/90 m-1 my-2 flex min-w-10 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors"
          href={'/Prakash_Anandakumar_CV.pdf'}
          target="_blank"
        >
          <p>Download résumé</p>
          <Download className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
