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
  });
});
