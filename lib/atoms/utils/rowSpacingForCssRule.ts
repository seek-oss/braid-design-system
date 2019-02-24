import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';

import { px } from './toUnit';
import { Tokens } from '../../themes/theme';

export default (ruleName: string, { rowHeight, rowSpacing }: Tokens) => {
  return fromPairs(
    toPairs(rowSpacing).map(([key, value]) => [
      `.${ruleName}_${key}`,
      {
        [ruleName]: px(value * rowHeight)
      }
    ])
  );
};
