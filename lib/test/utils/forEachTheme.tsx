import React, { FunctionComponent } from 'react';
import each from 'lodash/each';
import { Omit } from 'utility-types';
import * as themes from '../../themes';
import { Theme } from '../themes/theme';
import ThemeProvider, {
  ThemeProviderProps
} from '../../components/ThemeProvider/ThemeProvider';

type ForEachThemeCallback = (args: {
  theme: Theme;
  ThemeProvider: FunctionComponent<Omit<ThemeProviderProps, 'theme'>>;
}) => void;

export default (callback: ForEachThemeCallback) => {
  each(themes, theme => {
    describe(`Theme: ${theme.name}`, () => {
      callback({
        theme,
        ThemeProvider: props => <ThemeProvider theme={theme} {...props} />
      });
    });
  });
};
