import '../reset';
import React, { Fragment, ReactNode } from 'react';
import { BraidProvider, ToastProvider } from '../components';
import { BraidTheme } from '../themes/BraidTheme.d';
import { PlayroomStateProvider } from './playroomState';

interface Props {
  theme: BraidTheme;
  children: ReactNode;
}

export default ({ theme, children }: Props) => (
  <Fragment>
    <div
      dangerouslySetInnerHTML={{
        __html: theme.webFonts.map((font) => font.linkTag).join(''),
      }}
    />
    <PlayroomStateProvider>
      <BraidProvider theme={theme}>
        <ToastProvider>
          <Fragment>{children}</Fragment>
        </ToastProvider>
      </BraidProvider>
    </PlayroomStateProvider>
  </Fragment>
);
