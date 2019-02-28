import { Tokens } from '../../themes/theme';

import mapObject from '../utils/mapObject';
import { px } from '../utils/toUnit';

export default (tokens: Tokens) =>
  mapObject(tokens.borderWidth, (key, value) => [
    `.borderWidth_${key}`,
    {
      borderStyle: 'solid',
      borderWidth: px(value),
    },
  ]);
