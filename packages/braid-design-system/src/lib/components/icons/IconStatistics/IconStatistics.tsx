import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconStatisticsSvg } from './IconStatisticsSvg';

export type IconStatisticsProps = IconContainerProps;

export const IconStatistics: FC<IconStatisticsProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconStatisticsSvg} {...svgProps} />}
  </IconContainer>
);
