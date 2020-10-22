import React, { forwardRef, useContext } from 'react';
import assert from 'assert';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext';
import dedent from 'dedent';

export interface RadioProps
  extends Omit<
    InlineFieldProps,
    'message' | 'reserveMessageSpace' | 'required'
  > {}

const NamedRadio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const radioListContext = useContext(RadioGroupContext);

  assert(
    radioListContext === null,
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
      ref={ref}
    />
  );
});

NamedRadio.displayName = 'Radio';

export const Radio = NamedRadio;
