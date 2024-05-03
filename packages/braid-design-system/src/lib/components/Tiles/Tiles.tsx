import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import type { RequiredResponsiveValue } from '../../css/atoms/sprinkles.css';
import type { Space } from '../../css/atoms/atoms';
import { Divider, type DividerProps } from '../Divider/Divider';
import flattenChildren from '../../utils/flattenChildren';
import { Children } from 'react';
import { mapResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export interface TilesProps {
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Tiles = ({
  children,
  space = 'none',
  columns = 1,
  dividers = false,
  data,
  ...restProps
}: TilesProps) => (
  <Box
    display="grid"
    gridTemplateColumns={columns}
    gap={space}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {Children.map(flattenChildren(children), (child, index) => {
      if (dividers && index > 0) {
        return (
          <Box>
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
            {child}
          </Box>
        );
      }

      return child;
    })}
  </Box>
);
