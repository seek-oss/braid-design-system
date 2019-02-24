import React, { Component, ReactNode, ReactType } from 'react';
import Box from '../Box/Box';

export interface HiddenProps {
  children: ReactNode;
  on: 'mobile' | 'desktop';
  inline?: boolean;
  component?: ReactType;
}

export default class Hidden extends Component<HiddenProps> {
  static displayName = 'Hidden';

  render() {
    const { children, component, on, inline } = this.props;
    const display = inline ? 'inlineBlock' : 'block';
    const defaultComponent = inline ? 'span' : 'div';

    return (
      <Box
        display={[
          on === 'mobile' ? 'none' : display,
          on === 'desktop' ? 'none' : display
        ]}
        component={component || defaultComponent}
      >
        {children}
      </Box>
    );
  }
}
