import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconBookmarkActiveSvg } from './IconBookmarkActiveSvg';
import { IconBookmarkSvg } from './IconBookmarkSvg';

export type IconBookmarkProps = IconContainerProps & {
  active?: boolean;
};

export const IconBookmark = ({
  active = false,
  ...props
}: IconBookmarkProps) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconBookmarkActiveSvg : IconBookmarkSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
