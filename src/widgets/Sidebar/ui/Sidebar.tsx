import React, { type FunctionComponent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FunctionComponent<ISidebarProps> = ({ className }) => {
  const [isMinified, setIsMinified] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(
        cls.Sidebar,
        { [cls.Sidebar_minified]: isMinified },
        [className],
      )}>
      <div className={cls.sNavRoutes}>
        <AppLink to={RoutePath[AppRoutes.MAIN]}>
          {t('Main page')}
        </AppLink>
        <AppLink to={RoutePath[AppRoutes.ABOUT]}>
          {t('About page')}
        </AppLink>
      </div>
      <div className={cls.sSwitchers}>
        <ThemeSwitcher className={cls.sItem}/>
        <LangSwitcher className={cls.sItem}/>
      </div>
      <Button
        data-testid={'sidebar-btn-toggle'}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.L}
        isSquare
        onClick={() => {
          setIsMinified(!isMinified);
        }}
      >
        {isMinified ? '>' : '<'}
      </Button>
    </div>
  );
};
