import React, { Component } from 'react';
import styles from './Divider.css.js';
import Box from '../Box/Box';

export default class Divider extends Component<{}> {
  static displayName = 'Divider';

  render() {
    return (
      <Box className={styles.root}>
        <Box
          boxShadow="borderStandard"
          width="full"
          className={styles.divider}
        />
      </Box>
    );
  }
}
