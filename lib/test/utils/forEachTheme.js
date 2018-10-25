import React from 'react';
import each from 'lodash/each';
import * as themes from '../../themes';
import { ThemeProvider } from '../../components';

export default callback => {
  each(themes, theme => {
    describe(`Theme: ${theme.name}`, () => {
      callback({
        theme,
        ThemeProvider: props => <ThemeProvider theme={theme} {...props} />
      });
    });
  });
};
