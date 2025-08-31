import { useThemeStore } from '@/stores/themeStore';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);
  return { isDarkMode, toggleDarkMode };
};
