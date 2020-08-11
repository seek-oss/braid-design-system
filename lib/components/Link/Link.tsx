import React, { forwardRef } from 'react';
import {
  useLinkComponentWithRefSupport,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import { useBoxStyles } from '../Box/useBoxStyles';

export type LinkProps = LinkComponentProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, ...restProps }, ref) => {
    const LinkComponent = useLinkComponentWithRefSupport(ref);

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
