import { darkMode } from '../../lib/css/atoms/sprinkles.css';

const flag = '_bdsdm';

const colorModes = ['light', 'dark', 'system'] as const;
export type ColorMode = (typeof colorModes)[number];

/**
 * Script to resolve the color mode preference from local storage.
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
 * @param prefix A string to prefix the local storage key with. This should be consistent across experiences within the same user experience flow.
 * @returns Stringified script tag to place in document head.
 */
export const colorModeCheck = (prefix: string) => {
  if (prefix.trim().length === 0) {
    throw new Error('Prefix cannot be empty an string');
  }

  const name = `${prefix}${flag}`;

  return [
    '<script>',
    `(()=>{try{s=localStorage.getItem('${name}');if(s==1||(s==2&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('${darkMode}')}}catch(e){}})()`,
    '</script>',
  ].join('');
};

const applyColorMode = (preference: ColorMode, queryMatch: boolean) => {
  const prefersDark =
    preference === 'dark' || (preference === 'system' && queryMatch);

  document.documentElement.classList[prefersDark ? 'add' : 'remove'](darkMode);
};

/**
 * Persists the color mode preference to local storage.
 *
 * ---
 *
 * Example usage:
 *
 * ```js
 * setColorMode('my-app', 'dark');
 * ```
 *
 * ---
 *
 * @param prefix A string to prefix the local storage key with. This should be consistent across experiences within the same user experience flow.
 * @param preference The preferred color mode preference: 'light', 'dark' or 'system'.
 */
export const setColorMode = (prefix: string, preference: ColorMode) => {
  if (prefix.trim().length === 0) {
    throw new Error('Prefix cannot be empty an string');
  }

  if (!colorModes.includes(preference)) {
    throw new Error(
      `Preference must be either \`light\`, \`dark\` or \`system\`. Received: "${preference}"`,
    );
  }

  try {
    const preferDarkQuery = matchMedia('(prefers-color-scheme:dark)');

    applyColorMode(preference, preferDarkQuery.matches);

    if (preferDarkQuery.matches) {
      preferDarkQuery.addEventListener('change', (e) => {
        applyColorMode(preference, e.matches);
      });
    }

    localStorage.setItem(`${prefix}${flag}`, preference);
  } catch (e) {}
};

/**
 * Retrieve the current color mode preference from local storage.
 *
 * ---
 *
 * Example usage:
 *
 * ```js
 * getColorMode('my-app', 'light);
 * ```
 *
 * ---
 *
 * @param prefix A string to prefix the local storage key with. This should be consistent across experiences within the same user experience flow.
 * @param defaultMode The default color mode to return if no preference is found, choose from 'light' or 'dark'.
 * @returns The current color mode preference: 'light', 'dark' or 'system'.
 */
export const getColorMode = (prefix: string, defaultMode: ColorMode) => {
  if (prefix.trim().length === 0) {
    throw new Error('Prefix cannot be empty an string');
  }

  let pref: ColorMode | undefined;

  try {
    pref = localStorage.getItem(`${prefix}${flag}`) as ColorMode;
  } catch (e) {}

  if (pref && colorModes.includes(pref)) {
    return pref;
  }

  if (typeof document !== 'undefined' && document.documentElement) {
    // matchMedia('(prefers-color-scheme:dark)').matches
    return document.documentElement.classList.contains(darkMode)
      ? 'dark'
      : 'light';
  }

  return defaultMode;
};
