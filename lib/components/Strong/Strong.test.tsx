import React from 'react';
import { Strong } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Strong', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <Strong>Children</Strong>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
