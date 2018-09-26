import React from 'react';
import { TickCircleIcon } from '../..';
import { render } from 'react-testing-library';
import forEachTheme from '../../../test/utils/forEachTheme';

describe('TickCircleIcon', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <TickCircleIcon />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Sized', () => {
      const { container } = render(
        <ThemeProvider>
          <TickCircleIcon size="large" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Inline', () => {
      const { container } = render(
        <ThemeProvider>
          <TickCircleIcon inline />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
