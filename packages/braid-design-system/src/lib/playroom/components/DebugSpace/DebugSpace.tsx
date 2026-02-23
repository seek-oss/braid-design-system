import { assignInlineVars } from '@vanilla-extract/dynamic';

import { Box } from '../../../components/Box/Box';
import type { StackProps } from '../../../components/Stack/Stack';
import type { Space } from '../../../css/atoms/atoms';

import * as styles from './DebugSpace.css';
import { normalizeResponsiveValue } from '../../../css/atoms/sprinkles.css';

const spaceColours: Record<Space, string> = {
  none: '#000000',
  gutter: '#000000',
  xxsmall: '#4964E9',
  xsmall: '#0377FF',
  small: '#03B3FF',
  medium: '#02DA73',
  large: '#FAC713',
  xlarge: '#FF8A1F',
  xxlarge: '#FF1F7D',
  xxxlarge: '#E600EB',
};

const formatSpace = (space: string) =>
  space.slice(0, space.lastIndexOf('x') + 2).toUpperCase();

export const DebugSpace = ({ space }: { space: StackProps['space'] }) => {
  const normalizedSpace = normalizeResponsiveValue(space);
  const {
    mobile: mobileSpace = 'none',
    tablet: tabletSpace = mobileSpace,
    desktop: desktopSpace = tabletSpace,
    wide: wideSpace = desktopSpace,
  } = normalizedSpace;

  return (
    <Box
      position="relative"
      paddingTop={space}
      width="full"
      className={styles.space}
      style={assignInlineVars({
        [styles.mobileSpaceVar]: spaceColours[mobileSpace],
        [styles.tabletSpaceVar]: spaceColours[tabletSpace],
        [styles.desktopSpaceVar]: spaceColours[desktopSpace],
        [styles.wideSpaceVar]: spaceColours[wideSpace],
      })}
    >
      <Box
        component="span"
        display="flex"
        alignItems="center"
        position="absolute"
        inset={0}
        paddingX="xxsmall"
      >
        <Box
          component="span"
          display={{
            tablet: 'none',
          }}
        >
          {formatSpace(mobileSpace)}
        </Box>
        <Box
          component="span"
          display={{
            mobile: 'none',
            tablet: 'block',
            desktop: 'none',
          }}
        >
          {formatSpace(tabletSpace)}
        </Box>
        <Box
          component="span"
          display={{
            mobile: 'none',
            desktop: 'block',
            wide: 'none',
          }}
        >
          {formatSpace(desktopSpace)}
        </Box>
        <Box
          component="span"
          display={{
            mobile: 'none',
            wide: 'block',
          }}
        >
          {formatSpace(wideSpace)}
        </Box>
      </Box>
    </Box>
  );
};
