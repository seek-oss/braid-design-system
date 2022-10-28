import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { atoms } from '../../css/atoms/atoms';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
import { useLinkComponent } from '../BraidProvider/BraidProvider';

export type LinkProps = Omit<LinkComponentProps, 'className'> & {
  className?: ClassValue;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, ...restProps }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={clsx(atoms({ reset: 'a' }), className)}
        {...restProps}
      />
    );
  },
);

Link.displayName = 'Link';
