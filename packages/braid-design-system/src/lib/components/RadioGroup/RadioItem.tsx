import assert from 'assert';

import { forwardRef, useContext, useId } from 'react';

import {
  RadioGroupContext,
  RadioItemContext,
} from '../RadioGroup/RadioGroupContext';
import {
  type InlineFieldProps,
  InlineField,
} from '../private/InlineField/InlineField';

export interface RadioItemProps
  extends Omit<
    InlineFieldProps,
    | 'name'
    | 'message'
    | 'reserveMessageSpace'
    | 'required'
    | 'onChange'
    | 'id'
    | 'tone'
    | 'size'
    | 'tabIndex'
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

    const id = useId();

    return (
      <InlineField
        {...props}
        id={id}
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
        disabled={radioGroupContext.disabled || props.disabled}
        aria-describedby={radioGroupContext['aria-describedby']}
        tabIndex={tababble && radioGroupContext.tabIndex !== -1 ? 0 : -1}
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
