import merge from 'lodash/merge';
import { Tokens } from '../themes/theme';
import { Css } from './types';

import makeColors, { ColorParams } from './color/makeColors';
import makeDisplayRules from './makeDisplayRules';
import makeTransitions from './makeTransitions';
import makeFontWeight, { FontWeightParams } from './font/makeFontWeights';
import makeFontFamily, { FontFamilyParams } from './font/makeFontFamily';
import makeBorderColor, { BorderColorParams } from './border/makeBorderColor';
import makeBorderRadius, {
  BorderRadiusParams
} from './border/makeBorderRadius';
import makeBackgroundColors, {
  BackgroundColorParms
} from './color/makeBackgroundColors';
import makeBoxShadows, { BoxShadowParams } from './makeBoxShadows';
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
  borderRadius: BorderRadiusParams,
  boxShadows: BoxShadowParams,
  fontWeights: FontWeightParams,
  backgroundColor: BackgroundColorParms
): Css => {
  const rules = merge(
    makeFontSizes(tokens),
    makeBackgroundColors(backgroundColor),
    makeBorderColor(borderColor),
    makeBorderRadius(borderRadius),
    makeBorderWidths(tokens),
    makeBoxShadows(boxShadows),
    makeColors(colors),
    makeFills(fills),
    makeFontFamily(fontFamily),
    makeFontWeight(fontWeights),
    makeSizes(tokens),
    makeMargins(tokens),
    makePadding(tokens),
    makeDisplayRules(tokens),
    makeTransforms(tokens),
    makeTransitions()
  );

  return rules;
};

export default makeAtoms;
