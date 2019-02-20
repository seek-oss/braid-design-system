export default ({ tokens, css }) => ({
  [`@media screen and (min-width: ${tokens.responsiveBreakpoint}px)`]: css
});
