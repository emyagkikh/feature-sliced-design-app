import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface useThemeResult {
  theme?: ThemeEnum
  toggleTheme: () => void
}

export function useTheme (): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = (theme === ThemeEnum.LIGHT) ? ThemeEnum.DARK : ThemeEnum.LIGHT;

    if (typeof setTheme === 'function') {
      setTheme(newTheme);
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
