import React, { Component } from 'react';
import classnames from 'classnames';
import Text, { TextProps } from '../Text/Text';
import styles from './Bullet.css.js';

export type BulletProps = TextProps;

export default class Bullet extends Component<BulletProps> {
  static displayName = 'Bullet';

  render() {
    const { className } = this.props;

    return (
      <Text
        component="li"
        paddingBottom="xsmall"
        className={classnames(styles.root, className)}
        {...this.props}
      />
    );
  }
}
