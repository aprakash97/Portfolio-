'use client';

import { Check, Moon, Palette, Sun } from 'lucide-react';
import { useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type PaletteName = 'violet' | 'ocean' | 'emerald' | 'rose' | 'amber';

const palettes: { id: PaletteName; label: string; color: string }[] = [
  { id: 'violet', label: 'Violet', color: '#7667f5' },
  { id: 'ocean', label: 'Ocean', color: '#168aad' },
  { id: 'emerald', label: 'Emerald', color: '#159a75' },
  { id: 'rose', label: 'Rose', color: '#e45b82' },
  { id: 'amber', label: 'Amber', color: '#d18a25' },
];

interface ColorPanelProps {
  theme: ThemeMode;
  palette: PaletteName;
  onThemeChange: (theme: ThemeMode) => void;
  onPaletteChange: (palette: PaletteName) => void;
}

export default function ColorPanel({ theme, palette, onThemeChange, onPaletteChange }: ColorPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      {open && (
        <section aria-label="Appearance settings" className="bg-card text-card-foreground border-border mb-3 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border p-5 shadow-2xl shadow-black/15">
          <div className="mb-4">
            <h2 className="text-sm font-semibold">Appearance</h2>
            <p className="text-muted-foreground mt-1 text-xs">Make this space feel like yours.</p>
          </div>
          <div className="bg-muted grid grid-cols-2 gap-1 rounded-xl p-1">
            {(['light', 'dark'] as const).map((mode) => (
              <button key={mode} type="button" onClick={() => onThemeChange(mode)} aria-pressed={theme === mode}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium capitalize transition-colors ${theme === mode ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                {mode === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}{mode}
              </button>
            ))}
          </div>
          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">Accent palette</p>
            <div className="grid grid-cols-5 gap-2">
              {palettes.map((item) => (
                <button key={item.id} type="button" onClick={() => onPaletteChange(item.id)} aria-label={`${item.label} palette`} aria-pressed={palette === item.id} title={item.label}
                  className="ring-offset-card flex h-9 w-9 items-center justify-center rounded-full ring-offset-2 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ backgroundColor: item.color }}>
                  {palette === item.id && <Check aria-hidden="true" className="h-4 w-4 text-white" />}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close appearance settings' : 'Open appearance settings'}
        className="bg-primary text-primary-foreground ml-auto flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-primary/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
        <Palette className="h-5 w-5" />
      </button>
    </div>
  );
}
