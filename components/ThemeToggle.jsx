'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useState } from 'react';
import '../app/globals.css';

const themes = {
  light: 'emerald',
  dark: 'dim',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button className='theme-toggle' onClick={toggleTheme}>
      {theme === themes.light ? (
        <BsMoonFill className='w-6 h-6' />
      ) : (
        <BsSunFill className='w-6 h-6' />
      )}
    </button>
  );
};

export default ThemeToggle;
