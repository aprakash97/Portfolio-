'use client';

import ColorPanel from './components/ui/color-panel';
import type { PaletteName, ThemeMode } from './components/ui/color-panel';
import { Portfolio } from './components/ui/portfolio';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [palette, setPalette] = useState<PaletteName>('violet');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const savedPalette = window.localStorage.getItem('portfolio-palette');
    queueMicrotask(() => {
      if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
      if (['violet', 'ocean', 'emerald', 'rose', 'amber'].includes(savedPalette ?? '')) {
        setPalette(savedPalette as PaletteName);
      }
    });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.palette = palette;
    window.localStorage.setItem('portfolio-theme', theme);
    window.localStorage.setItem('portfolio-palette', palette);
  }, [theme, palette]);

  return (
    <div className="bg-background text-foreground min-h-screen w-full transition-colors duration-300">
      <ColorPanel
        theme={theme}
        palette={palette}
        onThemeChange={setTheme}
        onPaletteChange={setPalette}
      />
      <Portfolio />
    </div>
  );
}
