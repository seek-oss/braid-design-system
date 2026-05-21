import docs from 'braid-design-system/themes/docs';
import seekBusiness from 'braid-design-system/themes/seekBusiness';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';

export const allThemes = {
  docs,
  seekBusiness,
  seekJobs,
  wireframe,
};

export type ThemeName = keyof typeof allThemes;
