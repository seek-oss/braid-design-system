import React from 'react';
import { ChecklistCard, Checkbox } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

const noop = () => {};

describe('ChecklistCard', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Default', () => {
      const { container } = render(
        <ThemeProvider>
          <ChecklistCard>
            <Checkbox id="1" label="Label 1" checked={false} onChange={noop} />
            <Checkbox id="2" label="Label 2" checked={false} onChange={noop} />
            <Checkbox id="3" label="Label 3" checked={false} onChange={noop} />
          </ChecklistCard>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
