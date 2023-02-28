import React, { type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import ThemeDarkIcon from 'shared/assets/icons/themeDark.svg';
import ThemeLightIcon from 'shared/assets/icons/themeLight.svg';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FunctionComponent<IThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === ThemeEnum.DARK ? <ThemeDarkIcon/> : <ThemeLightIcon/>}
    </Button>
  );
};
