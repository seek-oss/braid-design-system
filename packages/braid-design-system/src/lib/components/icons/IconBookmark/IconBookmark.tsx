import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';
import { IconBookmarkSvg } from './IconBookmarkSvg';

export type IconBookmarkProps = IconContainerProps & {
  active?: boolean;
};

export const IconBookmark: FC<IconBookmarkProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconBookmarkActiveSvg : IconBookmarkSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
