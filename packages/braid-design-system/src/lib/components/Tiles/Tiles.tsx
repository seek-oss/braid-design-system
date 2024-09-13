import dedent from 'dedent';
import React, { Children } from 'react';
import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import { type DividerProps, Divider } from '../Divider/Divider';
import type { Space } from '../../css/atoms/atoms';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './Tiles.css';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type RequiredResponsiveValue,
  mapResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
  /**
   * @deprecated Will be removed in v33 to enable [CSS gap] in layout components.
   *
   * See [migration guide] for details.
   *
   * [CSS gap]: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   * [migration guide]: https://github.com/seek-oss/braid-design-system/blob/master/docs/Removing%20dividers%20support%20from%20layout%20components.md
   * */
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  dividers,
  data,
  ...restProps
}: TilesProps) => {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof dividers !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "dividers" prop is deprecated and will be removed in v33 to enable CSS gap in layout components.
          Update your usage now to make upgrading easier by manually inserting "Divider" components as required:
            %c- <Tiles space="..." dividers>
            %c+ <Tiles space="...">
            %c    <Component>{item}</Component>
            %c+   <Stack space="...">
            +     <Hidden above="mobile"><Divider /></Hidden>
            %c      <Component>{item}</Component>
            %c+   </Stack>
            +   <Stack space="...">
            +     <Hidden above="mobile"><Divider /></Hidden>
            %c      <Component>{item}</Component>
            %c+   </Stack>
            %c  </Tiles>
          See migration guide for details: https://github.com/seek-oss/braid-design-system/blob/master/docs/Removing%20dividers%20support%20from%20layout%20components.md
        `,
        'color: red',
        'color: green',
        'color: inherit',
        'color: green',
        'color: inherit',
        'color: green',
        'color: inherit',
        'color: green',
        'color: inherit',
      );
    }
  }

  return (
    <Box
      className={negativeMargin('top', space)}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        className={negativeMargin('left', space)}
      >
        {Children.map(flattenChildren(children), (child, i) => (
          <Box
            minWidth={0}
            className={resolveResponsiveProp(
              columns,
              styles.columnsMobile,
              styles.columnsTablet,
              styles.columnsDesktop,
              styles.columnsWide,
            )}
          >
            <Box
              height="full"
              // This needs to be a separate element to support IE11.
              paddingTop={space}
              paddingLeft={space}
            >
              {dividers && i > 0 ? (
                <Box
                  paddingBottom={space}
                  display={mapResponsiveValue(columns, (column) =>
                    column === 1 ? 'block' : 'none',
                  )}
                >
                  {typeof dividers === 'string' ? (
                    <Divider weight={dividers} />
                  ) : (
                    <Divider />
                  )}
                </Box>
              ) : null}
              {child}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
