import { type FunctionComponent, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface IPageLoaderProps {
  className?: string
}

export const PageError: FunctionComponent<IPageLoaderProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={cls.peMessage}>
        {t('Something goes wrong!')}
      </p>
      <Button onClick={reloadPage}>
        {t('Reload page')}
      </Button>
    </div>
  );
};
