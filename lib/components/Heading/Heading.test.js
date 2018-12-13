import React from 'react';
import { Text } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Text', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <Text>Children</Text>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Size', () => {
      const { container } = render(
        <ThemeProvider>
          <Text size="large">Children</Text>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Color', () => {
      const { container } = render(
        <ThemeProvider>
          <Text color="positive">Children</Text>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Weight', () => {
      const { container } = render(
        <ThemeProvider>
          <Text weight="strong">Children</Text>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Baseline disabled', () => {
      const { container } = render(
        <ThemeProvider>
          <Text baseline={false}>Children</Text>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('List item', () => {
      const { container } = render(
        <ThemeProvider>
          <Text component="li">Children</Text>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
