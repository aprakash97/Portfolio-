import type { Metadata } from 'next';
import '../app/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Prakash Anandakumar | Software Engineer',
  description:
    'Portfolio of Prakash Anandakumar, a software engineer building modern web experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
