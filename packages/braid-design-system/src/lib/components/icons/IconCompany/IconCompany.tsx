import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCompanyActiveSvg } from './IconCompanyActiveSvg';
import { IconCompanySvg } from './IconCompanySvg';

export type IconCompanyProps = IconContainerProps & {
  active?: boolean;
};

export const IconCompany: FC<IconCompanyProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconCompanyActiveSvg : IconCompanySvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
