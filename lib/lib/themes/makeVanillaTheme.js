import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["fontSize", "lineHeight"],
    _excluded2 = ["fontSize", "lineHeight"],
    _excluded3 = ["name", "displayName"],
    _excluded4 = ["webFont"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import { getCapHeight } from 'capsize';
import { getAccessibleVariant, getLightVariant, isLight } from '../utils';
import { buildValues } from '../hooks/typography/capsize/prebuilt';

var px = function px(v) {
  return "".concat(v, "px");
};

var getActiveColor = function getActiveColor(x) {
  return isLight(x) ? darken(0.1, x) : darken(0.05, x);
};

var getHoverColor = function getHoverColor(x) {
  return isLight(x) ? darken(0.05, x) : lighten(0.05, x);
};

var fontSizeToCapHeight = function fontSizeToCapHeight(grid, definition, fontMetrics) {
  var mobile = definition.mobile,
      tablet = definition.tablet;
  var mobileCapHeight = getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics: fontMetrics
  });
  var tabletCapHeight = getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics: fontMetrics
  });

  var _buildValues = buildValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics: fontMetrics
  }),
      mobileFontSize = _buildValues.fontSize,
      mobileLineHeight = _buildValues.lineHeight,
      mobileTrims = _objectWithoutProperties(_buildValues, _excluded);

  var _buildValues2 = buildValues({
    fontSize: tablet.fontSize,
    leading: tablet.rows * grid,
    fontMetrics: fontMetrics
  }),
      tabletFontSize = _buildValues2.fontSize,
      tabletLineHeight = _buildValues2.lineHeight,
      tabletTrims = _objectWithoutProperties(_buildValues2, _excluded2);

  return {
    mobile: {
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight,
      capHeight: px(mobileCapHeight),
      capsizeTrims: _objectSpread({}, mobileTrims)
    },
    tablet: {
      fontSize: tabletFontSize,
      lineHeight: tabletLineHeight,
      capHeight: px(tabletCapHeight),
      capsizeTrims: _objectSpread({}, tabletTrims)
    }
  };
};

export default (function (braidTokens) {
  var name = braidTokens.name,
      displayName = braidTokens.displayName,
      tokens = _objectWithoutProperties(braidTokens, _excluded3);

  var _tokens$typography = tokens.typography,
      webFont = _tokens$typography.webFont,
      typography = _objectWithoutProperties(_tokens$typography, _excluded4);

  var _tokens$color = tokens.color,
      foreground = _tokens$color.foreground,
      background = _tokens$color.background;

  var getInlineFieldSize = function getInlineFieldSize(size) {
    var scale = typography.text[size].mobile.rows * tokens.grid / 42;
    return px(tokens.grid * Math.round(tokens.touchableSize * scale));
  };

  var resolvedTokens = {
    space: mapValues(tokens.space, function (sp) {
      return px(sp * tokens.grid);
    }),
    touchableSize: px(tokens.touchableSize * tokens.grid),
    grid: px(tokens.grid),
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues(tokens.border.width, px),
    contentWidth: mapValues(tokens.contentWidth, px),
    foregroundColor: foreground,
    backgroundColor: _objectSpread(_objectSpread({}, background), {}, {
      formAccentActive: getActiveColor(background.formAccent),
      formAccentHover: getHoverColor(background.formAccent),
      brandAccentActive: getActiveColor(background.brandAccent),
      brandAccentHover: getHoverColor(background.brandAccent),
      criticalActive: getActiveColor(background.critical),
      criticalHover: getHoverColor(background.critical),
      infoLight: getLightVariant(background.info),
      promoteLight: getLightVariant(background.promote),
      criticalLight: getLightVariant(background.critical),
      positiveLight: getLightVariant(background.positive),
      cautionLight: getLightVariant(background.caution),
      neutralLight: getLightVariant(background.neutral)
    }),
    fontFamily: typography.fontFamily,
    fontMetrics: mapValues(typography.fontMetrics, String),
    textSize: mapValues(tokens.typography.text, function (definition) {
      return fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics);
    }),
    textWeight: mapValues(typography.fontWeight, String),
    headingLevel: mapValues(tokens.typography.heading.level, function (definition) {
      return fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics);
    }),
    headingWeight: {
      weak: String(tokens.typography.fontWeight[tokens.typography.heading.weight.weak]),
      regular: String(tokens.typography.fontWeight[tokens.typography.heading.weight.regular])
    },
    inlineFieldSize: {
      standard: getInlineFieldSize('standard'),
      small: getInlineFieldSize('small')
    },
    transition: tokens.transitions,
    transform: tokens.transforms,
    shadow: tokens.shadows,
    accessibleForegroundColorOnLightVariant: {
      critical: {
        text: getAccessibleVariant(foreground.critical, 'text'),
        graphic: getAccessibleVariant(foreground.critical, 'graphic')
      },
      caution: {
        text: getAccessibleVariant(foreground.caution, 'text'),
        graphic: getAccessibleVariant(foreground.caution, 'graphic')
      },
      positive: {
        text: getAccessibleVariant(foreground.positive, 'text'),
        graphic: getAccessibleVariant(foreground.positive, 'graphic')
      },
      info: {
        text: getAccessibleVariant(foreground.info, 'text'),
        graphic: getAccessibleVariant(foreground.info, 'graphic')
      },
      promote: {
        text: getAccessibleVariant(foreground.promote, 'text'),
        graphic: getAccessibleVariant(foreground.promote, 'graphic')
      }
    }
  };
  return resolvedTokens;
});