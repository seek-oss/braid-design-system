import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { atoms } from '../../atoms/atoms';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export type LinkProps = Omit<LinkComponentProps, 'className'> & {
  className?: Parameters<typeof classNames>[0];
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, ...restProps }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={classNames(atoms({ reset: 'a' }), className)}
        {...restProps}
      />
    );
  },
);

Link.displayName = 'Link';
