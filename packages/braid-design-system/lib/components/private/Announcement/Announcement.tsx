import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { atoms } from '../../../css/atoms/atoms';
import * as styles from '../../HiddenVisually/HiddenVisually.css';

let announcementCounter = 0;

interface AnnouncementProps {
  children: string | undefined | null;
}

export const Announcement = ({ children }: AnnouncementProps) => {
  const [announcementElement, setElement] = useState<HTMLElement | null>(null);
  const className = [
    atoms({
      reset: 'div',
      position: 'absolute',
      overflow: 'hidden',
    }),
    styles.root,
  ].join(' ');

  useEffect(() => {
    const announcementContainerId = `braid-announcement-container-${announcementCounter++}`;

    const element = document.createElement('div');
    element.setAttribute('id', announcementContainerId);
    element.setAttribute('class', className);
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');

    document.body.appendChild(element);

    setElement(element);

    return () => {
      document.body.removeChild(element);
    };
  }, [className]);

  if (!announcementElement) {
    return null;
  }

  return createPortal(children, announcementElement);
};
