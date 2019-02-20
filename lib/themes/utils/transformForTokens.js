import merge from 'lodash/merge';
import alignTextToGrid from './alignTextToGrid';
import createResponsiveRules from './createResponsiveRules';
import toPairs from 'lodash/toPairs';

const createRules = (tokens, type, className) => {
  const { transform: mobileTransform } = alignTextToGrid(type.mobile, tokens);
  const { transform: desktopTransform } = alignTextToGrid(type.desktop, tokens);

  return createResponsiveRules({
    tokens,
    selector: `.${className}`,
    mobileRules: {
      transform: mobileTransform
    },
    desktopRules: {
      transform: desktopTransform
    }
  });
};

export default ({ tokens }) => {
  const textRules = toPairs(tokens.text).map(([typeName, type]) =>
    createRules(tokens, type, `${typeName}Text`)
  );
  const headingRules = toPairs(tokens.heading).map(([typeName, type]) =>
    createRules(tokens, type, `${typeName}Heading`)
  );

  return merge({}, ...textRules, ...headingRules);
};
