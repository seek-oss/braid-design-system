import merge from 'lodash/merge';
import alignTextToGrid from './alignTextToGrid';
import createResponsiveRules from './createResponsiveRules';
import { px } from './toUnit';
import each from 'lodash/each';

export default ({ tokens }) => {
  const rules = [];
  each(
    {
      ...tokens.text,
      ...tokens.heading
    },
    (type, typeName) => {
      const {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight
      } = alignTextToGrid(type.mobile, tokens);
      const {
        fontSize: desktopFontSize,
        lineHeight: desktopLineHeight
      } = alignTextToGrid(type.desktop, tokens);

      const mobileRules = {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight
      };
      const desktopRules = {
        fontSize: desktopFontSize,
        lineHeight: desktopLineHeight
      };

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
              ...desktopRules,
              paddingTop: desktopInteractionPadding,
              paddingBottom: desktopInteractionPadding
            }
          })
        );
      }
    }
  );

  return merge({}, ...rules);
};
