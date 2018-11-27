import React, { Component } from 'react';
import Text, { Props as TextProps } from '../Text/Text';
import Box from '../Box/Box';
import styles from './Bullet.css.js';

const BulletItem = (props: TextProps) => <Text component="li" {...props} />;

export default class Bullet extends Component {
  static displayName = 'Bullet';

  render() {
    return (
      <Box
        component={BulletItem}
        paddingBottom="xsmall"
        className={styles.root}
        {...this.props}
      />
    );
  }
}
