import { type FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  container: HTMLElement
}

export const Portal: FunctionComponent<IPortalProps> = ({ children, container }) => createPortal(children, container);
