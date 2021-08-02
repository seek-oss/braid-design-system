import { lighten, darken, tint } from 'polished';
import { makeTokens } from '../baseTokens/apac';

const brandAccent = '#0d3880';

export default makeTokens({
  name: 'seekBusiness',
  displayName: 'SEEK Business',
  brand: '#009fd4',
  brandAccent,
  brandAccentActive: darken(0.05, brandAccent),
  brandAccentHover: lighten(0.05, brandAccent),
  brandAccentLight: tint(0.925, brandAccent),
  brandAccentLightActive: tint(0.85, brandAccent),
  brandAccentLightHover: tint(0.9, brandAccent),
});
