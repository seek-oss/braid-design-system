import React from 'react';
import { ErrorIcon } from '../..';
import { render } from 'react-testing-library';
import forEachTheme from '../../../test/utils/forEachTheme';

describe('ErrorIcon', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <ErrorIcon />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Sized', () => {
      const { container } = render(
        <ThemeProvider>
          <ErrorIcon size="large" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Inline', () => {
      const { container } = render(
        <ThemeProvider>
          <ErrorIcon inline />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
