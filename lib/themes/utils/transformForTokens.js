import merge from 'lodash/merge';
import alignTextToGrid from './alignTextToGrid';
import createResponsiveRules from './createResponsiveRules';

export default ({ tokens }) => {
  const rules = [];
  const fontSizes = {
    ...tokens.text,
    ...tokens.heading
  };
  Object.keys(fontSizes).forEach(typeName => {
    const type = fontSizes[typeName];

    const { transform: mobileTransform } = alignTextToGrid(type.mobile, tokens);
    const { transform: desktopTransform } = alignTextToGrid(
      type.desktop,
      tokens
    );

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${typeName}Text`,
        mobileRules: {
          transform: mobileTransform
        },
        desktopRules: {
          transform: desktopTransform
        }
      })
    );
  });

  return merge({}, ...rules);
};
