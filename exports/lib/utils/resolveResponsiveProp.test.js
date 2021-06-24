import { resolveResponsiveProp } from './resolveResponsiveProp';
const mobileAtoms = {
  foo: 'foo_mobile',
  bar: 'bar_mobile',
  baz: 'baz_mobile'
};
const tabletAtoms = {
  foo: 'foo_tablet',
  bar: 'bar_tablet',
  baz: 'baz_tablet'
};
const desktopAtoms = {
  foo: 'foo_desktop',
  bar: 'bar_desktop',
  baz: 'baz_desktop'
};
const atoms = [mobileAtoms, tabletAtoms, desktopAtoms];
describe('resolveResponsiveProp', function () {
  const testData = [['foo', 'foo_mobile'], [['foo', 'bar'], 'foo_mobile bar_tablet'], [['foo', 'foo'], 'foo_mobile'], [['foo', 'bar', 'baz'], 'foo_mobile bar_tablet baz_desktop'], [['foo', 'foo', 'bar'], 'foo_mobile bar_desktop'], [['foo', 'foo', 'foo'], 'foo_mobile']];
  test.each(testData)('%p returns %p', function (prop, expected) {
    expect(resolveResponsiveProp.apply(void 0, [prop].concat(atoms))).toEqual(expected);
  });
});