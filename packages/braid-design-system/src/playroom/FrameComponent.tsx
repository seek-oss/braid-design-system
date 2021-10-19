import '../../reset';
import type { ReactNode } from 'react';
import React, { Fragment } from 'react';
import {
  BraidProvider,
  makeLinkComponent,
  ToastProvider,
  useResponsiveValue,
} from '../components';
import type { BraidTheme } from '../themes/BraidTheme';
import { PlayroomStateProvider } from './playroomState';

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

export default ({ theme, children }: Props) => (
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
