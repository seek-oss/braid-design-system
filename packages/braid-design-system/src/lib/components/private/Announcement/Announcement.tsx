import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { atoms } from '../../../css/atoms/atoms';

import * as styles from '../../HiddenVisually/HiddenVisually.css';

let announcementCounter = 0;
export const containerPrefix = 'braid-announcement-container';

interface AnnouncementProps {
  children: string | undefined | null;
}

export const Announcement = ({ children }: AnnouncementProps) => {
  const [announcementElement, setElement] = useState<HTMLElement | null>(null);
  const className = [
    atoms({
      reset: 'div',
      position: 'absolute',
      bottom: 0,
      overflow: 'hidden',
    }),
    styles.root,
  ].join(' ');

  useEffect(() => {
    const announcementContainerId = `${containerPrefix}-${announcementCounter++}`;

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

  // Portal ensures screen reader announcements complete,
  // even if the parent component unmounts
  return createPortal(children, announcementElement);
};
