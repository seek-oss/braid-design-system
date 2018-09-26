import React from 'react';
import { BulletList } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('BulletList', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <BulletList>
            <li>Bullet</li>
            <li>Bullet</li>
            <li>Bullet</li>
          </BulletList>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
