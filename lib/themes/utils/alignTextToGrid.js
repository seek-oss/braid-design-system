import basekick from 'basekick';

export default (textDefinition, tokens) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight: tokens.rowHeight,
    descenderHeightScale: tokens.descenderHeightScale
  });
