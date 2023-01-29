import { darkMode } from '../lib/css/atoms/sprinkles.css';

const flag = '_bdsdm';
// VALUES
// 0 = light mode
// 1 = dark mode
// 2 = OS Preference
declare global {
  interface Window {
    [flag]: '0' | '1' | '2';
  }
}

/**
 * Script to resolve the color mode preference from the query string, used for passing the native mobile app color mode preference to an embedded Braid web UI.
 *
 * Pre-minified script tag, designed to be inserted at the beginning of the document head. This ensures the color mode preference is evaluated and applied before any renderering occurs, preventing the flash of light mode.
 *
 * ---
 *
 * Example usage:
 *
 * ```html
 * <html>
 *  <head>
 *    <!-- Place script here -->
 * ```
 *
 * ---
 *
 * @returns Stringified script tag to place in document head.
 */
export const colorModeQueryParamCheck = [
  '<script>',
  `((l,w)=>{try{r=/[?&]${flag}=(\\d)/;[,s]=l.search.match(r)||[];w.${flag}=s;if(s){history.replaceState(null,'',l.pathname+l.search.replace(r,'').replace(/^&/,'?')+l.hash);if(s==1||(s==2&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('${darkMode}')}}catch(e){}})(location,window)`,
  '</script>',
].join('');

/**
 * For Braid UIs embedded within the native mobile app.
 * Retrieves the native app color mode preference as discovered on page load from the query string.
 *
 * (Note: Requires the `colorModeQueryParamCheck` to have been included in the head of the document and evaluated first)
 *
 * ---
 *
 * Example usage:
 *
 * ```ts
 * `/my-url?id=123&${getColorModeQueryParam()}`
 * ```
 *
 * ---
 *
 * @returns Braid color mode preference as query string parameter
 */
export const getColorModeQueryParam = () => {
  if (typeof window !== 'undefined' && window[flag]) {
    return `${flag}=${window[flag]}` as const;
  }

  return '';
};
