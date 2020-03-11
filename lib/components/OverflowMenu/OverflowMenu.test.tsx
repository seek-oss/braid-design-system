import React from 'react';
import { menuTestSuite } from '../Menu/testHelper';
import { OverflowMenu } from './OverflowMenu';

menuTestSuite({
  name: 'OverflowMenu',
  Component: props => <OverflowMenu label="Overflow" {...props} />,
});
