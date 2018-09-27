import React from 'react';
import { Reset } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Reset', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Known element', () => {
      const { container } = render(
        <ThemeProvider>
          <Reset component="section">Children</Reset>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Unknown element', () => {
      const { container } = render(
        <ThemeProvider>
          <Reset component="custom-element">Children</Reset>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Component', () => {
      function CustomComponent(props) {
        return <span data-custom="component" {...props} />;
      }

      const { container } = render(
        <ThemeProvider>
          <Reset component={CustomComponent}>Children</Reset>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
