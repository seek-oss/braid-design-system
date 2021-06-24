import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { vars } from '../themes/vars.css';
var sizes = {
  full: '100%',
  touchable: vars.touchableSize
};

var space = _objectSpread(_objectSpread({}, vars.space), {}, {
  none: 0
});

var boxShadow = _objectSpread(_objectSpread({}, vars.shadow), {}, {
  outlineFocus: "0 0 0 ".concat(vars.borderWidth.large, " ").concat(vars.borderColor.focus),
  borderField: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.field),
  borderStandard: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.standard),
  borderStandardInverted: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.standardInverted),
  borderCritical: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.critical),
  borderCriticalLarge: "inset 0 0 0 ".concat(vars.borderWidth.large, " ").concat(vars.borderColor.critical),
  borderCaution: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.caution),
  borderPositive: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.positive),
  borderInfo: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.info),
  borderPromote: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.promote),
  borderFormHover: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.formHover),
  borderFormAccent: "inset 0 0 0 ".concat(vars.borderWidth.standard, " ").concat(vars.borderColor.formAccent),
  borderFormAccentLarge: "inset 0 0 0 ".concat(vars.borderWidth.large, " ").concat(vars.borderColor.formAccent),
  borderBrandAccentLarge: "inset 0 0 0 ".concat(vars.borderWidth.large, " ").concat(vars.borderColor.brandAccent),
  borderStandardInvertedLarge: "inset 0 0 0 ".concat(vars.borderWidth.large, " ").concat(vars.borderColor.standardInverted)
});

export var pseudoProperties = {
  transform: vars.transform
};
export var unresponsiveProperties = {
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
    notification: 400
  },
  boxShadow: boxShadow,
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  height: sizes,
  width: sizes,
  minWidth: {
    0: '0%'
  },
  maxWidth: vars.contentWidth,
  transition: vars.transition
};
export var responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex'
  },
  position: ['relative', 'absolute', 'fixed'],
  borderRadius: _objectSpread({
    none: '0px',
    full: '9999px'
  }, vars.borderRadius),
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
    flexEnd: 'flex-end'
  },
  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between'
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse'
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap'
  },
  flexShrink: [0],
  flexGrow: [0, 1],
  textAlign: ['left', 'center', 'right']
};