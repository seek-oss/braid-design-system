import type { ReactElement } from 'react';

import useIcon, { type UseIconProps } from '../../hooks/useIcon';
import { Box, type PublicBoxProps } from '../Box/Box';

export type IconContainerProps = UseIconProps;

type IconRenderProp = {
  children: (svgProps: PublicBoxProps) => ReactElement | null;
};
type VerticalCorrection = Parameters<typeof useIcon>[1];

export const IconContainer = ({
  children,
  verticalCorrection,
  ...props
}: IconContainerProps & IconRenderProp & VerticalCorrection) => {
  const { isInline, svgProps: svgProps } = useIcon(props, {
    verticalCorrection,
  });

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {children(svgProps)}
    </Box>
  ) : (
    children(svgProps)
  );
};
