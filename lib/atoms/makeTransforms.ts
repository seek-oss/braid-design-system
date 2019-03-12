import merge from 'lodash/merge';
import alignTextToGrid from './utils/alignTextToGrid';
import createResponsiveRules from './utils/createResponsiveRules';
import toPairs from 'lodash/toPairs';
import { Tokens } from '../themes/theme';

const createRules = (tokens: Tokens, type: any, className: string) => {
  const { transform: mobileTransform } = alignTextToGrid(type.mobile, tokens);
  const { transform: desktopTransform } = alignTextToGrid(type.desktop, tokens);

  return createResponsiveRules({
    tokens,
    selector: `.transform_${className}`,
    mobileRules: {
      transform: mobileTransform,
    },
    desktopRules: {
      transform: desktopTransform,
    },
  });
};

export interface TransformParams {
  touchable: string;
}

export default (tokens: Tokens, transforms: TransformParams) => {
  const textRules = toPairs(tokens.text).map(([typeName, type]) =>
    createRules(tokens, type, `${typeName}Text`),
  );
  const headingRules = toPairs(tokens.heading).map(([typeName, type]) =>
    createRules(tokens, type, `${typeName}Heading`),
  );

  const transformRules = {
    '.transform_touchable': { '&:active': { transform: transforms.touchable } },
  };

  return merge({}, ...textRules, ...headingRules, transformRules);
};
