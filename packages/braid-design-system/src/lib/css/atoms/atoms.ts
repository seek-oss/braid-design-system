import dedent from 'dedent';

import { type RequiredResponsiveValue, sprinkles } from './sprinkles.css';
import type { vars } from '../../themes/vars.css';
import * as resetStyles from '../reset/reset.css';

type Sprinkles = Parameters<typeof sprinkles>[0];

export type Space = keyof typeof vars.space | 'none';
export type ResponsiveSpace = RequiredResponsiveValue<Space>;

export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
}

export const atoms = ({ reset, ...rest }: Atoms) => {
  if (!reset) {
    return sprinkles(rest);
  }

  if (process.env.NODE_ENV !== 'production') {
    if (rest.outline && rest.outline === 'none') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          \`outline='none'\` is deprecated and will be removed in a future release.
    
          Braid manages most focus outlines automatically.
          For a custom focus outlines, consider \`outline='focus'\` or \`outlineStyle\`.

          See documentation:
          1. https://seek-oss.github.io/braid-design-system/css/vars
          2. https://seek-oss.github.io/braid-design-system/css/outlineStyle
          `,
      );
    }
    if (rest.boxShadow && rest.boxShadow === 'outlineFocus') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          \`boxShadow='outlineFocus'\` is deprecated and will be removed in a future release.
    
          Braid manages most focus outlines automatically.
          For a custom focus outlines, consider \`outline='focus'\` or \`outlineStyle\`.

          See documentation:
          1. https://seek-oss.github.io/braid-design-system/css/vars
          2. https://seek-oss.github.io/braid-design-system/css/outlineStyle
          `,
      );
    }
  }

  const elementReset =
    resetStyles.element[reset as keyof typeof resetStyles.element];

  const sprinklesClasses = sprinkles(rest);

  return `${resetStyles.base}${elementReset ? ` ${elementReset}` : ''}${
    sprinklesClasses ? ` ${sprinklesClasses}` : ''
  }`;
};
