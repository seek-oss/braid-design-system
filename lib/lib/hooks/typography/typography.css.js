import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/hooks/typography/typography.css.ts", "braid-design-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { composeStyles, style, styleVariants, assignVars } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import * as capsize from './capsize/prebuilt';
import { mapToProperty } from '../../utils';
export var fontFamily = style({
  fontFamily: vars.fontFamily
}, "fontFamily");
export var fontWeight = styleVariants(vars.textWeight, mapToProperty('fontWeight'), "fontWeight");

var makeTypographyRules = function makeTypographyRules(textDefinition, debug) {
  var _textDefinition$mobil = textDefinition.mobile,
      mobileFontSize = _textDefinition$mobil.fontSize,
      mobileLineHeight = _textDefinition$mobil.lineHeight,
      mobileCapsizeTrims = _textDefinition$mobil.capsizeTrims;
  var _textDefinition$table = textDefinition.tablet,
      tabletFontSize = _textDefinition$table.fontSize,
      tabletLineHeight = _textDefinition$table.lineHeight,
      tabletCapsizeTrims = _textDefinition$table.capsizeTrims;
  return {
    untrimmed: style(responsiveStyle({
      mobile: {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight
      },
      tablet: {
        fontSize: tabletFontSize,
        lineHeight: tabletLineHeight
      }
    }), "makeTypographyRules_untrimmed"),
    trimmed: composeStyles(capsize.className, style(responsiveStyle({
      mobile: {
        vars: assignVars(capsize.vars, _objectSpread({
          fontSize: mobileFontSize,
          lineHeight: mobileLineHeight
        }, mobileCapsizeTrims))
      },
      tablet: {
        vars: assignVars(capsize.vars, _objectSpread({
          fontSize: tabletFontSize,
          lineHeight: tabletLineHeight
        }, tabletCapsizeTrims))
      }
    }), debug))
  };
};

export var text = {
  xsmall: makeTypographyRules(vars.textSize.xsmall, 'xsmall'),
  small: makeTypographyRules(vars.textSize.small, 'small'),
  standard: makeTypographyRules(vars.textSize.standard, 'standard'),
  large: makeTypographyRules(vars.textSize.large, 'large')
};
export var headingWeight = styleVariants(vars.headingWeight, mapToProperty('fontWeight'), "headingWeight");
export var heading = {
  '1': makeTypographyRules(vars.headingLevel['1'], 'heading1'),
  '2': makeTypographyRules(vars.headingLevel['2'], 'heading2'),
  '3': makeTypographyRules(vars.headingLevel['3'], 'heading3'),
  '4': makeTypographyRules(vars.headingLevel['4'], 'heading4')
};
export var tone = _objectSpread(_objectSpread({}, styleVariants({
  brandAccent: vars.foregroundColor.brandAccent,
  caution: vars.foregroundColor.caution,
  critical: vars.foregroundColor.critical,
  formAccent: vars.foregroundColor.formAccent,
  info: vars.foregroundColor.info,
  positive: vars.foregroundColor.positive,
  promote: vars.foregroundColor.promote,
  secondary: vars.foregroundColor.secondary
}, mapToProperty('color'))), {}, {
  link: style(_objectSpread({
    color: vars.foregroundColor.link
  }, vars.foregroundColor.link !== vars.foregroundColor.linkHover ? {
    ':hover': {
      color: vars.foregroundColor.linkHover
    },
    ':focus': {
      color: vars.foregroundColor.linkHover
    }
  } : {}), "tone_link")
});
export var invertableTone = {
  neutral: styleVariants({
    light: {
      color: vars.foregroundColor.neutral
    },
    dark: {
      color: vars.foregroundColor.neutralInverted
    }
  }, "invertableTone_neutral"),
  secondary: styleVariants({
    light: {
      color: vars.foregroundColor.secondary
    },
    dark: {
      color: vars.foregroundColor.secondaryInverted
    }
  }, "invertableTone_secondary")
};
export var toneOverridesForBackground = {
  criticalLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.critical.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.critical.graphic
      })
    }, "toneOverridesForBackground_criticalLight_neutral"),
    critical: style({
      color: vars.accessibleForegroundColorOnLightVariant.critical.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.critical.graphic
      })
    }, "toneOverridesForBackground_criticalLight_critical")
  },
  cautionLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.caution.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.caution.graphic
      })
    }, "toneOverridesForBackground_cautionLight_neutral"),
    caution: style({
      color: vars.accessibleForegroundColorOnLightVariant.caution.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.caution.graphic
      })
    }, "toneOverridesForBackground_cautionLight_caution")
  },
  positiveLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.positive.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.positive.graphic
      })
    }, "toneOverridesForBackground_positiveLight_neutral"),
    positive: style({
      color: vars.accessibleForegroundColorOnLightVariant.positive.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.positive.graphic
      })
    }, "toneOverridesForBackground_positiveLight_positive")
  },
  infoLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.info.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.info.graphic
      })
    }, "toneOverridesForBackground_infoLight_neutral"),
    info: style({
      color: vars.accessibleForegroundColorOnLightVariant.info.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.info.graphic
      })
    }, "toneOverridesForBackground_infoLight_info")
  },
  promoteLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.promote.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.promote.graphic
      })
    }, "toneOverridesForBackground_promoteLight_neutral"),
    promote: style({
      color: vars.accessibleForegroundColorOnLightVariant.promote.text,
      selectors: _defineProperty({}, 'svg&', {
        color: vars.accessibleForegroundColorOnLightVariant.promote.graphic
      })
    }, "toneOverridesForBackground_promoteLight_promote")
  }
};

var makeTouchableSpacing = function makeTouchableSpacing(touchableHeight, textHeight) {
  var space = calc(touchableHeight).subtract(textHeight).divide(2).toString();
  return {
    paddingTop: space,
    paddingBottom: space
  };
};

export var touchable = styleVariants(vars.textSize, function (textDefinition) {
  return responsiveStyle({
    mobile: makeTouchableSpacing(vars.touchableSize, textDefinition.mobile.lineHeight),
    tablet: makeTouchableSpacing(vars.touchableSize, textDefinition.tablet.lineHeight)
  });
}, "touchable");

__vanilla_filescope__.endFileScope();