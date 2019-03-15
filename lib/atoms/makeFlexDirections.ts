import mapKeys from 'lodash/mapKeys';
import { Tokens } from '../themes/theme';
import createDesktopRules from './utils/makeDesktopRules';

const defaultFlexDirectionPrefix = '.flexDirection_';
const desktopFlexDirectionPrefix = '.flexDirectionDesktop_';

const flexDirectionRules = {
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
};

const defaultFlexDirectionRules = mapKeys(
  flexDirectionRules,
  (value, key) => `${defaultFlexDirectionPrefix}${key}`,
);
const desktopFlexDirectionRules = mapKeys(
  flexDirectionRules,
  (value, key) => `${desktopFlexDirectionPrefix}${key}`,
);

export default (tokens: Tokens) => ({
  ...defaultFlexDirectionRules,
  ...createDesktopRules({ tokens, css: desktopFlexDirectionRules }),
});
