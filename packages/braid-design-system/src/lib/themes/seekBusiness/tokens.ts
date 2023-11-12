import { lighten, darken, tint, saturate } from 'polished';
import { palette } from '../../color/palette';
import { makeTokens } from '../baseTokens/nvl';

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
  tokenOverrides: {
    border: {
      color: {
        formAccent: palette.indigo['500'],
        formAccentLight: palette.indigo['300'],
      },
    },
    color: {
      foreground: {
        formAccent: palette.indigo['500'],
        formAccentLight: palette.indigo['300'],
      },
      background: {
        formAccent: palette.indigo['500'],
        formAccentActive: darken(0.05, palette.indigo['500']),
        formAccentHover: saturate(0.5, lighten(0.075, palette.indigo['500'])),
        formAccentSoft: palette.indigo['50'],
        formAccentSoftActive: darken(0.05, palette.indigo['50']),
        formAccentSoftHover: darken(0.025, palette.indigo['50']),
      },
    },
  },
});
