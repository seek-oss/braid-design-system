import merge from 'lodash/merge';
import createResponsiveRules from './createResponsiveRules';

export default ({ tokens, property }) => {
  const rules = [];

  Object.keys(tokens.text).forEach(typeName => {
    const type = tokens.text[typeName];

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${typeName}Text`,
        mobileRules: {
          [property]: `${type.mobile.rows * tokens.rowHeight}px`
        },
        desktopRules: {
          [property]: `${type.desktop.rows * tokens.rowHeight}px`
        }
      })
    );

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${typeName}TextInline`,
        mobileRules: {
          [property]: `${type.mobile.size}px`
        },
        desktopRules: {
          [property]: `${type.desktop.size}px`
        }
      })
    );
  });

  return merge({}, ...rules);
};
