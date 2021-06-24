import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';

let _templateObject;

const _excluded = ['component', 'className'];

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

import clsx from 'clsx';
import { createElement, forwardRef, useContext, useEffect } from 'react';
import dedent from 'dedent';
import { base as baseReset } from '../../reset/reset.css';
import { atoms } from '../../atoms/atoms';
import { sprinkles } from '../../atoms/sprinkles.css';
import { renderBackgroundProvider } from './BackgroundContext';
import TextLinkRendererContext from '../TextLinkRenderer/TextLinkRendererContext';
export var Box = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const _ref$component = _ref.component,
    component = _ref$component === void 0 ? 'div' : _ref$component,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);

  const atomProps = {};
  const nativeProps = {};

  for (const key in props) {
    if (sprinkles.properties.has(key)) {
      atomProps[key] = props[key];
    } else {
      nativeProps[key] = props[key];
    }
  }

  const userClasses = clsx(className);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inTextLinkRenderer = Boolean(useContext(TextLinkRendererContext)); // eslint-disable-next-line react-hooks/rules-of-hooks

    useEffect(
      function () {
        if (userClasses.includes(baseReset) && !inTextLinkRenderer) {
          throw new Error(
            dedent(
              _templateObject ||
                (_templateObject = _taggedTemplateLiteral(
                  [
                    "\n              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the `atoms` function. This can be removed as Box automatically adds reset classes.\n\n              atoms({\n                reset: '...' // <-- Remove this\n              })\n            ",
                  ],
                  [
                    "\n              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \\`atoms\\` function. This can be removed as Box automatically adds reset classes.\n\n              atoms({\n                reset: '...' // <-- Remove this\n              })\n            ",
                  ],
                )),
            ),
          );
        }
      },
      [userClasses, inTextLinkRenderer],
    );
  }

  const atomicClasses = atoms(
    _objectSpread(
      {
        reset: typeof component === 'string' ? component : 'div',
      },
      atomProps,
    ),
  );
  const element = /* #__PURE__*/ createElement(
    component,
    _objectSpread(
      _objectSpread(
        {
          className: ''
            .concat(atomicClasses)
            .concat(userClasses ? ' '.concat(userClasses) : ''),
        },
        nativeProps,
      ),
      {},
      {
        ref,
      },
    ),
  );
  return renderBackgroundProvider(props.background, element);
});
Box.displayName = 'Box';
