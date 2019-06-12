import '../applyReset';
import treatTheme from './theme.treat';
import jobsDBTreatTheme from './jobsDBTheme.treat';
import jobStreetTreatTheme from './jobStreetTheme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  name: 'seekAsia',
  treatTheme,
};

export const jobsDB: Theme = {
  name: 'jobsDB',
  treatTheme: jobsDBTreatTheme,
};

export const jobStreet: Theme = {
  name: 'jobStreet',
  treatTheme: jobStreetTreatTheme,
};

export default theme;
