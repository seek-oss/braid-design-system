import isEqual from 'lodash/isEqual';
import { Style } from 'sku/treat';
import { TreatTokens } from './makeTreatTheme';

export default (tokens: TreatTokens) => {
  const desktopStyles = <StyleBlock>(styles: StyleBlock) => ({
    '@media': {
      [`screen and (min-width: ${tokens.responsiveBreakpoint}px)`]: styles,
    },
  });

  const responsiveStyles = (mobile: Style, desktop: Style): Style => ({
    ...mobile,
    ...(isEqual(mobile, desktop) ? {} : desktopStyles(desktop)),
  });

  const rows = (x: number) => x * tokens.grid.row;

  return { desktopStyles, responsiveStyles, rows };
};
