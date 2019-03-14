import React, { Component } from 'react';
import classnames from 'classnames';
import Box, { BoxProps } from '../../Box/Box';
import styles from './Overlay.css.js';

export type OverlayProps = Partial<
  Pick<
    BoxProps,
    | 'backgroundColor'
    | 'borderRadius'
    | 'boxShadow'
    | 'transition'
    | 'className'
  >
>;

export default class Overlay extends Component<OverlayProps> {
  static displayName = 'Overlay';

  render() {
    const {
      backgroundColor,
      borderRadius,
      boxShadow,
      transition,
      className,
    } = this.props;

    return (
      <Box
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        transition={transition}
        className={classnames(styles.root, className)}
      />
    );
  }
}
