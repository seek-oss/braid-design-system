import _jsx from '@babel/runtime/helpers/jsx';
import _typeof from '@babel/runtime/helpers/typeof';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import _extends from '@babel/runtime/helpers/extends';

let _templateObject;

import assert from 'assert';
import dedent from 'dedent';
import React, { createContext, useContext, forwardRef } from 'react';
import { TreatProvider } from 'sku/react-treat';
import { ensureResetImported } from '../../reset/resetTracker';
import { useHideFocusRings } from '../private/hideFocusRings/useHideFocusRings';
import { BraidTestProviderContext } from '../BraidTestProvider/BraidTestProviderContext';
import { BreakpointProvider } from '../useBreakpoint/BreakpointProvider';
import { BraidThemeContext } from './BraidThemeContext';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export var makeLinkComponent = function makeLinkComponent(render) {
  return {
    __forwardRef__: /* #__PURE__*/ forwardRef(render),
  };
};
const DefaultLinkComponent = makeLinkComponent(function (props, ref) {
  return /* #__PURE__*/ React.createElement(
    'a',
    _extends(
      {
        ref,
      },
      props,
    ),
  );
});
const LinkComponentContext = /* #__PURE__*/ createContext(DefaultLinkComponent);
export var useLinkComponent = function useLinkComponent(ref) {
  const linkComponent = useContext(LinkComponentContext);
  assert(
    !ref || '__forwardRef__' in linkComponent,
    dedent(
      _templateObject ||
        (_templateObject = _taggedTemplateLiteral([
          "\n      You're passing a ref to a Braid link, but your app is providing a custom link component to 'BraidProvider' that doesn't appear to support refs.\n\n      To fix this, you need to use Braid's 'makeLinkComponent' helper function when creating your custom link component. This ensures that refs are forwarded correctly, and allows us to silence this error message.\n\n      For more information and an example implementation, check out the documentation for 'BraidProvider': https://seek-oss.github.io/braid-design-system/components/BraidProvider\n    ",
        ])),
    ),
  );

  if ('__forwardRef__' in linkComponent) {
    return linkComponent.__forwardRef__;
  }

  return linkComponent;
};
export var BraidProvider = function BraidProvider(_ref) {
  const theme = _ref.theme,
    _ref$styleBody = _ref.styleBody,
    styleBody = _ref$styleBody === void 0 ? true : _ref$styleBody,
    linkComponent = _ref.linkComponent,
    children = _ref.children;
  const alreadyInBraidProvider = Boolean(useContext(BraidThemeContext));
  const inTestProvider = useContext(BraidTestProviderContext);
  const linkComponentFromContext = useContext(LinkComponentContext);
  useHideFocusRings(!(alreadyInBraidProvider || inTestProvider));
  assert(
    (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) !==
      'object' ||
      navigator.userAgent.indexOf('jsdom') === -1 ||
      inTestProvider,
    "Rendering 'BraidProvider' in Jest is not supported as it expects a browser environment. Please switch to 'BraidTestProvider'. See the docs for more info: https://seek-oss.github.io/braid-design-system/components/BraidTestProvider",
  );
  return /* #__PURE__*/ _jsx(
    BraidThemeContext.Provider,
    {
      value: theme,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      TreatProvider,
      {
        theme: theme.treatTheme,
      },
      void 0,
      styleBody
        ? /* #__PURE__*/ _jsx(
            'style',
            {
              type: 'text/css',
            },
            void 0,
            'body{margin:0;padding:0;background:'.concat(theme.background, '}'),
          )
        : null,
      /* #__PURE__*/ _jsx(
        'div',
        {
          className: theme.vanillaTheme,
        },
        void 0,
        /* #__PURE__*/ _jsx(
          LinkComponentContext.Provider,
          {
            value: linkComponent || linkComponentFromContext,
          },
          void 0,
          alreadyInBraidProvider || inTestProvider
            ? children
            : /* #__PURE__*/ _jsx(BreakpointProvider, {}, void 0, children),
        ),
      ),
    ),
  );
};
BraidProvider.displayName = 'BraidProvider';
