import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useStyles } from 'sku/react-treat';

import { useBoxStyles } from '../Box/useBoxStyles';
import * as styleRefs from '../HiddenVisually/HiddenVisually.treat';

let announcementCounter = 0;

interface AnnouncementProps {
  children: string | undefined | null;
}

export const Announcement = ({ children }: AnnouncementProps) => {
  const [announcementElement, setElement] = useState<HTMLElement | null>(null);
  const styles = useStyles(styleRefs);
  const className = useBoxStyles({
    component: 'div',
    position: 'absolute',
    overflow: 'hidden',
    className: styles.root,
  });

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
