import merge from 'lodash/merge';
import partition from 'lodash/partition';
import pick from 'lodash/pick';

import { Tokens } from '../themes/theme';
import { Css } from './types';

import makeColors, { ColorParams } from './color/makeColors';
import makeDisplayRules from './makeDisplayRules';
import makeTransitions from './makeTransitions';
import makeBorderRadius, { BorderRadiusParams } from './makeBorderRadius';
import makeBackgroundColors, {
  BackgroundColorParams,
} from './color/makeBackgroundColors';
import makeBoxShadows, { BoxShadowParams } from './makeBoxShadows';
import makePadding from './makePadding';
import makeMargins from './makeMargins';
import makeTransforms, { TransformParams } from './makeTransforms';
import makeSizes from './makeSizes';
import makeFlexDirections from './makeFlexDirections';

const makeAtoms = (
  tokens: Tokens,
  colors: ColorParams,
  borderRadius: BorderRadiusParams,
  boxShadows: BoxShadowParams,
  backgroundColor: BackgroundColorParams,
  transforms: TransformParams,
): Css => {
  const rules = merge(
    makeBackgroundColors(backgroundColor),
    makeBorderRadius(borderRadius),
    makeBoxShadows(tokens, boxShadows),
    makeColors(colors),
    makeSizes(),
    makeMargins(tokens),
    makePadding(tokens),
    makeDisplayRules(tokens),
    makeTransforms(transforms),
    makeTransitions(),
    makeFlexDirections(tokens),
  );

  const [queryRules, regularRules] = partition(Object.keys(rules), ruleName =>
    ruleName.startsWith('@'),
  );

  // Include media queries last to ensure higher specificity
  return {
    ...pick(rules, regularRules),
    ...pick(rules, queryRules),
  };
};

export default makeAtoms;
