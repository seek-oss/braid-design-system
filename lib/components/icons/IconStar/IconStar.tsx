import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconStarSvg } from './IconStarSvg';
import { IconStarActiveSvg } from './IconStarActiveSvg';
import * as styleRefs from './IconStar.treat';

export type IconStarProps = UseIconProps & {
  active?: boolean;
};

export const IconStar = ({ active = false, ...props }: IconStarProps) => {
  const styles = useStyles(styleRefs);
  const iconProps = useIcon(props);

  return (
    <Box position="relative">
      <Box component={IconStarSvg} {...iconProps} />
      <Box
        position="absolute"
        top={0}
        left={0}
        transition="touchable"
        opacity={!active ? 0 : undefined}
        className={!active ? styles.scaled : undefined}
      >
        <Box component={IconStarActiveSvg} {...iconProps} />
      </Box>
    </Box>
  );
};
