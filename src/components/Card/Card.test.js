import React from 'react';
import { Card } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Card', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <Card>Children</Card>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
