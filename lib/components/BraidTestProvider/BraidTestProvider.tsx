import React from 'react';
import * as themes from '../../themes';
import {
  BraidProvider,
  BraidProviderProps,
} from '../BraidProvider/BraidProvider';

interface BraidTestProviderProps
  extends Omit<BraidProviderProps, 'theme' | 'styleBody'> {
  themeName?: keyof typeof themes;
}
export const BraidTestProvider = ({
  themeName = 'wireframe',
  ...restProps
}: BraidTestProviderProps) => (
  <BraidProvider
    {...restProps}
    theme={themes[themeName]}
    styleBody={undefined}
  />
);
