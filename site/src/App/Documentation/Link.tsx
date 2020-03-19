import * as React from 'react';
import { AllHTMLAttributes } from 'react';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';
import { Omit } from 'utility-types';
import { TextLinkRenderer, TextLink } from '../../../../lib/components';
import { TextLinkProps } from '../../../../lib/components/TextLink/TextLink';

export const Link = (props: ReactRouterLinkProps & TextLinkProps) => {
  const { hitArea, showVisited, ...restProps } = props;
  return (
    <TextLinkRenderer hitArea={hitArea} showVisited={showVisited}>
      {textLinkProps => <ReactRouterLink {...restProps} {...textLinkProps} />}
    </TextLinkRenderer>
  );
};

interface ExternalLinkProps
  extends Omit<AllHTMLAttributes<HTMLAnchorElement>, 'style' | 'className'> {}
export const ExternalLink = (props: ExternalLinkProps & TextLinkProps) => (
  <TextLink {...props} rel="noopener noreferrer" />
);
