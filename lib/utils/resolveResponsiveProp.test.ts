import { resolveResponsiveProp } from './resolveResponsiveProp';

const mobileAtoms = {
  foo: 'foo_mobile',
  bar: 'bar_mobile',
  baz: 'baz_mobile',
} as const;
const tabletAtoms = {
  foo: 'foo_tablet',
  bar: 'bar_tablet',
  baz: 'baz_tablet',
} as const;
const desktopAtoms = {
  foo: 'foo_desktop',
  bar: 'bar_desktop',
  baz: 'baz_desktop',
} as const;
const wideAtoms = {
  foo: 'foo_wide',
  bar: 'bar_wide',
  baz: 'baz_wide',
} as const;
const atoms = [mobileAtoms, tabletAtoms, desktopAtoms, wideAtoms] as const;

describe('resolveResponsiveProp', () => {
  const testData = [
    ['foo', 'foo_mobile'],
    [['foo', 'bar'], 'foo_mobile bar_tablet'],
    [['foo', 'foo'], 'foo_mobile'],
    [['foo', 'bar', 'baz'], 'foo_mobile bar_tablet baz_desktop'],
    [['foo', 'foo', 'bar'], 'foo_mobile bar_desktop'],
    [['foo', 'foo', 'bar', 'bar'], 'foo_mobile bar_desktop'],
    [['foo', 'foo', 'foo', 'bar'], 'foo_mobile bar_wide'],
    [['foo', 'foo', 'foo', 'foo'], 'foo_mobile'],
  ] as const;

  test.each(testData)('%p returns %p', (prop, expected) => {
    expect(resolveResponsiveProp(prop, ...atoms)).toEqual(expected);
  });
});
