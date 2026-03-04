import { assignInlineVars } from '@vanilla-extract/dynamic';

import { Box } from '../../../components/Box/Box';
import type { StackProps } from '../../../components/Stack/Stack';
import type { Space } from '../../../css/atoms/atoms';

import * as styles from './DebugSpace.css';
import { normalizeResponsiveValue } from '../../../css/atoms/sprinkles.css';

/**
 * Map of hue and saturation values for each step of the space scale.
 * These are combined with different lightness and alpha values for
 * background and text to ensure sufficient contrast.
 */
const spaceColours: Record<Space, string> = {
  none: '',
  gutter: `280, 100%`,
  xxsmall: `230, 100%`,
  xsmall: `212, 100%`,
  small: `198, 100%`,
  medium: `151, 70%`,
  large: `47, 80%`,
  xlarge: `29, 100%`,
  xxlarge: `335, 100%`,
  xxxlarge: `299, 100%`,
};

const formatSpace = (space: string) =>
  space === 'gutter'
    ? 'GUT'
    : space.slice(0, space.lastIndexOf('x') + 2).toUpperCase();

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
        className={styles.text}
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
