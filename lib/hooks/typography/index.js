import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { useContext } from 'react';
import clsx from 'clsx';
import { useBackground, useBackgroundLightness } from '../../components/Box/BackgroundContext';
import { useDefaultTextProps } from '../../components/private/defaultTextProps';
import TextLinkRendererContext from '../../components/TextLinkRenderer/TextLinkRendererContext';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import * as styles from './typography.css';
export var globalTextStyle = function globalTextStyle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'standard' : _ref$size;

  return _objectSpread({
    fontFamily: vars.fontFamily,
    fontWeight: vars.textWeight[weight],
    color: vars.foregroundColor.neutral
  }, responsiveStyle({
    mobile: {
      fontSize: vars.textSize[size].mobile.fontSize,
      lineHeight: vars.textSize[size].mobile.lineHeight
    },
    tablet: {
      fontSize: vars.textSize[size].tablet.fontSize,
      lineHeight: vars.textSize[size].tablet.lineHeight
    }
  }));
};
export function useText(_ref2) {
  var _ref2$weight = _ref2.weight,
      weight = _ref2$weight === void 0 ? 'regular' : _ref2$weight,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'standard' : _ref2$size,
      _ref2$tone = _ref2.tone,
      tone = _ref2$tone === void 0 ? 'neutral' : _ref2$tone,
      baseline = _ref2.baseline,
      backgroundContext = _ref2.backgroundContext;
  var textTone = useTextTone({
    tone: tone,
    backgroundContext: backgroundContext
  });
  return clsx(styles.fontFamily, textTone, styles.fontWeight[weight], baseline ? styles.text[size].trimmed : styles.text[size].untrimmed);
}
export var globalHeadingStyle = function globalHeadingStyle(_ref3) {
  var _ref3$weight = _ref3.weight,
      weight = _ref3$weight === void 0 ? 'regular' : _ref3$weight,
      level = _ref3.level;
  return _objectSpread({
    fontFamily: vars.fontFamily,
    fontWeight: vars.headingWeight[weight],
    color: vars.foregroundColor.neutral
  }, responsiveStyle({
    mobile: {
      fontSize: vars.headingLevel[level].mobile.fontSize,
      lineHeight: vars.headingLevel[level].mobile.lineHeight
    },
    tablet: {
      fontSize: vars.headingLevel[level].tablet.fontSize,
      lineHeight: vars.headingLevel[level].tablet.lineHeight
    }
  }));
};
export function useHeading(_ref4) {
  var _ref4$weight = _ref4.weight,
      weight = _ref4$weight === void 0 ? 'regular' : _ref4$weight,
      level = _ref4.level,
      baseline = _ref4.baseline,
      backgroundContext = _ref4.backgroundContext;
  var textTone = useTextTone({
    tone: 'neutral',
    backgroundContext: backgroundContext
  });
  return clsx(styles.fontFamily, styles.headingWeight[weight], baseline ? styles.heading[level].trimmed : styles.heading[level].untrimmed, textTone);
}
export function textSize(size) {
  return styles.text[size].untrimmed;
}
export function useWeight(weight) {
  var inTextLinkRenderer = useContext(TextLinkRendererContext);
  return inTextLinkRenderer ? undefined : styles.fontWeight[weight];
}
export function useTextTone(_ref5) {
  var toneProp = _ref5.tone,
      backgroundContextOverride = _ref5.backgroundContext;
  var textLinkContext = useContext(TextLinkRendererContext);
  var backgroundContext = useBackground();
  var background = backgroundContextOverride || backgroundContext;
  var backgroundLightness = useBackgroundLightness(background);

  var _useDefaultTextProps = useDefaultTextProps({
    tone: toneProp
  }),
      tone = _useDefaultTextProps.tone;

  var toneOverrides = styles.toneOverridesForBackground[background];

  if (toneOverrides) {
    var toneOverride = toneOverrides[tone];

    if (toneOverride) {
      return toneOverride;
    }
  }

  if (tone !== 'neutral') {
    return tone in styles.invertableTone ? styles.invertableTone[tone][backgroundLightness] : styles.tone[tone];
  }

  if (textLinkContext && textLinkContext !== 'weak') {
    return styles.tone.link;
  }

  return styles.invertableTone.neutral[backgroundLightness];
}
export var touchableText = styles.touchable;