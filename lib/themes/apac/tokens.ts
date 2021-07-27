import { darken, lighten } from 'polished';
import { palette } from '../../color/palette';
import { isLight } from '../../utils';
import { makeTokens } from '../baseTokens/apac';

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const brandAccent = '#e60278';

export default makeTokens({
  name: 'apac',
  displayName: 'APAC',
  brand: palette.seekBlue['500'],
  brandAccent,
  brandAccentActive: getActiveColor(brandAccent),
  brandAccentHover: getHoverColor(brandAccent),
  brandAccentLight: palette.seekPink['100'],
  brandAccentLightActive: darken(0.05, palette.seekPink['100']),
  brandAccentLightHover: darken(0.025, palette.seekPink['100']),
  formAccent: palette.indigo['500'],
  formAccentActive: palette.indigo['700'],
  formAccentHover: palette.indigo['600'],
  formAccentLight: palette.indigo['100'],
  formAccentLightActive: darken(0.05, palette.indigo['100']),
  formAccentLightHover: darken(0.025, palette.indigo['100']),
});
