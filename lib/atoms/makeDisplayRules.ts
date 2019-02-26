import mapKeys from 'lodash/mapKeys';

import { Tokens } from '../themes/theme';
import createDesktopRules from './utils/makeDesktopRules';

const defaultDisplayPrefix = '.display_';
const desktopDisplayPrefix = '.displayDesktop_';

const displayRules = {
  block: { display: 'block' },
  inline: { display: 'inline' },
  none: { display: 'none' },
  inlineBlock: { display: 'inline-block' },
  flex: { display: 'flex' }
};

const defaultDisplayRules = mapKeys(
  displayRules,
  (value, key) => `${defaultDisplayPrefix}${key}`
);
const desktopDisplayRules = mapKeys(
  displayRules,
  (value, key) => `${desktopDisplayPrefix}${key}`
);

export default (tokens: Tokens) => ({
  ...defaultDisplayRules,
  ...createDesktopRules({ tokens, css: desktopDisplayRules })
});
