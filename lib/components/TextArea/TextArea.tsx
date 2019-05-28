import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import * as styles from './TextArea.treat';
import { Field, FieldProps } from '../private/Field/Field';

type NativeTextAreaProps = AllHTMLAttributes<HTMLTextAreaElement>;
interface TextAreaProps extends FieldProps {
  value: NonNullable<NativeTextAreaProps['value']>;
  onChange: NonNullable<NativeTextAreaProps['onChange']>;
  onBlur?: NativeTextAreaProps['onBlur'];
  onFocus?: NativeTextAreaProps['onFocus'];
  placeholder?: NativeTextAreaProps['placeholder'];
  limit?: number;
}

const renderCount = ({
  limit,
  value = '',
}: Pick<TextAreaProps, 'limit' | 'value'>): ReactNode => {
  if (typeof limit === 'undefined') {
    return null;
  }

  const diff = limit - String(value).length;
  const valid = diff >= 0;

  return (
    <Text component="span" color={valid ? 'secondary' : 'critical'}>
      {diff}
    </Text>
  );
};

export const TextArea = ({
  id,
  name,
  disabled,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  message,
  tone = 'neutral',
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  limit,
}: TextAreaProps) => (
  <Field
    id={id}
    name={name}
    disabled={disabled}
    label={label}
    secondaryLabel={secondaryLabel}
    tertiaryLabel={tertiaryLabel}
    description={description}
    tone={tone}
    message={message}
    secondaryMessage={renderCount({
      limit,
      value,
    })}
  >
    {({ className, ...fieldProps }) => (
      <Box
        component="textarea"
        rows={3}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        className={useClassNames(styles.field, className)}
        {...fieldProps}
      />
    )}
  </Field>
);
