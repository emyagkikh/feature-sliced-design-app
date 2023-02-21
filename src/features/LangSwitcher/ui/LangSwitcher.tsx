import React, { type FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FunctionComponent<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])} onClick={onClick}>
      {t('Change lang')}
    </Button>
  );
};
