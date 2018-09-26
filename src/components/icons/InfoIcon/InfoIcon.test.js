import React from 'react';
import { InfoIcon } from '../..';
import { render } from 'react-testing-library';
import forEachTheme from '../../../test/utils/forEachTheme';

describe('InfoIcon', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <InfoIcon />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Sized', () => {
      const { container } = render(
        <ThemeProvider>
          <InfoIcon size="large" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Inline', () => {
      const { container } = render(
        <ThemeProvider>
          <InfoIcon inline />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
