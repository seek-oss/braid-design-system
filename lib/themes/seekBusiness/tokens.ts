import { lighten, darken, tint } from 'polished';
import { palette } from '../../color/palette';
import { makeTokens } from '../baseTokens/apac';

const brandAccent = palette.seekBlue['500'];

export default makeTokens({
  name: 'seekBusiness',
  displayName: 'SEEK Business',
  brand: '#009fd4',
  brandAccent,
  brandAccentLight: lighten(0.04, palette.seekBlue['300']),
  brandAccentActive: darken(0.05, brandAccent),
  brandAccentHover: lighten(0.05, brandAccent),
  brandAccentSoft: tint(0.925, brandAccent),
  brandAccentSoftActive: tint(0.85, brandAccent),
  brandAccentSoftHover: tint(0.9, brandAccent),
});
