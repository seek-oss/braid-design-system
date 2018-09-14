import React from 'react';
import { Alert } from '../';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Alert', () => {
  forEachTheme(({ ThemeProvider }) => {
    describe('Tones', () => {
      const tones = ['info'];

      tones.forEach(tone => {
        test(tone, () => {
          const { container } = render(
            <ThemeProvider>
              <Alert tone={tone}>{tone}</Alert>
            </ThemeProvider>
          );
          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
