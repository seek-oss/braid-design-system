import React, { Component } from 'react';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

export interface ThemeProviderProps {
  theme: Theme;
}

export default class ThemeProvider extends Component<ThemeProviderProps> {
  render() {
    const { theme, ...restProps } = this.props;

    return <ThemeContext.Provider value={theme} {...restProps} />;
  }
}
