import React from 'react';
import { ChevronIcon } from '../..';
import { render } from 'react-testing-library';
import forEachTheme from '../../../test/utils/forEachTheme';

describe('ChevronIcon', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Sized', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon size="large" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Inline', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon inline />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Up', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon direction="up" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Down', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon direction="down" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Left', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon direction="left" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Right', () => {
      const { container } = render(
        <ThemeProvider>
          <ChevronIcon direction="right" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
