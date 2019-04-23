import merge from 'lodash/merge';
import each from 'lodash/each';

import createResponsiveRules from './utils/createResponsiveRules';
import { px } from './utils/toUnit';
import { Tokens } from '../themes/theme';

const makeSizeRules = (tokens: Tokens, property: string) => {
  const rules: Array<{ [index: string]: object }> = [];

  each(tokens.text, (type, typeName) => {
    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${property}_${typeName}Text`,
        mobileRules: {
          [property]: px(type.mobile.rows * tokens.rowHeight),
        },
        desktopRules: {
          [property]: px(type.desktop.rows * tokens.rowHeight),
        },
      }),
    );

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${property}_${typeName}TextInline`,
        mobileRules: {
          [property]: px(type.mobile.size),
        },
        desktopRules: {
          [property]: px(type.desktop.size),
        },
      }),
    );
  });

  return merge({}, ...rules);
};

const width = {
  '.width_full': { width: '100%' },
};

export default (tokens: Tokens) =>
  merge({}, makeSizeRules(tokens, 'minHeight'), width);
