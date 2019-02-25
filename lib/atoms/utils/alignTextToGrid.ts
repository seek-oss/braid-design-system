// @ts-ignore
import basekick from 'basekick';
import { Tokens } from '../../themes/theme';

export default (textDefinition: any, tokens: Tokens) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight: tokens.rowHeight,
    descenderHeightScale: tokens.descenderHeightScale
  });
