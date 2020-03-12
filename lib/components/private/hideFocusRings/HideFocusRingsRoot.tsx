import React, { useState, useEffect, ReactNode } from 'react';

export const hideFocusRingsDataAttribute = 'data-braid-hidefocusrings';

export interface HideFocusRingsRootProps {
  children: ReactNode;
}

export const HideFocusRingsRoot = ({ children }: HideFocusRingsRootProps) => {
  const [hideFocusRings, setHideFocusRings] = useState(false);

  useEffect(() => {
    const hide = () => setHideFocusRings(true);
    const show = () => setHideFocusRings(false);

    window.addEventListener('mousemove', hide);
    window.addEventListener('keydown', show);

    return () => {
      window.removeEventListener('mousemove', hide);
      window.removeEventListener('keydown', show);
    };
  }, []);

  return (
    <div {...(hideFocusRings ? { [hideFocusRingsDataAttribute]: true } : {})}>
      {children}
    </div>
  );
};
