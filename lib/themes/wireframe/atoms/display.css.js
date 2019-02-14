import createResponsiveRules from '../../utils/createResponsiveRules';
import tokens from '../tokens/tokens';

export default {
  ...createResponsiveRules({
    tokens,
    selector: '.flexOnDesktop',
    mobileRules: {},
    desktopRules: {
      display: 'flex'
    }
  })
};
