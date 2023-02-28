import { type FunctionComponent } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FunctionComponent<IAppLinkProps> = (props) => {
  const { className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames(cls.AppLink, {}, [cls[theme], className])}
    >
      {children}
    </Link>
  );
};
