import React from 'react';
import * as themes from '../../themes';
import {
  BraidProvider,
  BraidProviderProps,
} from '../BraidProvider/BraidProvider';
import { BraidTestProviderContext } from './BraidTestProviderContext';

interface BraidTestProviderProps
  extends Omit<BraidProviderProps, 'theme' | 'styleBody'> {
  themeName?: keyof typeof themes;
}
export const BraidTestProvider = ({
  themeName = 'wireframe',
  ...restProps
}: BraidTestProviderProps) => (
  <BraidTestProviderContext.Provider value={true}>
    <BraidProvider
      {...restProps}
      theme={themes[themeName]}
      styleBody={undefined}
    />
  </BraidTestProviderContext.Provider>
);
