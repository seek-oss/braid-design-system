import React from 'react';
import { TickIcon } from '../..';
import { render } from 'react-testing-library';
import forEachTheme from '../../../test/utils/forEachTheme';

describe('TickIcon', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <TickIcon />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Sized', () => {
      const { container } = render(
        <ThemeProvider>
          <TickIcon size="large" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Inline', () => {
      const { container } = render(
        <ThemeProvider>
          <TickIcon inline />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
