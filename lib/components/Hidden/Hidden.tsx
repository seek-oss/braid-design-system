import React, { Component, ReactNode, ReactType } from 'react';
import Box from '../Box/Box';

export interface HiddenProps {
  children: ReactNode;
  hideFor: 'mobile' | 'desktop';
  component?: ReactType;
}

export default class Hidden extends Component<HiddenProps> {
  static displayName = 'Hidden';

  render() {
    const { children, component, hideFor } = this.props;

    return (
      <Box
        display={[
          hideFor === 'mobile' ? 'none' : 'inline',
          hideFor === 'desktop' ? 'none' : 'inline'
        ]}
        component={component}
      >
        {children}
      </Box>
    );
  }
}
