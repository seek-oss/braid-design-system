import { useClassNames } from 'sku/treat';
import { fontFamily, fontWeight } from './index.treat';

export type FontWeight = 'regular' | 'medium' | 'strong';

interface Type {
  weight?: FontWeight;
}

export default ({ weight }: Type) =>
  useClassNames(fontFamily, useWeight(weight));

export const useWeight = (weight: Type['weight'] = 'regular') =>
  useClassNames(fontWeight[weight]);
