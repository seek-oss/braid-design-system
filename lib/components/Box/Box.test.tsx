import React from 'react';
import { Box } from '../';
import { render } from 'react-testing-library';
import forEachTheme from '../../test/utils/forEachTheme';

describe('Box', () => {
  forEachTheme(({ ThemeProvider }) => {
    test('No props', () => {
      const { container } = render(
        <ThemeProvider>
          <Box>Children</Box>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('All props', () => {
      const { container } = render(
        <ThemeProvider>
          <Box
            component="section"
            paddingTop="small"
            paddingBottom="small"
            paddingLeft="small"
            paddingRight="small"
            marginTop="small"
            marginBottom="small"
            marginLeft="small"
            marginRight="small"
            borderWidth="standard"
            borderRadius="standard"
            backgroundColor="card"
            className="GLOBAL_CLASS"
          >
            Children
          </Box>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Unknown values', () => {
      const UnsafeBox: any = Box;

      const { container } = render(
        <ThemeProvider>
          <UnsafeBox
            paddingTop="UNKNOWN"
            paddingBottom="UNKNOWN"
            paddingLeft="UNKNOWN"
            paddingRight="UNKNOWN"
            marginTop="UNKNOWN"
            marginBottom="UNKNOWN"
            marginLeft="UNKNOWN"
            marginRight="UNKNOWN"
            borderWidth="UNKNOWN"
            borderRadius="UNKNOWN"
            backgroundColor="UNKNOWN"
          >
            Children
          </UnsafeBox>
        </ThemeProvider>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
