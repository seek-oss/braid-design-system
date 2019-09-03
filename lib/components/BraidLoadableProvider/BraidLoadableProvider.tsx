import React, { ReactNode } from 'react';
import loadable from 'sku/@loadable/component';
import {
  BraidProvider,
  BraidProviderProps,
} from '../BraidProvider/BraidProvider';

const BraidLoadable = loadable.lib(props =>
  // @ts-ignore loadable can not currently type dynamic props
  import(`../../../themes/${props.themeName}`),
);

interface BraidLoadableProviderProps extends Omit<BraidProviderProps, 'theme'> {
  themeName: string;
  fallback?: ReactNode;
}
export const BraidLoadableProvider = ({
  themeName,
  children,
  ...restProps
}: BraidLoadableProviderProps) => (
  <BraidLoadable themeName={themeName}>
    {({ default: theme }: any) => (
      <BraidProvider theme={theme} {...restProps}>
        {children}
      </BraidProvider>
    )}
  </BraidLoadable>
);
