import React, { forwardRef } from 'react';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import { useBoxStyles, UseBoxStylesProps } from '../Box/useBoxStyles';

export type LinkProps = Omit<LinkComponentProps, 'className'> &
  Pick<UseBoxStylesProps, 'className'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, ...restProps }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={useBoxStyles({ component: 'a', className })}
        {...restProps}
      />
    );
  },
);

Link.displayName = 'Link';
