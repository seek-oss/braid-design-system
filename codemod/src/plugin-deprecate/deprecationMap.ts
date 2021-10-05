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

export const isComponentDeprecated = (componentName: string) =>
  Boolean(deprecationMap[componentName as DeprecatedProp]);

export const isPropDeprecated = (componentName: string, propName?: string) => {
  const component = deprecationMap[componentName as DeprecatedProp];
  return component ? Boolean(propName && propName in component) : false;
};

export const getReplacement = ({
  component,
  prop,
  value,
}: {
  component: string;
  prop?: string;
  value: string;
}) => {
  const deprecation = deprecationMap[component as DeprecatedProp];
  if (deprecation && prop) {
    // @ts-expect-error
    return deprecation[prop]?.[value] ?? value;
  }
  return value;
};
