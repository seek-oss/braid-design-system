import createDesktopRules from '../../utils/createDesktopRules';
import tokens from '../tokens/tokens';

export default createDesktopRules({
  tokens,
  css: {
    '.block': { display: 'block' },
    '.inline': { display: 'inline' },
    '.none': { display: 'none' },
    '.inlineBlock': { display: 'inline-block' },
    '.flex': { display: 'flex' }
  }
});
