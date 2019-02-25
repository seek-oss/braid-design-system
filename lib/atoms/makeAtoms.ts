import merge from 'lodash/merge';
import { Tokens } from '../themes/theme';
import { Css } from './types';

import makeColors, { ColorParams } from './color/makeColors';
import makeDisplayRules from './makeDisplayRules';
import makeTransitions from './makeTransitions';
import makeFontWeight from './font/makeFontWeights';
import makeFontFamily, { FontFamilyParams } from './font/makeFontFamily';
import makeBorderColor, { BorderColorParams } from './border/makeBorderColor';
import makeBorderRadius from './border/makeBorderRadius';
import makeBackgroundColors, {
  BackgroundColorParms
} from './color/makeBackgroundColors';
import makeBoxShadows from './makeBoxShadows';
import makePadding from './makePadding';
import makeMargins from './makeMargins';
import makeTransforms from './makeTransforms';
import makeSizes from './makeSizes';
import makeFontSizes from './font/makeFontSizes';
import makeFills, { FillParams } from './color/makeFills';
import makeBorderWidths from './border/makeBorderWidths';

const makeAtoms = (
  tokens: Tokens,
  colors: ColorParams,
  fills: FillParams,
  fontFamily: FontFamilyParams,
  borderColor: BorderColorParams,
  backgroundColor: BackgroundColorParms
): Css => {
  const rules = merge(
    makeColors(colors),
    makeFills(fills),
    makeDisplayRules(tokens),
    makeTransitions(),
    makeFontWeight(),
    makeFontFamily(fontFamily),
    makeFontSizes(tokens),
    makeBorderColor(borderColor),
    makeBorderRadius(),
    makeBorderWidths(tokens),
    makeBackgroundColors(backgroundColor),
    makeBoxShadows(),
    makePadding(tokens),
    makeMargins(tokens),
    makeTransforms(tokens),
    makeSizes(tokens)
  );

  return rules;
};

export default makeAtoms;
