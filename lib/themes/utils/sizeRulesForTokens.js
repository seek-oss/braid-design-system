import merge from 'lodash/merge';
import createResponsiveRules from './createResponsiveRules';
import { px } from './toUnit';

export default ({ tokens, property }) => {
  const rules = [];
  const fontSizes = {
    ...tokens.text,
    ...tokens.heading
  };
  Object.keys(fontSizes).forEach(typeName => {
    const type = fontSizes[typeName];

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${typeName}Text`,
        mobileRules: {
          [property]: px(type.mobile.rows * tokens.rowHeight)
        },
        desktopRules: {
          [property]: px(type.desktop.rows * tokens.rowHeight)
        }
      })
    );

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${typeName}TextInline`,
        mobileRules: {
          [property]: px(type.mobile.size)
        },
        desktopRules: {
          [property]: px(type.desktop.size)
        }
      })
    );
  });

  return merge({}, ...rules);
};
