import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Field, FieldProps } from '../private/Field/Field';
import * as styleRefs from './TextArea.treat';

type NativeTextAreaProps = AllHTMLAttributes<HTMLTextAreaElement>;
interface TextAreaProps extends Omit<FieldProps, 'secondaryMessage'> {
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
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  limit,
  ...restProps
}: TextAreaProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Field
      {...restProps}
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
          className={classnames(styles.field, className)}
          {...fieldProps}
        />
      )}
    </Field>
  );
};
