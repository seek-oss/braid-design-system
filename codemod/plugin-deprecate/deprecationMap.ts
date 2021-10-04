export const deprecationMap = {
  Box: {
    background: {
      card: 'surface',
      formAccentDisabled: 'neutralLight',
      input: 'surface',
      inputDisabled: 'neutralSoft',
      selection: 'formAccentSoft',
    },
    boxShadow: {
      borderStandard: 'borderNeutralLight',
      borderStandardInverted: 'borderNeutralInverted',
      borderStandardInvertedLarge: 'borderNeutralInvertedLarge',
      borderFormHover: 'borderFormAccent',
    },
  },
  atoms: {
    boxShadow: {
      borderStandard: 'borderNeutralLight',
      borderStandardInverted: 'borderNeutralInverted',
      borderStandardInvertedLarge: 'borderNeutralInvertedLarge',
      borderFormHover: 'borderFormAccent',
    },
  },
  vars: {
    backgroundColor: {
      card: 'surface',
      formAccentDisabled: 'neutralLight',
      input: 'surface',
      inputDisabled: 'neutralSoft',
      selection: 'formAccentSoft',
    },
    borderColor: {
      standard: 'neutralLight',
      standardInverted: 'neutralInverted',
      formHover: 'formAccent',
    },
  },
} as const;

type DeprecatedProp = keyof typeof deprecationMap;

export const isDeprecated = (
  componentName: string,
  propName: string,
): propName is DeprecatedProp =>
  Boolean(deprecationMap[componentName]?.[propName]);

export const getReplacement = (
  componentName: string,
  propName: DeprecatedProp,
  inputValue: string,
) => deprecationMap[componentName]?.[propName]?.[inputValue] ?? inputValue;
