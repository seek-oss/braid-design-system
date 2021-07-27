import { darken, lighten, tint } from 'polished';
import { isLight } from '../../utils';
import { makeTokens } from '../baseTokens/apac';

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const brandAccent = '#0d3880';
const formAccent = '#2765cf';

export default makeTokens({
  name: 'seekBusiness',
  displayName: 'SEEK Business',
  brand: '#009fd4',
  brandAccent,
  brandAccentActive: getActiveColor(brandAccent),
  brandAccentHover: getHoverColor(brandAccent),
  brandAccentLight: tint(0.925, brandAccent),
  brandAccentLightActive: tint(0.85, brandAccent),
  brandAccentLightHover: tint(0.9, brandAccent),
  formAccent,
  formAccentActive: getActiveColor(formAccent),
  formAccentHover: getHoverColor(formAccent),
  formAccentLight: tint(0.925, formAccent),
  formAccentLightActive: tint(0.85, formAccent),
  formAccentLightHover: tint(0.9, formAccent),
});
