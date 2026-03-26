import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconProfileActiveSvg } from './IconProfileActiveSvg';
import { IconProfileSvg } from './IconProfileSvg';

export type IconProfileProps = IconContainerProps & {
  active?: boolean;
};

export const IconProfile: FC<IconProfileProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconProfileActiveSvg : IconProfileSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
