import React, { AllHTMLAttributes } from 'react';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';
import { Omit } from 'utility-types';
import { TextLinkRenderer, TextLink } from '../../../lib/components';

interface LinkProps extends ReactRouterLinkProps {
  inline?: boolean;
}

export const Link = ({ inline, ...restProps }: LinkProps) => (
  <TextLinkRenderer inline>
    {textLinkProps => <ReactRouterLink {...restProps} {...textLinkProps} />}
  </TextLinkRenderer>
);

interface ExternalLinkProps
  extends Omit<AllHTMLAttributes<HTMLAnchorElement>, 'style' | 'className'> {
  inline?: boolean;
}
export const ExternalLink = ({ inline, ...restProps }: ExternalLinkProps) => (
  <TextLink inline={inline} {...restProps} />
);
