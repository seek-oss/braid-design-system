import { style, mapToStyles } from '@mattsjones/css-core';
import { themeVars } from '../../themes/themeVars.css';
import { mapToProperty } from '../../utils';

const space = {
  ...themeVars.space,
  none: 0,
} as const;

export const margin = {
  top: mapToStyles(space, mapToProperty('marginTop', 'mobile')),
  bottom: mapToStyles(space, mapToProperty('marginBottom', 'mobile')),
  left: mapToStyles(space, mapToProperty('marginLeft', 'mobile')),
  right: mapToStyles(space, mapToProperty('marginRight', 'mobile')),
};
export const marginTablet = {
  top: mapToStyles(space, mapToProperty('marginTop', 'tablet')),
  bottom: mapToStyles(space, mapToProperty('marginBottom', 'tablet')),
  left: mapToStyles(space, mapToProperty('marginLeft', 'tablet')),
  right: mapToStyles(space, mapToProperty('marginRight', 'tablet')),
};
export const marginDesktop = {
  top: mapToStyles(space, mapToProperty('marginTop', 'desktop')),
  bottom: mapToStyles(space, mapToProperty('marginBottom', 'desktop')),
  left: mapToStyles(space, mapToProperty('marginLeft', 'desktop')),
  right: mapToStyles(space, mapToProperty('marginRight', 'desktop')),
};

export const padding = {
  top: mapToStyles(space, mapToProperty('paddingTop', 'mobile')),
  bottom: mapToStyles(space, mapToProperty('paddingBottom', 'mobile')),
  left: mapToStyles(space, mapToProperty('paddingLeft', 'mobile')),
  right: mapToStyles(space, mapToProperty('paddingRight', 'mobile')),
};
export const paddingTablet = {
  top: mapToStyles(space, mapToProperty('paddingTop', 'tablet')),
  bottom: mapToStyles(space, mapToProperty('paddingBottom', 'tablet')),
  left: mapToStyles(space, mapToProperty('paddingLeft', 'tablet')),
  right: mapToStyles(space, mapToProperty('paddingRight', 'tablet')),
};
export const paddingDesktop = {
  top: mapToStyles(space, mapToProperty('paddingTop', 'desktop')),
  bottom: mapToStyles(space, mapToProperty('paddingBottom', 'desktop')),
  left: mapToStyles(space, mapToProperty('paddingLeft', 'desktop')),
  right: mapToStyles(space, mapToProperty('paddingRight', 'desktop')),
};

export const transform = {
  touchable: style({
    ':active': { transform: themeVars.transforms.touchable },
  }),
};

export const transition = mapToStyles(
  themeVars.transitions,
  mapToProperty('transition'),
);

const borderRadiusRules = {
  none: '0px',
  full: '50%',
  ...themeVars.border.radius,
} as const;
export const borderRadius = mapToStyles(
  borderRadiusRules,
  mapToProperty('borderRadius'),
);
export const borderRadiusTablet = mapToStyles(
  borderRadiusRules,
  mapToProperty('borderRadius', 'tablet'),
);
export const borderRadiusDesktop = mapToStyles(
  borderRadiusRules,
  mapToProperty('borderRadius', 'desktop'),
);

const widthRules = {
  full: '100%',
  touchable: themeVars.touchableSize,
} as const;
export const width = mapToStyles(widthRules, mapToProperty('width'));

const heightRules = {
  full: '100%',
  touchable: themeVars.touchableSize,
} as const;
export const height = mapToStyles(heightRules, mapToProperty('height'));

const positionRules = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
} as const;
export const position = mapToStyles(positionRules, mapToProperty('position'));

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
} as const;
export const display = mapToStyles(displayRules, mapToProperty('display'));
export const displayTablet = mapToStyles(
  displayRules,
  mapToProperty('display', 'tablet'),
);
export const displayDesktop = mapToStyles(
  displayRules,
  mapToProperty('display', 'desktop'),
);

const alignItemsRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
} as const;
export const alignItems = mapToStyles(
  alignItemsRules,
  mapToProperty('alignItems'),
);
export const alignItemsTablet = mapToStyles(
  alignItemsRules,
  mapToProperty('alignItems', 'tablet'),
);
export const alignItemsDesktop = mapToStyles(
  alignItemsRules,
  mapToProperty('alignItems', 'desktop'),
);

const justifyContentRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
} as const;
export const justifyContent = mapToStyles(
  justifyContentRules,
  mapToProperty('justifyContent'),
);
export const justifyContentTablet = mapToStyles(
  justifyContentRules,
  mapToProperty('justifyContent', 'tablet'),
);
export const justifyContentDesktop = mapToStyles(
  justifyContentRules,
  mapToProperty('justifyContent', 'desktop'),
);

const flexDirectionRules = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
} as const;
export const flexDirection = mapToStyles(
  flexDirectionRules,
  mapToProperty('flexDirection'),
);
export const flexDirectionTablet = mapToStyles(
  flexDirectionRules,
  mapToProperty('flexDirection', 'tablet'),
);
export const flexDirectionDesktop = mapToStyles(
  flexDirectionRules,
  mapToProperty('flexDirection', 'desktop'),
);

const flexWrapRules = {
  wrap: 'wrap',
  nowrap: 'nowrap',
} as const;
export const flexWrap = mapToStyles(flexWrapRules, mapToProperty('flexWrap'));

const flexShrinkRules = {
  0: 0,
} as const;
export const flexShrink = mapToStyles(
  flexShrinkRules,
  mapToProperty('flexShrink'),
);

const flexGrowRules = {
  0: 0,
  1: 1,
} as const;
export const flexGrow = mapToStyles(flexGrowRules, mapToProperty('flexGrow'));

export const background = mapToStyles(
  themeVars.color.background,
  mapToProperty('background'),
);

const { width: borderWidth, color } = themeVars.border;
export const boxShadow = mapToStyles(
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

export const cursor = mapToStyles({
  default: { cursor: 'default' },
  pointer: { cursor: 'pointer' },
});

export const pointerEvents = mapToStyles({
  none: { pointerEvents: 'none' },
});

const textAlignRules = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export const textAlign = mapToStyles(
  textAlignRules,
  mapToProperty('textAlign'),
);
export const textAlignTablet = mapToStyles(
  textAlignRules,
  mapToProperty('textAlign', 'tablet'),
);
export const textAlignDesktop = mapToStyles(
  textAlignRules,
  mapToProperty('textAlign', 'desktop'),
);

const overflowRules = {
  hidden: 'hidden',
  scroll: 'scroll',
  visible: 'visible',
  auto: 'auto',
} as const;
export const overflow = mapToStyles(overflowRules, mapToProperty('overflow'));

const minWidthRules = {
  0: '0%', // We use a percentage here so it supports IE11: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
} as const;
export const minWidth = mapToStyles(minWidthRules, mapToProperty('minWidth'));

export const maxWidth = mapToStyles(
  themeVars.contentWidth,
  mapToProperty('maxWidth'),
);

const relativePositionRules = {
  0: 0,
} as const;

export const top = mapToStyles(relativePositionRules, mapToProperty('top'));
export const bottom = mapToStyles(
  relativePositionRules,
  mapToProperty('bottom'),
);
export const left = mapToStyles(relativePositionRules, mapToProperty('left'));
export const right = mapToStyles(relativePositionRules, mapToProperty('right'));

export const userSelect = mapToStyles({
  none: { userSelect: 'none' },
});

export const outline = mapToStyles({
  none: { outline: 'none' },
});

export const opacity = mapToStyles({
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
export const zIndex = mapToStyles(zIndexRules, mapToProperty('zIndex'));
