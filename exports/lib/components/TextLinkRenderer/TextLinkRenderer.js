import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

let _templateObject;

import React, { useContext } from 'react';
import dedent from 'dedent';
import assert from 'assert';
import clsx from 'clsx';
import TextLinkRendererContext from './TextLinkRendererContext';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import ActionsContext from '../Actions/ActionsContext';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { atoms } from '../../atoms/atoms';
import { Box } from '../Box/Box';
import {
  useTextTone,
  useWeight,
  touchableText,
  useText,
} from '../../hooks/typography';
import { useBackground } from '../Box/BackgroundContext';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import * as styles from './TextLinkRenderer.css';
export var PrivateTextLinkRenderer = function PrivateTextLinkRenderer(props) {
  const actionsContext = useContext(ActionsContext);

  if (process.env.NODE_ENV !== 'production') {
    if (actionsContext !== null) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteral([
              '\n      The "TextLink" and "TextLinkButton" components have been deprecated inside of "Actions". Use "ButtonLink" or "Button" with a "variant" of "transparent" instead.\n        <Actions>\n          <Button>...</Button>\n      %c-   <TextLink href="...">...</TextLink>\n      %c+   <ButtonLink href="..." variant="transparent">...</ButtonLink>\n      %c  </Actions>\n    ',
            ])),
        ),
        'color: red',
        'color: green',
        'color: inherit',
      );
    }
  }

  assert(
    (function () {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inText = useContext(TextContext); // eslint-disable-next-line react-hooks/rules-of-hooks

      const inHeading = useContext(HeadingContext);
      const inActions = actionsContext !== null;
      return inText || inHeading || inActions;
    })(),
    'TextLink components must be rendered within a Text or Heading component.',
  );

  if (actionsContext !== null) {
    return /* #__PURE__*/ React.createElement(
      ButtonLink,
      _extends(
        {
          size: actionsContext.size,
        },
        props,
      ),
    );
  }

  return /* #__PURE__*/ React.createElement(InlineLink, props);
};
PrivateTextLinkRenderer.displayName = 'PrivateTextLinkRenderer';

/** @deprecated `TextLinkRenderer` has been deprecated. Use [TextLink](https://seek-oss.github.io/braid-design-system/components/TextLink) or [TextLinkButton](https://seek-oss.github.io/braid-design-system/components/TextLinkButton) instead.  If your usage of `TextLinkRenderer` is not covered by either of these, please let us know. */
export var TextLinkRenderer = PrivateTextLinkRenderer;

function useDefaultLinkWeight() {
  const backgroundContext = useBackground();
  const inHeading = useContext(HeadingContext);
  const textContext = useContext(TextContext);
  const hasPlainBackground =
    backgroundContext === 'body' ||
    backgroundContext === 'card' ||
    backgroundContext === 'neutralLight';
  const inPlainText =
    !textContext ||
    textContext.tone === undefined ||
    textContext.tone === 'neutral' ||
    textContext.tone === 'secondary';
  return hasPlainBackground && (inHeading || inPlainText) ? 'regular' : 'weak';
}

function useLinkStyles(weight, showVisited) {
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useWeight('medium');
  const linkTone = useTextTone({
    tone: 'link',
  });
  return [
    weight === 'weak'
      ? styles.underlineAlways
      : [linkTone, styles.underlineOnHoverOnly],
    !inHeading && weight !== 'weak' ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink(_ref) {
  const _ref$reset = _ref.reset,
    reset = _ref$reset === void 0 ? 'a' : _ref$reset,
    weightProp = _ref.weight,
    _ref$showVisited = _ref.showVisited,
    showVisited = _ref$showVisited === void 0 ? false : _ref$showVisited,
    _ref$hitArea = _ref.hitArea,
    hitArea = _ref$hitArea === void 0 ? 'standard' : _ref$hitArea,
    children = _ref.children;
  const defaultWeight = useDefaultLinkWeight();
  const weight =
    weightProp !== null && weightProp !== void 0 ? weightProp : defaultWeight;
  return /* #__PURE__*/ _jsx(
    TextLinkRendererContext.Provider,
    {
      value: weight,
    },
    void 0,
    children({
      style: {},
      className: clsx(
        useLinkStyles(weight, showVisited),
        reset !== false
          ? atoms({
              reset: typeof reset === 'string' ? reset : 'a',
            })
          : null,
        atoms({
          cursor: 'pointer',
        }),
        hitArea === 'large' && virtualTouchable(),
      ),
    }),
  );
}

InlineLink.displayName = 'InlineLink';

function ButtonLink(_ref2) {
  const _ref2$reset = _ref2.reset,
    reset = _ref2$reset === void 0 ? 'a' : _ref2$reset,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'standard' : _ref2$size,
    weight = _ref2.weight,
    _ref2$showVisited = _ref2.showVisited,
    showVisited = _ref2$showVisited === void 0 ? false : _ref2$showVisited,
    hitArea = _ref2.hitArea,
    children = _ref2.children;
  const textLinkWeight = useDefaultLinkWeight();
  const tone = textLinkWeight === 'weak' ? 'neutral' : 'link';
  const buttonLinkTextProps = {
    size,
    tone,
    baseline: false,
  };
  assert(!weight, 'TextLink components should not set "weight" within Actions');
  assert(
    !hitArea,
    'TextLink components should not set "hitArea" within Actions',
  );
  return /* #__PURE__*/ _jsx(
    Box,
    {
      position: 'relative',
    },
    void 0,
    /* #__PURE__*/ _jsx(
      TextLinkRendererContext.Provider,
      {
        value: textLinkWeight,
      },
      void 0,
      /* #__PURE__*/ _jsx(
        TextContext.Provider,
        {
          value: buttonLinkTextProps,
        },
        void 0,
        children({
          style: {},
          className: clsx(
            styles.button,
            useLinkStyles(textLinkWeight, showVisited),
            useText(buttonLinkTextProps),
            size === 'standard' ? touchableText.standard : null,
            reset !== false
              ? atoms({
                  reset: typeof reset === 'string' ? reset : 'a',
                })
              : null,
            atoms({
              cursor: 'pointer',
              outline: 'none',
              display: 'block',
              width: 'full',
              paddingX: size === 'small' ? 'xsmall' : 'small',
              paddingY: size === 'small' ? 'xsmall' : undefined,
              borderRadius: 'standard',
              textAlign: 'center',
              userSelect: 'none',
            }),
          ),
        }),
      ),
    ),
    /* #__PURE__*/ _jsx(FieldOverlay, {
      variant: 'focus',
      className: styles.focusOverlay,
    }),
  );
}

ButtonLink.displayName = 'ButtonLink';
