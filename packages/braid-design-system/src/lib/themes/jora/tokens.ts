import { lighten, darken } from 'polished';
import { palette } from '../../color/joraPalette';
import { makeTokens } from '../baseTokens/jora';

const brandAccent = palette.green['500'];
const brandAccentSoft = palette.green['50'];

export default makeTokens({
  name: 'jora',
  displayName: 'Jora',
  brand: palette.green['500'],
  brandAccent,
  brandAccentLight: palette.green['200'],
  brandAccentActive: darken(0.05, brandAccent),
  brandAccentHover: lighten(0.05, brandAccent),
  brandAccentSoft,
  brandAccentSoftActive: darken(0.05, brandAccentSoft),
  brandAccentSoftHover: darken(0.025, brandAccentSoft),
});
