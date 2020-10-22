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
    | 'checked'
    | 'id'
    | 'disabled'
    | 'tone'
  > {
  value: NonNullable<InlineFieldProps['value']>;
}

const NamedRadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  (props, ref) => {
    const radioListContext = useContext(RadioGroupContext);
    const radioItemContext = useContext(RadioItemContext);

    assert(
      radioListContext !== null && radioItemContext !== null,
      'All `RadioItem` buttons must be within a `RadioGroup`.',
    );

    assert(
      typeof props.value !== 'undefined' && props.value !== '',
      'All `RadioItem` buttons must have an associated `value`',
    );

    const checked = radioListContext.value === props.value;
    const isFirstRadioWithNoCheckedValueInGroup =
      radioItemContext === 0 && !Boolean(radioListContext.value);
    const tababble = checked || isFirstRadioWithNoCheckedValueInGroup;

    return (
      <InlineField
        {...props}
        id={`${radioListContext.id}_${props.value}`}
        name={radioListContext.name}
        checked={checked}
        onChange={radioListContext.onChange}
        tone={radioListContext.tone}
        disabled={radioListContext.disabled}
        aria-describedby={radioListContext['aria-describedby']}
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

NamedRadioItem.displayName = 'RadioItem';

export const RadioItem = NamedRadioItem;
