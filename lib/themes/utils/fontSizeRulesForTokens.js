import basekick from 'basekick';
import merge from 'lodash/merge';
import createResponsiveRules from './createResponsiveRules';
import { px } from './toUnit';

export default ({ tokens }) => {
  const size = (fontSize, rows) =>
    basekick({
      baseFontSize: 1,
      typeSizeModifier: fontSize,
      typeRowSpan: rows,
      gridRowHeight: tokens.rowHeight,
      descenderHeightScale: tokens.descenderHeightScale
    });

  const rules = [];
  Object.keys(tokens.text).forEach(typeName => {
    const type = tokens.text[typeName];

    const mobileRules = size(type.mobile.size, type.mobile.rows);
    const desktopRules = size(type.desktop.size, type.desktop.rows);

    rules.push(
      createResponsiveRules({
        tokens,
        selector: `.${typeName}`,
        mobileRules,
        desktopRules
      })
    );

    if (typeName === 'standard') {
      const interactionHeight = tokens.interactionRows * tokens.rowHeight;
      const mobileInteractionPadding = px(
        (interactionHeight - type.mobile.rows * tokens.rowHeight) / 2
      );
      const desktopInteractionPadding = px(
        (interactionHeight - type.desktop.rows * tokens.rowHeight) / 2
      );

      rules.push(
        createResponsiveRules({
          tokens,
          selector: '.interaction',
          mobileRules: {
            ...mobileRules,
            paddingTop: mobileInteractionPadding,
            paddingBottom: mobileInteractionPadding
          },
          desktopRules: {
            ...mobileRules,
            paddingTop: desktopInteractionPadding,
            paddingBottom: desktopInteractionPadding
          }
        })
      );
    }
  });

  return merge({}, ...rules);
};
