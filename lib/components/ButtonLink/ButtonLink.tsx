import React, { ReactNode } from 'react';
import {
  PrivateButtonRenderer,
  PrivateButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';
import {
  useLinkComponentWithoutRefSupport,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface ButtonLinkProps
  extends Omit<PrivateButtonRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {
  children?: ReactNode;
}

export const ButtonLink = ({
  children,
  tone,
  weight,
  loading,
  ...restProps
}: ButtonLinkProps) => {
  const LinkComponent = useLinkComponentWithoutRefSupport();

  return (
    <PrivateButtonRenderer tone={tone} weight={weight} loading={loading}>
      {(ButtonChildren, buttonProps) => (
        <LinkComponent {...restProps} {...buttonProps}>
          <ButtonChildren>{children}</ButtonChildren>
        </LinkComponent>
      )}
    </PrivateButtonRenderer>
  );
};
