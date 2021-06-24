export declare const pseudoProperties: {
  readonly transform: import('@vanilla-extract/private').MapLeafNodes<
    {
      touchable: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
};
export declare type PseudoProperties = keyof typeof pseudoProperties;
export declare const unresponsiveProperties: {
  readonly background: import('@vanilla-extract/private').MapLeafNodes<
    {
      readonly formAccentActive: string;
      readonly formAccentHover: string;
      readonly brandAccentActive: string;
      readonly brandAccentHover: string;
      readonly criticalActive: string;
      readonly criticalHover: string;
      readonly infoLight: string;
      readonly promoteLight: string;
      readonly criticalLight: string;
      readonly positiveLight: string;
      readonly cautionLight: string;
      readonly neutralLight: string;
      readonly body: string;
      readonly brand: string;
      readonly input: string;
      readonly inputDisabled: string;
      readonly brandAccent: string;
      readonly formAccent: string;
      readonly formAccentDisabled: string;
      readonly selection: string;
      readonly info: string;
      readonly promote: string;
      readonly card: string;
      readonly critical: string;
      readonly caution: string;
      readonly positive: string;
      readonly neutral: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  readonly overflow: readonly ['hidden', 'scroll', 'visible', 'auto'];
  readonly userSelect: readonly ['none'];
  readonly outline: readonly ['none'];
  readonly opacity: readonly [0];
  readonly zIndex: {
    readonly 0: 0;
    readonly 1: 1;
    readonly 2: 2;
    readonly dropdownBackdrop: 90;
    readonly dropdown: 100;
    readonly sticky: 200;
    readonly modalBackdrop: 290;
    readonly modal: 300;
    readonly notification: 400;
  };
  readonly boxShadow: {
    outlineFocus: string;
    borderField: string;
    borderStandard: string;
    borderStandardInverted: string;
    borderCritical: string;
    borderCriticalLarge: string;
    borderCaution: string;
    borderPositive: string;
    borderInfo: string;
    borderPromote: string;
    borderFormHover: string;
    borderFormAccent: string;
    borderFormAccentLarge: string;
    borderBrandAccentLarge: string;
    borderStandardInvertedLarge: string;
    small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly cursor: readonly ['default', 'pointer'];
  readonly pointerEvents: readonly ['none'];
  readonly top: readonly [0];
  readonly bottom: readonly [0];
  readonly left: readonly [0];
  readonly right: readonly [0];
  readonly height: {
    full: string;
    touchable: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly width: {
    full: string;
    touchable: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly minWidth: {
    readonly 0: '0%';
  };
  readonly maxWidth: import('@vanilla-extract/private').MapLeafNodes<
    {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
  readonly transition: import('@vanilla-extract/private').MapLeafNodes<
    {
      fast: string;
      touchable: string;
    },
    import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction
  >;
};
export declare type UnresponsiveProperties = keyof typeof unresponsiveProperties;
export declare const responsiveProperties: {
  readonly display: {
    readonly none: 'none';
    readonly block: 'block';
    readonly inline: 'inline';
    readonly inlineBlock: 'inline-block';
    readonly flex: 'flex';
  };
  readonly position: readonly ['relative', 'absolute', 'fixed'];
  readonly borderRadius: {
    readonly standard: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly none: '0px';
    readonly full: '9999px';
  };
  readonly paddingTop: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly paddingBottom: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly paddingRight: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly paddingLeft: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly marginTop: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly marginBottom: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly marginRight: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly marginLeft: {
    readonly none: 0;
    readonly gutter: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xsmall: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly small: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly medium: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly large: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
    readonly xxlarge: import('@vanilla-extract/css/dist/declarations/src/types').CSSVarFunction;
  };
  readonly alignItems: {
    readonly flexStart: 'flex-start';
    readonly center: 'center';
    readonly flexEnd: 'flex-end';
  };
  readonly justifyContent: {
    readonly flexStart: 'flex-start';
    readonly center: 'center';
    readonly flexEnd: 'flex-end';
    readonly spaceBetween: 'space-between';
  };
  readonly flexDirection: {
    readonly row: 'row';
    readonly rowReverse: 'row-reverse';
    readonly column: 'column';
    readonly columnReverse: 'column-reverse';
  };
  readonly flexWrap: {
    readonly wrap: 'wrap';
    readonly nowrap: 'nowrap';
  };
  readonly flexShrink: readonly [0];
  readonly flexGrow: readonly [0, 1];
  readonly textAlign: readonly ['left', 'center', 'right'];
};
export declare type ResponsiveProperties = keyof typeof responsiveProperties;
