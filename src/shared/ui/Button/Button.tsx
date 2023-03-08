import { type ButtonHTMLAttributes, type FunctionComponent } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  isSquare?: boolean
}

export const Button: FunctionComponent<IButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.BACKGROUND,
    size = ButtonSize.M,
    isSquare,
    children,
    ...other
  } = props;

  const classNameMods: Mods = {
    [cls[theme]]: Boolean(theme),
    [cls[size]]: Boolean(size),
    [cls.square]: isSquare,
  };

  return (
    <button
      {...other}
      type={'button'}
      className={classNames(
        cls.Button,
        classNameMods,
        [
          className,
        ],
      )}
    >
      {children}
    </button>
  );
};
