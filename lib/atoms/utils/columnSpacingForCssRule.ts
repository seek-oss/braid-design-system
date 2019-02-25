import { px } from './toUnit';
import { Tokens } from '../../themes/theme';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';

export default (
  ruleName: string,
  propertyName: string,
  { columnWidth, columnSpacing }: Tokens
) => {
  const columnRules = fromPairs(
    toPairs(columnSpacing).map(([key, value]) => [
      `.${ruleName}_${key}`,
      {
        [propertyName]: px(value * columnWidth)
      }
    ])
  );

  return {
    [`.${ruleName}_none`]: {
      [propertyName]: 'none'
    },
    ...columnRules
  };
};
