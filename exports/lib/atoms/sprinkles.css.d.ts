import {
  ConditionalValue,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';
declare const responsiveAtomicStyles: {
  conditions: {
    defaultCondition: 'mobile';
    conditionNames: ('mobile' | 'tablet' | 'desktop')[];
    responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
      length: 3;
    };
  };
  styles: {
    readonly display: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        flex: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        block: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        inline: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        inlineBlock: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly position: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        fixed: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        absolute: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        relative: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly borderRadius: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        standard: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        full: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly paddingTop: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly paddingBottom: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly paddingRight: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly paddingLeft: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly marginTop: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly marginBottom: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly marginRight: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly marginLeft: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        none: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        medium: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        large: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        small: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        gutter: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xsmall: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        xxlarge: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly alignItems: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        center: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        flexStart: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        flexEnd: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly justifyContent: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        center: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        flexStart: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        flexEnd: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        spaceBetween: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly flexDirection: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        column: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        row: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        rowReverse: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        columnReverse: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly flexWrap: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        nowrap: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        wrap: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly flexShrink: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        0: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly flexGrow: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        0: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        1: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
    readonly textAlign: {
      responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
        length: 3;
      };
      values: {
        left: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        right: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
        center: {
          defaultClass: string;
          conditions: {
            mobile: string;
            tablet: string;
            desktop: string;
          };
        };
      };
    };
  };
} & {
  styles: {
    padding: {
      mappings: (
        | 'paddingBottom'
        | 'paddingTop'
        | 'paddingLeft'
        | 'paddingRight'
      )[];
    };
    paddingY: {
      mappings: ('paddingBottom' | 'paddingTop')[];
    };
    paddingX: {
      mappings: ('paddingLeft' | 'paddingRight')[];
    };
    margin: {
      mappings: ('marginBottom' | 'marginTop' | 'marginLeft' | 'marginRight')[];
    };
    marginY: {
      mappings: ('marginBottom' | 'marginTop')[];
    };
    marginX: {
      mappings: ('marginLeft' | 'marginRight')[];
    };
  };
};
export declare const sprinkles: import('@vanilla-extract/sprinkles/dist/declarations/src/createAtomsFn').AtomsFn<
  [
    {
      conditions: never;
      styles: {
        readonly background: {
          values: {
            critical: {
              defaultClass: string;
            };
            info: {
              defaultClass: string;
            };
            promote: {
              defaultClass: string;
            };
            positive: {
              defaultClass: string;
            };
            caution: {
              defaultClass: string;
            };
            formAccent: {
              defaultClass: string;
            };
            brandAccent: {
              defaultClass: string;
            };
            formAccentActive: {
              defaultClass: string;
            };
            formAccentHover: {
              defaultClass: string;
            };
            brandAccentActive: {
              defaultClass: string;
            };
            brandAccentHover: {
              defaultClass: string;
            };
            criticalActive: {
              defaultClass: string;
            };
            criticalHover: {
              defaultClass: string;
            };
            infoLight: {
              defaultClass: string;
            };
            promoteLight: {
              defaultClass: string;
            };
            criticalLight: {
              defaultClass: string;
            };
            positiveLight: {
              defaultClass: string;
            };
            cautionLight: {
              defaultClass: string;
            };
            neutralLight: {
              defaultClass: string;
            };
            body: {
              defaultClass: string;
            };
            brand: {
              defaultClass: string;
            };
            input: {
              defaultClass: string;
            };
            inputDisabled: {
              defaultClass: string;
            };
            formAccentDisabled: {
              defaultClass: string;
            };
            selection: {
              defaultClass: string;
            };
            card: {
              defaultClass: string;
            };
            neutral: {
              defaultClass: string;
            };
          };
        };
        readonly overflow: {
          values: {
            auto: {
              defaultClass: string;
            };
            hidden: {
              defaultClass: string;
            };
            visible: {
              defaultClass: string;
            };
            scroll: {
              defaultClass: string;
            };
          };
        };
        readonly userSelect: {
          values: {
            none: {
              defaultClass: string;
            };
          };
        };
        readonly outline: {
          values: {
            none: {
              defaultClass: string;
            };
          };
        };
        readonly opacity: {
          values: {
            0: {
              defaultClass: string;
            };
          };
        };
        readonly zIndex: {
          values: {
            0: {
              defaultClass: string;
            };
            2: {
              defaultClass: string;
            };
            1: {
              defaultClass: string;
            };
            sticky: {
              defaultClass: string;
            };
            dropdownBackdrop: {
              defaultClass: string;
            };
            dropdown: {
              defaultClass: string;
            };
            modalBackdrop: {
              defaultClass: string;
            };
            modal: {
              defaultClass: string;
            };
            notification: {
              defaultClass: string;
            };
          };
        };
        readonly boxShadow: {
          values: {
            medium: {
              defaultClass: string;
            };
            large: {
              defaultClass: string;
            };
            small: {
              defaultClass: string;
            };
            outlineFocus: {
              defaultClass: string;
            };
            borderField: {
              defaultClass: string;
            };
            borderStandard: {
              defaultClass: string;
            };
            borderStandardInverted: {
              defaultClass: string;
            };
            borderCritical: {
              defaultClass: string;
            };
            borderCriticalLarge: {
              defaultClass: string;
            };
            borderCaution: {
              defaultClass: string;
            };
            borderPositive: {
              defaultClass: string;
            };
            borderInfo: {
              defaultClass: string;
            };
            borderPromote: {
              defaultClass: string;
            };
            borderFormHover: {
              defaultClass: string;
            };
            borderFormAccent: {
              defaultClass: string;
            };
            borderFormAccentLarge: {
              defaultClass: string;
            };
            borderBrandAccentLarge: {
              defaultClass: string;
            };
            borderStandardInvertedLarge: {
              defaultClass: string;
            };
          };
        };
        readonly cursor: {
          values: {
            default: {
              defaultClass: string;
            };
            pointer: {
              defaultClass: string;
            };
          };
        };
        readonly pointerEvents: {
          values: {
            none: {
              defaultClass: string;
            };
          };
        };
        readonly top: {
          values: {
            0: {
              defaultClass: string;
            };
          };
        };
        readonly bottom: {
          values: {
            0: {
              defaultClass: string;
            };
          };
        };
        readonly left: {
          values: {
            0: {
              defaultClass: string;
            };
          };
        };
        readonly right: {
          values: {
            0: {
              defaultClass: string;
            };
          };
        };
        readonly height: {
          values: {
            touchable: {
              defaultClass: string;
            };
            full: {
              defaultClass: string;
            };
          };
        };
        readonly width: {
          values: {
            touchable: {
              defaultClass: string;
            };
            full: {
              defaultClass: string;
            };
          };
        };
        readonly minWidth: {
          values: {
            0: {
              defaultClass: string;
            };
          };
        };
        readonly maxWidth: {
          values: {
            medium: {
              defaultClass: string;
            };
            large: {
              defaultClass: string;
            };
            small: {
              defaultClass: string;
            };
            xsmall: {
              defaultClass: string;
            };
          };
        };
        readonly transition: {
          values: {
            fast: {
              defaultClass: string;
            };
            touchable: {
              defaultClass: string;
            };
          };
        };
      };
    },
    {
      conditions: {
        defaultCondition: 'mobile';
        conditionNames: ('mobile' | 'tablet' | 'desktop')[];
        responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
          length: 3;
        };
      };
      styles: {
        readonly display: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            flex: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            block: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            inline: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            inlineBlock: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly position: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            fixed: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            absolute: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            relative: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly borderRadius: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            standard: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            full: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingTop: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingBottom: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingRight: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingLeft: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginTop: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginBottom: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginRight: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginLeft: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly alignItems: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexStart: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexEnd: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly justifyContent: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexStart: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexEnd: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            spaceBetween: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexDirection: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            column: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            row: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            rowReverse: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            columnReverse: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexWrap: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            nowrap: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            wrap: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexShrink: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            0: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexGrow: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            0: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            1: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly textAlign: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            left: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            right: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
      };
    } & {
      styles: {
        padding: {
          mappings: (
            | 'paddingBottom'
            | 'paddingTop'
            | 'paddingLeft'
            | 'paddingRight'
          )[];
        };
        paddingY: {
          mappings: ('paddingBottom' | 'paddingTop')[];
        };
        paddingX: {
          mappings: ('paddingLeft' | 'paddingRight')[];
        };
        margin: {
          mappings: (
            | 'marginBottom'
            | 'marginTop'
            | 'marginLeft'
            | 'marginRight'
          )[];
        };
        marginY: {
          mappings: ('marginBottom' | 'marginTop')[];
        };
        marginX: {
          mappings: ('marginLeft' | 'marginRight')[];
        };
      };
    },
    {
      conditions: {
        defaultCondition: false;
        conditionNames: 'active'[];
      };
      styles: {
        readonly transform: {
          values: {
            touchable: {
              defaultClass: undefined;
              conditions: {
                active: string;
              };
            };
          };
        };
      };
    },
  ]
>;
export declare type OptionalResponsiveValue<
  Value extends string | number
> = ConditionalValue<typeof responsiveAtomicStyles, Value>;
export declare type RequiredResponsiveValue<
  Value extends string | number
> = RequiredConditionalValue<typeof responsiveAtomicStyles, Value>;
export declare const normalizeResponsiveValue: <Value extends string | number>(
  value: ConditionalValue<
    {
      conditions: {
        defaultCondition: 'mobile';
        conditionNames: ('mobile' | 'tablet' | 'desktop')[];
        responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
          length: 3;
        };
      };
      styles: {
        readonly display: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            flex: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            block: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            inline: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            inlineBlock: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly position: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            fixed: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            absolute: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            relative: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly borderRadius: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            standard: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            full: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingTop: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingBottom: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingRight: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingLeft: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginTop: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginBottom: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginRight: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginLeft: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly alignItems: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexStart: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexEnd: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly justifyContent: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexStart: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexEnd: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            spaceBetween: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexDirection: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            column: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            row: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            rowReverse: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            columnReverse: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexWrap: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            nowrap: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            wrap: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexShrink: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            0: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexGrow: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            0: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            1: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly textAlign: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            left: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            right: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
      };
    } & {
      styles: {
        padding: {
          mappings: (
            | 'paddingBottom'
            | 'paddingTop'
            | 'paddingLeft'
            | 'paddingRight'
          )[];
        };
        paddingY: {
          mappings: ('paddingBottom' | 'paddingTop')[];
        };
        paddingX: {
          mappings: ('paddingLeft' | 'paddingRight')[];
        };
        margin: {
          mappings: (
            | 'marginBottom'
            | 'marginTop'
            | 'marginLeft'
            | 'marginRight'
          )[];
        };
        marginY: {
          mappings: ('marginBottom' | 'marginTop')[];
        };
        marginX: {
          mappings: ('marginLeft' | 'marginRight')[];
        };
      };
    },
    Value
  >,
) => Partial<Record<'mobile' | 'tablet' | 'desktop', Value>>;
export declare const mapResponsiveValue: <
  OutputValue extends string | number,
  Value extends ConditionalValue<
    {
      conditions: {
        defaultCondition: 'mobile';
        conditionNames: ('mobile' | 'tablet' | 'desktop')[];
        responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
          length: 3;
        };
      };
      styles: {
        readonly display: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            flex: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            block: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            inline: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            inlineBlock: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly position: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            fixed: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            absolute: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            relative: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly borderRadius: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            standard: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            full: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingTop: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingBottom: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingRight: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly paddingLeft: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginTop: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginBottom: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginRight: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly marginLeft: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            none: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            medium: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            large: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            small: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            gutter: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xsmall: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            xxlarge: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly alignItems: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexStart: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexEnd: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly justifyContent: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexStart: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            flexEnd: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            spaceBetween: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexDirection: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            column: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            row: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            rowReverse: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            columnReverse: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexWrap: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            nowrap: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            wrap: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexShrink: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            0: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly flexGrow: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            0: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            1: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
        readonly textAlign: {
          responsiveArray: ('mobile' | 'tablet' | 'desktop')[] & {
            length: 3;
          };
          values: {
            left: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            right: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
            center: {
              defaultClass: string;
              conditions: {
                mobile: string;
                tablet: string;
                desktop: string;
              };
            };
          };
        };
      };
    } & {
      styles: {
        padding: {
          mappings: (
            | 'paddingBottom'
            | 'paddingTop'
            | 'paddingLeft'
            | 'paddingRight'
          )[];
        };
        paddingY: {
          mappings: ('paddingBottom' | 'paddingTop')[];
        };
        paddingX: {
          mappings: ('paddingLeft' | 'paddingRight')[];
        };
        margin: {
          mappings: (
            | 'marginBottom'
            | 'marginTop'
            | 'marginLeft'
            | 'marginRight'
          )[];
        };
        marginY: {
          mappings: ('marginBottom' | 'marginTop')[];
        };
        marginX: {
          mappings: ('marginLeft' | 'marginRight')[];
        };
      };
    },
    string | number
  >
>(
  value: Value,
  fn: (
    inputValue: Value extends
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          1,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          2 | 1,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          3 | 2 | 1,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          3 | 2 | 1 | 4,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          3 | 2 | 1 | 4 | 5,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          3 | 2 | 1 | 4 | 6 | 5,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          3 | 2 | 1 | 4 | 6 | 5 | 7,
          string | number | null
        >
      | import('@vanilla-extract/sprinkles/dist/declarations/src/types').ResponsiveArray<
          3 | 2 | 1 | 4 | 8 | 6 | 5 | 7,
          string | number | null
        >
      ? NonNullable<Value[number]>
      : Value extends Partial<Record<string, string | number>>
      ? NonNullable<Value[keyof Value]>
      : Value,
    key: 'mobile' | 'tablet' | 'desktop',
  ) => OutputValue,
) => Value extends string | number
  ? OutputValue
  : Partial<Record<'mobile' | 'tablet' | 'desktop', OutputValue>>;
export {};
