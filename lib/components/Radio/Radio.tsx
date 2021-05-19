import React, { AllHTMLAttributes, forwardRef, useContext } from 'react';
import assert from 'assert';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext';
import dedent from 'dedent';

type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
export interface RadioProps
  extends Omit<
    InlineFieldProps,
    'message' | 'reserveMessageSpace' | 'required' | 'size'
  > {
  checked: NonNullable<InputElementProps['checked']>;
}

/** @deprecated Individual `Radio` elements have been deprecated. Use [RadioGroup](https://seek-oss.github.io/braid-design-system/components/RadioGroup) instead. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const radioGroupContext = useContext(RadioGroupContext);

  assert(
    radioGroupContext === null,
    'The "Radio" component has been deprecated. Use a "RadioItem" instead.',
  );

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      dedent`
        The "Radio" component has been deprecated and will be removed in a future version. Use "RadioGroup" with "RadioItem" instead.
        %c
        - <Radio name="count" label="One" value="1" onChange={...} />
        - <Radio name="count" label="Two" value="2" onChange={...} checked />
        - <Radio name="count" label="Three" value="3" onChange={...}  />
        %c
        + <RadioGroup name="count" value="2" onChange={...}>
        +   <RadioItem label="One" value="1" />
        +   <RadioItem label="Two" value="2" />
        +   <RadioItem label="Three" value="3" />
        + </RadioGroup>
      `,
      'color: red',
      'color: green',
    );
  }

  return (
    <InlineField
      {...props}
      inList={false}
      type="radio"
      message={null}
      reserveMessageSpace={false}
      required={undefined}
      size={undefined}
      ref={ref}
    />
  );
});

Radio.displayName = 'Radio';
