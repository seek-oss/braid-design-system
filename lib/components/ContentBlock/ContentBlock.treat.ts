import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

export const root = style({ margin: '0 auto' });

export const width = styleMap(({ contentWidth }) =>
  mapToStyleProperty(contentWidth, 'maxWidth'),
);
