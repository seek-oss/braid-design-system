import React from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import { TextLinkRenderer, TextLink } from '../../../lib/components';

export const Link = (props: LinkProps) => (
  <TextLinkRenderer>
    {textLinkProps => <ReactRouterLink {...props} {...textLinkProps} />}
  </TextLinkRenderer>
);

export const ExternalLink = TextLink;
