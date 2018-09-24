import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import InfoIcon from '../icons/InfoIcon/InfoIcon';
import ErrorIcon from '../icons/ErrorIcon/ErrorIcon';
import styles from './Alert.css.js';

const iconForTone = tone => {
  if (tone === 'info') {
    return <InfoIcon fill="white" marginRight="small" />;
  }

  if (tone === 'critical') {
    return <ErrorIcon fill="critical" marginRight="small" />;
  }

  return null;
};

const textColorForTone = tone => {
  if (tone === 'info') {
    return 'white';
  }

  if (tone === 'critical') {
    return 'critical';
  }

  return null;
};

const Alert = ({ tone = 'info', children, ...props }) => {
  const icon = iconForTone(tone);
  const color = textColorForTone(tone);

  return (
    <Box
      backgroundColor={tone}
      paddingLeft="gutter"
      paddingRight="gutter"
      paddingTop="medium"
      paddingBottom="medium"
      {...props}
    >
      <div className={styles.root}>
        <div className={styles.icon}>{icon}</div>
        <Text color={color} baseline={false}>
          {children}
        </Text>
      </div>
    </Box>
  );
};

Alert.displayName = 'Alert';

export default Alert;
