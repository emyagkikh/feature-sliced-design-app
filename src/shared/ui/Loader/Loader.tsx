import { type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string
}

export const Loader: FunctionComponent<ILoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}/>
  );
};
