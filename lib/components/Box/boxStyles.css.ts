import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../themes/themeVars.css';
import { mapToProperty } from '../../utils';

const space = {
  ...themeVars.space,
  none: 0,
} as const;

export const margin = {
  top: styleVariants(space, mapToProperty('marginTop', 'mobile')),
  bottom: styleVariants(space, mapToProperty('marginBottom', 'mobile')),
  left: styleVariants(space, mapToProperty('marginLeft', 'mobile')),
  right: styleVariants(space, mapToProperty('marginRight', 'mobile')),
};
export const marginTablet = {
  top: styleVariants(space, mapToProperty('marginTop', 'tablet')),
  bottom: styleVariants(space, mapToProperty('marginBottom', 'tablet')),
  left: styleVariants(space, mapToProperty('marginLeft', 'tablet')),
  right: styleVariants(space, mapToProperty('marginRight', 'tablet')),
};
export const marginDesktop = {
  top: styleVariants(space, mapToProperty('marginTop', 'desktop')),
  bottom: styleVariants(space, mapToProperty('marginBottom', 'desktop')),
  left: styleVariants(space, mapToProperty('marginLeft', 'desktop')),
  right: styleVariants(space, mapToProperty('marginRight', 'desktop')),
};

export const padding = {
  top: styleVariants(space, mapToProperty('paddingTop', 'mobile')),
  bottom: styleVariants(space, mapToProperty('paddingBottom', 'mobile')),
  left: styleVariants(space, mapToProperty('paddingLeft', 'mobile')),
  right: styleVariants(space, mapToProperty('paddingRight', 'mobile')),
};
export const paddingTablet = {
  top: styleVariants(space, mapToProperty('paddingTop', 'tablet')),
  bottom: styleVariants(space, mapToProperty('paddingBottom', 'tablet')),
  left: styleVariants(space, mapToProperty('paddingLeft', 'tablet')),
  right: styleVariants(space, mapToProperty('paddingRight', 'tablet')),
};
export const paddingDesktop = {
  top: styleVariants(space, mapToProperty('paddingTop', 'desktop')),
  bottom: styleVariants(space, mapToProperty('paddingBottom', 'desktop')),
  left: styleVariants(space, mapToProperty('paddingLeft', 'desktop')),
  right: styleVariants(space, mapToProperty('paddingRight', 'desktop')),
};

export const transform = {
  touchable: style({
    ':active': { transform: themeVars.transforms.touchable },
  }),
};

export const transition = styleVariants(
  themeVars.transitions,
  mapToProperty('transition'),
);

const borderRadiusRules = {
  none: '0px',
  full: '50%',
  ...themeVars.border.radius,
} as const;
export const borderRadius = styleVariants(
  borderRadiusRules,
  mapToProperty('borderRadius'),
);
export const borderRadiusTablet = styleVariants(
  borderRadiusRules,
  mapToProperty('borderRadius', 'tablet'),
);
export const borderRadiusDesktop = styleVariants(
  borderRadiusRules,
  mapToProperty('borderRadius', 'desktop'),
);

const widthRules = {
  full: '100%',
  touchable: themeVars.touchableSize,
} as const;
export const width = styleVariants(widthRules, mapToProperty('width'));

const heightRules = {
  full: '100%',
  touchable: themeVars.touchableSize,
} as const;
export const height = styleVariants(heightRules, mapToProperty('height'));

const positionRules = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
} as const;
export const position = styleVariants(positionRules, mapToProperty('position'));

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
} as const;
export const display = styleVariants(displayRules, mapToProperty('display'));
export const displayTablet = styleVariants(
  displayRules,
  mapToProperty('display', 'tablet'),
);
export const displayDesktop = styleVariants(
  displayRules,
  mapToProperty('display', 'desktop'),
);

const alignItemsRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
} as const;
export const alignItems = styleVariants(
  alignItemsRules,
  mapToProperty('alignItems'),
);
export const alignItemsTablet = styleVariants(
  alignItemsRules,
  mapToProperty('alignItems', 'tablet'),
);
export const alignItemsDesktop = styleVariants(
  alignItemsRules,
  mapToProperty('alignItems', 'desktop'),
);

const justifyContentRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
} as const;
export const justifyContent = styleVariants(
  justifyContentRules,
  mapToProperty('justifyContent'),
);
export const justifyContentTablet = styleVariants(
  justifyContentRules,
  mapToProperty('justifyContent', 'tablet'),
);
export const justifyContentDesktop = styleVariants(
  justifyContentRules,
  mapToProperty('justifyContent', 'desktop'),
);

const flexDirectionRules = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
} as const;
export const flexDirection = styleVariants(
  flexDirectionRules,
  mapToProperty('flexDirection'),
);
export const flexDirectionTablet = styleVariants(
  flexDirectionRules,
  mapToProperty('flexDirection', 'tablet'),
);
export const flexDirectionDesktop = styleVariants(
  flexDirectionRules,
  mapToProperty('flexDirection', 'desktop'),
);

const flexWrapRules = {
  wrap: 'wrap',
  nowrap: 'nowrap',
} as const;
export const flexWrap = styleVariants(flexWrapRules, mapToProperty('flexWrap'));

const flexShrinkRules = {
  0: 0,
} as const;
export const flexShrink = styleVariants(
  flexShrinkRules,
  mapToProperty('flexShrink'),
);

const flexGrowRules = {
  0: 0,
  1: 1,
} as const;
export const flexGrow = styleVariants(flexGrowRules, mapToProperty('flexGrow'));

export const background = styleVariants(
  themeVars.color.background,
  mapToProperty('background'),
);

const { width: borderWidth, color } = themeVars.border;
export const boxShadow = styleVariants(
  {
    ...themeVars.shadows,
    outlineFocus: `0 0 0 ${borderWidth.large} ${color.focus}`,
    borderField: `inset 0 0 0 ${borderWidth.standard} ${color.field}`,
    borderStandard: `inset 0 0 0 ${borderWidth.standard} ${color.standard}`,
    borderStandardInverted: `inset 0 0 0 ${borderWidth.standard} ${color.standardInverted}`,
    borderCritical: `inset 0 0 0 ${borderWidth.standard} ${color.critical}`,
    borderCriticalLarge: `inset 0 0 0 ${borderWidth.large} ${color.critical}`,
    borderCaution: `inset 0 0 0 ${borderWidth.standard} ${color.caution}`,
    borderPositive: `inset 0 0 0 ${borderWidth.standard} ${color.positive}`,
    borderInfo: `inset 0 0 0 ${borderWidth.standard} ${color.info}`,
    borderPromote: `inset 0 0 0 ${borderWidth.standard} ${color.promote}`,
    borderFormHover: `inset 0 0 0 ${borderWidth.standard} ${color.formHover}`,
    borderFormAccent: `inset 0 0 0 ${borderWidth.standard} ${color.formAccent}`,
    borderFormAccentLarge: `inset 0 0 0 ${borderWidth.large} ${color.formAccent}`,
    borderBrandAccentLarge: `inset 0 0 0 ${borderWidth.large} ${color.brandAccent}`,
    borderStandardInvertedLarge: `inset 0 0 0 ${borderWidth.large} ${color.standardInverted}`,
  } as const,
  mapToProperty('boxShadow'),
);

export const cursor = styleVariants({
  default: { cursor: 'default' },
  pointer: { cursor: 'pointer' },
});

export const pointerEvents = styleVariants({
  none: { pointerEvents: 'none' },
});

const textAlignRules = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export const textAlign = styleVariants(
  textAlignRules,
  mapToProperty('textAlign'),
);
export const textAlignTablet = styleVariants(
  textAlignRules,
  mapToProperty('textAlign', 'tablet'),
);
export const textAlignDesktop = styleVariants(
  textAlignRules,
  mapToProperty('textAlign', 'desktop'),
);

const overflowRules = {
  hidden: 'hidden',
  scroll: 'scroll',
  visible: 'visible',
  auto: 'auto',
} as const;
export const overflow = styleVariants(overflowRules, mapToProperty('overflow'));

const minWidthRules = {
  0: '0%', // We use a percentage here so it supports IE11: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
} as const;
export const minWidth = styleVariants(minWidthRules, mapToProperty('minWidth'));

export const maxWidth = styleVariants(
  themeVars.contentWidth,
  mapToProperty('maxWidth'),
);

const relativePositionRules = {
  0: 0,
} as const;

export const top = styleVariants(relativePositionRules, mapToProperty('top'));
export const bottom = styleVariants(
  relativePositionRules,
  mapToProperty('bottom'),
);
export const left = styleVariants(relativePositionRules, mapToProperty('left'));
export const right = styleVariants(
  relativePositionRules,
  mapToProperty('right'),
);

export const userSelect = styleVariants({
  none: { userSelect: 'none' },
});

export const outline = styleVariants({
  none: { outline: 'none' },
});

export const opacity = styleVariants({
  0: { opacity: 0 },
});

const zIndexRules = {
  0: 0,
  1: 1,
  2: 2,
  dropdownBackdrop: 90,
  dropdown: 100,
  sticky: 200,
  modalBackdrop: 290,
  modal: 300,
  notification: 400,
} as const;
export const zIndex = styleVariants(zIndexRules, mapToProperty('zIndex'));
