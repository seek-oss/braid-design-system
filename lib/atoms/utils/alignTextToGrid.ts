import basekick from 'basekick';
import { Tokens } from '../../themes/theme';

export interface TextDefinition {
  rows: number;
  size: number;
}
export default (textDefinition: TextDefinition, tokens: Tokens) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight: tokens.rowHeight,
    descenderHeightScale: tokens.descenderHeightScale,
  });
