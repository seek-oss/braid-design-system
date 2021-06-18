import { vars } from '../themes/vars.css';

const sizes = {
  full: '100%',
  touchable: vars.touchableSize,
};

const space = {
  ...vars.space,
  none: 0,
} as const;

const boxShadow = {
  ...vars.shadow,
  outlineFocus: `0 0 0 ${vars.borderWidth.large} ${vars.borderColor.focus}`,
  borderField: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.field}`,
  borderStandard: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.standard}`,
  borderStandardInverted: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.standardInverted}`,
  borderCritical: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.critical}`,
  borderCriticalLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.critical}`,
  borderCaution: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.caution}`,
  borderPositive: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.positive}`,
  borderInfo: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.info}`,
  borderPromote: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.promote}`,
  borderFormHover: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.formHover}`,
  borderFormAccent: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.formAccent}`,
  borderFormAccentLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.formAccent}`,
  borderBrandAccentLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.brandAccent}`,
  borderStandardInvertedLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.standardInverted}`,
};

export const pseudoProperties = {
  transform: vars.transform,
} as const;

export type PseudoProperties = keyof typeof pseudoProperties;

export const unresponsiveProperties = {
  background: vars.backgroundColor,
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
  maxWidth: vars.contentWidth,
  transition: vars.transition,
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
    full: '9999px',
    ...vars.borderRadius,
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
