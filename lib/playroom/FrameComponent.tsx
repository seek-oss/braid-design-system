import '../../reset';
import React, { useEffect, Fragment, ReactNode } from 'react';
import {
  BraidProvider,
  makeLinkComponent,
  ToastProvider,
  useResponsiveValue,
} from '../components';
import { BraidTheme } from '../themes/BraidTheme';
import { PlayroomStateProvider } from './playroomState';
import { darkMode } from '../css/atoms/sprinkles.css';

interface Props {
  theme: BraidTheme;
  children: ReactNode;
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

export default ({ theme, children }: Props) => {
  // TODO: COLORMODE RELEASE
  // Remove color mode toggle
  useEffect(() => {
    let code = '';
    const darkTrigger = 'braiddark';
    const lightTrigger = 'braidlight';
    const longestTrigger = Math.max(lightTrigger.length, darkTrigger.length);
    const colorModeToggle = (ev: KeyboardEvent) => {
      code += ev.key;
      if (code.substr(code.length - darkTrigger.length) === darkTrigger) {
        document.documentElement.classList.add(darkMode);
        code = '';
      }

      if (code.substr(code.length - lightTrigger.length) === lightTrigger) {
        document.documentElement.classList.remove(darkMode);
        code = '';
      }

      if (code.length > longestTrigger) {
        code = code.substr(code.length - longestTrigger);
      }
    };
    window.addEventListener('keydown', colorModeToggle);

    return () => {
      window.removeEventListener('keydown', colorModeToggle);
    };
  }, []);

  return (
    <Fragment>
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
    </Fragment>
  );
};
