import React, { type FunctionComponent } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.nLinks}>
        <AppLink to={'/'} className={cls.nlItem}>
          {t('Main page')}
        </AppLink>
        <AppLink to={'/about'} className={cls.nlItem} theme={AppLinkTheme.SECONDARY}>
          {t('About page')}
        </AppLink>
      </div>
    </header>
  );
};
