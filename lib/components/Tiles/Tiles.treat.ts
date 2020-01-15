import { style, styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';
import { TreatTokens } from '../../themes/makeBraidTheme';

export const flexWrap = style({
  flexWrap: 'wrap',
});

const columnsWidths = {
  '1': '100%',
  '2': `${100 / 2}%`,
  '3': `${100 / 3}%`,
  '4': `${100 / 4}%`,
  '5': `${100 / 5}%`,
} as const;

const makeColumnsAtoms = (breakpoint: keyof TreatTokens['breakpoint']) =>
  styleMap(
    theme =>
      mapValues(columnsWidths, width =>
        theme.utils.responsiveStyle({ [breakpoint]: { flex: `0 0 ${width}` } }),
      ),
    `columns_${breakpoint}`,
  );

export const columnsMobile = makeColumnsAtoms('mobile');
export const columnsTablet = makeColumnsAtoms('tablet');
export const columnsDesktop = makeColumnsAtoms('desktop');
