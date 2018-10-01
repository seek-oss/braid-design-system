import React from 'react';
import PropTypes from 'prop-types';
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

export default class Alert extends React.Component {
  static displayName = 'Alert';

  static propTypes = {
    tone: PropTypes.oneOf(['info', 'critical']).isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    tone: 'info'
  };

  render() {
    const { tone, children, ...restProps } = this.props;

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
