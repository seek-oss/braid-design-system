import React, { Component, ReactNode } from 'react';
import Box, { BoxProps } from '../Box/Box';
import Text from '../Text/Text';
import InfoIcon from '../icons/InfoIcon/InfoIcon';
import ErrorIcon from '../icons/ErrorIcon/ErrorIcon';
import styles from './Alert.css.js';

type Tone = 'info' | 'critical';

export interface AlertProps extends BoxProps {
  tone?: Tone;
  children: ReactNode;
}

const iconForTone = (tone: Tone) => {
  if (tone === 'info') {
    return <InfoIcon fill="white" marginRight="small" />;
  }

  if (tone === 'critical') {
    return <ErrorIcon fill="critical" marginRight="small" />;
  }

  return null;
};

const textColorForTone = (tone: Tone) => {
  if (tone === 'info') {
    return 'white';
  }

  if (tone === 'critical') {
    return 'critical';
  }

  return 'neutral';
};

export default class Alert extends Component<AlertProps> {
  static displayName = 'Alert';

  render() {
    const { tone = 'info', children, ...restProps } = this.props;

    const icon = iconForTone(tone);
    const color = textColorForTone(tone);

    return (
      <Box
        backgroundColor={tone}
        paddingLeft="gutter"
        paddingRight="gutter"
        paddingTop="medium"
        paddingBottom="medium"
        {...restProps}
      >
        <div className={styles.root}>
          <div className={styles.icon}>{icon}</div>
          <Text color={color} baseline={false}>
            {children}
          </Text>
        </div>
      </Box>
    );
  }
}
