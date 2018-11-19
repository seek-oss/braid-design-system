import React, { Component } from 'react';
import ThemeContext from '../private/ThemeContext';
import { WithThemeProps } from '../private/withTheme';

export default class ThemeProvider extends Component<WithThemeProps> {
  render() {
    const { theme, ...restProps } = this.props;

    return <ThemeContext.Provider value={theme} {...restProps} />;
  }
}
