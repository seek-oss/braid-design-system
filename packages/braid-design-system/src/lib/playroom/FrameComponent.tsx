import { type ReactNode, useEffect, useMemo } from 'react';

import {
  BraidProvider,
  makeLinkComponent,
  ToastProvider,
  useResponsiveValue,
} from '../components';
import type { BraidTheme } from '../themes/makeBraidTheme';

import SpaceDebugContext from './SpaceDebugContext';
import { PlayroomStateProvider } from './playroomState';

import { darkMode as darkModeClass } from '../css/atoms/sprinkles.css';

interface Props {
  theme: BraidTheme;
  children: ReactNode;
  frameSettings: Record<string, boolean>;
}

const PlayroomLink = makeLinkComponent(
  ({ href, onClick, ...restProps }, ref) => (
    <a
      ref={ref}
      href={href ?? '#'}
      onClick={(e) => {
        if (!href) {
          e.preventDefault();
        }

        if (onClick) {
          onClick(e);
        }
      }}
      {...restProps}
    />
  ),
);

const ResponsiveReady = ({ children }: { children: ReactNode }) => {
  const responsiveReady = useResponsiveValue()({ mobile: true }) ?? false;

  return <>{responsiveReady ? children : null}</>;
};

export default ({ theme, children, frameSettings }: Props) => {
  const stackDebug = useMemo(
    () => frameSettings.stackDebug,
    [frameSettings.stackDebug],
  );

  const darkMode = useMemo(
    () => frameSettings.darkMode,
    [frameSettings.darkMode],
  );

  // TODO: COLORMODE RELEASE
  // Remove color mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(darkModeClass);
    } else {
      document.documentElement.classList.remove(darkModeClass);
    }
  }, [darkMode]);

  return (
    <SpaceDebugContext.Provider value={stackDebug}>
      <div
        dangerouslySetInnerHTML={{
          __html: theme.webFonts.map((font) => font.linkTag).join(''),
        }}
      />
      <PlayroomStateProvider>
        <BraidProvider theme={theme} linkComponent={PlayroomLink}>
          <ToastProvider>
            <ResponsiveReady>{children}</ResponsiveReady>
          </ToastProvider>
        </BraidProvider>
      </PlayroomStateProvider>
    </SpaceDebugContext.Provider>
  );
};
