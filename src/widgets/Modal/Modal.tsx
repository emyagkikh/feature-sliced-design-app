import { type FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface IModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

enum EModalState {
  PREPARED,
  OPENING,
  OPENED,
  CLOSING,
  CLOSED,
}

export const Modal: FunctionComponent<IModalProps> = (props) => {
  const {
    className,
    children,
    onClose,
  } = props;

  const [modalState, setModalState] = useState(EModalState.PREPARED);
  const contentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.isOpen) {
      setModalState(EModalState.OPENING);
    }
  }, [props.isOpen]);

  const initModalClosing = useCallback(() => {
    setModalState(EModalState.CLOSING);
  }, []);

  const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      initModalClosing();
    }
  }, [initModalClosing]);

  const onCloseButtonClickHandler = initModalClosing;

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, []);

  useEffect(() => {
    const contentEl = contentElRef.current;

    if (contentEl) {
      contentEl.addEventListener('animationend', (e: AnimationEvent) => {
        switch (e.animationName) {
          case cls['content-upscale']: {
            setModalState(EModalState.OPENED);
            break;
          }
          case cls['content-downscale']: {
            setModalState(EModalState.CLOSED);
            break;
          }
        }
      });
    }
  }, [modalState]);

  useEffect(() => {
    if (modalState === EModalState.OPENED) {
      window.addEventListener('keydown', onKeyDownHandler);
    }

    if (modalState === EModalState.CLOSED) {
      window.removeEventListener('keydown', onKeyDownHandler);

      if (typeof onClose === 'function') {
        onClose();
      }
    }
  }, [modalState, onKeyDownHandler, initModalClosing, onClose]);

  if (modalState === EModalState.CLOSED || modalState === EModalState.PREPARED) {
    return null;
  }

  return (
    <div className={
      classNames(cls.mOverlay,
        {
          [cls.mOverlay_opening]: modalState === EModalState.OPENING,
          [cls.mOverlay_opened]: modalState === EModalState.OPENED,
          [cls.mOverlay_closing]: modalState === EModalState.CLOSING,
        },
        [className],
      )}>
      <Button className={cls.moButtonClose} onClick={onCloseButtonClickHandler}>x</Button>
      <div className={cls.moContent} ref={contentElRef}>
        {children}
      </div>
    </div>
  );
};
