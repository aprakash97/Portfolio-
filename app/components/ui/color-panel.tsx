import { SettingsIcon } from 'lucide-react';
import React, { useState } from 'react';

interface ColorPanelProps {
  changeTheme(color: string): void;
  theme: string;
}

const ColorPanel = ({ changeTheme, theme }: ColorPanelProps) => {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);
  return (
    // <div className="fixed top-1/2 left-0 -translate-y-1/2">

    <div className="fixed top-1/2 left-0 z-50 -translate-y-1/2">
      <div className="flex">
        <div
          className={`${toggleOpen === false ? 'hidden cursor-pointer' : 'pointer-events-auto flex min-w-25 justify-center gap-2 rounded-b-sm border-2 border-solid border-black'} ${theme === 'dark' ? 'bg-gray-500' : 'bg-background'}`}
        >
          <div className="min-w-5">
            <button
              value="light"
              type="button"
              onClick={(e) => {
                changeTheme(e.currentTarget.value);
                setToggleOpen(false);
              }}
            >
              Light
            </button>
            <div
              className={`my-0.5 h-2 border-s-amber-700 ${theme === 'light' ? 'bg-red-500' : 'bg-white'} `}
            />
          </div>
          <div className="min-w-5">
            <button
              value="dark"
              type="button"
              onClick={(e) => {
                changeTheme(e.currentTarget.value);
                setToggleOpen(false);
              }}
            >
              Dark
            </button>
            <div
              className={`my-0.5 h-2 border-s-gray-700 ${theme === 'dark' ? 'bg-black' : 'bg-gray-500'} `}
            />
          </div>
        </div>
        <SettingsIcon
          size={50}
          className="h-5 border-solid border-zinc-400 bg-red-700"
          onClick={() => setToggleOpen(!toggleOpen)}
        />
      </div>
    </div>
  );
};

export default ColorPanel;
