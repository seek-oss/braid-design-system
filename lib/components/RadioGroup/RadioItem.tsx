import React, { forwardRef, useContext } from 'react';
import assert from 'assert';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';
import {
  RadioGroupContext,
  RadioItemContext,
} from '../RadioGroup/RadioGroupContext';

export interface RadioItemProps
  extends Omit<
    InlineFieldProps,
    | 'name'
    | 'message'
    | 'reserveMessageSpace'
    | 'required'
    | 'onChange'
    | 'id'
    | 'disabled'
    | 'tone'
    | 'size'
  > {
  value: NonNullable<InlineFieldProps['value']>;
}

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  (props, ref) => {
    const radioGroupContext = useContext(RadioGroupContext);
    const radioItemContext = useContext(RadioItemContext);

    assert(
      radioGroupContext !== null && radioItemContext !== null,
      'All `RadioItem` buttons must be within a `RadioGroup`.',
    );

    assert(
      typeof props.value !== 'undefined' && props.value !== '',
      'All `RadioItem` buttons must have an associated `value`',
    );

    const checked = radioGroupContext.value === props.value;
    const isFirstRadioWithNoCheckedValueInGroup =
      radioItemContext === 0 && !Boolean(radioGroupContext.value);
    const tababble = checked || isFirstRadioWithNoCheckedValueInGroup;

    return (
      <InlineField
        {...props}
        id={`${radioGroupContext.id}_${radioItemContext}`}
        name={radioGroupContext.name}
        checked={checked}
        onChange={radioGroupContext.onChange}
        tone={
          radioGroupContext.tone === 'critical' ||
          radioGroupContext.tone === 'neutral'
            ? radioGroupContext.tone
            : undefined
        }
        size={radioGroupContext.size}
        disabled={radioGroupContext.disabled}
        aria-describedby={radioGroupContext['aria-describedby']}
        tabIndex={tababble ? 0 : -1}
        inList={true}
        type="radio"
        message={null}
        reserveMessageSpace={false}
        required={undefined}
        ref={ref}
      />
    );
  },
);

RadioItem.displayName = 'RadioItem';
