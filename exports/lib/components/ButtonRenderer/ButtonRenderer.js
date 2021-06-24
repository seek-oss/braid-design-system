import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import _jsx from '@babel/runtime/helpers/jsx';

let _templateObject;

import assert from 'assert';
import clsx from 'clsx';
import dedent from 'dedent';
import React, { createContext, useContext, useMemo, Fragment } from 'react';
import { atoms } from '../../atoms/atoms';
import {
  BackgroundProvider,
  useBackgroundLightness,
} from '../Box/BackgroundContext';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { touchableText } from '../../hooks/typography';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import ActionsContext from '../Actions/ActionsContext';
import * as styles from './ButtonRenderer.css';
export var buttonVariants = ['solid', 'ghost', 'soft', 'transparent'];
export var buttonWeights = ['weak', 'regular', 'strong'];
const buttonVariantStyles = {
  solid: {
    default: {
      textTone: undefined,
      background: 'formAccent',
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: undefined,
      background: 'brandAccent',
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: undefined,
      background: 'critical',
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
  ghost: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: 'borderFormAccentLarge',
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: 'borderBrandAccentLarge',
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: 'borderCriticalLarge',
    },
  },
  soft: {
    default: {
      textTone: 'formAccent',
      background: 'formAccent',
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: 'brandAccent',
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: 'critical',
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
  transparent: {
    default: {
      textTone: 'formAccent',
      background: undefined,
      backgroundHover: 'formAccentHover',
      backgroundActive: 'formAccentActive',
      boxShadow: undefined,
    },
    brandAccent: {
      textTone: 'brandAccent',
      background: undefined,
      backgroundHover: 'brandAccentHover',
      backgroundActive: 'brandAccentActive',
      boxShadow: undefined,
    },
    critical: {
      textTone: 'critical',
      background: undefined,
      backgroundHover: 'criticalHover',
      backgroundActive: 'criticalActive',
      boxShadow: undefined,
    },
  },
};

const useButtonVariant = function useButtonVariant(variant, tone) {
  let _buttonVariantStyles$;

  if (useBackgroundLightness() === 'dark' && !tone && variant !== 'solid') {
    return {
      textTone: undefined,
      background: variant === 'soft' ? 'card' : undefined,
      backgroundHover: 'card',
      backgroundActive: 'card',
      boxShadow:
        variant === 'ghost' ? 'borderStandardInvertedLarge' : undefined,
    };
  }

  return (_buttonVariantStyles$ =
    buttonVariantStyles[variant][
      tone !== null && tone !== void 0 ? tone : 'default'
    ]) !== null && _buttonVariantStyles$ !== void 0
    ? _buttonVariantStyles$
    : buttonVariantStyles[variant].default;
};

const ButtonChildrenContext = /* #__PURE__*/ createContext({
  size: 'standard',
  variant: 'solid',
  tone: undefined,
  loading: false,
});

const ButtonChildren = function ButtonChildren(_ref) {
  const children = _ref.children;

  const _useContext = useContext(ButtonChildrenContext),
    size = _useContext.size,
    variant = _useContext.variant,
    tone = _useContext.tone,
    loading = _useContext.loading;

  const buttonVariant = useButtonVariant(variant, tone);
  return /* #__PURE__*/ _jsx(
    Fragment,
    {},
    void 0,
    /* #__PURE__*/ _jsx(FieldOverlay, {
      background: buttonVariant.background,
      className: styles.backgroundOverlay,
      visible: Boolean(buttonVariant.background),
    }),
    /* #__PURE__*/ _jsx(FieldOverlay, {
      variant: 'focus',
      onlyVisibleForKeyboardNavigation: true,
      className: styles.focusOverlay,
    }),
    /* #__PURE__*/ _jsx(FieldOverlay, {
      background: buttonVariant.backgroundHover,
      className: styles.hoverOverlay,
    }),
    /* #__PURE__*/ _jsx(FieldOverlay, {
      background: buttonVariant.backgroundActive,
      className: styles.activeOverlay,
    }),
    /* #__PURE__*/ _jsx(
      Box,
      {
        position: 'relative',
        paddingX:
          size === 'small' || variant === 'transparent' ? 'small' : 'medium',
        paddingY:
          size === 'small'
            ? styles.constants.smallButtonPaddingSize
            : undefined,
        pointerEvents: 'none',
        textAlign: 'center',
        overflow: 'hidden',
        userSelect: 'none',
        className: size === 'standard' ? touchableText.standard : undefined,
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Text,
        {
          baseline: false,
          weight: 'medium',
          tone: buttonVariant.textTone,
          size: size === 'small' ? 'small' : undefined,
        },
        void 0,
        children,
        loading
          ? /* #__PURE__*/ _jsx(
              Box,
              {
                'aria-hidden': true,
                component: 'span',
                display: 'inlineBlock',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  component: 'span',
                  className: styles.loadingDot,
                },
                void 0,
                '.',
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  component: 'span',
                  className: styles.loadingDot,
                },
                void 0,
                '.',
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  component: 'span',
                  className: styles.loadingDot,
                },
                void 0,
                '.',
              ),
            )
          : null,
      ),
    ),
  );
};

ButtonChildren.displayName = 'ButtonChildren';

const resolveToneAndVariant = function resolveToneAndVariant(_ref2) {
  const weight = _ref2.weight,
    tone = _ref2.tone,
    _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? 'solid' : _ref2$variant;

  if (weight === 'strong') {
    return {
      tone: tone || 'brandAccent',
      variant: 'solid',
    };
  }

  if (weight === 'regular') {
    return {
      tone,
      variant: 'solid',
    };
  }

  if (weight === 'weak') {
    return {
      tone,
      variant: 'ghost',
    };
  }

  return {
    tone,
    variant,
  };
};

export var PrivateButtonRenderer = function PrivateButtonRenderer(_ref3) {
  let _ref4;

  const sizeProp = _ref3.size,
    toneProp = _ref3.tone,
    variantProp = _ref3.variant,
    bleedY = _ref3.bleedY,
    weight = _ref3.weight,
    _ref3$loading = _ref3.loading,
    loading = _ref3$loading === void 0 ? false : _ref3$loading,
    children = _ref3.children;
  const actionsContext = useContext(ActionsContext);
  assert(
    !(actionsContext && sizeProp),
    'You shouldn\'t set a "size" prop on Button elements nested inside Actions. Instead, set the size on the Actions element, e.g. <Actions size="small"><Button>...</Button></Actions>',
  );
  assert(
    !(weight && variantProp),
    'You shouldn\'t set a "weight" and "variant" prop together. Please migrate from "weight" to "variant".',
  );

  const _resolveToneAndVarian = resolveToneAndVariant({
      weight,
      tone: toneProp,
      variant: variantProp,
    }),
    tone = _resolveToneAndVarian.tone,
    variant = _resolveToneAndVarian.variant;

  if (process.env.NODE_ENV !== 'production') {
    if (weight && /^(strong|regular|weak)$/.test(weight)) {
      const needsTone = Boolean(tone);
      const needsVariant = variant && variant !== 'solid'; // eslint-disable-next-line no-console

      console.warn(
        dedent(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteral(
              [
                '\n          The `weight` prop has been deprecated.',
                '\n          %c  -<Button weight="',
                '">...</Button>\n          %c  +<Button',
                '',
                '>...</Button>\n        ',
              ],
              [
                '\n          The \\`weight\\` prop has been deprecated.',
                '\n          %c  -<Button weight="',
                '">...</Button>\n          %c  +<Button',
                '',
                '>...</Button>\n        ',
              ],
            )),
          needsVariant || needsTone
            ? ' Please migrate to'
                .concat(needsVariant ? ' `variant`' : '')
                .concat(
                  needsTone
                    ? ''.concat(needsVariant ? ' and' : '', ' `tone`')
                    : '',
                  '.',
                )
            : ' You can migrate by removing the `weight="'.concat(
                weight,
                '"` prop.',
              ),
          weight,
          needsTone ? ' tone="'.concat(tone, '"') : '',
          needsVariant ? ' variant="'.concat(variant, '"') : '',
        ),
        'color: red',
        'color: green',
      );
    }
  }

  const size =
    (_ref4 =
      sizeProp !== null && sizeProp !== void 0
        ? sizeProp
        : actionsContext === null || actionsContext === void 0
        ? void 0
        : actionsContext.size) !== null && _ref4 !== void 0
      ? _ref4
      : 'standard';

  const _useButtonVariant = useButtonVariant(variant, tone),
    background = _useButtonVariant.background,
    boxShadow = _useButtonVariant.boxShadow;

  const buttonStyles = clsx(
    atoms({
      reset: 'button',
      cursor: !loading ? 'pointer' : undefined,
      width: 'full',
      position: 'relative',
      display: 'block',
      borderRadius: 'standard',
      boxShadow,
      transform: {
        active: 'touchable',
      },
      transition: 'touchable',
      outline: 'none',
    }),
    styles.root,
    variant === 'soft' ? styles.lightBg : null,
    variant !== 'solid' ? styles.lightHoverBg : null,
    useBackgroundLightness() === 'dark' ? styles.inverted : null,
    size === 'small'
      ? virtualTouchable({
          xAxis: false,
        })
      : null,
    size === 'standard' ? styles.standard : styles.small,
    bleedY ? styles.bleedY : null,
  );
  const buttonChildrenContextValue = useMemo(
    function () {
      return {
        size,
        tone,
        variant,
        loading,
      };
    },
    [size, tone, variant, loading],
  );
  const buttonProps = {
    style: {},
    className: buttonStyles,
  };

  const button = /* #__PURE__*/ _jsx(
    ButtonChildrenContext.Provider,
    {
      value: buttonChildrenContextValue,
    },
    void 0,
    children(ButtonChildren, buttonProps),
  );

  return background && variant !== 'soft'
    ? /* #__PURE__*/ _jsx(
        BackgroundProvider,
        {
          value: background,
        },
        void 0,
        button,
      )
    : button;
};
/** @deprecated `ButtonRenderer` has been deprecated. Use [Button](https://seek-oss.github.io/braid-design-system/components/Button) or [ButtonLink](https://seek-oss.github.io/braid-design-system/components/ButtonLink) instead. If your usage of `ButtonRenderer` is not covered by either of these, please let us know. */

export var ButtonRenderer = PrivateButtonRenderer;
