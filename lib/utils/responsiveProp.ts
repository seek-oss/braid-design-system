export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>;

export const normaliseResponsiveProp = <Keys extends string>(
  value: ResponsiveProp<Keys>,
): Readonly<[Keys, Keys, Keys]> => {
  if (typeof value === 'string') {
    return [value, value, value];
  }

  const { length } = value;

  if (length === 3) {
    return value as Readonly<[Keys, Keys, Keys]>;
  }

  if (length === 2) {
    const [mobileValue, tabletValue] = value;
    return [mobileValue, tabletValue, tabletValue];
  }

  throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`);
};

export const mapResponsiveProp = <
  Keys extends string,
  MappedValues extends string
>(
  value: ResponsiveProp<Keys> | undefined,
  valueMap: Record<Keys, MappedValues>,
): ResponsiveProp<MappedValues> | undefined => {
  if (value === undefined) {
    return value;
  }

  // If it's not a responsive prop, just map it directly
  if (typeof value === 'string') {
    return valueMap[value];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value,
  );

  return [valueMap[mobileValue], valueMap[tabletValue], valueMap[desktopValue]];
};

export const resolveResponsiveProp = <Keys extends string>(
  value: ResponsiveProp<Keys>,
  mobileAtoms: Record<Keys, string>,
  tabletAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string') {
    return mobileAtoms[value!];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value,
  );

  return `${mobileAtoms[mobileValue!]}${
    tabletValue !== mobileValue ? ` ${tabletAtoms[tabletValue!]}` : ''
  }${desktopValue !== tabletValue ? ` ${desktopAtoms[desktopValue!]}` : ''}`;
};
