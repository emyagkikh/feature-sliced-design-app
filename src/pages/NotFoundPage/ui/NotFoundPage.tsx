import { type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface INotFoundPageProps {
  className?: string
}

const NotFoundPage: FunctionComponent<INotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('notFound');

  return (
    <div className={classNames(cls.NotFound, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};

export default NotFoundPage;
