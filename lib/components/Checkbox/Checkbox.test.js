import React from 'react';
import { Checkbox } from '..';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

const noop = () => {};

describe('Checkbox', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('Unchecked', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox id="id" label="Label" checked={false} onChange={noop} />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Checked', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox id="id" label="Label" checked={true} onChange={noop} />
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Children when unchecked', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox id="id" label="Label" checked={false} onChange={noop}>
            Children
          </Checkbox>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Children when checked', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox id="id" label="Label" checked={true} onChange={noop}>
            Children
          </Checkbox>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('With message', () => {
      const { container } = render(
        <ThemeProvider>
          <Checkbox
            id="id"
            label="Label"
            checked={true}
            onChange={noop}
            tone="critical"
            message="Message"
          >
            Children
          </Checkbox>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
