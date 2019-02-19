import React, { Component } from 'react';
import styles from './Divider.css.js';
import Box from '../Box/Box';

export default class Divider extends Component<{}> {
  static displayName = 'Divider';

  render() {
    return (
      <Box className={styles.root}>
        <Box
          borderWidth="standard"
          borderColor="standard"
          className={styles.divider}
        />
      </Box>
    );
  }
}
