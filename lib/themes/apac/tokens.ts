import { lighten, darken } from 'polished';
import { palette } from '../../color/palette';
import { makeTokens } from '../baseTokens/apac';

const brandAccent = palette.seekPink['500'];

export default makeTokens({
  name: 'apac',
  displayName: 'APAC',
  brand: palette.seekBlue['500'],
  brandAccent,
  brandAccentActive: darken(0.05, brandAccent),
  brandAccentHover: lighten(0.05, brandAccent),
  brandAccentLight: palette.seekPink['50'],
  brandAccentLightActive: darken(0.05, palette.seekPink['50']),
  brandAccentLightHover: darken(0.025, palette.seekPink['50']),
});
