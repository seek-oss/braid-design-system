import { TextDefinition } from './../utils/alignTextToGrid';
import alignTextToGrid from '../utils/alignTextToGrid';
import { px } from '../utils/toUnit';
import makeDesktopRules from '../utils/makeDesktopRules';
import { Tokens, Breakpoint } from '../../themes/theme';

const getFontSizeRules = (textDefinition: TextDefinition, tokens: Tokens) => {
  const { fontSize, lineHeight } = alignTextToGrid(textDefinition, tokens);

  return {
    fontSize,
    lineHeight,
  };
};

const makeRules = (responsiveType: Breakpoint, tokens: Tokens) => {
  const interactionHeight = tokens.interactionRows * tokens.rowHeight;

  const standardRules = getFontSizeRules(
    tokens.text.standard[responsiveType],
    tokens,
  );
  const interactionPadding = px(
    (interactionHeight -
      tokens.text.standard[responsiveType].rows * tokens.rowHeight) /
      2,
  );

  return {
    '.fontSize_standard': standardRules,
    '.fontSize_large': getFontSizeRules(
      tokens.text.large[responsiveType],
      tokens,
    ),
    '.fontSize_interaction': {
      ...standardRules,
      paddingTop: interactionPadding,
      paddingBottom: interactionPadding,
    },
    '.fontSize_level1': getFontSizeRules(
      tokens.heading.level1[responsiveType],
      tokens,
    ),
    '.fontSize_level2': getFontSizeRules(
      tokens.heading.level2[responsiveType],
      tokens,
    ),
    '.fontSize_level3': getFontSizeRules(
      tokens.heading.level3[responsiveType],
      tokens,
    ),
  };
};

export default (tokens: Tokens) => {
  return {
    ...makeRules('mobile', tokens),
    ...makeDesktopRules({ tokens, css: makeRules('desktop', tokens) }),
  };
};
