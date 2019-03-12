import React, { Component, ReactNode } from 'react';
import Box from '../Box/Box';
import Secondary from '../Secondary/Secondary';
import Strong from '../Strong/Strong';
import Text from '../Text/Text';
import styles from './FieldLabel.css.js';

export interface FieldLabelProps {
  id: string;
  label?: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
}

export default class FieldLabel extends Component<FieldLabelProps> {
  static displayName = 'FieldLabel';

  render() {
    const { label, id, secondaryLabel, tertiaryLabel } = this.props;

    return label ? (
      <Box paddingBottom="xsmall" display="flex" className={styles.root}>
        <label htmlFor={id}>
          <Text component="span">
            <Strong>{label}</Strong>
            {secondaryLabel ? (
              <Secondary>&nbsp;({secondaryLabel})</Secondary>
            ) : null}
          </Text>
        </label>
        {tertiaryLabel ? (
          <Text component="span">&nbsp;{tertiaryLabel}</Text>
        ) : null}
      </Box>
    ) : null;
  }
}
