/* eslint-disable import/namespace */
import * as themes from './';
import deepKeys from 'deep-keys';
const themeNames = Object.keys(themes);

const contract = deepKeys(themes[themeNames[0]]);

describe('Themes', () => {
  describe('Consistent API', () => {
    themeNames.forEach(themeName => {
      test(themeName, () => {
        expect(deepKeys(themes[themeName])).toEqual(contract);
      });
    });
  });
});
