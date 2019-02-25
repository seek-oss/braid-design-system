import React, { FunctionComponent } from 'react';
import each from 'lodash/each';
import { Omit } from 'utility-types';
import * as themes from '..';
import { Theme } from '../theme';
import ThemeProvider, {
  ThemeProviderProps
} from '../../components/ThemeProvider/ThemeProvider';

type TestCallback = (
  args: {
    theme: Theme;
    ThemeProvider: FunctionComponent<Omit<ThemeProviderProps, 'theme'>>;
  }
) => void;

export default (callback: TestCallback) => {
  each(themes, theme => {
    describe(`Theme: ${theme.name}`, () => {
      callback({
        theme,
        ThemeProvider: props => <ThemeProvider theme={theme} {...props} />
      });
    });
  });
};
