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
  brandAccentSoft: palette.seekPink['50'],
  brandAccentSoftActive: darken(0.05, palette.seekPink['50']),
  brandAccentSoftHover: darken(0.025, palette.seekPink['50']),
});
