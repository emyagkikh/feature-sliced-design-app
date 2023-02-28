import React, { type FunctionComponent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FunctionComponent<ISidebarProps> = ({ className }) => {
  const [isMinified, setIsMinified] = useState(false);

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(
        cls.Sidebar,
        { [cls.Sidebar_minified]: isMinified },
        [className],
      )}>
      <Button
        data-testid={'sidebar-btn-toggle'}
        onClick={() => {
          setIsMinified(!isMinified);
        }}>Minify</Button>
      <LangSwitcher className={cls.sItem}/>
      <ThemeSwitcher className={cls.sItem}/>
    </div>
  );
};
