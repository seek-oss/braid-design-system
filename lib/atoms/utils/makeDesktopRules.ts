import { Tokens } from '../../themes/theme';

interface Params<CssRules> {
  tokens: Tokens;
  css: CssRules;
}

export default <CssRules>({ tokens, css }: Params<CssRules>) => ({
  [`@media screen and (min-width: ${tokens.responsiveBreakpoint}px)`]: css,
});
