import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
const _excluded = ["color", "typography"];

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import { getCapHeight } from 'capsize';
import { breakpoints } from '../atoms/breakpoints';
import { makeThemeUtils } from './themeUtils';
import { getLightVariant, isLight } from '../utils';

const fontSizeToCapHeight = function fontSizeToCapHeight(definition, fontMetrics) {
  const mobile = definition.mobile,
      tablet = definition.tablet;
  return {
    mobile: {
      capHeight: getCapHeight({
        fontSize: mobile.fontSize,
        fontMetrics
      }),
      rows: mobile.rows
    },
    tablet: {
      capHeight: getCapHeight({
        fontSize: tablet.fontSize,
        fontMetrics
      }),
      rows: tablet.rows
    }
  };
};

const normaliseSizingToCapHeight = function normaliseSizingToCapHeight(typography) {
  const heading = typography.heading,
      text = typography.text,
      fontMetrics = typography.fontMetrics;
  return _objectSpread(_objectSpread({}, typography), {}, {
    heading: _objectSpread(_objectSpread({}, heading), {}, {
      level: _objectSpread({}, mapValues(heading.level, function (definition) {
        return fontSizeToCapHeight(definition, fontMetrics);
      }))
    }),
    text: _objectSpread(_objectSpread({}, text), mapValues(text, function (definition) {
      return fontSizeToCapHeight(definition, fontMetrics);
    }))
  });
};

const decorateTokens = function decorateTokens(braidTokens) {
  const color = braidTokens.color,
      typography = braidTokens.typography,
      restTokens = _objectWithoutProperties(braidTokens, _excluded);

  const getActiveColor = function getActiveColor(x) {
    return isLight(x) ? darken(0.1, x) : darken(0.05, x);
  };

  const getHoverColor = function getHoverColor(x) {
    return isLight(x) ? darken(0.05, x) : lighten(0.05, x);
  };

  const decoratedTokens = _objectSpread({
    color: _objectSpread(_objectSpread({}, color), {}, {
      background: _objectSpread(_objectSpread({}, color.background), {}, {
        formAccentActive: getActiveColor(color.background.formAccent),
        formAccentHover: getHoverColor(color.background.formAccent),
        brandAccentActive: getActiveColor(color.background.brandAccent),
        brandAccentHover: getHoverColor(color.background.brandAccent),
        criticalActive: getActiveColor(color.background.critical),
        criticalHover: getHoverColor(color.background.critical),
        infoLight: getLightVariant(color.background.info),
        promoteLight: getLightVariant(color.background.promote),
        criticalLight: getLightVariant(color.background.critical),
        positiveLight: getLightVariant(color.background.positive),
        cautionLight: getLightVariant(color.background.caution),
        neutralLight: getLightVariant(color.background.neutral)
      })
    }),
    typography: normaliseSizingToCapHeight(typography),
    breakpoint: breakpoints
  }, restTokens);

  return _objectSpread(_objectSpread({}, decoratedTokens), {}, {
    utils: makeThemeUtils(decoratedTokens)
  });
};

const makeWebFonts = function makeWebFonts(tokens) {
  const name = tokens.typography.webFont;

  if (!name) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  const linkTag = "<link href=\"https://fonts.googleapis.com/css?family=".concat(encodeURIComponent("".concat(name, ":").concat(weights.sort().join(','))), "\" rel=\"stylesheet\" />");
  return [{
    linkTag
  }];
};

const makeRuntimeTokens = function makeRuntimeTokens(tokens) {
  return {
    name: tokens.name,
    displayName: tokens.displayName,
    background: tokens.color.background.body,
    webFonts: makeWebFonts(tokens),
    space: {
      grid: tokens.grid,
      space: tokens.space
    },
    color: tokens.color,
    backgroundLightness: mapValues(tokens.color.background, function (background, name) {
      // Manual override to ensure we use inverted neutral text
      // on JobsDB 'brandAccent' background and its variants.
      if (tokens.name === 'jobsDb' && /^brandAccent/.test(name)) {
        return 'dark';
      } // This color map is used to ensure that all "hover" and "active"
      // variants are considered as a single set. If we don't do this,
      // colors might flip from light to dark during user interactions.
      // At the time of writing this, this was true of 'formAccent' in
      // the 'seekBusiness' theme, which went from white text to black
      // for 'formAccentHover'.


      const referenceColorMap = {
        brandAccentActive: 'brandAccent',
        brandAccentHover: 'brandAccent',
        formAccentActive: 'formAccent',
        formAccentHover: 'formAccent'
      };
      const referenceColor = name in referenceColorMap ? tokens.color.background[referenceColorMap[name]] : background;

      if (!referenceColor) {
        throw new Error("Error resolving background lightness for background \"".concat(background, "\" in \"").concat(tokens.name, "\" theme."));
      }

      return isLight(referenceColor) ? 'light' : 'dark';
    })
  };
};

export function makeBraidTheme(braidTokens) {
  const decoratedTokens = decorateTokens(braidTokens);
  return _objectSpread({
    treatTheme: createTheme(decoratedTokens, "makeBraidTheme_treatTheme")
  }, makeRuntimeTokens(decoratedTokens));
}