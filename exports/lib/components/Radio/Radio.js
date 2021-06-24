import _extends from '@babel/runtime/helpers/extends';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

let _templateObject;

import React, { forwardRef, useContext } from 'react';
import assert from 'assert';
import { InlineField } from '../private/InlineField/InlineField';
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext';
import dedent from 'dedent';

/** @deprecated Individual `Radio` elements have been deprecated. Use [RadioGroup](https://seek-oss.github.io/braid-design-system/components/RadioGroup) instead. */
export var Radio = /* #__PURE__*/ forwardRef(function (props, ref) {
  const radioGroupContext = useContext(RadioGroupContext);
  assert(
    radioGroupContext === null,
    'The "Radio" component has been deprecated. Use a "RadioItem" instead.',
  );

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      dedent(
        _templateObject ||
          (_templateObject = _taggedTemplateLiteral([
            '\n        The "Radio" component has been deprecated and will be removed in a future version. Use "RadioGroup" with "RadioItem" instead.\n        %c\n        - <Radio name="count" label="One" value="1" onChange={...} />\n        - <Radio name="count" label="Two" value="2" onChange={...} checked />\n        - <Radio name="count" label="Three" value="3" onChange={...}  />\n        %c\n        + <RadioGroup name="count" value="2" onChange={...}>\n        +   <RadioItem label="One" value="1" />\n        +   <RadioItem label="Two" value="2" />\n        +   <RadioItem label="Three" value="3" />\n        + </RadioGroup>\n      ',
          ])),
      ),
      'color: red',
      'color: green',
    );
  }

  return /* #__PURE__*/ React.createElement(
    InlineField,
    _extends({}, props, {
      inList: false,
      type: 'radio',
      message: null,
      reserveMessageSpace: false,
      required: undefined,
      size: undefined,
      ref,
    }),
  );
});
Radio.displayName = 'Radio';
