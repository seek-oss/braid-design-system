import { styleVariants } from '@vanilla-extract/css';
import { Breakpoint } from '../../css/breakpoints';
import { responsiveStyle } from '../../css/responsiveStyle';

const columnsWidths = {
  1: '100%',
  2: `${100 / 2}%`,
  3: `${100 / 3}%`,
  4: `${100 / 4}%`,
  5: `${100 / 5}%`,
  6: `${100 / 6}%`,
} as const;

const makeColumnsAtoms = (breakpoint: Breakpoint) =>
  styleVariants(
    columnsWidths,
    (width) => responsiveStyle({ [breakpoint]: { flex: `0 0 ${width}` } }),
    `columns_${breakpoint}`,
  );

export const columnsMobile = makeColumnsAtoms('mobile');
export const columnsTablet = makeColumnsAtoms('tablet');
export const columnsDesktop = makeColumnsAtoms('desktop');
export const columnsWide = makeColumnsAtoms('wide');
