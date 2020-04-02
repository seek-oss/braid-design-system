import { styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';
import { TreatTokens } from '../../themes/makeBraidTheme';

const columnsWidths = {
  1: '100%',
  2: `${100 / 2}%`,
  3: `${100 / 3}%`,
  4: `${100 / 4}%`,
  5: `${100 / 5}%`,
  6: `${100 / 6}%`,
} as const;

// Remove this when 'styleMap' supports numbers as keys and it's been released to sku consumers,
type ColumnWidths = Record<keyof typeof columnsWidths, string>;
const makeColumnsAtoms = (breakpoint: keyof TreatTokens['breakpoint']) =>
  styleMap(
    (theme) =>
      mapValues(columnsWidths, (width) =>
        theme.utils.responsiveStyle({ [breakpoint]: { flex: `0 0 ${width}` } }),
      ),
    `columns_${breakpoint}`,
  ) as ColumnWidths;

export const columnsMobile = makeColumnsAtoms('mobile');
export const columnsTablet = makeColumnsAtoms('tablet');
export const columnsDesktop = makeColumnsAtoms('desktop');
