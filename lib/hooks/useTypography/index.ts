import { useClassNames } from 'sku/treat';
import { fontFamily, fontWeight, fontSize, transform } from './index.treat';

export type FontWeight = 'regular' | 'medium' | 'strong';

interface TypographyParams {
  weight?: FontWeight;
  size: keyof typeof fontSize;
  baseline: boolean;
}

export default ({ weight, size, baseline }: TypographyParams) =>
  useClassNames(fontFamily, useWeight(weight), fontSize[size], {
    [transform[size]]: baseline,
  });

export const useWeight = (weight: TypographyParams['weight'] = 'regular') =>
  useClassNames(fontWeight[weight]);
