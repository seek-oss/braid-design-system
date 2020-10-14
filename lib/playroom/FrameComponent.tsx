import '../reset';
import React, { Fragment, ReactNode } from 'react';
import { BraidProvider, ToastProvider } from '../components';
import { BraidTheme } from '../themes/BraidTheme.d';

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
    <BraidProvider theme={theme}>
      <ToastProvider>
        <Fragment>{children}</Fragment>
      </ToastProvider>
    </BraidProvider>
  </Fragment>
);
