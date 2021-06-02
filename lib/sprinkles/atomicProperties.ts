import { themeVars } from '../themes/themeVars.css';

const sizes = {
  full: '100%',
  touchable: themeVars.touchableSize,
};

const space = {
  ...themeVars.space,
  none: 0,
} as const;

const boxShadow = {
  ...themeVars.private.shadow,
  outlineFocus: `0 0 0 ${themeVars.borderWidth.large} ${themeVars.borderColor.focus}`,
  borderField: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.field}`,
  borderStandard: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.standard}`,
  borderStandardInverted: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.standardInverted}`,
  borderCritical: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.critical}`,
  borderCriticalLarge: `inset 0 0 0 ${themeVars.borderWidth.large} ${themeVars.borderColor.critical}`,
  borderCaution: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.caution}`,
  borderPositive: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.positive}`,
  borderInfo: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.info}`,
  borderPromote: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.promote}`,
  borderFormHover: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.formHover}`,
  borderFormAccent: `inset 0 0 0 ${themeVars.borderWidth.standard} ${themeVars.borderColor.formAccent}`,
  borderFormAccentLarge: `inset 0 0 0 ${themeVars.borderWidth.large} ${themeVars.borderColor.formAccent}`,
  borderBrandAccentLarge: `inset 0 0 0 ${themeVars.borderWidth.large} ${themeVars.borderColor.brandAccent}`,
  borderStandardInvertedLarge: `inset 0 0 0 ${themeVars.borderWidth.large} ${themeVars.borderColor.standardInverted}`,
};

export const pseudoProperties = {
  transform: themeVars.private.transform,
} as const;

export type PseudoProperties = keyof typeof pseudoProperties;

export const unresponsiveProperties = {
  background: themeVars.backgroundColor,
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400,
  },
  boxShadow,
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  height: sizes,
  width: sizes,
  minWidth: {
    0: '0%',
  },
  maxWidth: themeVars.contentWidth,
  transition: themeVars.private.transition,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

export const responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
  },
  position: ['relative', 'absolute', 'fixed'],
  borderRadius: {
    none: '0px',
    full: '50%',
    ...themeVars.borderRadius,
  },
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
  },
  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap',
  },
  flexShrink: [0],
  flexGrow: [0, 1],
  textAlign: ['left', 'center', 'right'],
} as const;

export type ResponsiveProperties = keyof typeof responsiveProperties;
