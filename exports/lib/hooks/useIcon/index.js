import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["size", "tone", "alignY", "data"];

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { useContext } from 'react';
import assert from 'assert';
import clsx from 'clsx';
import { TextContext } from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { textSize, useTextTone } from '../typography';
import { lineHeightContainer } from '../../atoms/lineHeightContainer.css';
import buildDataAttributes from '../../components/private/buildDataAttributes';
import * as styles from './icon.css';
export var iconSize = function iconSize() {
  const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'standard' : _ref$size;

  return clsx(styles.size, textSize(size));
};
export var iconContainerSize = function iconContainerSize() {
  const size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';
  return clsx(styles.blockWidths[size], lineHeightContainer[size]);
};
const detaultVerticalCorrection = {
  uppercase: 'none',
  lowercase: 'none'
};
export default (function (_ref2) {
  const size = _ref2.size,
      tone = _ref2.tone,
      alignY = _ref2.alignY,
      data = _ref2.data,
      titleProps = _objectWithoutProperties(_ref2, _excluded);

  const _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$verticalCorrect = _ref3.verticalCorrection,
      verticalCorrection = _ref3$verticalCorrect === void 0 ? detaultVerticalCorrection : _ref3$verticalCorrect;

  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone = textContext && textContext.tone ? textContext.tone : 'neutral';
  const resolvedTone = useTextTone({
    tone: tone || inheritedTone
  });
  const isInline = textContext || headingContext;
  const a11yProps = titleProps.title ? _objectSpread(_objectSpread({}, titleProps), {}, {
    role: 'img'
  }) : {
    'aria-hidden': true
  };
  assert(!(size && isInline), "Specifying a custom `size` for an `Icon` inside the context of a `<".concat(textContext ? 'Text' : 'Heading', ">` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/"));
  assert(!(alignY && !isInline), "Specifying `alignY` for an `Icon` outside of a text component is invalid.");

  if (size === 'fill') {
    return _objectSpread(_objectSpread({
      width: 'full',
      height: 'full',
      display: 'block',
      className: resolvedTone
    }, data ? buildDataAttributes(data) : undefined), a11yProps);
  }

  return _objectSpread(_objectSpread({
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [resolvedTone, isInline ? [styles.size, styles.inline, styles.alignY[alignY || 'uppercase'][verticalCorrection[alignY || 'uppercase']]] : iconContainerSize(size)]
  }, data ? buildDataAttributes(data) : undefined), a11yProps);
});