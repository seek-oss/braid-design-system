import React, { forwardRef } from 'react';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import { boxStyles, BoxStylesProps } from '../Box/boxStyles';

export type LinkProps = Omit<LinkComponentProps, 'className'> &
  Pick<BoxStylesProps, 'className'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, ...restProps }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={boxStyles({ component: 'a', className })}
        {...restProps}
      />
    );
  },
);

Link.displayName = 'Link';
