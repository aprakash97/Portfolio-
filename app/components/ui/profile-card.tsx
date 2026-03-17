'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

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
    <div className="bg-card flex h-full flex-col justify-between rounded-lg p-6 lg:p-8">
      <div>
        <h1 className="text-card-foreground text-2xl font-bold lg:text-3xl">{name}</h1>
        <p className="text-muted-foreground mt-1 text-lg">{title}</p>

        <div className="relative mx-auto my-6 aspect-square w-full max-w-[320px] overflow-hidden rounded-lg lg:my-8">
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-cyan-400/60 via-transparent to-rose-500/60" />
          <Image src={imageUrl} alt={name} fill className="object-cover" crossOrigin="anonymous" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-card-foreground text-sm lg:text-base">
          <span className="font-medium">Name:</span> {name}
        </p>
        <p className="text-card-foreground text-sm lg:text-base">
          <span className="font-medium">Position:</span> {title}
        </p>
        <p className="text-card-foreground text-sm lg:text-base">
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p className="text-card-foreground text-sm lg:text-base">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-card-foreground text-sm lg:text-base">
          <span className="font-medium">Location:</span> {location}
        </p>

        <div className="flex gap-4 pt-4">
          {github && (
            <a
              href={github}
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-card-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
