import { globalFontFace } from '@vanilla-extract/css';
import { semiBoldWeight, thaiPatchFamilyName } from './mediumWeightPatch';

/*
  This patch is designed to coerce the semi-bold font weight
  to bold for fonts that do not handle weights between regular
  and bold.

  This is relevant for Thai character ranges, which are not
  available in the `apac` font stack, so we map the semi-bold
  weight to the bold sans-serif system font — Thonburi on Mac,
  Tahoma on Windows.
*/

globalFontFace(thaiPatchFamilyName, {
  fontWeight: semiBoldWeight,
  src: "local('Thonburi Bold'), local('Tahoma Bold')",
  unicodeRange: 'U+0E01-0E5B, U+200C-200D, U+25CC',
});

globalFontFace(thaiPatchFamilyName, {
  src: "local('Thonburi'), local('Tahoma')",
  unicodeRange: 'U+0E01-0E5B, U+200C-200D, U+25CC',
});
