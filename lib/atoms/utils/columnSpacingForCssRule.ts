import { px } from './toUnit';
import { Tokens } from '../../themes/theme';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';

export default (ruleName: string, { columnWidth, columnSpacing }: Tokens) => {
  return fromPairs(
    toPairs(columnSpacing).map(([key, value]) => [
      `.${ruleName}_${key}`,
      {
        [ruleName]: px(value * columnWidth)
      }
    ])
  );
};
