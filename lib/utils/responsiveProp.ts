import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../sprinkles/sprinkles.css';

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>;

export const normaliseResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>,
): Readonly<[Keys, Keys, Keys]> => {
  if (typeof value === 'string' || typeof value === 'number') {
    return [value, value, value];
  }

  if (Array.isArray(value)) {
    const { length } = value;

    if (length === 2) {
      const [mobileValue, tabletValue] = value;
      return [mobileValue, tabletValue, tabletValue];
    }

    if (length === 3) {
      return value as Readonly<[Keys, Keys, Keys]>;
    }

    if (length === 1) {
      const [mobileValue] = value;
      return [mobileValue, mobileValue, mobileValue];
    }

    throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`);
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`);
};

export const mapResponsiveProp = <
  Keys extends string | number,
  MappedValues extends string
>(
  value: ResponsiveProp<Keys> | undefined,
  valueMap: Record<Keys, MappedValues>,
): ResponsiveProp<MappedValues> | undefined => {
  if (value === undefined) {
    return value;
  }

  // If it's not a responsive prop, just map it directly
  if (typeof value === 'string' || typeof value === 'number') {
    return valueMap[value];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value,
  );

  return [valueMap[mobileValue], valueMap[tabletValue], valueMap[desktopValue]];
};

export const resolveResponsiveProp = <Keys extends string | number>(
  value: OptionalResponsiveValue<Keys>,
  mobileAtoms: Record<Keys, string>,
  tabletAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return mobileAtoms[value!];
  }

  const { mobile, tablet, desktop } = normalizeResponsiveValue(value);

  return `${mobileAtoms[mobile!]}${
    tablet !== undefined && tablet !== mobile ? ` ${tabletAtoms[tablet!]}` : ''
  }${
    desktop !== undefined && desktop !== tablet
      ? ` ${desktopAtoms[desktop!]}`
      : ''
  }`;
};
