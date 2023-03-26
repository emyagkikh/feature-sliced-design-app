import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeResult {
  theme?: ThemeEnum
  toggleTheme: () => void
}

const setBodyThemeClass = (theme: ThemeEnum) => {
  document.body.classList.toggle('light', theme === ThemeEnum.LIGHT);
  document.body.classList.toggle('dark', theme === ThemeEnum.DARK);
};

export function useTheme (): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = (theme === ThemeEnum.LIGHT) ? ThemeEnum.DARK : ThemeEnum.LIGHT;

    if (typeof setTheme === 'function') {
      setTheme(newTheme);
    }

    setBodyThemeClass(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  setBodyThemeClass(theme);

  return {
    theme,
    toggleTheme,
  };
}
