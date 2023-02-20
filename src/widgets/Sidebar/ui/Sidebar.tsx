import React, {FunctionComponent} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import cls from './Sidebar.module.scss';
import {LangSwitcher} from "features/LangSwitcher";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FunctionComponent<ISidebarProps> = ({className}) => {
  return (
    <div className={classNames(cls.Sidebar, {}, [className])}>
      <LangSwitcher className={cls.sItem}/>
      <ThemeSwitcher className={cls.sItem}/>
    </div>
  );
};
