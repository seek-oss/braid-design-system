import { palette } from 'braid-src/lib/color/palette';
import clsx from 'clsx';
import type { ReactNode } from 'react';

const styleContent = `
    .noAnimation * {
      animation-delay: -0.0001s !important;
      animation-play-state: paused !important;
      animation-duration: 0s !important;
      animation-fill-mode: none !important;
      transition-delay: 0s !important;
      transition-duration: 0s !important;
    }
    .artboard {
      --dotColor: ${palette.grey[100]};
      --dotSpace: 8px;
      --bgOffset: calc((var(--dotSpace) / 2) * -1);
      --bgColor: white;
      background-color: var(--bgColor);
      background-image: radial-gradient(var(--dotColor) 1px, transparent 0);
      background-size: var(--dotSpace) var(--dotSpace);
      background-position: var(--bgOffset) var(--bgOffset);
      padding: 12px;
    }
    .darkMode {
      --dotColor: ${palette.grey[700]};
      --bgColor: ${palette.grey[800]};
    }
  `;

export const Artboard = ({
  children,
  darkMode = false,
}: {
  children: ReactNode;
  darkMode: boolean;
}) => (
  <>
    <style type="text/css">{styleContent}</style>
    <div
      className={clsx({
        noAnimation: true,
        artboard: true,
        darkMode,
      })}
    >
      {children}
    </div>
  </>
);
