import basekick from 'basekick';
import tokens from '../../tokens/tokens';

const size = (fontSize, rows) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: fontSize,
    typeRowSpan: rows,
    gridRowHeight: tokens.rowHeight,
    descenderHeightScale: 0.16
  });

const standardText = tokens.text.standard.desktop;
const css = {
  '.interaction': {
    ...size(standardText.size, standardText.rows),
    // eslint-disable-next-line no-warning-comments
    // TODO: Make this a 'touchable' prop on Text?
    paddingTop: '12px',
    paddingBottom: '12px'
  }
};
Object.keys(tokens.text).forEach(typeName => {
  const type = tokens.text[typeName].desktop;
  css[`.${typeName}`] = size(type.size, type.rows);
});

export default css;
