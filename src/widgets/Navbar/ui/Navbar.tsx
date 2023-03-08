import React, { type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
    </header>
  );
};
