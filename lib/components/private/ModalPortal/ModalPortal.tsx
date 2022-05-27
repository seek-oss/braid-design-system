import React, { ReactNode, useState, useEffect } from 'react';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import * as styles from './ModalPortal.css';

interface ModalPortalProps {
  children: ReactNode;
  enabled?: boolean;
}
export const ModalPortal = ({ children, enabled = true }: ModalPortalProps) => {
  const [modalElement, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalContainerId = 'braid-modal-container';
    let element = document.getElementById(modalContainerId);

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', modalContainerId);
      element.setAttribute('class', styles.fixedStackingContext);

      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  if (!modalElement) {
    return null;
  }

  return <BraidPortal container={modalElement}>{children}</BraidPortal>;
};
