import { Tokens } from '../../themes/theme';

interface Params {
  tokens: Tokens;
  css: object;
}

export default ({ tokens, css }: Params) => ({
  [`@media screen and (min-width: ${tokens.responsiveBreakpoint}px)`]: css
});
