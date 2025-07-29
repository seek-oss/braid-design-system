import dedent from 'dedent';
import type React from 'react';

import { type RequiredResponsiveValue, sprinkles } from './sprinkles.css';
import type { vars } from '../../themes/vars.css';
import * as resetStyles from '../reset/reset.css';

type Sprinkles = Parameters<typeof sprinkles>[0];

export type Space = keyof typeof vars.space | 'none';
export type ResponsiveSpace = RequiredResponsiveValue<Space>;

export interface Atoms extends Sprinkles {
  reset?: keyof React.JSX.IntrinsicElements;
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

          Braid manages the focus outlines of interactive elements as part of its
          scoped CSS reset.

          For a custom focus outlines on non-interactive elements, consider
          \`outline='focus'\` or \`outlineStyle\` for more complex scenarios.

          See documentation:
          1. https://seek-oss.github.io/braid-design-system/components/Box#focus-outlines
          2. https://seek-oss.github.io/braid-design-system/css/outlineStyle
        `,
      );
    }
    if (rest.boxShadow && rest.boxShadow === 'outlineFocus') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          \`outline='none'\` is deprecated and will be removed in a future release.

          Braid no longer uses the \`box-shadow\` for focus outlines.
          Instead, consider \`outline='focus'\` or the \`outlineStyle\` css utility.

          See documentation:
          1. https://seek-oss.github.io/braid-design-system/components/Box#focus-outlines
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
