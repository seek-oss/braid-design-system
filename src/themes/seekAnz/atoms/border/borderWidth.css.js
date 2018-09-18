import tokens from '../../tokens/tokens';

const css = {};
Object.keys(tokens.borderWidth).forEach(borderWidth => {
  css[`.${borderWidth}`] = {
    borderStyle: 'solid',
    borderWidth: `${tokens.borderWidth[borderWidth]}px`
  };
});

export default css;
