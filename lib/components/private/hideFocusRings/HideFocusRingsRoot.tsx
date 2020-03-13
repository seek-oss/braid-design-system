import React, { useState, useEffect, ReactNode } from 'react';

export const hideFocusRingsDataAttribute = 'data-braid-hidefocusrings';

export interface HideFocusRingsRootProps {
  children: ReactNode;
}

export const HideFocusRingsRoot = ({ children }: HideFocusRingsRootProps) => {
  const [hideFocusRings, setHideFocusRings] = useState(false);

  useEffect(() => {
    const eventName = hideFocusRings ? 'keydown' : 'mousemove';
    const toggleFocusRings = () => setHideFocusRings(x => !x);

    window.addEventListener(eventName, toggleFocusRings);

    return () => {
      window.removeEventListener(eventName, toggleFocusRings);
    };
  }, [hideFocusRings]);

  return (
    <div {...(hideFocusRings ? { [hideFocusRingsDataAttribute]: true } : {})}>
      {children}
    </div>
  );
};
