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
  fallback?: JSX.Element;
}
export const BraidProviderLoadable = ({
  themeName,
  children,
  fallback,
  ...restProps
}: BraidProviderLoadableProps) => (
  <BraidLoadable themeName={themeName} fallback={fallback}>
    {({ default: theme }: any) => (
      <BraidProvider theme={theme} {...restProps}>
        {children}
      </BraidProvider>
    )}
  </BraidLoadable>
);
