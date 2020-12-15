import React, { ReactNode } from 'react';
import {
  ButtonRenderer,
  ButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';
import {
  useLinkComponentWithoutRefSupport,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface ButtonLinkProps
  extends Omit<ButtonRendererProps, 'children'>,
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
    <ButtonRenderer tone={tone} weight={weight} loading={loading}>
      {(ButtonChildren, buttonProps) => (
        <LinkComponent {...restProps} {...buttonProps}>
          <ButtonChildren>{children}</ButtonChildren>
        </LinkComponent>
      )}
    </ButtonRenderer>
  );
};
