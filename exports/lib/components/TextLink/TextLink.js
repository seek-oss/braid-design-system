import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['weight', 'showVisited', 'hitArea', 'data'];
import React, { forwardRef } from 'react';
import { PrivateTextLinkRenderer } from '../TextLinkRenderer/TextLinkRenderer';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
import buildDataAttributes from '../private/buildDataAttributes';
export var TextLink = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const weight = _ref.weight,
    showVisited = _ref.showVisited,
    hitArea = _ref.hitArea,
    data = _ref.data,
    props = _objectWithoutProperties(_ref, _excluded);

  const LinkComponent = useLinkComponent(ref);
  return /* #__PURE__*/ _jsx(
    PrivateTextLinkRenderer,
    {
      weight,
      showVisited,
      hitArea,
    },
    void 0,
    function (styleProps) {
      return /* #__PURE__*/ React.createElement(
        LinkComponent,
        _extends(
          {
            ref,
          },
          props,
          styleProps,
          data ? buildDataAttributes(data) : undefined,
        ),
      );
    },
  );
});
TextLink.displayName = 'TextLink';
