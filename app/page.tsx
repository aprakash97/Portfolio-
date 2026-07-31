'use client';

import ColorPanel from './components/ui/color-panel';
import { Portfolio } from './components/ui/portfolio';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const changeTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
  };

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-foreground' : 'bg-background'}`}>
      <ColorPanel changeTheme={changeTheme} theme={theme} />
      <Portfolio />
    </div>
  );
}
