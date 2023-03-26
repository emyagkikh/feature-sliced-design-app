import React, { type FunctionComponent, useCallback, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'widgets/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';

interface NavbarProps {
  className?: string
}

export const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const portalContainerRef = useRef<HTMLElement>(document.getElementById('modal-portal'));

  const toggleModalOpenState = useCallback(() => {
    setIsLoginModalOpen((prev) => !prev);
  }, []);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.nControls}>
        <Button onClick={toggleModalOpenState} theme={ButtonTheme.OUTLINE} size={ButtonSize.M}>
          {t('navbar.login')}
        </Button>
      </div>
      {portalContainerRef.current && (
        <Portal container={portalContainerRef.current}>
          <Modal isOpen={isLoginModalOpen} onClose={toggleModalOpenState}>
            {'asdfsdf'}
          </Modal>
        </Portal>
      )}
    </header>
  );
};
