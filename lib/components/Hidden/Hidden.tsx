import React, { Component, ReactNode } from 'react';
import Box from '../Box/Box';
import styles from './Hidden.css.js';

export interface HiddenProps {
  children: ReactNode;
  mobile?: boolean;
  desktop?: boolean;
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
}

export default class Hidden extends Component<HiddenProps> {
  static displayName = 'Hidden';

  render() {
    const {
      children,
      inline = false,
      mobile: hiddenOnMobile = false,
      desktop: hiddenOnDesktop = false,
      screen: hiddenOnScreen = false,
      print: hiddenOnPrint = false,
    } = this.props;

    const display = inline ? 'inline' : 'block';

    return (
      <Box
        display={[
          hiddenOnMobile || hiddenOnScreen ? 'none' : display,
          hiddenOnDesktop || hiddenOnScreen ? 'none' : display,
        ]}
        className={hiddenOnPrint ? styles.hiddenOnPrint : undefined}
        component={inline ? 'span' : 'div'}
      >
        {children}
      </Box>
    );
  }
}
