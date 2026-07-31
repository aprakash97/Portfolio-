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
  return (
    <div className="bg-card flex h-full min-h-0 flex-col justify-between overflow-y-auto rounded-lg p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-900">
          {name}
        </h1>
        <p className="text-muted-foreground mt-1 text-lg">{title}</p>

        <div className="relative mx-auto my-6 aspect-square w-full max-w-[220px] overflow-hidden rounded-full lg:my-8">
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-cyan-400/60 via-transparent to-rose-500/60" />
          <Image src={imageUrl} alt={name} fill className="object-cover" crossOrigin="anonymous" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-card-foreground flex text-sm lg:text-base">
          <ArrowBigRightDash className="mx-5" /> <span className="mx-3 font-medium">Name:</span>{' '}
          {name}
        </p>
        <p className="text-card-foreground flex text-sm lg:text-base">
          <ArrowBigRightDash className="mx-5" />
          <span className="mx-3 font-medium">Position:</span> {title}
        </p>
        <p className="text-card-foreground flex text-sm lg:text-base">
          <ArrowBigRightDash className="mx-5" />
          <span className="mx-3 font-medium">Phone:</span> {phone}
        </p>
        <p className="text-card-foreground flex text-sm lg:text-base">
          <ArrowBigRightDash className="mx-5" /> <span className="mx-3 font-medium">Email:</span>{' '}
          {email}
        </p>
        <p className="text-card-foreground flex text-sm lg:text-base">
          <ArrowBigRightDash className="mx-5" />
          <span className="mx-3 font-medium">Location:</span> {location}
        </p>

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
          className="m-1 my-2 flex min-w-10 justify-center rounded-full bg-blue-700 p-2 text-center text-amber-50"
          href={'/Prakash_Anandakumar_CV.pdf'}
          target="_blank"
        >
          <p>Resume</p>
          <div className="mx-1 cursor-pointer">
            <Download />
          </div>
        </Link>
      </div>
    </div>
  );
}
