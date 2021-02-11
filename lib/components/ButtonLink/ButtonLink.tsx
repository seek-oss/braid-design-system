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
  size,
  tone,
  weight,
  variant,
  loading,
  ...restProps
}: ButtonLinkProps) => {
  const LinkComponent = useLinkComponentWithoutRefSupport();

  return (
    <PrivateButtonRenderer
      size={size}
      tone={tone}
      weight={weight}
      variant={variant}
      loading={loading}
    >
      {(ButtonChildren, buttonProps) => (
        <LinkComponent {...restProps} {...buttonProps}>
          <ButtonChildren>{children}</ButtonChildren>
        </LinkComponent>
      )}
    </PrivateButtonRenderer>
  );
};
