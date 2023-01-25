import { darkMode } from '../lib/css/atoms/sprinkles.css';
const flag = '_bdsdm';
// VALUES
// 0 = light mode
// 1 = dark mode
// 2 = OS Preference
// TODO: COLORMODE RELEASE
// Finalise import contract
/** @deprecated Use `import { colorModeQueryParamCheck } from 'braid-design-system/color-mode/query-param'` instead. */
export const __experimentalDarkMode__ = [
  '<script>',
  `((l,w)=>{try{r=/[?&]${flag}=(\\d)/;[,s]=l.search.match(r)||[];w.${flag}=s;if(s){history.replaceState(null,'',l.pathname+l.search.replace(r,'').replace(/^&/,'?')+l.hash);if(s==1||(s==2&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('${darkMode}')}}catch(e){}})(location,window)`,
  '</script>',
].join('');
