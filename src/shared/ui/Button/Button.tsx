import { type ButtonHTMLAttributes, type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FunctionComponent<IButtonProps> = (props) => {
  const { className, theme, children, ...other } = props;

  return (
    <button
      {...other}
      type={'button'}
      className={classNames(
        cls.Button,
        {},
        [
          theme && cls[theme],
          className,
        ],
      )}
    >
      {children}
    </button>
  );
};
