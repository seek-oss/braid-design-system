import React from 'react';
import { FieldMessage } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('FieldMessage', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('False', () => {
      const { container } = render(
        <ThemeProvider>
          <FieldMessage message={false} />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Empty', () => {
      const { container } = render(
        <ThemeProvider>
          <FieldMessage message="" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <FieldMessage message="Message" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Critical', () => {
      const { container } = render(
        <ThemeProvider>
          <FieldMessage message="Message" tone="critical" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Positive', () => {
      const { container } = render(
        <ThemeProvider>
          <FieldMessage message="Message" tone="positive" />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
