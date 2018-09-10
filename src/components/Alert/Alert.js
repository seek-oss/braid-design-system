import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import InfoIcon from '../icons/InfoIcon/InfoIcon';
import styles from './Alert.css.js';

const iconProps = { fill: 'white', size: 'large', marginRight: 'small' };
const iconForTone = tone => {
  if (tone === 'info') {
    return <InfoIcon {...iconProps} />;
  }

  return null;
};

const Alert = ({ tone, children, ...props }) => {
  const icon = iconForTone(tone);

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
        <Text size="large" color="white" baseline={false}>
          {children}
        </Text>
      </div>
    </Box>
  );
};

Alert.displayName = 'Alert';

export default Alert;
