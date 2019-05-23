import isEqual from 'lodash/isEqual';
import { Styles } from 'sku/treat';
import { Tokens } from './theme';

export default (tokens: Tokens) => {
  const desktopStyles = <StyleBlock>(styles: StyleBlock) => ({
    '@media': {
      [`screen and (min-width: ${tokens.responsiveBreakpoint}px)`]: styles,
    },
  });

  const responsiveStyles = (mobile: Styles, desktop: Styles): Styles => ({
    ...mobile,
    ...(isEqual(mobile, desktop) ? {} : desktopStyles(desktop)),
  });

  const rows = (x: number) => x * tokens.rowHeight;

  return { desktopStyles, responsiveStyles, rows };
};
