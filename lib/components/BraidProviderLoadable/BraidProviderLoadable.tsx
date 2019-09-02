import React from 'react';
import loadable from 'sku/@loadable/component';
import {
  BraidProvider,
  BraidProviderProps,
} from '../BraidProvider/BraidProvider';

const BraidLoadable = loadable.lib(props =>
  // @ts-ignore loadable can not currently type dynamic props
  import(`../../../themes/${props.themeName}`),
);

interface BraidProviderLoadableProps extends Omit<BraidProviderProps, 'theme'> {
  themeName: string;
}
export const BraidProviderLoadable = ({
  themeName,
  children,
  ...restProps
}: BraidProviderLoadableProps) => (
  <BraidLoadable themeName={themeName}>
    {({ default: theme }: any) => (
      <BraidProvider theme={theme} {...restProps}>
        {children}
      </BraidProvider>
    )}
  </BraidLoadable>
);
