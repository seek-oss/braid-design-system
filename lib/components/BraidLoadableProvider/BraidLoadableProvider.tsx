import React, { ReactNode } from 'react';
import loadable from 'sku/@loadable/component';
import {
  BraidProvider,
  BraidProviderProps,
} from '../BraidProvider/BraidProvider';

// @ts-ignore loadable can not currently type dynamic props
const BraidLoadable = loadable.lib(
  (props: { themeName: string }) =>
    import(`../../../themes/${props.themeName}`),
);

interface BraidLoadableProviderProps extends Omit<BraidProviderProps, 'theme'> {
  themeName: string;
  fallback?: ReactNode;
}
export const BraidLoadableProvider = ({
  themeName,
  fallback,
  ...restProps
}: BraidLoadableProviderProps) => (
  <BraidLoadable themeName={themeName} fallback={fallback}>
    {({ default: theme }: any) => (
      <BraidProvider {...restProps} theme={theme} />
    )}
  </BraidLoadable>
);
