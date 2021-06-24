import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef, useContext } from 'react';
import assert from 'assert';
import { InlineField } from '../private/InlineField/InlineField';
import { RadioGroupContext, RadioItemContext } from '../RadioGroup/RadioGroupContext';
export var RadioItem = /*#__PURE__*/forwardRef(function (props, ref) {
  var radioGroupContext = useContext(RadioGroupContext);
  var radioItemContext = useContext(RadioItemContext);
  assert(radioGroupContext !== null && radioItemContext !== null, 'All `RadioItem` buttons must be within a `RadioGroup`.');
  assert(typeof props.value !== 'undefined' && props.value !== '', 'All `RadioItem` buttons must have an associated `value`');
  var checked = radioGroupContext.value === props.value;
  var isFirstRadioWithNoCheckedValueInGroup = radioItemContext === 0 && !Boolean(radioGroupContext.value);
  var tababble = checked || isFirstRadioWithNoCheckedValueInGroup;
  return /*#__PURE__*/React.createElement(InlineField, _extends({}, props, {
    id: "".concat(radioGroupContext.id, "_").concat(radioItemContext),
    name: radioGroupContext.name,
    checked: checked,
    onChange: radioGroupContext.onChange,
    tone: radioGroupContext.tone === 'critical' || radioGroupContext.tone === 'neutral' ? radioGroupContext.tone : undefined,
    size: radioGroupContext.size,
    disabled: radioGroupContext.disabled,
    "aria-describedby": radioGroupContext['aria-describedby'],
    tabIndex: tababble ? 0 : -1,
    inList: true,
    type: "radio",
    message: null,
    reserveMessageSpace: false,
    required: undefined,
    ref: ref
  }));
});
RadioItem.displayName = 'RadioItem';