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
  description?: ReactNode;
}

export default class FieldLabel extends Component<FieldLabelProps> {
  static displayName = 'FieldLabel';

  render() {
    const {
      id,
      label,
      secondaryLabel,
      tertiaryLabel,
      description,
    } = this.props;

    return label ? (
      <Box paddingBottom="xsmall">
        <Text component="span">
          <label htmlFor={id}>
            <Strong>{label}</Strong>
            {secondaryLabel ? (
              <Secondary>&nbsp;({secondaryLabel})</Secondary>
            ) : null}
          </label>
          {tertiaryLabel ? (
            <Box component="span" className={styles.tertiary}>
              &nbsp;{tertiaryLabel}
            </Box>
          ) : null}
        </Text>
        {description ? <Text color="secondary">{description}</Text> : null}
      </Box>
    ) : null;
  }
}
