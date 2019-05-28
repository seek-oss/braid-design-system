import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';

import { Tokens } from '../../themes/theme';

export default (
  ruleName: string,
  propertyName: string,
  { rowHeight, rowSpacing }: Tokens,
) => {
  const rowRules = fromPairs(
    toPairs(rowSpacing).map(([key, value]) => [
      `.${ruleName}_${key}`,
      {
        [propertyName]: value * rowHeight,
      },
    ]),
  );

  return {
    [`.${ruleName}_none`]: {
      [propertyName]: 0,
    },
    ...rowRules,
  };
};
