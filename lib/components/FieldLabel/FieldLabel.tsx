import React, { Component, ReactNode } from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export interface FieldLabelProps {
  id: string;
  children?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
}

export default class FieldLabel extends Component<FieldLabelProps> {
  static displayName = 'FieldLabel';

  render() {
    const { children, id, secondaryLabel, tertiaryLabel } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <Box paddingBottom="xsmall" display="flex">
            <span style={{ flexGrow: 1 }}>
              <Text>
                <label htmlFor={id} className={theme.atoms.fontWeight.strong}>
                  {children}
                </label>
                {secondaryLabel ? (
                  <span className={theme.atoms.color.secondary}>
                    &nbsp;({secondaryLabel})
                  </span>
                ) : null}
              </Text>
            </span>
            {tertiaryLabel ? (
              <Text component="span">&nbsp;{tertiaryLabel}</Text>
            ) : null}
          </Box>
        )}
      </ThemeConsumer>
    );
  }
}
