import React from 'react';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import { useBoxStyles } from '../Box/useBoxStyles';

export type LinkProps = LinkComponentProps;

export const Link = ({ href, className, ...restProps }: LinkComponentProps) => {
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent
      href={href}
      className={useBoxStyles({ component: 'a', className })}
      {...restProps}
    />
  );
};
