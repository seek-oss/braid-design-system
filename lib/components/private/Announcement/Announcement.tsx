import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { atoms } from '../../../css/atoms/atoms';
import * as styles from '../../HiddenVisually/HiddenVisually.css';

let announcementCounter = 0;

interface AnnouncementProps {
  children: string | undefined | null;
}

const className = [
  atoms({
    reset: 'div',
    position: 'absolute',
    overflow: 'hidden',
  }),
  styles.root,
].join(' ');

export const Announcement = ({ children }: AnnouncementProps) => {
  const [announcementElement, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const announcementContainerId = 'braid-announcement-container';
    let container = document.getElementById(announcementContainerId);
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', announcementContainerId);
      container.setAttribute('class', className);
      document.body.appendChild(container);
    }

    const announcement = document.createElement('div');
    announcement.setAttribute('id', `announcement-${announcementCounter++}`);
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    container.appendChild(announcement);

    setElement(announcement);

    return () => {
      if (container) {
        container.removeChild(announcement);

        if (container.children.length === 0) {
          document.body.removeChild(container);
          announcementCounter = 0;
        }
      }
    };
  }, []);

  if (!announcementElement) {
    return null;
  }

  return createPortal(children, announcementElement);
};
