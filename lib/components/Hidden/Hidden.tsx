import React, { Component, ReactNode, ReactType } from 'react';
import Box from '../Box/Box';

export interface HiddenProps {
  children: ReactNode;
  on: 'mobile' | 'desktop';
  component?: ReactType;
}

export default class Hidden extends Component<HiddenProps> {
  static displayName = 'Hidden';

  render() {
    const { children, component, on } = this.props;

    return (
      <Box
        display={[
          on === 'mobile' ? 'none' : 'inline',
          on === 'desktop' ? 'none' : 'inline'
        ]}
        component={component}
      >
        {children}
      </Box>
    );
  }
}
