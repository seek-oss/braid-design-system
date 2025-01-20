import clsx, { type ClassValue } from 'clsx';
import React, { forwardRef } from 'react';

import { atoms } from '../../css/atoms/atoms';
import {
  type LinkComponentProps,
  useLinkComponent,
} from '../BraidProvider/BraidProvider';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export type LinkProps = Omit<LinkComponentProps, 'className'> & {
  className?: ClassValue;
  data?: DataAttributeMap;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, data, ...restProps }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={clsx(atoms({ reset: 'a' }), className)}
        {...restProps}
        {...buildDataAttributes({ data, validateRestProps: false })}
      />
    );
  },
);

Link.displayName = 'Link';
