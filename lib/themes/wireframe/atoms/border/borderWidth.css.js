import tokens from '../../tokens/tokens';
import { px } from '../../../utils/toUnit';

const css = {};
Object.keys(tokens.borderWidth).forEach(borderWidth => {
  css[`.${borderWidth}`] = {
    borderStyle: 'solid',
    borderWidth: px(tokens.borderWidth[borderWidth])
  };
});

export default css;
