import React from 'react';
import classnames from 'classnames';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import * as resetStyles from '../../reset';

export type LinkProps = LinkComponentProps;

export const Link = ({ href, className, ...restProps }: LinkComponentProps) => {
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent
      href={href}
      className={classnames(resetStyles.base, resetStyles.element.a, className)}
      {...restProps}
    />
  );
};
