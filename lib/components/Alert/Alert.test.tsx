import React from 'react';
import { Alert } from '../';
import { AlertProps } from './Alert';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Alert', () => {
  forEachTheme(({ ThemeProvider }) => {
    describe('Tones', () => {
      const tones: Array<AlertProps['tone']> = ['critical', 'info', undefined];

      tones.forEach(tone => {
        test(tone || 'default', () => {
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
