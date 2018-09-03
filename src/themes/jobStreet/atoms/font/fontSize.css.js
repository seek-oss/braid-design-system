import basekick from 'basekick';
import tokens from '../../tokens/tokens';

const size = (fontSize, rows) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: fontSize,
    typeRowSpan: rows,
    gridRowHeight: tokens.rowHeight,
    descenderHeightScale: 0.13
  });

const standardType = tokens.type.standard;
const css = {
  '.interaction': {
    ...size(standardType.size, standardType.rows),
    // eslint-disable-next-line no-warning-comments
    // TODO: Make this a 'touchable' prop on Text?
    paddingTop: '12px',
    paddingBottom: '12px'
  }
};
Object.keys(tokens.type).forEach(typeName => {
  const type = tokens.type[typeName];
  css[`.${typeName}`] = size(type.size, type.rows);
});

export default css;
